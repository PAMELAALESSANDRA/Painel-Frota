document.addEventListener('DOMContentLoaded', () => {
    // Check if data is loaded
    if (typeof DASHBOARD_DATA === 'undefined') {
        document.getElementById('lastUpdate').innerText = 'DASHBOARD_DATA não encontrada. Verifique se dashboard_data.js existe.';
        return;
    }

    initQuickFilters();
    initPlateFilter();
    initDateTimeInputs();

    document.getElementById('monthFilter').addEventListener('change', updateDateOptions);
    document.getElementById('dateFilter').addEventListener('change', (e) => loadDay(e.target.value));
    document.getElementById('plateFilter').addEventListener('change', runAdvancedFilter);
    document.getElementById('applyAdvancedFilter').addEventListener('click', runAdvancedFilter);

    // Initial load: show last day
    const dates = Object.keys(DASHBOARD_DATA.daily_data).sort();
    if (dates.length > 0) {
        // Find the absolute last date across all months
        const lastDate = dates[dates.length - 1];
        loadDay(lastDate);
    }

    const searchInput = document.getElementById('tableSearch');
    searchInput.addEventListener('input', (e) => {
        filterTable(e.target.value);
    });
});

const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function initQuickFilters() {
    const dates = Object.keys(DASHBOARD_DATA.daily_data).sort();
    if (dates.length === 0) return;

    const monthSelect = document.getElementById('monthFilter');
    const months = new Set();

    dates.forEach(d => {
        const dateObj = new Date(d + 'T00:00:00');
        const monthKey = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
        months.add(monthKey);
    });

    const sortedMonths = Array.from(months).sort().reverse();
    monthSelect.innerHTML = sortedMonths.map(m => {
        const [year, month] = m.split('-');
        return `<option value="${m}">${monthNames[parseInt(month) - 1]} ${year}</option>`;
    }).join('');

    updateDateOptions();
}

function updateDateOptions() {
    const selectedMonth = document.getElementById('monthFilter').value;
    const dateSelect = document.getElementById('dateFilter');
    const dates = Object.keys(DASHBOARD_DATA.daily_data).sort().reverse();

    const filteredDates = dates.filter(d => d.startsWith(selectedMonth));

    dateSelect.innerHTML = filteredDates.map(d => {
        const dateObj = new Date(d + 'T00:00:00');
        const formatted = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
        return `<option value="${d}">${formatted}</option>`;
    }).join('');
}

function initPlateFilter() {
    const plates = new Set();
    Object.values(DASHBOARD_DATA.daily_data).forEach(day => {
        day.pending.forEach(i => plates.add(i.placa));
        day.completed.forEach(i => plates.add(i.placa));
    });

    const plateSelect = document.getElementById('plateFilter');
    const sortedPlates = Array.from(plates).sort();

    sortedPlates.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        plateSelect.appendChild(opt);
    });
}

function initDateTimeInputs() {
    const dates = Object.keys(DASHBOARD_DATA.daily_data).sort();
    if (dates.length === 0) return;

    const lastDate = dates[dates.length - 1];
    const firstDate = dates[0];

    document.getElementById('startDate').value = `${firstDate}T00:00`;
    document.getElementById('endDate').value = `${lastDate}T23:59`;
}

function loadDay(dateKey) {
    const data = DASHBOARD_DATA.daily_data[dateKey];
    if (!data) return;
    currentDayData = data;
    renderDashboard(data);
}

function runAdvancedFilter() {
    const selectedPlate = document.getElementById('plateFilter').value;
    const startStr = document.getElementById('startDate').value;
    const endStr = document.getElementById('endDate').value;

    if (!startStr || !endStr) return;

    const startDate = new Date(startStr);
    const endDate = new Date(endStr);

    let allItems = [];

    // Collect all data within range
    Object.keys(DASHBOARD_DATA.daily_data).forEach(dateKey => {
        const dayDate = new Date(dateKey + 'T00:00');
        // Compare dates roughly (by day) first for performance
        if (dayDate >= new Date(startDate.toDateString()) && dayDate <= new Date(endDate.toDateString())) {
            const day = DASHBOARD_DATA.daily_data[dateKey];
            const dayDisplay = dateKey.split('-').reverse().slice(0, 2).join('/');

            allItems = allItems.concat(day.pending.map(i => ({ ...i, data: dayDisplay })));
            allItems = allItems.concat(day.completed.map(i => ({ ...i, data: dayDisplay })));
        }
    });

    // Filter by specific plate if selected
    if (selectedPlate) {
        allItems = allItems.filter(i => i.placa === selectedPlate);
    }

    // Sort by date/time (mock time for now as shared data is daily)
    // In a real scenario, we'd use the actual timestamps if available

    const aggregated = {
        stats: calculateStats(allItems),
        pending: allItems.filter(i => i.status === 'BLOQUEADO'),
        completed: allItems.filter(i => i.status === 'AUTORIZADO')
    };

    const periodLabel = `Período: ${startDate.toLocaleDateString()} a ${endDate.toLocaleDateString()}`;
    renderDashboard(aggregated, true, periodLabel);
}

function calculateStats(items) {
    const total = items.length;
    const done = items.filter(i => i.status === 'AUTORIZADO').length;
    const pending = total - done;
    return {
        total_manifestos: total,
        checklists_feitos: done,
        pendentes: pending,
        percentual_conformidade: total > 0 ? roundTo(done / total * 100, 1) : 0
    };
}

function aggregatePeriodData(dateKeys) {
    let totalManif = 0;
    let totalDone = 0;
    let totalPending = 0;
    let allPending = [];
    let allCompleted = [];

    dateKeys.forEach(key => {
        const day = DASHBOARD_DATA.daily_data[key];
        totalManif += day.stats.total_manifestos;
        totalDone += day.stats.checklists_feitos;
        totalPending += day.stats.pendentes;

        // Add date to each item to distinguish in period view
        const dayDisplay = key.split('-').reverse().slice(0, 2).join('/');

        allPending = allPending.concat(day.pending.map(i => ({ ...i, data: dayDisplay })));
        allCompleted = allCompleted.concat(day.completed.map(i => ({ ...i, data: dayDisplay })));
    });

    return {
        stats: {
            total_manifestos: totalManif,
            checklists_feitos: totalDone,
            pendentes: totalPending,
            percentual_conformidade: totalManif > 0 ? roundTo(totalDone / totalManif * 100, 1) : 0,
            data_referencia: `Período: ${dateKeys[0].split('-').reverse().join('/')} a ${dateKeys[dateKeys.length - 1].split('-').reverse().join('/')}`
        },
        pending: allPending,
        completed: allCompleted
    };
}

function roundTo(num, places) {
    return +(Math.round(num + "e+" + places) + "e-" + places);
}

function renderDashboard(data, isPeriod = false, customPeriodLabel = null) {
    // Render Stats
    document.getElementById('totalManifestos').innerText = data.stats.total_manifestos;
    document.getElementById('doneChecklists').innerText = data.stats.checklists_feitos;
    document.getElementById('pendingChecklists').innerText = data.stats.pendentes;
    document.getElementById('complianceRate').innerText = `${data.stats.percentual_conformidade}%`;
    document.getElementById('lastUpdate').innerText = isPeriod ? (customPeriodLabel || data.stats.data_referencia) : `Atualizado em: ${DASHBOARD_DATA.last_update}`;

    // Render Critical Alerts
    const alertGrid = document.getElementById('alertGrid');
    if (data.pending.length > 0) {
        alertGrid.innerHTML = data.pending.map(item => `
            <div class="alert-card">
                <span class="status-badge">BLOQUEADO</span>
                <div class="plate">${item.placa}</div>
                <div class="driver">${item.motorista}</div>
                <div class="info">
                    <span>M: ${item.manifesto}</span>
                    ${isPeriod ? `<span>D: ${item.data}</span>` : `<span>H: ${item.horario}</span>`}
                </div>
            </div>
        `).join('');
    } else {
        alertGrid.innerHTML = '<div class="no-alerts">Nenhum veículo bloqueado no momento.</div>';
    }

    // Render Table
    renderTable([...data.pending, ...data.completed], isPeriod);
}

function renderTable(list, isPeriod = false) {
    const tableBody = document.getElementById('tableBody');

    // Update header if period
    const headerRow = document.querySelector('#checklistTable thead tr');
    headerRow.innerHTML = `
        <th>Status</th>
        <th>Placa</th>
        <th>Motorista</th>
        <th>Manifesto</th>
        <th>${isPeriod ? 'Data' : 'Horário Saída'}</th>
    `;

    tableBody.innerHTML = list.map(item => `
        <tr>
            <td>
                <span class="badge ${item.status === 'BLOQUEADO' ? 'blocked' : 'authorized'}">
                    ${item.status}
                </span>
            </td>
            <td><strong>${item.placa}</strong></td>
            <td>${item.motorista}</td>
            <td>${item.manifesto}</td>
            <td>${isPeriod ? item.data : (item.horario || '--:--')}</td>
        </tr>
    `).join('');
}

function filterTable(query) {
    const q = query.toLowerCase();
    const allData = [...currentDayData.pending, ...currentDayData.completed];
    const filtered = allData.filter(item =>
        item.placa.toLowerCase().includes(q) ||
        item.motorista.toLowerCase().includes(q)
    );
    renderTable(filtered);
}
