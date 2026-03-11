// Chart.js Global Config
// Chart.js Global Config
if (typeof Chart !== 'undefined') {
    Chart.defaults.color = '#8eacc8';
    Chart.defaults.borderColor = 'rgba(30,58,95,0.5)';
    Chart.defaults.font.size = 8;
} else {
    console.error("CRITICAL: Chart.js library not loaded. Check network connection or script tag.");
}

const COLORS = {
    blue: '#4f8cff', green: '#60a5fa', orange: '#38bdf8',
    red: '#93c5fd', purple: '#7dd3fc', cyan: '#a5d8ff',
};

const baseOpts = {
    responsive: true, maintainAspectRatio: true,
    plugins: { legend: { labels: { padding: 4, usePointStyle: true, pointStyleWidth: 5, font: { size: 10, weight: 'bold' } } } }
};

// ═══════════════════════════════════════
// DATA BY MONTH
// ═══════════════════════════════════════
const DATA = {
    jan: {
        label: 'Janeiro 2026',
        fuel: { records: 267, liters: 31497.14, value: 201712.92, avgLiter: 6.4 },
        maintenance: { records: 78, value: 259293.58 },
        fuelProducts: {
            labels: ["DIESEL S10", "DIESEL S10 ADITIVADA", "ARLA", "DIESEL COMUM"], values: [187048, 8555, 4601, 1508], liters: [28807, 1339, 1124, 226],
            details: [
                { name: 'DIESEL S10', count: 200, liters: '28.807', value: '187.048' },
                { name: 'DIESEL S10 ADITIVADA', count: 6, liters: '1.339', value: '8.555' },
                { name: 'ARLA', count: 58, liters: '1.124', value: '4.601' },
                { name: 'DIESEL COMUM', count: 3, liters: '226', value: '1.508' }
            ]
        },
        fuelVehiclesValue: { labels: ["GFL3G04", "GDY0H87", "EHJ0E76", "UGA2B60", "EXV3F24", "NAW6I81", "FET3H45", "CFD4B98", "NAW6C82", "GGW9G47"], data: [23286, 21064, 21018, 17344, 15348, 14747, 10815, 9252, 8676, 8112] },
        fuelVehiclesLiters: { labels: ["GDY0H87", "GFL3G04", "EHJ0E76", "UGA2B60", "EXV3F24", "NAW6I81", "FET3H45", "CFD4B98", "NAW6C82", "GGW9G47"], data: [3530, 3513, 3433, 2698, 2323, 2320, 1659, 1411, 1314, 1269] },
        maintTypes: { labels: ["COMBUSTIVEL", "CORRETIVA", "RECAPAGEM", "PREVENTIVA", "PNEU", "ÓLEO MOTOR", "Outros"], data: [206824, 22864, 8860, 5711, 5190, 2782, 7062] },
        maintTypesCount: { labels: ["CORRETIVA", "BORRACHARIA", "PREVENTIVA", "COMBUSTIVEL", "ESTOQUE", "RECAPAGEM", "Outros"], data: [30, 18, 9, 8, 4, 4, 5] },
        maintTypeDetails: [
            { name: 'COMBUSTIVEL', count: 8, value: '206.824' },
            { name: 'CORRETIVA', count: 30, value: '22.864' },
            { name: 'RECAPAGEM', count: 4, value: '8.860' },
            { name: 'PREVENTIVA', count: 9, value: '5.711' },
            { name: 'PNEU', count: 1, value: '5.190' },
            { name: 'ÓLEO MOTOR', count: 1, value: '2.782' },
            { name: 'BORRACHARIA', count: 18, value: '2.664' },
            { name: 'LAVAGEM E LUBRIFICAÇÃO', count: 1, value: '1.960' },
            { name: 'ESTOQUE', count: 4, value: '1.146' },
            { name: 'CERTIFICADO', count: 1, value: '1.043' },
            { name: 'LAVAGEM', count: 1, value: '250' },
        ],
        suppliers: [
            { name: 'SEM PARAR', value: 'R$ 117.945,80' },
            { name: 'SEM PARAR VIA FACIL', value: 'R$ 84.560,09' },
            { name: 'SERGIPANA TRUCK CLIENTER', value: 'R$ 7.460,00' },
            { name: 'DELLA VIA PNEUS LTDA', value: 'R$ 5.190,00' },
            { name: 'DUTRACAR', value: 'R$ 4.394,00' },
            { name: 'SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA', value: 'R$ 4.010,40' },
            { name: 'PANTHER COMERCIO DE AUTO PECAS EIRELI', value: 'R$ 3.586,54' },
        ],
        topMaintVehicle: { plate: 'COMBUSTIVEL', value: '206.824,44' },
        topSupplier: { name: 'SEM PARAR', value: '117.945,80' },
        avgMaint: 3324,
        fuelTable: [
            ["UGQ5H10", "30/01", "DIESEL S10", "90,51L", "R$ 632,66", "ADRIANO BATISTA"],
            ["GDY0H87", "31/01", "DIESEL S10", "395,00L", "R$ 2.346,30", "LUIS TAVEIRA"],
            ["GFL3G04", "31/01", "DIESEL S10", "625,00L", "R$ 3.650,00", "JAILSON"],
            ["GGW9G47", "31/01", "DIESEL S10", "25,33L", "R$ 162,11", "TADEU"],
            ["GGW9G47", "31/01", "ARLA", "5,80L", "R$ 21,34", "TADEU"],
            ["NAW6C82", "31/01", "DIESEL S10", "167,74L", "R$ 1.071,86", "CARLOS ANTÔNIO"],
            ["NAW6C82", "31/01", "ARLA", "26,39L", "R$ 105,30", "CARLOS ANTÔNIO"],
            ["NAW6I81", "31/01", "DIESEL S10", "107,84L", "R$ 689,10", "ERISVALDO"],
            ["QSQ3D59", "31/01", "DIESEL S10", "97,36L", "R$ 623,10", "TADEU"],
            ["QSQ3D59", "31/01", "DIESEL S10", "73,07L", "R$ 466,92", "TADEU"],
        ],
        allRecords: [{"p": "ELY9J91", "d": "22/01", "m": "RAIMUNDO", "l": 47.7, "k": 195600}, {"p": "GFL3G04", "d": "01/01", "m": "JAILSON", "l": 140.0, "k": 833585}, {"p": "CFD4B98", "d": "02/01", "m": "CARLOS ANTÔNIO", "l": 87.7, "k": 609475}, {"p": "GFL3G04", "d": "02/01", "m": "JAILSON", "l": 423.16, "k": 834020}, {"p": "GGW9G47", "d": "04/01", "m": "JORGE", "l": 140.0, "k": 277015}, {"p": "EFW6601", "d": "05/01", "m": "ALEXANDRE", "l": 96.97, "k": 827467}, {"p": "EXV3F24", "d": "05/01", "m": "CARLOS ANTÔNIO", "l": 101.71, "k": 352482}, {"p": "FPG7G53", "d": "05/01", "m": "ADRIANO", "l": 85.18, "k": 498709}, {"p": "GDY0H87", "d": "05/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 471425}, {"p": "GGJ5E35", "d": "05/01", "m": "RAIMUNDO VALENTIM", "l": 36.28, "k": 203035}, {"p": "GGW9G47", "d": "05/01", "m": "TADEU", "l": 87.38, "k": 277372}, {"p": "NAW6I81", "d": "05/01", "m": "MICHAEL", "l": 162.72, "k": 56498}, {"p": "BXZ3F52", "d": "06/01", "m": "SILVIO", "l": 43.43, "k": 252720}, {"p": "ELY9J91", "d": "06/01", "m": "RAIMUNDO VALENTIM", "l": 21.61, "k": 190350}, {"p": "EXV3F24", "d": "06/01", "m": "ADRIANO BATISTA", "l": 195.58, "k": 531040}, {"p": "FET3H45", "d": "06/01", "m": "GLEIDON", "l": 102.02, "k": 366980}, {"p": "FWK8A94", "d": "06/01", "m": "EDSON", "l": 69.28, "k": 195351}, {"p": "GDD3C49", "d": "06/01", "m": "SEBASTIÃO", "l": 206.85, "k": 526790}, {"p": "GDY0H87", "d": "06/01", "m": "LUIS TAVEIRA", "l": 196.13, "k": 471516}, {"p": "GGW9G47", "d": "06/01", "m": "TADEU", "l": 65.71, "k": 277804}, {"p": "NAW6C82", "d": "06/01", "m": "CARLOS ANTÔNIO", "l": 90.65, "k": 48494}, {"p": "NAW6I81", "d": "06/01", "m": "JORGE", "l": 127.56, "k": 57028}, {"p": "NAW6I81", "d": "06/01", "m": "JORGE", "l": 240.0, "k": 57028}, {"p": "CFD4B98", "d": "07/01", "m": "CARLOS ANTÔNIO", "l": 90.31, "k": 610009}, {"p": "ELY9J91", "d": "07/01", "m": "RAIMUNDO VALENTIM", "l": 24.69, "k": 190809}, {"p": "EXV3F24", "d": "07/01", "m": "CARLOS ANTÔNIO", "l": 102.0, "k": 353478}, {"p": "FET3H45", "d": "07/01", "m": "GLEIDON", "l": 179.11, "k": 367927}, {"p": "FPG7G53", "d": "07/01", "m": "ADRIANO", "l": 96.13, "k": 499422}, {"p": "FWK8A94", "d": "07/01", "m": "EDSON", "l": 62.54, "k": 195743}, {"p": "GGJ5E35", "d": "07/01", "m": "REGINALDO", "l": 33.15, "k": 203832}, {"p": "GGW9G47", "d": "07/01", "m": "TADEU", "l": 49.05, "k": 278114}, {"p": "NAW6I81", "d": "07/01", "m": "JORGE", "l": 80.0, "k": 57834}, {"p": "QSQ3D59", "d": "07/01", "m": "MICHAEL", "l": 115.39, "k": 181}, {"p": "RZC2C37", "d": "07/01", "m": "CARLOS", "l": 139.33, "k": 108859}, {"p": "UGA2B60", "d": "07/01", "m": "ERISVALDO", "l": 372.33, "k": 6640}, {"p": "ELY9J91", "d": "08/01", "m": "RAIMUNDO VALENTIM", "l": 31.39, "k": 191238}, {"p": "EXV3F24", "d": "08/01", "m": "CARLOS", "l": 213.26, "k": 354087}, {"p": "FZZ2B94", "d": "08/01", "m": "JAILSON", "l": 61.49, "k": 283297}, {"p": "GGJ5E35", "d": "08/01", "m": "REGINALDO", "l": 42.86, "k": 204188}, {"p": "NAW6C82", "d": "08/01", "m": "CARLOS ANTÔNIO", "l": 101.33, "k": 48982}, {"p": "NAW6C82", "d": "08/01", "m": "ADRIANO BATISTA", "l": 41.73, "k": 491397}, {"p": "NAW6I81", "d": "08/01", "m": "JORGE", "l": 103.0, "k": 58190}, {"p": "RZC2C27", "d": "08/01", "m": "JANDERLEI", "l": 146.06, "k": 137488}, {"p": "RZC2C27", "d": "08/01", "m": "JANDERLEI", "l": 10.0, "k": 137488}, {"p": "EFW6626", "d": "09/01", "m": "CARLOS", "l": 119.41, "k": 712336}, {"p": "ELY9J91", "d": "09/01", "m": "RAIMUNDO VALENTIM", "l": 27.97, "k": 191686}, {"p": "EXV3F24", "d": "09/01", "m": "CARLOS ANTÔNIO", "l": 150.04, "k": 354689}, {"p": "FET3H45", "d": "09/01", "m": "ADRIANO", "l": 138.89, "k": 368726}, {"p": "FPG7G53", "d": "09/01", "m": "MAYCON", "l": 65.9, "k": 499887}, {"p": "FWK8A94", "d": "09/01", "m": "JONATHAN", "l": 79.96, "k": 196257}, {"p": "GDY0H87", "d": "09/01", "m": "LUIS TAVEIRA", "l": 466.0, "k": 472927}, {"p": "GGW9G47", "d": "09/01", "m": "GLEIDON", "l": 32.04, "k": 788558}, {"p": "NAW6I81", "d": "09/01", "m": "CARLOS ANTÔNIO", "l": 73.65, "k": 58492}, {"p": "QSQ3D59", "d": "09/01", "m": "MICHAEL", "l": 73.86, "k": 573}, {"p": "UGA2B60", "d": "09/01", "m": "ERISVALDO", "l": 355.34, "k": 8210}, {"p": "EXV3F24", "d": "10/01", "m": "CARLOS ANTÔNIO", "l": 172.0, "k": 355469}, {"p": "EHJ0E76", "d": "11/01", "m": "MAYCON", "l": 580.01, "k": 411966}, {"p": "GDY0H87", "d": "11/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 474165}, {"p": "BXZ3F52", "d": "12/01", "m": "SILVIO", "l": 44.96, "k": 256417}, {"p": "CFD4B98", "d": "12/01", "m": "ISAIAS", "l": 110.6, "k": 610624}, {"p": "EFW6601", "d": "12/01", "m": "JONATHAN", "l": 59.78, "k": 927896}, {"p": "ELY9J91", "d": "12/01", "m": "RAIMUNDO VALENTIM", "l": 32.75, "k": 192190}, {"p": "FPG7G53", "d": "12/01", "m": "ADRIANO", "l": 94.63, "k": 500587}, {"p": "FWK8A94", "d": "12/01", "m": "EDSON", "l": 87.6, "k": 196801}, {"p": "GDY0H87", "d": "12/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 474843}, {"p": "GFL3G04", "d": "12/01", "m": "JAILSON", "l": 596.65, "k": 835922}, {"p": "GGW9G47", "d": "12/01", "m": "GLEIDON", "l": 108.61, "k": 278926}, {"p": "GGW9G47", "d": "12/01", "m": "TADEU", "l": 70.44, "k": 279427}, {"p": "NAW6C82", "d": "12/01", "m": "CARLOS ANTÔNIO", "l": 95.82, "k": 49605}, {"p": "RZC2C37", "d": "12/01", "m": "CARLOS", "l": 182.55, "k": 109628}, {"p": "CFD4B98", "d": "13/01", "m": "GLEIDON", "l": 164.85, "k": 611580}, {"p": "EFW6626", "d": "13/01", "m": "CARLOS ANTÔNIO", "l": 144.91, "k": 713185}, {"p": "EXV3F24", "d": "13/01", "m": "ISAIAS", "l": 151.61, "k": 365198}, {"p": "FET3H45", "d": "13/01", "m": "JONATHAN", "l": 157.01, "k": 369515}, {"p": "GGJ5E35", "d": "13/01", "m": "REGINALDO", "l": 61.13, "k": 205103}, {"p": "NAW6I81", "d": "13/01", "m": "CARLOS ANTÔNIO", "l": 110.91, "k": 59009}, {"p": "QSQ3D59", "d": "13/01", "m": "MICHAEL", "l": 47.96, "k": 801}, {"p": "UGA2B60", "d": "13/01", "m": "ERISVALDO", "l": 368.68, "k": 9893}, {"p": "EHJ0E76", "d": "14/01", "m": "MAYCON", "l": 280.0, "k": 413086}, {"p": "EHJ0E76", "d": "14/01", "m": "MAYCON", "l": 400.0, "k": 413582}, {"p": "ELY9J91", "d": "14/01", "m": "RAIMUNDO VALENTIM", "l": 47.38, "k": 193096}, {"p": "EXV3F24", "d": "14/01", "m": "CARLOS ANTÔNIO", "l": 208.0, "k": 357040}, {"p": "FPG7G53", "d": "14/01", "m": "JORGE", "l": 83.65, "k": 501060}, {"p": "FWK8A94", "d": "14/01", "m": "EDSON", "l": 106.6, "k": 197448}, {"p": "GFL3G04", "d": "14/01", "m": "JAILSON", "l": 464.79, "k": 837244}, {"p": "GGW9G47", "d": "14/01", "m": "TADEU", "l": 86.9, "k": 280020}, {"p": "NAW6C82", "d": "14/01", "m": "CARLOS ANTÔNIO", "l": 108.1, "k": 50082}, {"p": "QSQ3D59", "d": "14/01", "m": "MICHAEL", "l": 56.32, "k": 1095}, {"p": "CFD4B98", "d": "15/01", "m": "DIOGO", "l": 181.83, "k": 612533}, {"p": "ELY9J91", "d": "15/01", "m": "RAIMUNDO VALENTIM", "l": 41.24, "k": 193811}, {"p": "EXV3F24", "d": "15/01", "m": "CARLOS ANTÔNIO", "l": 110.0, "k": 357512}, {"p": "GGJ5E35", "d": "15/01", "m": "REGINALDO", "l": 57.09, "k": 205945}, {"p": "QSQ3D59", "d": "15/01", "m": "MICHAEL", "l": 39.54, "k": 1295}, {"p": "BXZ3F52", "d": "16/01", "m": "SILVIO", "l": 50.21, "k": 557150}, {"p": "FET3H45", "d": "16/01", "m": "WILLIAN", "l": 215.0, "k": 370641}, {"p": "FPG7G53", "d": "16/01", "m": "ADRIANO", "l": 144.28, "k": 502030}, {"p": "GFL3G04", "d": "16/01", "m": "JAILSON", "l": 380.03, "k": 838480}, {"p": "NAW6C82", "d": "16/01", "m": "CARLOS ANTÔNIO", "l": 138.0, "k": 50720}, {"p": "QSQ3D59", "d": "16/01", "m": "MICHAEL", "l": 22.96, "k": 1390}, {"p": "RZC2C27", "d": "16/01", "m": "SEBASTIÃO", "l": 121.93, "k": 137935}, {"p": "STD3J94", "d": "16/01", "m": "TADEU", "l": 99.68, "k": 162570}, {"p": "NAW6I81", "d": "17/01", "m": "CARLOS ANTÔNIO", "l": 147.01, "k": 59718}, {"p": "RZC2C27", "d": "18/01", "m": "SEBASTIÃO", "l": 124.28, "k": 138476}, {"p": "EFW6601", "d": "19/01", "m": "ISAIAS", "l": 59.18, "k": 828397}, {"p": "EHJ0E76", "d": "19/01", "m": "MAYCON", "l": 200.0, "k": 415163}, {"p": "FET3H45", "d": "19/01", "m": "JORGE", "l": 119.0, "k": 371163}, {"p": "FZZ2B94", "d": "19/01", "m": "ADRIANO", "l": 60.2, "k": 283718}, {"p": "GDY0H87", "d": "19/01", "m": "LUIS", "l": 450.0, "k": 475550}, {"p": "GGJ5E35", "d": "19/01", "m": "REGINALDO", "l": 36.43, "k": 206427}, {"p": "GGW9G47", "d": "19/01", "m": "ALEXANDRE", "l": 118.63, "k": 280828}, {"p": "NAW6I81", "d": "19/01", "m": "JONATHAN", "l": 175.99, "k": 60454}, {"p": "NAW6I81", "d": "19/01", "m": "CARLOS ANTÔNIO", "l": 87.43, "k": 60818}, {"p": "QSQ3D59", "d": "19/01", "m": "MICHAEL", "l": 36.08, "k": 1583}, {"p": "UGA2B60", "d": "19/01", "m": "ERISVALDO", "l": 395.68, "k": 13107}, {"p": "CFD4B98", "d": "20/01", "m": "CARLOS", "l": 182.49, "k": 613456}, {"p": "EHJ0E76", "d": "20/01", "m": "MAYCON", "l": 200.0, "k": 415920}, {"p": "ELY9J91", "d": "20/01", "m": "RAIMUNDO", "l": 56.2, "k": 194718}, {"p": "FWK8A94", "d": "20/01", "m": "EDSON", "l": 102.32, "k": 198044}, {"p": "GDD3C49", "d": "20/01", "m": "JANDERLEI", "l": 229.09, "k": 527604}, {"p": "NAW6C82", "d": "20/01", "m": "GLEIDON", "l": 147.18, "k": 51299}, {"p": "RZC2C27", "d": "20/01", "m": "SEBASTIÃO", "l": 132.0, "k": 139099}, {"p": "RZC2C37", "d": "20/01", "m": "CARLOS", "l": 139.18, "k": 110143}, {"p": "UGQ5H10", "d": "20/01", "m": "MICHAEL", "l": 91.62, "k": 628}, {"p": "BXZ3F52", "d": "21/01", "m": "INGRID", "l": 36.51, "k": 257678}, {"p": "EXV3F24", "d": "21/01", "m": "ADRIANO", "l": 221.58, "k": 585312}, {"p": "FPG7G53", "d": "21/01", "m": "JONATHAN", "l": 91.46, "k": 502374}, {"p": "FZZ2B94", "d": "21/01", "m": "CARLOS ANTÔNIO", "l": 55.37, "k": 284248}, {"p": "GFL3G04", "d": "21/01", "m": "JAILSON", "l": 539.98, "k": 810112}, {"p": "GGJ5E35", "d": "21/01", "m": "REGINALDO", "l": 29.8, "k": 206800}, {"p": "GGW9G47", "d": "21/01", "m": "TADEU", "l": 106.27, "k": 281493}, {"p": "NAW6I81", "d": "21/01", "m": "CARLOS ANTÔNIO", "l": 153.17, "k": 62369}, {"p": "QSQ3D59", "d": "21/01", "m": "MICHAEL", "l": 72.22, "k": 1964}, {"p": "UGA2B60", "d": "21/01", "m": "ADRIANO BATISTA", "l": 253.89, "k": 14222}, {"p": "UGQ5H10", "d": "21/01", "m": "ISAIAS", "l": 126.32, "k": 1358}, {"p": "FET3H45", "d": "22/01", "m": "JONATHAN", "l": 173.89, "k": 372042}, {"p": "FPG7G53", "d": "22/01", "m": "ISAIAS", "l": 50.23, "k": 503069}, {"p": "FWK8A94", "d": "22/01", "m": "EDSON", "l": 99.04, "k": 198656}, {"p": "GDY0H87", "d": "22/01", "m": "LUIS", "l": 200.0, "k": 476501}, {"p": "NAW6C82", "d": "22/01", "m": "CARLOS ANTÔNIO", "l": 96.52, "k": 51773}, {"p": "NAW6I81", "d": "22/01", "m": "CARLOS ANTÔNIO", "l": 136.49, "k": 62585}, {"p": "RZC2C37", "d": "22/01", "m": "CARLOS", "l": 152.25, "k": 110816}, {"p": "STD3J94", "d": "22/01", "m": "TADEU", "l": 159.81, "k": 163406}, {"p": "CFD4B98", "d": "23/01", "m": "GLEIDON", "l": 153.06, "k": 614368}, {"p": "ELY9J91", "d": "23/01", "m": "RAIMUNDO", "l": 35.22, "k": 196084}, {"p": "GDY0H87", "d": "23/01", "m": "LUIS", "l": 380.0, "k": 477093}, {"p": "QSQ3D59", "d": "23/01", "m": "MICHAEL", "l": 68.01, "k": 2292}, {"p": "EHJ0E76", "d": "23/01", "m": "MAYCON", "l": 454.01, "k": 416010}, {"p": "FZZ2B94", "d": "23/01", "m": "ERISVALDO", "l": 64.24, "k": 284854}, {"p": "GGJ5E35", "d": "23/01", "m": "REGINALDO", "l": 38.29, "k": 207349}, {"p": "CFD4B98", "d": "24/01", "m": "CARLOS ANTÔNIO", "l": 133.04, "k": 615115}, {"p": "ELY9J91", "d": "24/01", "m": "MICHAEL", "l": 23.49, "k": 196455}, {"p": "NAW6C82", "d": "24/01", "m": "ERISVALDO", "l": 139.57, "k": 52372}, {"p": "UGA2B60", "d": "24/01", "m": "CARLOS ANTÔNIO", "l": 143.06, "k": 15816}, {"p": "EXV3F24", "d": "25/01", "m": "ERISVALDO", "l": 152.84, "k": 359199}, {"p": "FET3H45", "d": "25/01", "m": "JORGE", "l": 127.18, "k": 37291}, {"p": "RZC2C27", "d": "25/01", "m": "JANDERLEI", "l": 208.18, "k": 140169}, {"p": "EHJ0E76", "d": "26/01", "m": "MAYCON", "l": 200.0, "k": 417717}, {"p": "EHJ0E76", "d": "26/01", "m": "MAYCON", "l": 435.0, "k": 418032}, {"p": "EXV3F24", "d": "26/01", "m": "MICHAEL", "l": 111.56, "k": 359679}, {"p": "FET3H45", "d": "26/01", "m": "ALEXANDRE", "l": 209.24, "k": 37695}, {"p": "FWK8A94", "d": "26/01", "m": "EDSON", "l": 108.26, "k": 199379}, {"p": "GDY0H87", "d": "26/01", "m": "LUIS TAVEIRA", "l": 415.0, "k": 478106}, {"p": "GGW9G47", "d": "26/01", "m": "TADEU", "l": 97.48, "k": 282136}, {"p": "NAW6I81", "d": "26/01", "m": "ERISVALDO", "l": 160.98, "k": 63260}, {"p": "UGQ5H10", "d": "26/01", "m": "ISAIAS", "l": 92.38, "k": 1742}, {"p": "CFD4B98", "d": "27/01", "m": "GLEIDON", "l": 122.32, "k": 615759}, {"p": "ELY9J91", "d": "27/01", "m": "RAIMUNDO", "l": 40.05, "k": 197163}, {"p": "FWK8A94", "d": "27/01", "m": "EDSON", "l": 47.06, "k": 199636}, {"p": "FZZ2B94", "d": "27/01", "m": "ADRIANO BATISTA", "l": 49.97, "k": 285315}, {"p": "GGJ5E35", "d": "27/01", "m": "REGINALDO", "l": 35.21, "k": 207873}, {"p": "GGW9G47", "d": "27/01", "m": "TADEU", "l": 74.2, "k": 282622}, {"p": "NAW6I81", "d": "27/01", "m": "ERISVALDO", "l": 112.06, "k": 63737}, {"p": "STD3J94", "d": "27/01", "m": "ALEXANDRE", "l": 154.47, "k": 164220}, {"p": "UGA2B60", "d": "27/01", "m": "ERISVALDO", "l": 332.0, "k": 16322}, {"p": "BXZ3F52", "d": "28/01", "m": "INGRID", "l": 57.51, "k": 25828}, {"p": "EXV3F24", "d": "28/01", "m": "CARLOS ANTÔNIO", "l": 177.87, "k": 360543}, {"p": "FET3H45", "d": "28/01", "m": "ALEXANDRE", "l": 215.82, "k": 374726}, {"p": "FZZ2B94", "d": "28/01", "m": "ADRIANO BATISTA", "l": 43.61, "k": 385634}, {"p": "GDY0H87", "d": "28/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 479525}, {"p": "GFL3G04", "d": "28/01", "m": "JAILSON", "l": 287.51, "k": 841107}, {"p": "GGJ5E35", "d": "28/01", "m": "REGINALDO", "l": 17.36, "k": 208050}, {"p": "NAW6C82", "d": "28/01", "m": "CARLOS ANTÔNIO", "l": 137.01, "k": 53015}, {"p": "NAW6I81", "d": "28/01", "m": "CARLOS ANTÔNIO", "l": 105.0, "k": 64231}, {"p": "QSQ3D59", "d": "28/01", "m": "MICHAEL", "l": 119.12, "k": 2941}, {"p": "RZC2C27", "d": "28/01", "m": "JANDERLEI", "l": 136.53, "k": 140796}, {"p": "EFW6626", "d": "29/01", "m": "WILLIAN", "l": 163.38, "k": 714036}, {"p": "ELY9J91", "d": "29/01", "m": "RAIMUNDO", "l": 54.01, "k": 198033}, {"p": "FPG7G53", "d": "29/01", "m": "JONATHAN", "l": 101.2, "k": 503724}, {"p": "FWK8A94", "d": "29/01", "m": "EDSON", "l": 100.0, "k": 200185}, {"p": "GGJ5E35", "d": "29/01", "m": "REGINALDO", "l": 50.67, "k": 28687}, {"p": "GGW9G47", "d": "29/01", "m": "GLEIDON", "l": 115.54, "k": 583353}, {"p": "GGW9G47", "d": "29/01", "m": "TADEU", "l": 68.77, "k": 283987}, {"p": "UGQ5H10", "d": "29/01", "m": "ISAIAS", "l": 64.06, "k": 20001}, {"p": "CFD4B98", "d": "30/01", "m": "GLEIDON", "l": 138.4, "k": 616466}, {"p": "EFW6601", "d": "30/01", "m": "ISAIAS", "l": 97.4, "k": 829078}, {"p": "EHJ0E76", "d": "30/01", "m": "MAYCON", "l": 538.04, "k": 419496}, {"p": "EXV3F24", "d": "30/01", "m": "ERISVALDO", "l": 188.06, "k": 361458}, {"p": "NAW6I81", "d": "30/01", "m": "ERISVALDO", "l": 141.26, "k": 64927}, {"p": "QSQ3D59", "d": "30/01", "m": "MICHAEL", "l": 100.56, "k": 3575}, {"p": "UGA2B60", "d": "30/01", "m": "CARLOS ANTÔNIO", "l": 339.2, "k": 17749}, {"p": "UGQ5H10", "d": "30/01", "m": "CARLOS ANTÔNIO", "l": 137.89, "k": 2759}, {"p": "UGQ5H10", "d": "30/01", "m": "ADRIANO BATISTA", "l": 90.51, "k": 32034}, {"p": "GDY0H87", "d": "31/01", "m": "LUIS TAVEIRA", "l": 395.0, "k": 479635}, {"p": "GFL3G04", "d": "31/01", "m": "JAILSON", "l": 625.0, "k": 842236}, {"p": "GGW9G47", "d": "31/01", "m": "TADEU", "l": 25.33, "k": 283980}, {"p": "NAW6C82", "d": "31/01", "m": "CARLOS ANTÔNIO", "l": 167.74, "k": 53726}, {"p": "NAW6I81", "d": "31/01", "m": "ERISVALDO", "l": 107.84, "k": 65406}, {"p": "QSQ3D59", "d": "31/01", "m": "TADEU", "l": 97.36, "k": 4139}, {"p": "QSQ3D59", "d": "31/01", "m": "TADEU", "l": 73.07, "k": 4139}],
        trendData: [12965, 38894, 77788, 129647, 181506, 228178, 259294],
        weeklyMaint: [46673, 57045, 62230, 46673, 46673],
        weeklyFuel: [38325, 42360, 46394, 38325, 36308]
    },
    feb: {
        label: 'Fevereiro 2026',
        fuel: { records: 258, liters: 27714.65, value: 174153.39, avgLiter: 6.28 },
        maintenance: { records: 81, value: 249357.59 },
        fuelProducts: {
            labels: ["DIESEL S10", "DIESEL S10 ADITIVADA", "ARLA", "DIESEL COMUM"], values: [155856, 10965, 6592, 740], liters: [24261, 1716, 1622, 116],
            details: [
                { name: 'DIESEL S10', count: 188, liters: '24.261', value: '155.856' },
                { name: 'DIESEL S10 ADITIVADA', count: 6, liters: '1.716', value: '10.965' },
                { name: 'ARLA', count: 63, liters: '1.622', value: '6.592' },
                { name: 'DIESEL COMUM', count: 1, liters: '116', value: '740' }
            ]
        },
        fuelVehiclesValue: { labels: ["GFL3G04", "GDY0H87", "UGA2B60", "NAW6C82", "FET3H45", "CFD4B98", "UGQ5H10", "EHJ0E76", "QSQ3D59", "EFW6626"], data: [22561, 21487, 17712, 13906, 10843, 10173, 8482, 8068, 7156, 6077] },
        fuelVehiclesLiters: { labels: ["GFL3G04", "GDY0H87", "UGA2B60", "NAW6C82", "FET3H45", "CFD4B98", "EHJ0E76", "UGQ5H10", "QSQ3D59", "EFW6626"], data: [3822, 3667, 2803, 2092, 1604, 1552, 1376, 1283, 1144, 899] },
        maintTypes: { labels: ["COMBUSTIVEL", "CORRETIVA", "PNEU", "PREVENTIVA", "BORRACHARIA", "PNEU RECAPADO", "Outros"], data: [167789, 52039, 11388, 10742, 2410, 2300, 2689] },
        maintTypesCount: { labels: ["CORRETIVA", "BORRACHARIA", "PREVENTIVA", "ESTOQUE", "COMBUSTIVEL", "LAVAGEM", "Outros"], data: [52, 11, 9, 2, 2, 1, 4] },
        maintTypeDetails: [
            { name: 'COMBUSTIVEL', count: 2, value: '167.789' },
            { name: 'CORRETIVA', count: 52, value: '52.039' },
            { name: 'PNEU', count: 1, value: '11.388' },
            { name: 'PREVENTIVA', count: 9, value: '10.742' },
            { name: 'BORRACHARIA', count: 11, value: '2.410' },
            { name: 'PNEU RECAPADO', count: 1, value: '2.300' },
            { name: 'LAVAGEM', count: 1, value: '930' },
            { name: 'GUINCHO', count: 1, value: '900' },
            { name: 'ARLA', count: 1, value: '629' },
            { name: 'ESTOQUE', count: 2, value: '229' },
        ],
        suppliers: [
            { name: 'SEM PARAR', value: 'R$ 167.789,34' },
            { name: 'DELLA VIA PNEUS', value: 'R$ 11.568,00' },
            { name: 'TITAN DIESEL', value: 'R$ 11.520,00' },
            { name: 'TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA', value: 'R$ 10.944,23' },
            { name: 'POSTO DE MOLAS GEMEOS MARTINS', value: 'R$ 4.922,00' },
            { name: 'FAMILIA TOP TRUCK', value: 'R$ 4.300,00' },
            { name: 'VALDECIR (MANUTENÇÃO)', value: 'R$ 3.580,00' },
        ],
        topMaintVehicle: { plate: 'COMBUSTIVEL', value: '167.789,34' },
        topSupplier: { name: 'SEM PARAR', value: '167.789,34' },
        avgMaint: 3078,
        fuelTable: [
            ["FET3H45", "27/02", "ARLA", "20,29L", "R$ 81,00", "JORGE"],
            ["FZZ2B94", "27/02", "DIESEL S10", "45,59L", "R$ 318,67", "ELTON"],
            ["GDY0H87", "27/02", "DIESEL S10", "250,00L", "R$ 1.447,50", "LUIS TAVEIRA"],
            ["GDY0H87", "27/02", "ARLA", "33,20L", "R$ 105,91", "LUIS TAVEIRA"],
            ["QSQ3D59", "27/02", "ARLA", "7,24L", "R$ 26,64", "MICHAEL"],
            ["QSQ3D59", "27/02", "DIESEL S10", "45,61L", "R$ 291,90", "MICHAEL"],
            ["FZZ2B94", "28/02", "DIESEL S10", "54,48L", "R$ 380,82", "ELTON"],
            ["GDY0H87", "28/02", "DIESEL S10", "100,00L", "R$ 572,00", "LUIS TAVEIRA"],
            ["STD3J94", "28/02", "DIESEL S10", "88,37L", "R$ 565,57", "CARLOS ANTÔNIO"],
            ["UGQ5H10", "28/02", "DIESEL S10", "112,02L", "R$ 783,02", "CARLOS ANTÔNIO"],
        ],
        allRecords: [{"p": "EHJ0E76", "d": "01/02", "m": "MAYCON", "l": 563.04, "k": 420702}, {"p": "GDY0H87", "d": "01/02", "m": "LUIS TAVEIRA", "l": 100.03, "k": 480318}, {"p": "NAW6I81", "d": "01/02", "m": "CARLOS ANTÔNIO", "l": 169.41, "k": 66113}, {"p": "QSQ3D59", "d": "01/02", "m": "TADEU", "l": 40.6, "k": 4869}, {"p": "QSQ3D59", "d": "01/02", "m": "TADEU", "l": 66.57, "k": 5353}, {"p": "BXZ3F52", "d": "02/02", "m": "ISAIAS", "l": 28.24, "k": 258645}, {"p": "CFD4B98", "d": "02/02", "m": "GLEIDON", "l": 93.61, "k": 616986}, {"p": "ELY9J91", "d": "02/02", "m": "RAIMUNDO", "l": 44.32, "k": 198875}, {"p": "FWK8A94", "d": "02/02", "m": "EDSON", "l": 94.49, "k": 200744}, {"p": "GDY0H87", "d": "02/02", "m": "LUIS TAVEIRA", "l": 350.01, "k": 481212}, {"p": "NAW6I81", "d": "02/02", "m": "CARLOS ANTÔNIO", "l": 189.0, "k": 66953}, {"p": "RZC2C37", "d": "02/02", "m": "CARLOS", "l": 160.0, "k": 111377}, {"p": "CFD4B98", "d": "03/02", "m": "GLEIDON", "l": 156.0, "k": 617855}, {"p": "EFW6626", "d": "03/02", "m": "CARLOS ANTÔNIO", "l": 177.42, "k": 714995}, {"p": "ELY9J91", "d": "03/02", "m": "RAIMUNDO", "l": 33.46, "k": 199401}, {"p": "FET3H45", "d": "03/02", "m": "JORGE", "l": 150.0, "k": 376558}, {"p": "FET3H45", "d": "03/02", "m": "JORGE", "l": 5.84, "k": 376558}, {"p": "FET3H45", "d": "03/02", "m": "ISAIAS", "l": 116.55, "k": 376790}, {"p": "FPG7G53", "d": "03/02", "m": "ALEXANDRE", "l": 124.91, "k": 504570}, {"p": "GFL3G04", "d": "03/02", "m": "JAILSON", "l": 525.25, "k": 843495}, {"p": "NAW6C82", "d": "03/02", "m": "CARLOS ANTÔNIO", "l": 114.15, "k": 54262}, {"p": "QSQ3D59", "d": "03/02", "m": "MICHAEL", "l": 36.82, "k": 5511}, {"p": "RZC2C27", "d": "03/02", "m": "SEBASTIÃO", "l": 185.0, "k": 141547}, {"p": "UGA2B60", "d": "03/02", "m": "ERISVALDO", "l": 337.58, "k": 19157}, {"p": "EHJ0E76", "d": "04/02", "m": "MAYCON", "l": 200.02, "k": 421968}, {"p": "ELY9J91", "d": "04/02", "m": "RAIMUNDO", "l": 30.03, "k": 199875}, {"p": "FZZ2B94", "d": "04/02", "m": "CARLOS ANTÔNIO", "l": 62.85, "k": 439}, {"p": "GDY0H87", "d": "04/02", "m": "LUIS TAVEIRA", "l": 236.86, "k": 481800}, {"p": "GGJ5E35", "d": "04/02", "m": "REGINALDO", "l": 40.62, "k": 209192}, {"p": "GGW9G47", "d": "04/02", "m": "TADEU", "l": 101.04, "k": 284592}, {"p": "QSQ3D59", "d": "04/02", "m": "MICHAEL", "l": 66.01, "k": 5884}, {"p": "BXZ3F52", "d": "05/02", "m": "FERNANDO", "l": 42.0, "k": 259666}, {"p": "BXZ3F52", "d": "05/02", "m": "FERNANDO", "l": 33.01, "k": 259666}, {"p": "ELY9J91", "d": "05/02", "m": "RAIMUNDO", "l": 28.95, "k": 200353}, {"p": "FET3H45", "d": "05/02", "m": "JORGE", "l": 184.0, "k": 377674}, {"p": "FPG7G53", "d": "05/02", "m": "ERISVALDO", "l": 130.0, "k": 505329}, {"p": "GDY0H87", "d": "05/02", "m": "LUIS TAVEIRA", "l": 200.0, "k": 482807}, {"p": "NAW6C82", "d": "05/02", "m": "CARLOS ANTÔNIO", "l": 114.88, "k": 54786}, {"p": "QSQ3D59", "d": "05/02", "m": "MICHAEL", "l": 57.03, "k": 6189}, {"p": "BXZ3F52", "d": "06/02", "m": "FERNANDO", "l": 33.77, "k": 260310}, {"p": "CFD4B98", "d": "06/02", "m": "GLEIDON", "l": 160.0, "k": 618806}, {"p": "EFW6626", "d": "06/02", "m": "CARLOS ANTÔNIO", "l": 132.66, "k": 715767}, {"p": "ELY9J91", "d": "06/02", "m": "RAIMUNDO", "l": 29.83, "k": 200845}, {"p": "FZZ2B94", "d": "06/02", "m": "CARLOS ANTÔNIO", "l": 49.19, "k": 343}, {"p": "GDY0H87", "d": "06/02", "m": "LUIS TAVEIRA", "l": 200.0, "k": 483574}, {"p": "GGJ5E35", "d": "06/02", "m": "REGINALDO", "l": 32.98, "k": 209313}, {"p": "GGW9G47", "d": "06/02", "m": "TADEU", "l": 81.46, "k": 285074}, {"p": "QSQ3D59", "d": "06/02", "m": "MICHAEL", "l": 77.06, "k": 6588}, {"p": "UGQ5H10", "d": "06/02", "m": "ERISVALDO", "l": 145.14, "k": 3757}, {"p": "CFD4B98", "d": "07/02", "m": "TADEU", "l": 153.04, "k": 619766}, {"p": "ELY9J91", "d": "07/02", "m": "MICHAEL", "l": 49.84, "k": 207620}, {"p": "GFL3G04", "d": "07/02", "m": "JAILSON", "l": 187.0, "k": 844102}, {"p": "NAW6C82", "d": "07/02", "m": "CARLOS ANTÔNIO", "l": 125.14, "k": 55355}, {"p": "UGA2B60", "d": "07/02", "m": "ERISVALDO", "l": 355.02, "k": 20584}, {"p": "CFD4B98", "d": "07/02", "m": "TADEU", "l": 153.04, "k": 619766}, {"p": "ELY9J91", "d": "07/02", "m": "MICHAEL", "l": 49.84, "k": 207620}, {"p": "GFL3G04", "d": "07/02", "m": "JAILSON", "l": 187.0, "k": 844102}, {"p": "NAW6C82", "d": "07/02", "m": "CARLOS ANTÔNIO", "l": 125.14, "k": 55355}, {"p": "UGA2B60", "d": "07/02", "m": "ERISVALDO", "l": 355.02, "k": 20584}, {"p": "ELY9J91", "d": "08/02", "m": "MICHAEL", "l": 45.0, "k": 202252}, {"p": "FET3H45", "d": "08/02", "m": "JORGE", "l": 254.73, "k": 378917}, {"p": "ELY9J91", "d": "08/02", "m": "MICHAEL", "l": 45.0, "k": 202252}, {"p": "FET3H45", "d": "08/02", "m": "JORGE", "l": 254.73, "k": 378917}, {"p": "CFD4B98", "d": "09/02", "m": "ADRIANO", "l": 66.27, "k": 602299}, {"p": "EFW6601", "d": "09/02", "m": "ISAIAS", "l": 69.88, "k": 829}, {"p": "EHJ0E76", "d": "09/02", "m": "MAYCON", "l": 200.0, "k": 421975}, {"p": "FPG7G53", "d": "09/02", "m": "ERISVALDO", "l": 101.03, "k": 505898}, {"p": "FWK8A94", "d": "09/02", "m": "EDSON", "l": 97.15, "k": 201317}, {"p": "NAW6C82", "d": "09/02", "m": "ERISVALDO", "l": 117.83, "k": 55966}, {"p": "QSQ3D59", "d": "09/02", "m": "MICHAEL", "l": 76.68, "k": 7000}, {"p": "RZC2C27", "d": "09/02", "m": "JANDERLEI", "l": 102.49, "k": 141911}, {"p": "BXZ3F52", "d": "10/02", "m": "FERNANDO", "l": 67.03, "k": 361348}, {"p": "ELY9J91", "d": "10/02", "m": "RAIMUNDO", "l": 42.77, "k": 203021}, {"p": "FZZ2B94", "d": "10/02", "m": "CARLOS ANTÔNIO", "l": 46.25, "k": 286865}, {"p": "GDY0H87", "d": "10/02", "m": "LUIS TAVEIRA", "l": 361.01, "k": 483622}, {"p": "GFL3G04", "d": "10/02", "m": "JAILSON", "l": 596.4, "k": 845675}, {"p": "GGW9G47", "d": "10/02", "m": "TADEU", "l": 48.24, "k": 285}, {"p": "NAW6C82", "d": "10/02", "m": "ADRIANO", "l": 150.0, "k": 56154}, {"p": "QSQ3D59", "d": "10/02", "m": "MICHAEL", "l": 67.98, "k": 7373}, {"p": "UGQ5H10", "d": "10/02", "m": "GLEIDON", "l": 187.73, "k": 4773}, {"p": "UGQ5H10", "d": "10/02", "m": "GLEIDON", "l": 37.0, "k": 5007}, {"p": "EFW6601", "d": "11/02", "m": "ISAIAS", "l": 56.1, "k": 829566}, {"p": "EFW6626", "d": "11/02", "m": "DIOGO", "l": 78.24, "k": 716703}, {"p": "ELY9J91", "d": "11/02", "m": "RAIMUNDO", "l": 40.5, "k": 203576}, {"p": "FET3H45", "d": "11/02", "m": "ADRIANO", "l": 223.21, "k": 799708}, {"p": "FWK8A94", "d": "11/02", "m": "EDSON", "l": 105.47, "k": 204597}, {"p": "GGJ5E35", "d": "11/02", "m": "REGINALDO", "l": 45.85, "k": 210120}, {"p": "QSQ3D59", "d": "11/02", "m": "MICHAEL", "l": 64.78, "k": 7750}, {"p": "QSQ3D59", "d": "11/02", "m": "MICHAEL", "l": 67.31, "k": 8108}, {"p": "RZC2C37", "d": "11/02", "m": "CARLOS", "l": 181.59, "k": 111947}, {"p": "UGA2B60", "d": "11/02", "m": "CARLOS ANTÔNIO", "l": 328.01, "k": 22139}, {"p": "BXZ3F52", "d": "12/02", "m": "FERNANDO", "l": 50.68, "k": 262200}, {"p": "CFD4B98", "d": "12/02", "m": "WILLIAN", "l": 132.22, "k": 622137}, {"p": "FPG7G53", "d": "12/02", "m": "ALEXANDRE", "l": 120.32, "k": 506692}, {"p": "FZZ2B94", "d": "12/02", "m": "CARLOS ANTÔNIO", "l": 70.0, "k": 287392}, {"p": "NAW6C82", "d": "12/02", "m": "ERISVALDO", "l": 116.36, "k": 57257}, {"p": "NAW6C82", "d": "12/02", "m": "ERISVALDO", "l": 145.52, "k": 57731}, {"p": "NAW6I81", "d": "12/02", "m": "FABRICIO", "l": 183.08, "k": 67740}, {"p": "UGQ5H10", "d": "12/02", "m": "GLEIDON", "l": 129.61, "k": 5639}, {"p": "ELY9J91", "d": "13/02", "m": "RAIMUNDO", "l": 44.47, "k": 204463}, {"p": "FPG7G53", "d": "13/02", "m": "ALEXANDRE", "l": 88.81, "k": 507333}, {"p": "GDD3C49", "d": "13/02", "m": "JANDERLEI", "l": 205.26, "k": 529166}, {"p": "GGJ5E35", "d": "13/02", "m": "REGINALDO", "l": 43.84, "k": 210589}, {"p": "NAW6C82", "d": "13/02", "m": "ERISVALDO", "l": 134.47, "k": 58283}, {"p": "QSQ3D59", "d": "13/02", "m": "MICHAEL", "l": 89.62, "k": 8588}, {"p": "STD3J94", "d": "13/02", "m": "DIOGO", "l": 153.79, "k": 164733}, {"p": "UGA2B60", "d": "13/02", "m": "CARLOS ANTÔNIO", "l": 396.56, "k": 23899}, {"p": "ELY9J91", "d": "14/02", "m": "TADEU", "l": 53.92, "k": 205251}, {"p": "GFL3G04", "d": "14/02", "m": "JAILSON", "l": 405.0, "k": 846919}, {"p": "NAW6C82", "d": "14/02", "m": "ERISVALDO", "l": 68.22, "k": 58732}, {"p": "NAW6C82", "d": "14/02", "m": "ERISVALDO", "l": 161.0, "k": 59212}, {"p": "EHJ0E76", "d": "15/02", "m": "MAYCON", "l": 120.0, "k": 422075}, {"p": "GDY0H87", "d": "15/02", "m": "LUIS TAVEIRA", "l": 200.0, "k": 484605}, {"p": "GDY0H87", "d": "16/02", "m": "LUIS TAVEIRA", "l": 480.0, "k": 485109}, {"p": "GFL3G04", "d": "16/02", "m": "JAILSON", "l": 580.0, "k": 848316}, {"p": "EFW6626", "d": "17/02", "m": "CARLOS ANTÔNIO", "l": 176.07, "k": 717044}, {"p": "GDY0H87", "d": "17/02", "m": "LUIS TAVEIRA", "l": 138.01, "k": 485419}, {"p": "BXZ3F52", "d": "18/02", "m": "FERNANDO", "l": 49.54, "k": 262936}, {"p": "GDY0H87", "d": "18/02", "m": "LUIS TAVEIRA", "l": 300.01, "k": 486346}, {"p": "GGJ5E35", "d": "18/02", "m": "REGINALDO", "l": 40.32, "k": 210978}, {"p": "GGW9G47", "d": "18/02", "m": "TADEU", "l": 92.93, "k": 285944}, {"p": "QSQ3D59", "d": "18/02", "m": "MICHAEL", "l": 70.9, "k": 8949}, {"p": "STD3J94", "d": "18/02", "m": "JORGE", "l": 99.0, "k": 165142}, {"p": "BXZ3F52", "d": "19/02", "m": "FERNANDO", "l": 35.07, "k": 263391}, {"p": "CFD4B98", "d": "19/02", "m": "WILLIAN", "l": 177.51, "k": 622418}, {"p": "EFW6626", "d": "19/02", "m": "CARLOS ANTÔNIO", "l": 83.47, "k": 717756}, {"p": "FPG7G53", "d": "19/02", "m": "ALEXANDRE", "l": 97.19, "k": 508019}, {"p": "FWK8A94", "d": "19/02", "m": "EDSON", "l": 83.8, "k": 202361}, {"p": "FZZ2B94", "d": "19/02", "m": "ADRIANO BATISTA", "l": 39.9, "k": 287666}, {"p": "NAW6C82", "d": "19/02", "m": "CARLOS ANTÔNIO", "l": 133.19, "k": 59724}, {"p": "QSQ3D59", "d": "19/02", "m": "MICHAEL", "l": 61.97, "k": 9284}, {"p": "UGA2B60", "d": "19/02", "m": "ERISVALDO", "l": 313.34, "k": 25211}, {"p": "UGQ5H10", "d": "19/02", "m": "ISAIAS", "l": 121.54, "k": 6186}, {"p": "BXZ3F52", "d": "20/02", "m": "FERNANDO", "l": 37.73, "k": 264012}, {"p": "ELY9J91", "d": "20/02", "m": "RAIMUNDO", "l": 56.2, "k": 206185}, {"p": "GFL3G04", "d": "20/02", "m": "JAILSON", "l": 160.0, "k": 849717}, {"p": "GFL3G04", "d": "20/02", "m": "JAILSON", "l": 100.0, "k": 850360}, {"p": "GGJ5E35", "d": "20/02", "m": "REGINALDO", "l": 8.36, "k": 211072}, {"p": "NAW6C82", "d": "20/02", "m": "CARLOS ANTÔNIO", "l": 185.08, "k": 60432}, {"p": "STD3J94", "d": "20/02", "m": "CARLOS ANTÔNIO", "l": 169.97, "k": 165946}, {"p": "UGA2B60", "d": "21/02", "m": "ERISVALDO", "l": 314.45, "k": 26471}, {"p": "FET3H45", "d": "22/02", "m": "JORGE", "l": 172.0, "k": 382738}, {"p": "BXZ3F52", "d": "23/02", "m": "FERNANDO", "l": 47.01, "k": 264662}, {"p": "EFW6626", "d": "23/02", "m": "CARLOS ANTÔNIO", "l": 118.71, "k": 718153}, {"p": "ELY9J91", "d": "23/02", "m": "RAIMUNDO", "l": 42.8, "k": 206957}, {"p": "EXV3F24", "d": "23/02", "m": "CARLOS ANTÔNIO", "l": 134.48, "k": 362082}, {"p": "FPG7G53", "d": "23/02", "m": "ALEXANDRE", "l": 76.75, "k": 508589}, {"p": "FWK8A94", "d": "23/02", "m": "EDSON", "l": 70.45, "k": 202759}, {"p": "GGW9G47", "d": "23/02", "m": "TADEU", "l": 89.04, "k": 286526}, {"p": "NAW6C82", "d": "23/02", "m": "ADRIANO BATISTA", "l": 125.83, "k": 60919}, {"p": "QSQ3D59", "d": "23/02", "m": "MICHAEL", "l": 74.45, "k": 9611}, {"p": "STD3J94", "d": "23/02", "m": "ISAIAS", "l": 117.2, "k": 66605}, {"p": "UGQ5H10", "d": "23/02", "m": "WILLIAN", "l": 176.76, "k": 71162}, {"p": "CFD4B98", "d": "24/02", "m": "GLEIDON", "l": 116.16, "k": 623149}, {"p": "ELY9J91", "d": "24/02", "m": "RAIMUNDO", "l": 31.83, "k": 207528}, {"p": "EXV3F24", "d": "24/02", "m": "CARLOS ANTÔNIO", "l": 137.5, "k": 362629}, {"p": "FET3H45", "d": "24/02", "m": "JORGE", "l": 187.02, "k": 383612}, {"p": "FZZ2B94", "d": "24/02", "m": "CARLOS ANTÔNIO", "l": 40.89, "k": 287921}, {"p": "GGJ5E35", "d": "24/02", "m": "REGINALDO", "l": 39.33, "k": 211514}, {"p": "NAW6C82", "d": "24/02", "m": "ADRIANO BATISTA", "l": 90.72, "k": 61817}, {"p": "NAW6I81", "d": "24/02", "m": "FABRICIO", "l": 178.21, "k": 68535}, {"p": "QSQ3D59", "d": "24/02", "m": "MICHAEL", "l": 68.32, "k": 9971}, {"p": "RZC2C27", "d": "24/02", "m": "JANDERLEI", "l": 162.78, "k": 142491}, {"p": "UGQ5H10", "d": "24/02", "m": "CARLOS ANTÔNIO", "l": 94.08, "k": 71553}, {"p": "BXZ3F52", "d": "25/02", "m": "FERNANDO", "l": 27.16, "k": 265143}, {"p": "EFW6626", "d": "25/02", "m": "CARLOS ANTÔNIO", "l": 132.78, "k": 719781}, {"p": "FWK8A94", "d": "25/02", "m": "EDSON", "l": 110.23, "k": 203428}, {"p": "FZZ2B94", "d": "25/02", "m": "CARLOS ANTÔNIO", "l": 63.94, "k": 288381}, {"p": "GDY0H87", "d": "25/02", "m": "LUIS TAVEIRA", "l": 504.19, "k": 487575}, {"p": "GGW9G47", "d": "25/02", "m": "TADEU", "l": 117.88, "k": 287239}, {"p": "NAW6C82", "d": "25/02", "m": "ADRIANO BATISTA", "l": 26.03, "k": 613706}, {"p": "NAW6C82", "d": "25/02", "m": "ADRIANO BATISTA", "l": 86.79, "k": 616280}, {"p": "RZC2C37", "d": "25/02", "m": "CARLOS", "l": 190.79, "k": 112703}, {"p": "UGA2B60", "d": "25/02", "m": "MICHAEL", "l": 210.5, "k": 27238}, {"p": "UGQ5H10", "d": "25/02", "m": "CARLOS ANTÔNIO", "l": 103.09, "k": 8134}, {"p": "CFD4B98", "d": "26/02", "m": "GLEIDON", "l": 172.71, "k": 624171}, {"p": "EFW6601", "d": "26/02", "m": "ISAIAS", "l": 79.22, "k": 830492}, {"p": "ELY9J91", "d": "26/02", "m": "RAIMUNDO", "l": 55.36, "k": 208435}, {"p": "EXV3F24", "d": "26/02", "m": "CARLOS ANTÔNIO", "l": 105.02, "k": 363147}, {"p": "FWK8A94", "d": "26/02", "m": "EDSON", "l": 46.76, "k": 203697}, {"p": "GFL3G04", "d": "26/02", "m": "JAILSON", "l": 622.31, "k": 850855}, {"p": "QSQ3D59", "d": "26/02", "m": "MICHAEL", "l": 50.95, "k": 10238}, {"p": "UGQ5H10", "d": "26/02", "m": "CARLOS ANTÔNIO", "l": 119.25, "k": 8679}, {"p": "BXZ3F52", "d": "27/02", "m": "FERNANDO", "l": 40.87, "k": 265725}, {"p": "EFV6387", "d": "27/02", "m": "ISAIAS", "l": 115.87, "k": 830224}, {"p": "EHJ0E76", "d": "27/02", "m": "MAYCON", "l": 233.0, "k": 422298}, {"p": "ELY9J91", "d": "27/02", "m": "CARLOS ANTÔNIO", "l": 49.49, "k": 209159}, {"p": "EXV3F24", "d": "27/02", "m": "CARLOS ANTÔNIO", "l": 123.97, "k": 363641}, {"p": "FZZ2B94", "d": "27/02", "m": "ELTON", "l": 45.59, "k": 288720}, {"p": "GDY0H87", "d": "27/02", "m": "LUIS TAVEIRA", "l": 250.0, "k": 488878}, {"p": "QSQ3D59", "d": "27/02", "m": "MICHAEL", "l": 45.61, "k": 10487}, {"p": "FZZ2B94", "d": "28/02", "m": "ELTON", "l": 54.48, "k": 289069}, {"p": "GDY0H87", "d": "28/02", "m": "LUIS TAVEIRA", "l": 100.0, "k": 489194}, {"p": "STD3J94", "d": "28/02", "m": "CARLOS ANTÔNIO", "l": 88.37, "k": 167240}, {"p": "UGQ5H10", "d": "28/02", "m": "CARLOS ANTÔNIO", "l": 112.02, "k": 9257}],
        trendData: [12468, 37404, 74807, 124679, 174550, 219435, 249358],
        weeklyMaint: [44884, 54859, 59846, 44884, 44884],
        weeklyFuel: [33089, 36572, 40055, 33089, 31348]
    },
    mar: {
        label: 'Março 2026',
        fuel: { records: 93, liters: 11735.22, value: 76888.98, avgLiter: 6.55 },
        maintenance: { records: 11, value: 8618.39 },
        fuelProducts: {
            labels: ["DIESEL S10", "ARLA", "DIESEL COMUM", "DIESEL S10 ADITIVADA"], values: [72750, 1883, 1275, 981], liters: [10920, 474, 191, 150],
            details: [
                { name: 'DIESEL S10', count: 68, liters: '10.920', value: '72.750' },
                { name: 'ARLA', count: 22, liters: '474', value: '1.883' },
                { name: 'DIESEL COMUM', count: 2, liters: '191', value: '1.275' },
                { name: 'DIESEL S10 ADITIVADA', count: 1, liters: '150', value: '981' }
            ]
        },
        fuelVehiclesValue: { labels: ["GDY0H87", "EXV3F24", "NAW6I81", "GFL3G04", "NAW6C82", "EHJ0E76", "UGA2B60", "CFD4B98", "GGJ5E35", "STD3J94"], data: [11363, 6649, 6626, 6494, 6136, 5826, 5138, 3451, 3269, 3121] },
        fuelVehiclesLiters: { labels: ["GDY0H87", "GFL3G04", "NAW6I81", "EXV3F24", "NAW6C82", "EHJ0E76", "UGA2B60", "GGJ5E35", "CFD4B98", "STD3J94"], data: [1776, 1073, 973, 970, 923, 895, 747, 522, 496, 482] },
        maintTypes: { labels: ["CORRETIVA", "LAVAGEM", "PREVENTIVA", "BORRACHARIA"], data: [4635, 1950, 1534, 500] },
        maintTypesCount: { labels: ["CORRETIVA", "BORRACHARIA", "LAVAGEM", "PREVENTIVA"], data: [6, 3, 1, 1] },
        maintTypeDetails: [
            { name: 'CORRETIVA', count: 6, value: '4.635' },
            { name: 'LAVAGEM', count: 1, value: '1.950' },
            { name: 'PREVENTIVA', count: 1, value: '1.534' },
            { name: 'BORRACHARIA', count: 3, value: '500' },
        ],
        suppliers: [
            { name: 'JA LAVA RAPIDO', value: 'R$ 1.950,00' },
            { name: 'PACAEMBU', value: 'R$ 1.718,22' },
            { name: 'PANTHER COMERCIO DE AUTO PECAS EIRELI', value: 'R$ 1.706,53' },
            { name: 'REDE DE POSTOS MARAJO TOCANTINS LTDA', value: 'R$ 1.533,64' },
            { name: 'G.K.R. MIRANDA COMERCIO DE RADIADORES LTDA', value: 'R$ 800,00' },
            { name: 'IGUANA AUTOPECAS E SERVICOS - LOJA 08', value: 'R$ 410,00' },
            { name: 'MARCELO PNEUS', value: 'R$ 250,00' },
        ],
        topMaintVehicle: { plate: 'CFD4B98', value: '2.140,45' },
        topSupplier: { name: 'JA LAVA RAPIDO', value: '1.950,00' },
        avgMaint: 783,
        fuelTable: [
            ["EXV3F24", "10/03", "DIESEL S10", "252,21L", "R$ 1.762,95", "DOUGLAS"],
            ["FPG7G53", "10/03", "DIESEL S10", "142,17L", "R$ 966,76", "ALEXANDRE"],
            ["FPG7G53", "10/03", "ARLA", "10,01L", "R$ 36,84", "ALEXANDRE"],
            ["FWK8A94", "10/03", "DIESEL S10", "48,69L", "R$ 331,09", "EDSON"],
            ["GDY0H87", "10/03", "DIESEL S10", "472,02L", "R$ 3.507,11", "LUIS TAVEIRA"],
            ["GDY0H87", "10/03", "ARLA", "39,28L", "R$ 156,73", "LUIS TAVEIRA"],
            ["NAW6C82", "10/03", "DIESEL S10", "92,40L", "R$ 705,01", "CARLOS ANTÔNIO"],
            ["NAW6C82", "10/03", "ARLA", "28,29L", "R$ 110,05", "CARLOS ANTÔNIO"],
            ["QSQ3D59", "10/03", "DIESEL S10", "52,59L", "R$ 357,61", "MICHAEL"],
            ["UGQ5H10", "10/03", "DIESEL S10", "111,75L", "R$ 764,37", "JAIR"],
        ],
        allRecords: [{"p": "CFD4B98", "d": "01/03", "m": "GLEIDON", "l": 153.63, "k": 625026}, {"p": "GDY0H87", "d": "01/03", "m": "LUIS TAVEIRA", "l": 550.02, "k": 489959}, {"p": "GFL3G04", "d": "01/03", "m": "JAILSON", "l": 370.0, "k": 851958}, {"p": "EFW6626", "d": "02/03", "m": "CARLOS ANTÔNIO", "l": 88.01, "k": 719299}, {"p": "GGJ5E35", "d": "02/03", "m": "ISAIAS", "l": 390.98, "k": 211936}, {"p": "GGJ5E35", "d": "02/03", "m": "INGRID", "l": 57.85, "k": 212150}, {"p": "QSQ3D59", "d": "02/03", "m": "MICHAEL", "l": 34.96, "k": 10643}, {"p": "RZC2C27", "d": "02/03", "m": "JANDERLEI", "l": 112.12, "k": 142879}, {"p": "UGQ5H10", "d": "02/03", "m": "CARLOS ANTÔNIO", "l": 91.09, "k": 9679}, {"p": "BXZ3F52", "d": "03/03", "m": "FERNANDO", "l": 54.78, "k": 266565}, {"p": "CFD4B98", "d": "03/03", "m": "GLEIDON", "l": 152.25, "k": 625862}, {"p": "ELY9J91", "d": "03/03", "m": "RAIMUNDO", "l": 24.4, "k": 209802}, {"p": "FPG7G53", "d": "03/03", "m": "ALEXANDRE", "l": 125.89, "k": 509418}, {"p": "GDD3C49", "d": "03/03", "m": "SEBASTIÃO", "l": 210.27, "k": 529904}, {"p": "GDY0H87", "d": "03/03", "m": "LUIS TAVEIRA", "l": 150.0, "k": 409851}, {"p": "GGW9G47", "d": "03/03", "m": "TADEU", "l": 100.77, "k": 287879}, {"p": "NAW6C82", "d": "03/03", "m": "JORGE", "l": 123.0, "k": 62112}, {"p": "NAW1I81", "d": "03/03", "m": "FABRICIO", "l": 86.51, "k": 69046}, {"p": "QSQ3D59", "d": "03/03", "m": "MICHAEL", "l": 37.6, "k": 10804}, {"p": "STD3J94", "d": "03/03", "m": "CARLOS ANTÔNIO", "l": 149.44, "k": 167755}, {"p": "UGA2B60", "d": "03/03", "m": "CARLOS ANTÔNIO", "l": 262.79, "k": 29846}, {"p": "ELY9J91", "d": "04/03", "m": "RAIMUNDO", "l": 29.91, "k": 210276}, {"p": "EXV3F24", "d": "04/03", "m": "CARLOS ANTÔNIO", "l": 254.0, "k": 364719}, {"p": "NAW6C82", "d": "04/03", "m": "DIOGO", "l": 174.15, "k": 62885}, {"p": "NAW1I81", "d": "04/03", "m": "FABRICIO", "l": 139.39, "k": 69586}, {"p": "QSQ3D59", "d": "04/03", "m": "MICHAEL", "l": 36.88, "k": 10994}, {"p": "UGQ5H10", "d": "04/03", "m": "JAIR", "l": 108.17, "k": 10224}, {"p": "EFV6387", "d": "05/03", "m": "ISAIAS", "l": 102.99, "k": 830633}, {"p": "EHJ0E76", "d": "05/03", "m": "MAYCON", "l": 493.77, "k": 423688}, {"p": "ELY9J91", "d": "05/03", "m": "RAIMUNDO", "l": 28.47, "k": 210707}, {"p": "EXV3F24", "d": "05/03", "m": "DOUGLAS", "l": 140.0, "k": 365218}, {"p": "FWK8A94", "d": "05/03", "m": "EDSON", "l": 73.62, "k": 204121}, {"p": "GFL3G04", "d": "05/03", "m": "JAILSON", "l": 253.0, "k": 852950}, {"p": "NAW6C82", "d": "05/03", "m": "JORGE", "l": 115.01, "k": 63372}, {"p": "QSQ3D59", "d": "05/03", "m": "MICHAEL", "l": 40.25, "k": 11208}, {"p": "RZC2C37", "d": "05/03", "m": "CARLOS", "l": 114.0, "k": 113107}, {"p": "STD3J94", "d": "05/03", "m": "JAIR", "l": 111.84, "k": 188282}, {"p": "STD3J94", "d": "05/03", "m": "JAIR", "l": 100.5, "k": 188282}, {"p": "BXZ3F52", "d": "06/03", "m": "FERNANDO", "l": 70.0, "k": 267631}, {"p": "EFW6601", "d": "06/03", "m": "ISAIAS", "l": 75.5, "k": 831089}, {"p": "EXV3F24", "d": "06/03", "m": "DOUGLAS", "l": 198.86, "k": 366054}, {"p": "GDY0H87", "d": "06/03", "m": "LUIS TAVEIRA", "l": 405.02, "k": 491636}, {"p": "NAW6C82", "d": "06/03", "m": "JORGE", "l": 104.91, "k": 69335}, {"p": "NAW6I81", "d": "06/03", "m": "FABRICIO", "l": 150.0, "k": 70307}, {"p": "UGA2B60", "d": "06/03", "m": "CARLOS ANTÔNIO", "l": 437.45, "k": 31553}, {"p": "UGQ5H10", "d": "06/03", "m": "JAIR", "l": 109.0, "k": 10790}, {"p": "EFV6387", "d": "07/03", "m": "CARLOS ANTÔNIO", "l": 177.02, "k": 831429}, {"p": "EHJ0E76", "d": "07/03", "m": "MAYCON", "l": 367.35, "k": 424690}, {"p": "NAW6C82", "d": "07/03", "m": "JAIR", "l": 151.12, "k": 64457}, {"p": "NAW6I81", "d": "07/03", "m": "FABRICIO", "l": 535.25, "k": 70685}, {"p": "GFL3G04", "d": "08/03", "m": "JAILSON", "l": 450.0, "k": 854157}, {"p": "NAW6I81", "d": "08/03", "m": "FABRICIO", "l": 132.3, "k": 71344}, {"p": "BXZ3F52", "d": "09/03", "m": "FERNANDO", "l": 54.0, "k": 268461}, {"p": "EXV3F24", "d": "09/03", "m": "DOUGLAS", "l": 74.35, "k": 366478}, {"p": "FWK8A94", "d": "09/03", "m": "EDSON", "l": 110.59, "k": 204748}, {"p": "GDY0H87", "d": "09/03", "m": "LUIS TAVEIRA", "l": 100.07, "k": 492846}, {"p": "GGJ5E35", "d": "09/03", "m": "INGRID", "l": 43.65, "k": 212740}, {"p": "NAW6C82", "d": "09/03", "m": "ADRIANO", "l": 103.06, "k": 64901}, {"p": "NAW6I81", "d": "09/03", "m": "FABRICIO", "l": 124.23, "k": 71925}, {"p": "QSQ3D59", "d": "09/03", "m": "MICHAEL", "l": 99.81, "k": 11702}, {"p": "STD3J94", "d": "09/03", "m": "ISAIAS", "l": 120.36, "k": 169475}, {"p": "BXZ3F52", "d": "10/03", "m": "FERNANDO", "l": 37.52, "k": 269090}, {"p": "CFD4B98", "d": "10/03", "m": "GLEIDON", "l": 161.63, "k": 626766}, {"p": "ELY9J91", "d": "10/03", "m": "RAIMUNDO", "l": 53.97, "k": 211688}, {"p": "EXV3F24", "d": "10/03", "m": "DOUGLAS", "l": 252.21, "k": 367375}, {"p": "FPG7G53", "d": "10/03", "m": "ALEXANDRE", "l": 142.17, "k": 510396}, {"p": "FWK8A94", "d": "10/03", "m": "EDSON", "l": 48.69, "k": 205059}, {"p": "GDY0H87", "d": "10/03", "m": "LUIS TAVEIRA", "l": 472.02, "k": 493047}, {"p": "NAW6C82", "d": "10/03", "m": "CARLOS ANTÔNIO", "l": 92.4, "k": 65279}, {"p": "QSQ3D59", "d": "10/03", "m": "MICHAEL", "l": 52.59, "k": 11960}, {"p": "UGQ5H10", "d": "10/03", "m": "JAIR", "l": 111.75, "k": 11310}],
        trendData: [431, 1293, 2586, 4309, 6033, 7584, 8618],
        weeklyMaint: [1551, 1896, 2068, 1551, 1551],
        weeklyFuel: [14609, 16147, 17684, 14609, 13840]
    },
    todos: {
        label: 'Todos os Meses',
        fuel: { records: 618, liters: 70947.01, value: 452755.29, avgLiter: 6.38 },
        maintenance: { records: 170, value: 517269.56 },
        fuelProducts: {
            labels: ["DIESEL S10", "DIESEL S10 ADITIVADA", "ARLA", "DIESEL COMUM"], values: [415654, 20502, 13076, 3524], liters: [63989, 3205, 3220, 533],
            details: [
                { name: 'DIESEL S10', count: 456, liters: '63.989', value: '415.654' },
                { name: 'DIESEL S10 ADITIVADA', count: 13, liters: '3.205', value: '20.502' },
                { name: 'ARLA', count: 143, liters: '3.220', value: '13.076' },
                { name: 'DIESEL COMUM', count: 6, liters: '533', value: '3.524' }
            ]
        },
        fuelVehiclesValue: { labels: ["GDY0H87", "GFL3G04", "UGA2B60", "EHJ0E76", "NAW6C82", "CFD4B98", "EXV3F24", "FET3H45", "NAW6I81", "UGQ5H10"], data: [53914, 52341, 40193, 34912, 28718, 22876, 21997, 21658, 21373, 8482] },
        fuelVehiclesLiters: { labels: ["GDY0H87", "GFL3G04", "UGA2B60", "EHJ0E76", "NAW6C82", "CFD4B98", "EXV3F24", "NAW6I81", "FET3H45", "UGQ5H10"], data: [8973, 8408, 6248, 5703, 4329, 3459, 3294, 3294, 3263, 1283] },
        maintTypes: { labels: ["COMBUSTIVEL", "CORRETIVA", "PREVENTIVA", "PNEU", "RECAPAGEM", "BORRACHARIA", "Outros"], data: [374614, 79538, 17987, 16578, 8860, 5574, 14119] },
        maintTypesCount: { labels: ["CORRETIVA", "BORRACHARIA", "PREVENTIVA", "COMBUSTIVEL", "ESTOQUE", "RECAPAGEM", "Outros"], data: [88, 32, 19, 10, 6, 4, 11] },
        maintTypeDetails: [
            { name: 'COMBUSTIVEL', count: 10, value: '374.614' },
            { name: 'CORRETIVA', count: 88, value: '79.538' },
            { name: 'PREVENTIVA', count: 19, value: '17.987' },
            { name: 'PNEU', count: 2, value: '16.578' },
            { name: 'RECAPAGEM', count: 4, value: '8.860' },
            { name: 'BORRACHARIA', count: 32, value: '5.574' },
            { name: 'LAVAGEM', count: 3, value: '3.130' },
            { name: 'ÓLEO MOTOR', count: 1, value: '2.782' },
            { name: 'PNEU RECAPADO', count: 1, value: '2.300' },
            { name: 'LAVAGEM E LUBRIFICAÇÃO', count: 1, value: '1.960' },
            { name: 'ESTOQUE', count: 6, value: '1.375' },
            { name: 'CERTIFICADO', count: 1, value: '1.043' },
            { name: 'GUINCHO', count: 1, value: '900' },
            { name: 'ARLA', count: 1, value: '629' },
        ],
        suppliers: [
            { name: 'SEM PARAR', value: 'R$ 285.735,14' },
            { name: 'SEM PARAR VIA FACIL', value: 'R$ 84.560,09' },
            { name: 'DELLA VIA PNEUS', value: 'R$ 11.568,00' },
            { name: 'TITAN DIESEL', value: 'R$ 11.520,00' },
            { name: 'TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA', value: 'R$ 10.944,23' },
            { name: 'PANTHER COMERCIO DE AUTO PECAS EIRELI', value: 'R$ 7.595,91' },
            { name: 'SERGIPANA TRUCK CLIENTER', value: 'R$ 7.460,00' },
        ],
        topMaintVehicle: { plate: 'COMBUSTIVEL', value: '374.613,78' },
        topSupplier: { name: 'SEM PARAR', value: '285.735,14' },
        avgMaint: 3043,
        fuelTable: [
            ["EXV3F24", "10/03", "DIESEL S10", "252,21L", "R$ 1.762,95", "DOUGLAS"],
            ["FPG7G53", "10/03", "DIESEL S10", "142,17L", "R$ 966,76", "ALEXANDRE"],
            ["FPG7G53", "10/03", "ARLA", "10,01L", "R$ 36,84", "ALEXANDRE"],
            ["FWK8A94", "10/03", "DIESEL S10", "48,69L", "R$ 331,09", "EDSON"],
            ["GDY0H87", "10/03", "DIESEL S10", "472,02L", "R$ 3.507,11", "LUIS TAVEIRA"],
            ["GDY0H87", "10/03", "ARLA", "39,28L", "R$ 156,73", "LUIS TAVEIRA"],
            ["NAW6C82", "10/03", "DIESEL S10", "92,40L", "R$ 705,01", "CARLOS ANTÔNIO"],
            ["NAW6C82", "10/03", "ARLA", "28,29L", "R$ 110,05", "CARLOS ANTÔNIO"],
            ["QSQ3D59", "10/03", "DIESEL S10", "52,59L", "R$ 357,61", "MICHAEL"],
            ["UGQ5H10", "10/03", "DIESEL S10", "111,75L", "R$ 764,37", "JAIR"],
        ],
        allRecords: [{"p": "EHJ0E76", "d": "01/02", "m": "MAYCON", "l": 563.04, "k": 420702}, {"p": "GDY0H87", "d": "01/02", "m": "LUIS TAVEIRA", "l": 100.03, "k": 480318}, {"p": "NAW6I81", "d": "01/02", "m": "CARLOS ANTÔNIO", "l": 169.41, "k": 66113}, {"p": "QSQ3D59", "d": "01/02", "m": "TADEU", "l": 40.6, "k": 4869}, {"p": "QSQ3D59", "d": "01/02", "m": "TADEU", "l": 66.57, "k": 5353}, {"p": "BXZ3F52", "d": "02/02", "m": "ISAIAS", "l": 28.24, "k": 258645}, {"p": "CFD4B98", "d": "02/02", "m": "GLEIDON", "l": 93.61, "k": 616986}, {"p": "ELY9J91", "d": "02/02", "m": "RAIMUNDO", "l": 44.32, "k": 198875}, {"p": "FWK8A94", "d": "02/02", "m": "EDSON", "l": 94.49, "k": 200744}, {"p": "GDY0H87", "d": "02/02", "m": "LUIS TAVEIRA", "l": 350.01, "k": 481212}, {"p": "NAW6I81", "d": "02/02", "m": "CARLOS ANTÔNIO", "l": 189.0, "k": 66953}, {"p": "RZC2C37", "d": "02/02", "m": "CARLOS", "l": 160.0, "k": 111377}, {"p": "CFD4B98", "d": "03/02", "m": "GLEIDON", "l": 156.0, "k": 617855}, {"p": "EFW6626", "d": "03/02", "m": "CARLOS ANTÔNIO", "l": 177.42, "k": 714995}, {"p": "ELY9J91", "d": "03/02", "m": "RAIMUNDO", "l": 33.46, "k": 199401}, {"p": "FET3H45", "d": "03/02", "m": "JORGE", "l": 150.0, "k": 376558}, {"p": "FET3H45", "d": "03/02", "m": "JORGE", "l": 5.84, "k": 376558}, {"p": "FET3H45", "d": "03/02", "m": "ISAIAS", "l": 116.55, "k": 376790}, {"p": "FPG7G53", "d": "03/02", "m": "ALEXANDRE", "l": 124.91, "k": 504570}, {"p": "GFL3G04", "d": "03/02", "m": "JAILSON", "l": 525.25, "k": 843495}, {"p": "NAW6C82", "d": "03/02", "m": "CARLOS ANTÔNIO", "l": 114.15, "k": 54262}, {"p": "QSQ3D59", "d": "03/02", "m": "MICHAEL", "l": 36.82, "k": 5511}, {"p": "RZC2C27", "d": "03/02", "m": "SEBASTIÃO", "l": 185.0, "k": 141547}, {"p": "UGA2B60", "d": "03/02", "m": "ERISVALDO", "l": 337.58, "k": 19157}, {"p": "EHJ0E76", "d": "04/02", "m": "MAYCON", "l": 200.02, "k": 421968}, {"p": "ELY9J91", "d": "04/02", "m": "RAIMUNDO", "l": 30.03, "k": 199875}, {"p": "FZZ2B94", "d": "04/02", "m": "CARLOS ANTÔNIO", "l": 62.85, "k": 439}, {"p": "GDY0H87", "d": "04/02", "m": "LUIS TAVEIRA", "l": 236.86, "k": 481800}, {"p": "GGJ5E35", "d": "04/02", "m": "REGINALDO", "l": 40.62, "k": 209192}, {"p": "GGW9G47", "d": "04/02", "m": "TADEU", "l": 101.04, "k": 284592}, {"p": "QSQ3D59", "d": "04/02", "m": "MICHAEL", "l": 66.01, "k": 5884}, {"p": "BXZ3F52", "d": "05/02", "m": "FERNANDO", "l": 42.0, "k": 259666}, {"p": "BXZ3F52", "d": "05/02", "m": "FERNANDO", "l": 33.01, "k": 259666}, {"p": "ELY9J91", "d": "05/02", "m": "RAIMUNDO", "l": 28.95, "k": 200353}, {"p": "FET3H45", "d": "05/02", "m": "JORGE", "l": 184.0, "k": 377674}, {"p": "FPG7G53", "d": "05/02", "m": "ERISVALDO", "l": 130.0, "k": 505329}, {"p": "GDY0H87", "d": "05/02", "m": "LUIS TAVEIRA", "l": 200.0, "k": 482807}, {"p": "NAW6C82", "d": "05/02", "m": "CARLOS ANTÔNIO", "l": 114.88, "k": 54786}, {"p": "QSQ3D59", "d": "05/02", "m": "MICHAEL", "l": 57.03, "k": 6189}, {"p": "BXZ3F52", "d": "06/02", "m": "FERNANDO", "l": 33.77, "k": 260310}, {"p": "CFD4B98", "d": "06/02", "m": "GLEIDON", "l": 160.0, "k": 618806}, {"p": "EFW6626", "d": "06/02", "m": "CARLOS ANTÔNIO", "l": 132.66, "k": 715767}, {"p": "ELY9J91", "d": "06/02", "m": "RAIMUNDO", "l": 29.83, "k": 200845}, {"p": "FZZ2B94", "d": "06/02", "m": "CARLOS ANTÔNIO", "l": 49.19, "k": 343}, {"p": "GDY0H87", "d": "06/02", "m": "LUIS TAVEIRA", "l": 200.0, "k": 483574}, {"p": "GGJ5E35", "d": "06/02", "m": "REGINALDO", "l": 32.98, "k": 209313}, {"p": "GGW9G47", "d": "06/02", "m": "TADEU", "l": 81.46, "k": 285074}, {"p": "QSQ3D59", "d": "06/02", "m": "MICHAEL", "l": 77.06, "k": 6588}, {"p": "UGQ5H10", "d": "06/02", "m": "ERISVALDO", "l": 145.14, "k": 3757}, {"p": "CFD4B98", "d": "07/02", "m": "TADEU", "l": 153.04, "k": 619766}, {"p": "ELY9J91", "d": "07/02", "m": "MICHAEL", "l": 49.84, "k": 207620}, {"p": "GFL3G04", "d": "07/02", "m": "JAILSON", "l": 187.0, "k": 844102}, {"p": "NAW6C82", "d": "07/02", "m": "CARLOS ANTÔNIO", "l": 125.14, "k": 55355}, {"p": "UGA2B60", "d": "07/02", "m": "ERISVALDO", "l": 355.02, "k": 20584}, {"p": "CFD4B98", "d": "07/02", "m": "TADEU", "l": 153.04, "k": 619766}, {"p": "ELY9J91", "d": "07/02", "m": "MICHAEL", "l": 49.84, "k": 207620}, {"p": "GFL3G04", "d": "07/02", "m": "JAILSON", "l": 187.0, "k": 844102}, {"p": "NAW6C82", "d": "07/02", "m": "CARLOS ANTÔNIO", "l": 125.14, "k": 55355}, {"p": "UGA2B60", "d": "07/02", "m": "ERISVALDO", "l": 355.02, "k": 20584}, {"p": "ELY9J91", "d": "08/02", "m": "MICHAEL", "l": 45.0, "k": 202252}, {"p": "FET3H45", "d": "08/02", "m": "JORGE", "l": 254.73, "k": 378917}, {"p": "ELY9J91", "d": "08/02", "m": "MICHAEL", "l": 45.0, "k": 202252}, {"p": "FET3H45", "d": "08/02", "m": "JORGE", "l": 254.73, "k": 378917}, {"p": "CFD4B98", "d": "09/02", "m": "ADRIANO", "l": 66.27, "k": 602299}, {"p": "EFW6601", "d": "09/02", "m": "ISAIAS", "l": 69.88, "k": 829}, {"p": "EHJ0E76", "d": "09/02", "m": "MAYCON", "l": 200.0, "k": 421975}, {"p": "FPG7G53", "d": "09/02", "m": "ERISVALDO", "l": 101.03, "k": 505898}, {"p": "FWK8A94", "d": "09/02", "m": "EDSON", "l": 97.15, "k": 201317}, {"p": "NAW6C82", "d": "09/02", "m": "ERISVALDO", "l": 117.83, "k": 55966}, {"p": "QSQ3D59", "d": "09/02", "m": "MICHAEL", "l": 76.68, "k": 7000}, {"p": "RZC2C27", "d": "09/02", "m": "JANDERLEI", "l": 102.49, "k": 141911}, {"p": "BXZ3F52", "d": "10/02", "m": "FERNANDO", "l": 67.03, "k": 361348}, {"p": "ELY9J91", "d": "10/02", "m": "RAIMUNDO", "l": 42.77, "k": 203021}, {"p": "FZZ2B94", "d": "10/02", "m": "CARLOS ANTÔNIO", "l": 46.25, "k": 286865}, {"p": "GDY0H87", "d": "10/02", "m": "LUIS TAVEIRA", "l": 361.01, "k": 483622}, {"p": "GFL3G04", "d": "10/02", "m": "JAILSON", "l": 596.4, "k": 845675}, {"p": "GGW9G47", "d": "10/02", "m": "TADEU", "l": 48.24, "k": 285}, {"p": "NAW6C82", "d": "10/02", "m": "ADRIANO", "l": 150.0, "k": 56154}, {"p": "QSQ3D59", "d": "10/02", "m": "MICHAEL", "l": 67.98, "k": 7373}, {"p": "UGQ5H10", "d": "10/02", "m": "GLEIDON", "l": 187.73, "k": 4773}, {"p": "UGQ5H10", "d": "10/02", "m": "GLEIDON", "l": 37.0, "k": 5007}, {"p": "EFW6601", "d": "11/02", "m": "ISAIAS", "l": 56.1, "k": 829566}, {"p": "EFW6626", "d": "11/02", "m": "DIOGO", "l": 78.24, "k": 716703}, {"p": "ELY9J91", "d": "11/02", "m": "RAIMUNDO", "l": 40.5, "k": 203576}, {"p": "FET3H45", "d": "11/02", "m": "ADRIANO", "l": 223.21, "k": 799708}, {"p": "FWK8A94", "d": "11/02", "m": "EDSON", "l": 105.47, "k": 204597}, {"p": "GGJ5E35", "d": "11/02", "m": "REGINALDO", "l": 45.85, "k": 210120}, {"p": "QSQ3D59", "d": "11/02", "m": "MICHAEL", "l": 64.78, "k": 7750}, {"p": "QSQ3D59", "d": "11/02", "m": "MICHAEL", "l": 67.31, "k": 8108}, {"p": "RZC2C37", "d": "11/02", "m": "CARLOS", "l": 181.59, "k": 111947}, {"p": "UGA2B60", "d": "11/02", "m": "CARLOS ANTÔNIO", "l": 328.01, "k": 22139}, {"p": "BXZ3F52", "d": "12/02", "m": "FERNANDO", "l": 50.68, "k": 262200}, {"p": "CFD4B98", "d": "12/02", "m": "WILLIAN", "l": 132.22, "k": 622137}, {"p": "FPG7G53", "d": "12/02", "m": "ALEXANDRE", "l": 120.32, "k": 506692}, {"p": "FZZ2B94", "d": "12/02", "m": "CARLOS ANTÔNIO", "l": 70.0, "k": 287392}, {"p": "NAW6C82", "d": "12/02", "m": "ERISVALDO", "l": 116.36, "k": 57257}, {"p": "NAW6C82", "d": "12/02", "m": "ERISVALDO", "l": 145.52, "k": 57731}, {"p": "NAW6I81", "d": "12/02", "m": "FABRICIO", "l": 183.08, "k": 67740}, {"p": "UGQ5H10", "d": "12/02", "m": "GLEIDON", "l": 129.61, "k": 5639}, {"p": "ELY9J91", "d": "13/02", "m": "RAIMUNDO", "l": 44.47, "k": 204463}, {"p": "FPG7G53", "d": "13/02", "m": "ALEXANDRE", "l": 88.81, "k": 507333}, {"p": "GDD3C49", "d": "13/02", "m": "JANDERLEI", "l": 205.26, "k": 529166}, {"p": "GGJ5E35", "d": "13/02", "m": "REGINALDO", "l": 43.84, "k": 210589}, {"p": "NAW6C82", "d": "13/02", "m": "ERISVALDO", "l": 134.47, "k": 58283}, {"p": "QSQ3D59", "d": "13/02", "m": "MICHAEL", "l": 89.62, "k": 8588}, {"p": "STD3J94", "d": "13/02", "m": "DIOGO", "l": 153.79, "k": 164733}, {"p": "UGA2B60", "d": "13/02", "m": "CARLOS ANTÔNIO", "l": 396.56, "k": 23899}, {"p": "ELY9J91", "d": "14/02", "m": "TADEU", "l": 53.92, "k": 205251}, {"p": "GFL3G04", "d": "14/02", "m": "JAILSON", "l": 405.0, "k": 846919}, {"p": "NAW6C82", "d": "14/02", "m": "ERISVALDO", "l": 68.22, "k": 58732}, {"p": "NAW6C82", "d": "14/02", "m": "ERISVALDO", "l": 161.0, "k": 59212}, {"p": "EHJ0E76", "d": "15/02", "m": "MAYCON", "l": 120.0, "k": 422075}, {"p": "GDY0H87", "d": "15/02", "m": "LUIS TAVEIRA", "l": 200.0, "k": 484605}, {"p": "GDY0H87", "d": "16/02", "m": "LUIS TAVEIRA", "l": 480.0, "k": 485109}, {"p": "GFL3G04", "d": "16/02", "m": "JAILSON", "l": 580.0, "k": 848316}, {"p": "EFW6626", "d": "17/02", "m": "CARLOS ANTÔNIO", "l": 176.07, "k": 717044}, {"p": "GDY0H87", "d": "17/02", "m": "LUIS TAVEIRA", "l": 138.01, "k": 485419}, {"p": "BXZ3F52", "d": "18/02", "m": "FERNANDO", "l": 49.54, "k": 262936}, {"p": "GDY0H87", "d": "18/02", "m": "LUIS TAVEIRA", "l": 300.01, "k": 486346}, {"p": "GGJ5E35", "d": "18/02", "m": "REGINALDO", "l": 40.32, "k": 210978}, {"p": "GGW9G47", "d": "18/02", "m": "TADEU", "l": 92.93, "k": 285944}, {"p": "QSQ3D59", "d": "18/02", "m": "MICHAEL", "l": 70.9, "k": 8949}, {"p": "STD3J94", "d": "18/02", "m": "JORGE", "l": 99.0, "k": 165142}, {"p": "BXZ3F52", "d": "19/02", "m": "FERNANDO", "l": 35.07, "k": 263391}, {"p": "CFD4B98", "d": "19/02", "m": "WILLIAN", "l": 177.51, "k": 622418}, {"p": "EFW6626", "d": "19/02", "m": "CARLOS ANTÔNIO", "l": 83.47, "k": 717756}, {"p": "FPG7G53", "d": "19/02", "m": "ALEXANDRE", "l": 97.19, "k": 508019}, {"p": "FWK8A94", "d": "19/02", "m": "EDSON", "l": 83.8, "k": 202361}, {"p": "FZZ2B94", "d": "19/02", "m": "ADRIANO BATISTA", "l": 39.9, "k": 287666}, {"p": "NAW6C82", "d": "19/02", "m": "CARLOS ANTÔNIO", "l": 133.19, "k": 59724}, {"p": "QSQ3D59", "d": "19/02", "m": "MICHAEL", "l": 61.97, "k": 9284}, {"p": "UGA2B60", "d": "19/02", "m": "ERISVALDO", "l": 313.34, "k": 25211}, {"p": "UGQ5H10", "d": "19/02", "m": "ISAIAS", "l": 121.54, "k": 6186}, {"p": "BXZ3F52", "d": "20/02", "m": "FERNANDO", "l": 37.73, "k": 264012}, {"p": "ELY9J91", "d": "20/02", "m": "RAIMUNDO", "l": 56.2, "k": 206185}, {"p": "GFL3G04", "d": "20/02", "m": "JAILSON", "l": 160.0, "k": 849717}, {"p": "GFL3G04", "d": "20/02", "m": "JAILSON", "l": 100.0, "k": 850360}, {"p": "GGJ5E35", "d": "20/02", "m": "REGINALDO", "l": 8.36, "k": 211072}, {"p": "NAW6C82", "d": "20/02", "m": "CARLOS ANTÔNIO", "l": 185.08, "k": 60432}, {"p": "STD3J94", "d": "20/02", "m": "CARLOS ANTÔNIO", "l": 169.97, "k": 165946}, {"p": "UGA2B60", "d": "21/02", "m": "ERISVALDO", "l": 314.45, "k": 26471}, {"p": "FET3H45", "d": "22/02", "m": "JORGE", "l": 172.0, "k": 382738}, {"p": "BXZ3F52", "d": "23/02", "m": "FERNANDO", "l": 47.01, "k": 264662}, {"p": "EFW6626", "d": "23/02", "m": "CARLOS ANTÔNIO", "l": 118.71, "k": 718153}, {"p": "ELY9J91", "d": "23/02", "m": "RAIMUNDO", "l": 42.8, "k": 206957}, {"p": "EXV3F24", "d": "23/02", "m": "CARLOS ANTÔNIO", "l": 134.48, "k": 362082}, {"p": "FPG7G53", "d": "23/02", "m": "ALEXANDRE", "l": 76.75, "k": 508589}, {"p": "FWK8A94", "d": "23/02", "m": "EDSON", "l": 70.45, "k": 202759}, {"p": "GGW9G47", "d": "23/02", "m": "TADEU", "l": 89.04, "k": 286526}, {"p": "NAW6C82", "d": "23/02", "m": "ADRIANO BATISTA", "l": 125.83, "k": 60919}, {"p": "QSQ3D59", "d": "23/02", "m": "MICHAEL", "l": 74.45, "k": 9611}, {"p": "STD3J94", "d": "23/02", "m": "ISAIAS", "l": 117.2, "k": 66605}, {"p": "UGQ5H10", "d": "23/02", "m": "WILLIAN", "l": 176.76, "k": 71162}, {"p": "CFD4B98", "d": "24/02", "m": "GLEIDON", "l": 116.16, "k": 623149}, {"p": "ELY9J91", "d": "24/02", "m": "RAIMUNDO", "l": 31.83, "k": 207528}, {"p": "EXV3F24", "d": "24/02", "m": "CARLOS ANTÔNIO", "l": 137.5, "k": 362629}, {"p": "FET3H45", "d": "24/02", "m": "JORGE", "l": 187.02, "k": 383612}, {"p": "FZZ2B94", "d": "24/02", "m": "CARLOS ANTÔNIO", "l": 40.89, "k": 287921}, {"p": "GGJ5E35", "d": "24/02", "m": "REGINALDO", "l": 39.33, "k": 211514}, {"p": "NAW6C82", "d": "24/02", "m": "ADRIANO BATISTA", "l": 90.72, "k": 61817}, {"p": "NAW6I81", "d": "24/02", "m": "FABRICIO", "l": 178.21, "k": 68535}, {"p": "QSQ3D59", "d": "24/02", "m": "MICHAEL", "l": 68.32, "k": 9971}, {"p": "RZC2C27", "d": "24/02", "m": "JANDERLEI", "l": 162.78, "k": 142491}, {"p": "UGQ5H10", "d": "24/02", "m": "CARLOS ANTÔNIO", "l": 94.08, "k": 71553}, {"p": "BXZ3F52", "d": "25/02", "m": "FERNANDO", "l": 27.16, "k": 265143}, {"p": "EFW6626", "d": "25/02", "m": "CARLOS ANTÔNIO", "l": 132.78, "k": 719781}, {"p": "FWK8A94", "d": "25/02", "m": "EDSON", "l": 110.23, "k": 203428}, {"p": "FZZ2B94", "d": "25/02", "m": "CARLOS ANTÔNIO", "l": 63.94, "k": 288381}, {"p": "GDY0H87", "d": "25/02", "m": "LUIS TAVEIRA", "l": 504.19, "k": 487575}, {"p": "GGW9G47", "d": "25/02", "m": "TADEU", "l": 117.88, "k": 287239}, {"p": "NAW6C82", "d": "25/02", "m": "ADRIANO BATISTA", "l": 26.03, "k": 613706}, {"p": "NAW6C82", "d": "25/02", "m": "ADRIANO BATISTA", "l": 86.79, "k": 616280}, {"p": "RZC2C37", "d": "25/02", "m": "CARLOS", "l": 190.79, "k": 112703}, {"p": "UGA2B60", "d": "25/02", "m": "MICHAEL", "l": 210.5, "k": 27238}, {"p": "UGQ5H10", "d": "25/02", "m": "CARLOS ANTÔNIO", "l": 103.09, "k": 8134}, {"p": "CFD4B98", "d": "26/02", "m": "GLEIDON", "l": 172.71, "k": 624171}, {"p": "EFW6601", "d": "26/02", "m": "ISAIAS", "l": 79.22, "k": 830492}, {"p": "ELY9J91", "d": "26/02", "m": "RAIMUNDO", "l": 55.36, "k": 208435}, {"p": "EXV3F24", "d": "26/02", "m": "CARLOS ANTÔNIO", "l": 105.02, "k": 363147}, {"p": "FWK8A94", "d": "26/02", "m": "EDSON", "l": 46.76, "k": 203697}, {"p": "GFL3G04", "d": "26/02", "m": "JAILSON", "l": 622.31, "k": 850855}, {"p": "QSQ3D59", "d": "26/02", "m": "MICHAEL", "l": 50.95, "k": 10238}, {"p": "UGQ5H10", "d": "26/02", "m": "CARLOS ANTÔNIO", "l": 119.25, "k": 8679}, {"p": "BXZ3F52", "d": "27/02", "m": "FERNANDO", "l": 40.87, "k": 265725}, {"p": "EFV6387", "d": "27/02", "m": "ISAIAS", "l": 115.87, "k": 830224}, {"p": "EHJ0E76", "d": "27/02", "m": "MAYCON", "l": 233.0, "k": 422298}, {"p": "ELY9J91", "d": "27/02", "m": "CARLOS ANTÔNIO", "l": 49.49, "k": 209159}, {"p": "EXV3F24", "d": "27/02", "m": "CARLOS ANTÔNIO", "l": 123.97, "k": 363641}, {"p": "FZZ2B94", "d": "27/02", "m": "ELTON", "l": 45.59, "k": 288720}, {"p": "GDY0H87", "d": "27/02", "m": "LUIS TAVEIRA", "l": 250.0, "k": 488878}, {"p": "QSQ3D59", "d": "27/02", "m": "MICHAEL", "l": 45.61, "k": 10487}, {"p": "FZZ2B94", "d": "28/02", "m": "ELTON", "l": 54.48, "k": 289069}, {"p": "GDY0H87", "d": "28/02", "m": "LUIS TAVEIRA", "l": 100.0, "k": 489194}, {"p": "STD3J94", "d": "28/02", "m": "CARLOS ANTÔNIO", "l": 88.37, "k": 167240}, {"p": "UGQ5H10", "d": "28/02", "m": "CARLOS ANTÔNIO", "l": 112.02, "k": 9257}, {"p": "ELY9J91", "d": "22/01", "m": "RAIMUNDO", "l": 47.7, "k": 195600}, {"p": "GFL3G04", "d": "01/01", "m": "JAILSON", "l": 140.0, "k": 833585}, {"p": "CFD4B98", "d": "02/01", "m": "CARLOS ANTÔNIO", "l": 87.7, "k": 609475}, {"p": "GFL3G04", "d": "02/01", "m": "JAILSON", "l": 423.16, "k": 834020}, {"p": "GGW9G47", "d": "04/01", "m": "JORGE", "l": 140.0, "k": 277015}, {"p": "EFW6601", "d": "05/01", "m": "ALEXANDRE", "l": 96.97, "k": 827467}, {"p": "EXV3F24", "d": "05/01", "m": "CARLOS ANTÔNIO", "l": 101.71, "k": 352482}, {"p": "FPG7G53", "d": "05/01", "m": "ADRIANO", "l": 85.18, "k": 498709}, {"p": "GDY0H87", "d": "05/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 471425}, {"p": "GGJ5E35", "d": "05/01", "m": "RAIMUNDO VALENTIM", "l": 36.28, "k": 203035}, {"p": "GGW9G47", "d": "05/01", "m": "TADEU", "l": 87.38, "k": 277372}, {"p": "NAW6I81", "d": "05/01", "m": "MICHAEL", "l": 162.72, "k": 56498}, {"p": "BXZ3F52", "d": "06/01", "m": "SILVIO", "l": 43.43, "k": 252720}, {"p": "ELY9J91", "d": "06/01", "m": "RAIMUNDO VALENTIM", "l": 21.61, "k": 190350}, {"p": "EXV3F24", "d": "06/01", "m": "ADRIANO BATISTA", "l": 195.58, "k": 531040}, {"p": "FET3H45", "d": "06/01", "m": "GLEIDON", "l": 102.02, "k": 366980}, {"p": "FWK8A94", "d": "06/01", "m": "EDSON", "l": 69.28, "k": 195351}, {"p": "GDD3C49", "d": "06/01", "m": "SEBASTIÃO", "l": 206.85, "k": 526790}, {"p": "GDY0H87", "d": "06/01", "m": "LUIS TAVEIRA", "l": 196.13, "k": 471516}, {"p": "GGW9G47", "d": "06/01", "m": "TADEU", "l": 65.71, "k": 277804}, {"p": "NAW6C82", "d": "06/01", "m": "CARLOS ANTÔNIO", "l": 90.65, "k": 48494}, {"p": "NAW6I81", "d": "06/01", "m": "JORGE", "l": 127.56, "k": 57028}, {"p": "NAW6I81", "d": "06/01", "m": "JORGE", "l": 240.0, "k": 57028}, {"p": "CFD4B98", "d": "07/01", "m": "CARLOS ANTÔNIO", "l": 90.31, "k": 610009}, {"p": "ELY9J91", "d": "07/01", "m": "RAIMUNDO VALENTIM", "l": 24.69, "k": 190809}, {"p": "EXV3F24", "d": "07/01", "m": "CARLOS ANTÔNIO", "l": 102.0, "k": 353478}, {"p": "FET3H45", "d": "07/01", "m": "GLEIDON", "l": 179.11, "k": 367927}, {"p": "FPG7G53", "d": "07/01", "m": "ADRIANO", "l": 96.13, "k": 499422}, {"p": "FWK8A94", "d": "07/01", "m": "EDSON", "l": 62.54, "k": 195743}, {"p": "GGJ5E35", "d": "07/01", "m": "REGINALDO", "l": 33.15, "k": 203832}, {"p": "GGW9G47", "d": "07/01", "m": "TADEU", "l": 49.05, "k": 278114}, {"p": "NAW6I81", "d": "07/01", "m": "JORGE", "l": 80.0, "k": 57834}, {"p": "QSQ3D59", "d": "07/01", "m": "MICHAEL", "l": 115.39, "k": 181}, {"p": "RZC2C37", "d": "07/01", "m": "CARLOS", "l": 139.33, "k": 108859}, {"p": "UGA2B60", "d": "07/01", "m": "ERISVALDO", "l": 372.33, "k": 6640}, {"p": "ELY9J91", "d": "08/01", "m": "RAIMUNDO VALENTIM", "l": 31.39, "k": 191238}, {"p": "EXV3F24", "d": "08/01", "m": "CARLOS", "l": 213.26, "k": 354087}, {"p": "FZZ2B94", "d": "08/01", "m": "JAILSON", "l": 61.49, "k": 283297}, {"p": "GGJ5E35", "d": "08/01", "m": "REGINALDO", "l": 42.86, "k": 204188}, {"p": "NAW6C82", "d": "08/01", "m": "CARLOS ANTÔNIO", "l": 101.33, "k": 48982}, {"p": "NAW6C82", "d": "08/01", "m": "ADRIANO BATISTA", "l": 41.73, "k": 491397}, {"p": "NAW6I81", "d": "08/01", "m": "JORGE", "l": 103.0, "k": 58190}, {"p": "RZC2C27", "d": "08/01", "m": "JANDERLEI", "l": 146.06, "k": 137488}, {"p": "RZC2C27", "d": "08/01", "m": "JANDERLEI", "l": 10.0, "k": 137488}, {"p": "EFW6626", "d": "09/01", "m": "CARLOS", "l": 119.41, "k": 712336}, {"p": "ELY9J91", "d": "09/01", "m": "RAIMUNDO VALENTIM", "l": 27.97, "k": 191686}, {"p": "EXV3F24", "d": "09/01", "m": "CARLOS ANTÔNIO", "l": 150.04, "k": 354689}, {"p": "FET3H45", "d": "09/01", "m": "ADRIANO", "l": 138.89, "k": 368726}, {"p": "FPG7G53", "d": "09/01", "m": "MAYCON", "l": 65.9, "k": 499887}, {"p": "FWK8A94", "d": "09/01", "m": "JONATHAN", "l": 79.96, "k": 196257}, {"p": "GDY0H87", "d": "09/01", "m": "LUIS TAVEIRA", "l": 466.0, "k": 472927}, {"p": "GGW9G47", "d": "09/01", "m": "GLEIDON", "l": 32.04, "k": 788558}, {"p": "NAW6I81", "d": "09/01", "m": "CARLOS ANTÔNIO", "l": 73.65, "k": 58492}, {"p": "QSQ3D59", "d": "09/01", "m": "MICHAEL", "l": 73.86, "k": 573}, {"p": "UGA2B60", "d": "09/01", "m": "ERISVALDO", "l": 355.34, "k": 8210}, {"p": "EXV3F24", "d": "10/01", "m": "CARLOS ANTÔNIO", "l": 172.0, "k": 355469}, {"p": "EHJ0E76", "d": "11/01", "m": "MAYCON", "l": 580.01, "k": 411966}, {"p": "GDY0H87", "d": "11/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 474165}, {"p": "BXZ3F52", "d": "12/01", "m": "SILVIO", "l": 44.96, "k": 256417}, {"p": "CFD4B98", "d": "12/01", "m": "ISAIAS", "l": 110.6, "k": 610624}, {"p": "EFW6601", "d": "12/01", "m": "JONATHAN", "l": 59.78, "k": 927896}, {"p": "ELY9J91", "d": "12/01", "m": "RAIMUNDO VALENTIM", "l": 32.75, "k": 192190}, {"p": "FPG7G53", "d": "12/01", "m": "ADRIANO", "l": 94.63, "k": 500587}, {"p": "FWK8A94", "d": "12/01", "m": "EDSON", "l": 87.6, "k": 196801}, {"p": "GDY0H87", "d": "12/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 474843}, {"p": "GFL3G04", "d": "12/01", "m": "JAILSON", "l": 596.65, "k": 835922}, {"p": "GGW9G47", "d": "12/01", "m": "GLEIDON", "l": 108.61, "k": 278926}, {"p": "GGW9G47", "d": "12/01", "m": "TADEU", "l": 70.44, "k": 279427}, {"p": "NAW6C82", "d": "12/01", "m": "CARLOS ANTÔNIO", "l": 95.82, "k": 49605}, {"p": "RZC2C37", "d": "12/01", "m": "CARLOS", "l": 182.55, "k": 109628}, {"p": "CFD4B98", "d": "13/01", "m": "GLEIDON", "l": 164.85, "k": 611580}, {"p": "EFW6626", "d": "13/01", "m": "CARLOS ANTÔNIO", "l": 144.91, "k": 713185}, {"p": "EXV3F24", "d": "13/01", "m": "ISAIAS", "l": 151.61, "k": 365198}, {"p": "FET3H45", "d": "13/01", "m": "JONATHAN", "l": 157.01, "k": 369515}, {"p": "GGJ5E35", "d": "13/01", "m": "REGINALDO", "l": 61.13, "k": 205103}, {"p": "NAW6I81", "d": "13/01", "m": "CARLOS ANTÔNIO", "l": 110.91, "k": 59009}, {"p": "QSQ3D59", "d": "13/01", "m": "MICHAEL", "l": 47.96, "k": 801}, {"p": "UGA2B60", "d": "13/01", "m": "ERISVALDO", "l": 368.68, "k": 9893}, {"p": "EHJ0E76", "d": "14/01", "m": "MAYCON", "l": 280.0, "k": 413086}, {"p": "EHJ0E76", "d": "14/01", "m": "MAYCON", "l": 400.0, "k": 413582}, {"p": "ELY9J91", "d": "14/01", "m": "RAIMUNDO VALENTIM", "l": 47.38, "k": 193096}, {"p": "EXV3F24", "d": "14/01", "m": "CARLOS ANTÔNIO", "l": 208.0, "k": 357040}, {"p": "FPG7G53", "d": "14/01", "m": "JORGE", "l": 83.65, "k": 501060}, {"p": "FWK8A94", "d": "14/01", "m": "EDSON", "l": 106.6, "k": 197448}, {"p": "GFL3G04", "d": "14/01", "m": "JAILSON", "l": 464.79, "k": 837244}, {"p": "GGW9G47", "d": "14/01", "m": "TADEU", "l": 86.9, "k": 280020}, {"p": "NAW6C82", "d": "14/01", "m": "CARLOS ANTÔNIO", "l": 108.1, "k": 50082}, {"p": "QSQ3D59", "d": "14/01", "m": "MICHAEL", "l": 56.32, "k": 1095}, {"p": "CFD4B98", "d": "15/01", "m": "DIOGO", "l": 181.83, "k": 612533}, {"p": "ELY9J91", "d": "15/01", "m": "RAIMUNDO VALENTIM", "l": 41.24, "k": 193811}, {"p": "EXV3F24", "d": "15/01", "m": "CARLOS ANTÔNIO", "l": 110.0, "k": 357512}, {"p": "GGJ5E35", "d": "15/01", "m": "REGINALDO", "l": 57.09, "k": 205945}, {"p": "QSQ3D59", "d": "15/01", "m": "MICHAEL", "l": 39.54, "k": 1295}, {"p": "BXZ3F52", "d": "16/01", "m": "SILVIO", "l": 50.21, "k": 557150}, {"p": "FET3H45", "d": "16/01", "m": "WILLIAN", "l": 215.0, "k": 370641}, {"p": "FPG7G53", "d": "16/01", "m": "ADRIANO", "l": 144.28, "k": 502030}, {"p": "GFL3G04", "d": "16/01", "m": "JAILSON", "l": 380.03, "k": 838480}, {"p": "NAW6C82", "d": "16/01", "m": "CARLOS ANTÔNIO", "l": 138.0, "k": 50720}, {"p": "QSQ3D59", "d": "16/01", "m": "MICHAEL", "l": 22.96, "k": 1390}, {"p": "RZC2C27", "d": "16/01", "m": "SEBASTIÃO", "l": 121.93, "k": 137935}, {"p": "STD3J94", "d": "16/01", "m": "TADEU", "l": 99.68, "k": 162570}, {"p": "NAW6I81", "d": "17/01", "m": "CARLOS ANTÔNIO", "l": 147.01, "k": 59718}, {"p": "RZC2C27", "d": "18/01", "m": "SEBASTIÃO", "l": 124.28, "k": 138476}, {"p": "EFW6601", "d": "19/01", "m": "ISAIAS", "l": 59.18, "k": 828397}, {"p": "EHJ0E76", "d": "19/01", "m": "MAYCON", "l": 200.0, "k": 415163}, {"p": "FET3H45", "d": "19/01", "m": "JORGE", "l": 119.0, "k": 371163}, {"p": "FZZ2B94", "d": "19/01", "m": "ADRIANO", "l": 60.2, "k": 283718}, {"p": "GDY0H87", "d": "19/01", "m": "LUIS", "l": 450.0, "k": 475550}, {"p": "GGJ5E35", "d": "19/01", "m": "REGINALDO", "l": 36.43, "k": 206427}, {"p": "GGW9G47", "d": "19/01", "m": "ALEXANDRE", "l": 118.63, "k": 280828}, {"p": "NAW6I81", "d": "19/01", "m": "JONATHAN", "l": 175.99, "k": 60454}, {"p": "NAW6I81", "d": "19/01", "m": "CARLOS ANTÔNIO", "l": 87.43, "k": 60818}, {"p": "QSQ3D59", "d": "19/01", "m": "MICHAEL", "l": 36.08, "k": 1583}, {"p": "UGA2B60", "d": "19/01", "m": "ERISVALDO", "l": 395.68, "k": 13107}, {"p": "CFD4B98", "d": "20/01", "m": "CARLOS", "l": 182.49, "k": 613456}, {"p": "EHJ0E76", "d": "20/01", "m": "MAYCON", "l": 200.0, "k": 415920}, {"p": "ELY9J91", "d": "20/01", "m": "RAIMUNDO", "l": 56.2, "k": 194718}, {"p": "FWK8A94", "d": "20/01", "m": "EDSON", "l": 102.32, "k": 198044}, {"p": "GDD3C49", "d": "20/01", "m": "JANDERLEI", "l": 229.09, "k": 527604}, {"p": "NAW6C82", "d": "20/01", "m": "GLEIDON", "l": 147.18, "k": 51299}, {"p": "RZC2C27", "d": "20/01", "m": "SEBASTIÃO", "l": 132.0, "k": 139099}, {"p": "RZC2C37", "d": "20/01", "m": "CARLOS", "l": 139.18, "k": 110143}, {"p": "UGQ5H10", "d": "20/01", "m": "MICHAEL", "l": 91.62, "k": 628}, {"p": "BXZ3F52", "d": "21/01", "m": "INGRID", "l": 36.51, "k": 257678}, {"p": "EXV3F24", "d": "21/01", "m": "ADRIANO", "l": 221.58, "k": 585312}, {"p": "FPG7G53", "d": "21/01", "m": "JONATHAN", "l": 91.46, "k": 502374}, {"p": "FZZ2B94", "d": "21/01", "m": "CARLOS ANTÔNIO", "l": 55.37, "k": 284248}, {"p": "GFL3G04", "d": "21/01", "m": "JAILSON", "l": 539.98, "k": 810112}, {"p": "GGJ5E35", "d": "21/01", "m": "REGINALDO", "l": 29.8, "k": 206800}, {"p": "GGW9G47", "d": "21/01", "m": "TADEU", "l": 106.27, "k": 281493}, {"p": "NAW6I81", "d": "21/01", "m": "CARLOS ANTÔNIO", "l": 153.17, "k": 62369}, {"p": "QSQ3D59", "d": "21/01", "m": "MICHAEL", "l": 72.22, "k": 1964}, {"p": "UGA2B60", "d": "21/01", "m": "ADRIANO BATISTA", "l": 253.89, "k": 14222}, {"p": "UGQ5H10", "d": "21/01", "m": "ISAIAS", "l": 126.32, "k": 1358}, {"p": "FET3H45", "d": "22/01", "m": "JONATHAN", "l": 173.89, "k": 372042}, {"p": "FPG7G53", "d": "22/01", "m": "ISAIAS", "l": 50.23, "k": 503069}, {"p": "FWK8A94", "d": "22/01", "m": "EDSON", "l": 99.04, "k": 198656}, {"p": "GDY0H87", "d": "22/01", "m": "LUIS", "l": 200.0, "k": 476501}, {"p": "NAW6C82", "d": "22/01", "m": "CARLOS ANTÔNIO", "l": 96.52, "k": 51773}, {"p": "NAW6I81", "d": "22/01", "m": "CARLOS ANTÔNIO", "l": 136.49, "k": 62585}, {"p": "RZC2C37", "d": "22/01", "m": "CARLOS", "l": 152.25, "k": 110816}, {"p": "STD3J94", "d": "22/01", "m": "TADEU", "l": 159.81, "k": 163406}, {"p": "CFD4B98", "d": "23/01", "m": "GLEIDON", "l": 153.06, "k": 614368}, {"p": "ELY9J91", "d": "23/01", "m": "RAIMUNDO", "l": 35.22, "k": 196084}, {"p": "GDY0H87", "d": "23/01", "m": "LUIS", "l": 380.0, "k": 477093}, {"p": "QSQ3D59", "d": "23/01", "m": "MICHAEL", "l": 68.01, "k": 2292}, {"p": "EHJ0E76", "d": "23/01", "m": "MAYCON", "l": 454.01, "k": 416010}, {"p": "FZZ2B94", "d": "23/01", "m": "ERISVALDO", "l": 64.24, "k": 284854}, {"p": "GGJ5E35", "d": "23/01", "m": "REGINALDO", "l": 38.29, "k": 207349}, {"p": "CFD4B98", "d": "24/01", "m": "CARLOS ANTÔNIO", "l": 133.04, "k": 615115}, {"p": "ELY9J91", "d": "24/01", "m": "MICHAEL", "l": 23.49, "k": 196455}, {"p": "NAW6C82", "d": "24/01", "m": "ERISVALDO", "l": 139.57, "k": 52372}, {"p": "UGA2B60", "d": "24/01", "m": "CARLOS ANTÔNIO", "l": 143.06, "k": 15816}, {"p": "EXV3F24", "d": "25/01", "m": "ERISVALDO", "l": 152.84, "k": 359199}, {"p": "FET3H45", "d": "25/01", "m": "JORGE", "l": 127.18, "k": 37291}, {"p": "RZC2C27", "d": "25/01", "m": "JANDERLEI", "l": 208.18, "k": 140169}, {"p": "EHJ0E76", "d": "26/01", "m": "MAYCON", "l": 200.0, "k": 417717}, {"p": "EHJ0E76", "d": "26/01", "m": "MAYCON", "l": 435.0, "k": 418032}, {"p": "EXV3F24", "d": "26/01", "m": "MICHAEL", "l": 111.56, "k": 359679}, {"p": "FET3H45", "d": "26/01", "m": "ALEXANDRE", "l": 209.24, "k": 37695}, {"p": "FWK8A94", "d": "26/01", "m": "EDSON", "l": 108.26, "k": 199379}, {"p": "GDY0H87", "d": "26/01", "m": "LUIS TAVEIRA", "l": 415.0, "k": 478106}, {"p": "GGW9G47", "d": "26/01", "m": "TADEU", "l": 97.48, "k": 282136}, {"p": "NAW6I81", "d": "26/01", "m": "ERISVALDO", "l": 160.98, "k": 63260}, {"p": "UGQ5H10", "d": "26/01", "m": "ISAIAS", "l": 92.38, "k": 1742}, {"p": "CFD4B98", "d": "27/01", "m": "GLEIDON", "l": 122.32, "k": 615759}, {"p": "ELY9J91", "d": "27/01", "m": "RAIMUNDO", "l": 40.05, "k": 197163}, {"p": "FWK8A94", "d": "27/01", "m": "EDSON", "l": 47.06, "k": 199636}, {"p": "FZZ2B94", "d": "27/01", "m": "ADRIANO BATISTA", "l": 49.97, "k": 285315}, {"p": "GGJ5E35", "d": "27/01", "m": "REGINALDO", "l": 35.21, "k": 207873}, {"p": "GGW9G47", "d": "27/01", "m": "TADEU", "l": 74.2, "k": 282622}, {"p": "NAW6I81", "d": "27/01", "m": "ERISVALDO", "l": 112.06, "k": 63737}, {"p": "STD3J94", "d": "27/01", "m": "ALEXANDRE", "l": 154.47, "k": 164220}, {"p": "UGA2B60", "d": "27/01", "m": "ERISVALDO", "l": 332.0, "k": 16322}, {"p": "BXZ3F52", "d": "28/01", "m": "INGRID", "l": 57.51, "k": 25828}, {"p": "EXV3F24", "d": "28/01", "m": "CARLOS ANTÔNIO", "l": 177.87, "k": 360543}, {"p": "FET3H45", "d": "28/01", "m": "ALEXANDRE", "l": 215.82, "k": 374726}, {"p": "FZZ2B94", "d": "28/01", "m": "ADRIANO BATISTA", "l": 43.61, "k": 385634}, {"p": "GDY0H87", "d": "28/01", "m": "LUIS TAVEIRA", "l": 200.0, "k": 479525}, {"p": "GFL3G04", "d": "28/01", "m": "JAILSON", "l": 287.51, "k": 841107}, {"p": "GGJ5E35", "d": "28/01", "m": "REGINALDO", "l": 17.36, "k": 208050}, {"p": "NAW6C82", "d": "28/01", "m": "CARLOS ANTÔNIO", "l": 137.01, "k": 53015}, {"p": "NAW6I81", "d": "28/01", "m": "CARLOS ANTÔNIO", "l": 105.0, "k": 64231}, {"p": "QSQ3D59", "d": "28/01", "m": "MICHAEL", "l": 119.12, "k": 2941}, {"p": "RZC2C27", "d": "28/01", "m": "JANDERLEI", "l": 136.53, "k": 140796}, {"p": "EFW6626", "d": "29/01", "m": "WILLIAN", "l": 163.38, "k": 714036}, {"p": "ELY9J91", "d": "29/01", "m": "RAIMUNDO", "l": 54.01, "k": 198033}, {"p": "FPG7G53", "d": "29/01", "m": "JONATHAN", "l": 101.2, "k": 503724}, {"p": "FWK8A94", "d": "29/01", "m": "EDSON", "l": 100.0, "k": 200185}, {"p": "GGJ5E35", "d": "29/01", "m": "REGINALDO", "l": 50.67, "k": 28687}, {"p": "GGW9G47", "d": "29/01", "m": "GLEIDON", "l": 115.54, "k": 583353}, {"p": "GGW9G47", "d": "29/01", "m": "TADEU", "l": 68.77, "k": 283987}, {"p": "UGQ5H10", "d": "29/01", "m": "ISAIAS", "l": 64.06, "k": 20001}, {"p": "CFD4B98", "d": "30/01", "m": "GLEIDON", "l": 138.4, "k": 616466}, {"p": "EFW6601", "d": "30/01", "m": "ISAIAS", "l": 97.4, "k": 829078}, {"p": "EHJ0E76", "d": "30/01", "m": "MAYCON", "l": 538.04, "k": 419496}, {"p": "EXV3F24", "d": "30/01", "m": "ERISVALDO", "l": 188.06, "k": 361458}, {"p": "NAW6I81", "d": "30/01", "m": "ERISVALDO", "l": 141.26, "k": 64927}, {"p": "QSQ3D59", "d": "30/01", "m": "MICHAEL", "l": 100.56, "k": 3575}, {"p": "UGA2B60", "d": "30/01", "m": "CARLOS ANTÔNIO", "l": 339.2, "k": 17749}, {"p": "UGQ5H10", "d": "30/01", "m": "CARLOS ANTÔNIO", "l": 137.89, "k": 2759}, {"p": "UGQ5H10", "d": "30/01", "m": "ADRIANO BATISTA", "l": 90.51, "k": 32034}, {"p": "GDY0H87", "d": "31/01", "m": "LUIS TAVEIRA", "l": 395.0, "k": 479635}, {"p": "GFL3G04", "d": "31/01", "m": "JAILSON", "l": 625.0, "k": 842236}, {"p": "GGW9G47", "d": "31/01", "m": "TADEU", "l": 25.33, "k": 283980}, {"p": "NAW6C82", "d": "31/01", "m": "CARLOS ANTÔNIO", "l": 167.74, "k": 53726}, {"p": "NAW6I81", "d": "31/01", "m": "ERISVALDO", "l": 107.84, "k": 65406}, {"p": "QSQ3D59", "d": "31/01", "m": "TADEU", "l": 97.36, "k": 4139}, {"p": "QSQ3D59", "d": "31/01", "m": "TADEU", "l": 73.07, "k": 4139}, {"p": "CFD4B98", "d": "01/03", "m": "GLEIDON", "l": 153.63, "k": 625026}, {"p": "GDY0H87", "d": "01/03", "m": "LUIS TAVEIRA", "l": 550.02, "k": 489959}, {"p": "GFL3G04", "d": "01/03", "m": "JAILSON", "l": 370.0, "k": 851958}, {"p": "EFW6626", "d": "02/03", "m": "CARLOS ANTÔNIO", "l": 88.01, "k": 719299}, {"p": "GGJ5E35", "d": "02/03", "m": "ISAIAS", "l": 390.98, "k": 211936}, {"p": "GGJ5E35", "d": "02/03", "m": "INGRID", "l": 57.85, "k": 212150}, {"p": "QSQ3D59", "d": "02/03", "m": "MICHAEL", "l": 34.96, "k": 10643}, {"p": "RZC2C27", "d": "02/03", "m": "JANDERLEI", "l": 112.12, "k": 142879}, {"p": "UGQ5H10", "d": "02/03", "m": "CARLOS ANTÔNIO", "l": 91.09, "k": 9679}, {"p": "BXZ3F52", "d": "03/03", "m": "FERNANDO", "l": 54.78, "k": 266565}, {"p": "CFD4B98", "d": "03/03", "m": "GLEIDON", "l": 152.25, "k": 625862}, {"p": "ELY9J91", "d": "03/03", "m": "RAIMUNDO", "l": 24.4, "k": 209802}, {"p": "FPG7G53", "d": "03/03", "m": "ALEXANDRE", "l": 125.89, "k": 509418}, {"p": "GDD3C49", "d": "03/03", "m": "SEBASTIÃO", "l": 210.27, "k": 529904}, {"p": "GDY0H87", "d": "03/03", "m": "LUIS TAVEIRA", "l": 150.0, "k": 409851}, {"p": "GGW9G47", "d": "03/03", "m": "TADEU", "l": 100.77, "k": 287879}, {"p": "NAW6C82", "d": "03/03", "m": "JORGE", "l": 123.0, "k": 62112}, {"p": "NAW1I81", "d": "03/03", "m": "FABRICIO", "l": 86.51, "k": 69046}, {"p": "QSQ3D59", "d": "03/03", "m": "MICHAEL", "l": 37.6, "k": 10804}, {"p": "STD3J94", "d": "03/03", "m": "CARLOS ANTÔNIO", "l": 149.44, "k": 167755}, {"p": "UGA2B60", "d": "03/03", "m": "CARLOS ANTÔNIO", "l": 262.79, "k": 29846}, {"p": "ELY9J91", "d": "04/03", "m": "RAIMUNDO", "l": 29.91, "k": 210276}, {"p": "EXV3F24", "d": "04/03", "m": "CARLOS ANTÔNIO", "l": 254.0, "k": 364719}, {"p": "NAW6C82", "d": "04/03", "m": "DIOGO", "l": 174.15, "k": 62885}, {"p": "NAW1I81", "d": "04/03", "m": "FABRICIO", "l": 139.39, "k": 69586}, {"p": "QSQ3D59", "d": "04/03", "m": "MICHAEL", "l": 36.88, "k": 10994}, {"p": "UGQ5H10", "d": "04/03", "m": "JAIR", "l": 108.17, "k": 10224}, {"p": "EFV6387", "d": "05/03", "m": "ISAIAS", "l": 102.99, "k": 830633}, {"p": "EHJ0E76", "d": "05/03", "m": "MAYCON", "l": 493.77, "k": 423688}, {"p": "ELY9J91", "d": "05/03", "m": "RAIMUNDO", "l": 28.47, "k": 210707}, {"p": "EXV3F24", "d": "05/03", "m": "DOUGLAS", "l": 140.0, "k": 365218}, {"p": "FWK8A94", "d": "05/03", "m": "EDSON", "l": 73.62, "k": 204121}, {"p": "GFL3G04", "d": "05/03", "m": "JAILSON", "l": 253.0, "k": 852950}, {"p": "NAW6C82", "d": "05/03", "m": "JORGE", "l": 115.01, "k": 63372}, {"p": "QSQ3D59", "d": "05/03", "m": "MICHAEL", "l": 40.25, "k": 11208}, {"p": "RZC2C37", "d": "05/03", "m": "CARLOS", "l": 114.0, "k": 113107}, {"p": "STD3J94", "d": "05/03", "m": "JAIR", "l": 111.84, "k": 188282}, {"p": "STD3J94", "d": "05/03", "m": "JAIR", "l": 100.5, "k": 188282}, {"p": "BXZ3F52", "d": "06/03", "m": "FERNANDO", "l": 70.0, "k": 267631}, {"p": "EFW6601", "d": "06/03", "m": "ISAIAS", "l": 75.5, "k": 831089}, {"p": "EXV3F24", "d": "06/03", "m": "DOUGLAS", "l": 198.86, "k": 366054}, {"p": "GDY0H87", "d": "06/03", "m": "LUIS TAVEIRA", "l": 405.02, "k": 491636}, {"p": "NAW6C82", "d": "06/03", "m": "JORGE", "l": 104.91, "k": 69335}, {"p": "NAW6I81", "d": "06/03", "m": "FABRICIO", "l": 150.0, "k": 70307}, {"p": "UGA2B60", "d": "06/03", "m": "CARLOS ANTÔNIO", "l": 437.45, "k": 31553}, {"p": "UGQ5H10", "d": "06/03", "m": "JAIR", "l": 109.0, "k": 10790}, {"p": "EFV6387", "d": "07/03", "m": "CARLOS ANTÔNIO", "l": 177.02, "k": 831429}, {"p": "EHJ0E76", "d": "07/03", "m": "MAYCON", "l": 367.35, "k": 424690}, {"p": "NAW6C82", "d": "07/03", "m": "JAIR", "l": 151.12, "k": 64457}, {"p": "NAW6I81", "d": "07/03", "m": "FABRICIO", "l": 535.25, "k": 70685}, {"p": "GFL3G04", "d": "08/03", "m": "JAILSON", "l": 450.0, "k": 854157}, {"p": "NAW6I81", "d": "08/03", "m": "FABRICIO", "l": 132.3, "k": 71344}, {"p": "BXZ3F52", "d": "09/03", "m": "FERNANDO", "l": 54.0, "k": 268461}, {"p": "EXV3F24", "d": "09/03", "m": "DOUGLAS", "l": 74.35, "k": 366478}, {"p": "FWK8A94", "d": "09/03", "m": "EDSON", "l": 110.59, "k": 204748}, {"p": "GDY0H87", "d": "09/03", "m": "LUIS TAVEIRA", "l": 100.07, "k": 492846}, {"p": "GGJ5E35", "d": "09/03", "m": "INGRID", "l": 43.65, "k": 212740}, {"p": "NAW6C82", "d": "09/03", "m": "ADRIANO", "l": 103.06, "k": 64901}, {"p": "NAW6I81", "d": "09/03", "m": "FABRICIO", "l": 124.23, "k": 71925}, {"p": "QSQ3D59", "d": "09/03", "m": "MICHAEL", "l": 99.81, "k": 11702}, {"p": "STD3J94", "d": "09/03", "m": "ISAIAS", "l": 120.36, "k": 169475}, {"p": "BXZ3F52", "d": "10/03", "m": "FERNANDO", "l": 37.52, "k": 269090}, {"p": "CFD4B98", "d": "10/03", "m": "GLEIDON", "l": 161.63, "k": 626766}, {"p": "ELY9J91", "d": "10/03", "m": "RAIMUNDO", "l": 53.97, "k": 211688}, {"p": "EXV3F24", "d": "10/03", "m": "DOUGLAS", "l": 252.21, "k": 367375}, {"p": "FPG7G53", "d": "10/03", "m": "ALEXANDRE", "l": 142.17, "k": 510396}, {"p": "FWK8A94", "d": "10/03", "m": "EDSON", "l": 48.69, "k": 205059}, {"p": "GDY0H87", "d": "10/03", "m": "LUIS TAVEIRA", "l": 472.02, "k": 493047}, {"p": "NAW6C82", "d": "10/03", "m": "CARLOS ANTÔNIO", "l": 92.4, "k": 65279}, {"p": "QSQ3D59", "d": "10/03", "m": "MICHAEL", "l": 52.59, "k": 11960}, {"p": "UGQ5H10", "d": "10/03", "m": "JAIR", "l": 111.75, "k": 11310}],
        trendData: [25863, 77590, 155181, 258635, 362089, 455197, 517270],
        weeklyMaint: [93109, 113799, 124145, 93109, 93109],
        weeklyFuel: [86024, 95079, 104134, 86024, 81496]
    },
};

// ═══ REVISÃO PREVENTIVA DATA ═══
const REVISAO_DATA = [
    {"placa": "RZC2C27", "modelo": "ATEGO 1719", "intervalo": 30000, "kmTroca": 113665, "dataTroca": "15/07/2025", "kmProxima": 143665, "kmAtual": 143366, "dataAtualizacao": "11/03/2026", "kmRestantes": 299, "status": "ALERTA", "alert": "alerta", "obs": ""},
    {"placa": "FZZ2B94", "modelo": "SPRINTER", "intervalo": 20000, "kmTroca": 269858, "dataTroca": "22/09/2025", "kmProxima": 289858, "kmAtual": 289446, "dataAtualizacao": "11/03/2026", "kmRestantes": 412, "status": "ALERTA", "alert": "alerta", "obs": ""},
    {"placa": "ELY9J91", "modelo": "SCUDO CARGO", "intervalo": 20000, "kmTroca": 195384, "dataTroca": "22/01/2026", "kmProxima": 215384, "kmAtual": 212118, "dataAtualizacao": "11/03/2026", "kmRestantes": 3266, "status": "ALERTA", "alert": "alerta", "obs": ""},
    {"placa": "EFW6601", "modelo": "Volkswagen 8.150 e Delivery Plus", "intervalo": 30000, "kmTroca": 807653, "dataTroca": "28/01/2025", "kmProxima": 837653, "kmAtual": 831434, "dataAtualizacao": "11/03/2026", "kmRestantes": 6219, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "EXV3F24", "modelo": "1419", "intervalo": 30000, "kmTroca": 344500, "dataTroca": "05/12/2025", "kmProxima": 374500, "kmAtual": 367919, "dataAtualizacao": "11/03/2026", "kmRestantes": 6581, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "EFW6626", "modelo": "Volkswagen 13.180 e Constellation 4x2", "intervalo": 30000, "kmTroca": 696786, "dataTroca": "07/08/2025", "kmProxima": 726786, "kmAtual": 719788, "dataAtualizacao": "04/03/2026", "kmRestantes": 6998, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "RZC2C37", "modelo": "ATEGO 1419", "intervalo": 30000, "kmTroca": 93415, "dataTroca": "03/07/2025", "kmProxima": 123415, "kmAtual": 113387, "dataAtualizacao": "11/03/2026", "kmRestantes": 10028, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "BXZ3F52", "modelo": "SCUDO CARGO", "intervalo": 20000, "kmTroca": 258882, "dataTroca": "04/02/2026", "kmProxima": 278882, "kmAtual": 267971, "dataAtualizacao": "11/03/2026", "kmRestantes": 10911, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "GDY0H87", "modelo": "SCANIA G 410 A 6X2", "intervalo": 30000, "kmTroca": 475029, "dataTroca": "13/01/2026", "kmProxima": 505029, "kmAtual": 494000, "dataAtualizacao": "11/03/2026", "kmRestantes": 11029, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "FPG7G53", "modelo": "ACELLO 1016", "intervalo": 30000, "kmTroca": 493678, "dataTroca": "09/04/2025", "kmProxima": 523678, "kmAtual": 510431, "dataAtualizacao": "11/03/2026", "kmRestantes": 13247, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "GGW9G47", "modelo": "ACEELO 815", "intervalo": 30000, "kmTroca": 272377, "dataTroca": "03/12/2025", "kmProxima": 302377, "kmAtual": 289086, "dataAtualizacao": "11/03/2026", "kmRestantes": 13291, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "GGJ5E35", "modelo": "SCUDO CARGO", "intervalo": 20000, "kmTroca": 207300, "dataTroca": "27/01/2026", "kmProxima": 227300, "kmAtual": 212964, "dataAtualizacao": "11/03/2026", "kmRestantes": 14336, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "QSQ3D59", "modelo": "ACCELO 1017", "intervalo": 30000, "kmTroca": 0, "dataTroca": "", "kmProxima": 30000, "kmAtual": 12484, "dataAtualizacao": "11/03/2026", "kmRestantes": 17516, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "GFL3G04", "modelo": "ACTROS", "intervalo": 30000, "kmTroca": 842326, "dataTroca": "30/01/2026", "kmProxima": 872236, "kmAtual": 854591, "dataAtualizacao": "11/03/2026", "kmRestantes": 17645, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "EFV6387", "modelo": "Constellation 4x2", "intervalo": 30000, "kmTroca": 820190, "dataTroca": "23/10/2025", "kmProxima": 850190, "kmAtual": 831946, "dataAtualizacao": "11/03/2026", "kmRestantes": 18244, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "UGQ5H10", "modelo": "ATEGO 1719", "intervalo": 30000, "kmTroca": 0, "dataTroca": "", "kmProxima": 30000, "kmAtual": 11430, "dataAtualizacao": "11/03/2026", "kmRestantes": 18570, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "CFD4B98", "modelo": "1719", "intervalo": 30000, "kmTroca": 617220, "dataTroca": "04/02/2026", "kmProxima": 647220, "kmAtual": 627414, "dataAtualizacao": "11/03/2026", "kmRestantes": 19806, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "NAW6C82", "modelo": "ATEGO 1719", "intervalo": 30000, "kmTroca": 55545, "dataTroca": "12/02/2026", "kmProxima": 85545, "kmAtual": 65521, "dataAtualizacao": "11/03/2026", "kmRestantes": 20024, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "NAW6I81", "modelo": "ATEGO 1719", "intervalo": 30000, "kmTroca": 64000, "dataTroca": "02/02/2026", "kmProxima": 94000, "kmAtual": 72315, "dataAtualizacao": "11/03/2026", "kmRestantes": 21685, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "STD3J94", "modelo": "ATEGO 1719", "intervalo": 30000, "kmTroca": 162436, "dataTroca": "13/01/2026", "kmProxima": 192436, "kmAtual": 170546, "dataAtualizacao": "11/03/2026", "kmRestantes": 21890, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "GDD3C49", "modelo": "ATEGO 2426", "intervalo": 30000, "kmTroca": 525300, "dataTroca": "13/12/2025", "kmProxima": 555300, "kmAtual": 530406, "dataAtualizacao": "11/03/2026", "kmRestantes": 24894, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "FET3H45", "modelo": "1419", "intervalo": 30000, "kmTroca": 381181, "dataTroca": "13/02/2026", "kmProxima": 411181, "kmAtual": 385584, "dataAtualizacao": "11/03/2026", "kmRestantes": 25597, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "UGA5B60", "modelo": "ATEGO 2429", "intervalo": 30000, "kmTroca": 0, "dataTroca": "", "kmProxima": 60000, "kmAtual": 32832, "dataAtualizacao": "11/03/2026", "kmRestantes": 27168, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "EHJ0E76", "modelo": "FH 460", "intervalo": 30000, "kmTroca": 423689, "dataTroca": "05/03/2026", "kmProxima": 453689, "kmAtual": 425901, "dataAtualizacao": "11/03/2026", "kmRestantes": 27788, "status": "OK", "alert": "ok", "obs": ""},
    {"placa": "FWK8A94", "modelo": "ACELLO 1017", "intervalo": 30000, "kmTroca": 197767, "dataTroca": "20/01/2025", "kmProxima": 277767, "kmAtual": 204399, "dataAtualizacao": "06/03/2026", "kmRestantes": 73368, "status": "OK", "alert": "ok", "obs": ""},
];

// ═══════════════════════════════════════
// FINANCIAL DATA (Corretiva + Preventiva + Estoque only)
// ═══════════════════════════════════════
const FINANCIAL_DATA = {
    'todos': {
        records: 160, value: 142655.78, avgMaint: 892,
        types: [
            { name: 'CORRETIVA', count: 88, value: 79537.91 },
            { name: 'PREVENTIVA', count: 19, value: 17986.98 },
            { name: 'PNEU', count: 2, value: 16578.0 },
            { name: 'RECAPAGEM', count: 4, value: 8860.0 },
            { name: 'BORRACHARIA', count: 32, value: 5574.0 },
            { name: 'LAVAGEM', count: 3, value: 3130.0 },
            { name: 'ÓLEO MOTOR', count: 1, value: 2782.0 },
            { name: 'PNEU RECAPADO', count: 1, value: 2300.0 },
            { name: 'LAVAGEM E LUBRIFICAÇÃO', count: 1, value: 1960.0 },
            { name: 'ESTOQUE', count: 6, value: 1374.73 },
            { name: 'CERTIFICADO', count: 1, value: 1042.76 },
            { name: 'GUINCHO', count: 1, value: 900.0 },
            { name: 'ARLA', count: 1, value: 629.4 },
        ],
        suppliers: [
            { name: 'DELLA VIA PNEUS', value: 'R$ 11.568,00' },
            { name: 'TITAN DIESEL', value: 'R$ 11.520,00' },
            { name: 'TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA', value: 'R$ 10.944,23' },
            { name: 'PANTHER COMERCIO DE AUTO PECAS EIRELI', value: 'R$ 7.595,91' },
            { name: 'SERGIPANA TRUCK CLIENTER', value: 'R$ 7.460,00' },
            { name: 'DUTRACAR', value: 'R$ 6.259,00' },
            { name: 'SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA', value: 'R$ 5.650,60' },
        ],
        topVehicle: { plate: 'EXV3F24', value: '19.313,87' },
        topSupplier: { name: 'DELLA VIA PNEUS', value: '11.568,00' },
        allRecords: [{"p": "LAVAGEM", "v": 1960.0, "f": "JA LAVA RAPIDO", "e": ""}, {"p": "GDYOH87", "v": 150.0, "f": "BORRACHARIA MOVEL JR", "e": ""}, {"p": "FPG7G53", "v": 90.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EFV6387", "v": 90.0, "f": "BORRACHARIA MOVEL JR", "e": "TEC"}, {"p": "OAH6984", "v": 50.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EXV3F24", "v": 100.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "FET3H45", "v": 100.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "GIQ2I12", "v": 400.0, "f": "BORRACHARIA MOVEL JR", "e": ""}, {"p": "GGW9G47", "v": 90.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "FWK8A94", "v": 290.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "GGJ5E35", "v": 200.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "UGA2B60", "v": 200.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "QSQ3D59", "v": 190.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "FPG7G53", "v": 100.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "GFL3G04", "v": 120.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "ESTOQUE", "v": 300.0, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": ""}, {"p": "EHJ0E76", "v": 468.9, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "EFW6601", "v": 1270.0, "f": "JOSENILDO BARBOSA DANTAS - AUTO ELETRICO", "e": "TEC"}, {"p": "EFW6601", "v": 350.0, "f": "JOSENILDO BARBOSA DANTAS - AUTO ELETRICO", "e": "TEC"}, {"p": "FWK8A94", "v": 1080.0, "f": "SERGIPANA TRUCK CLIENTER", "e": "THS"}, {"p": "ESTOQUE", "v": 260.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": ""}, {"p": "FPG7G53", "v": 550.0, "f": "THERMOTEC COMERCIO E SERVICOS DE RADIADORES E INTE", "e": "THS"}, {"p": "FZZ2B94", "v": 300.0, "f": "MULTI DIESEL SERVIÇOS DE MANUTENÇÃO", "e": "THS"}, {"p": "EFW6626", "v": 2245.0, "f": "55.020.906 EDSON DE SOUZA LUNA", "e": "TEC"}, {"p": "EXV3F24", "v": 1462.0, "f": "CASA DAS BATERIAS GALILEU EIRELI", "e": "THS"}, {"p": "ESTOQUE", "v": 114.54, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": ""}, {"p": "UGA2B60", "v": 3060.0, "f": "SERGIPANA TRUCK CLIENTER", "e": "THS"}, {"p": "RECAPAGEM", "v": 3320.0, "f": "SERGIPANA TRUCK CLIENTER", "e": ""}, {"p": "EFV6387", "v": 50.0, "f": "DMAX BATERIAS", "e": "TEC"}, {"p": "QSQ3D59", "v": 1042.76, "f": "CUMBICA TACOGRAFOS", "e": "THS"}, {"p": "FPG7G53", "v": 150.0, "f": "D.B.S. SERVICOS E MANUTENCOES LTDA", "e": "THS"}, {"p": "FPG7G53", "v": 1250.0, "f": "D.B.S. SERVICOS E MANUTENCOES LTDA", "e": "THS"}, {"p": "GGJ5E35", "v": 70.0, "f": "DUTRACAR", "e": "THS"}, {"p": "GDY0H87", "v": 925.71, "f": "PERIM COMERCIO DE AUTOPECAS LTDA", "e": "THS"}, {"p": "STD3J94", "v": 690.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "TEC"}, {"p": "ÓLEO MOTOR", "v": 2782.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": ""}, {"p": "ESTOQUE", "v": 471.0, "f": "DUTRACAR", "e": ""}, {"p": "NAW6C82", "v": 663.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "NAW6C82", "v": 370.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "GFL3G04", "v": 5190.0, "f": "DELLA VIA PNEUS LTDA", "e": "THS"}, {"p": "STD3J94", "v": 710.49, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "TEC"}, {"p": "FWK8A94", "v": 213.6, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "QSQ3D59", "v": 3075.0, "f": "DUTRACAR", "e": "THS"}, {"p": "GFL3G04", "v": 224.0, "f": "VR AUTOPECAS", "e": "THS"}, {"p": "FET3H45", "v": 2205.0, "f": "60.463.921 SAMUEL DA SILVA FERREIRA", "e": "THS"}, {"p": "FWK8A94", "v": 1422.2, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 2085.0, "f": "POSTO DE MOLAS", "e": "THS"}, {"p": "CFD4B98", "v": 250.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "THS"}, {"p": "ELY9J91", "v": 864.7, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "RZC2C27", "v": 220.0, "f": "SETE PNEUS", "e": "TEC"}, {"p": "RZC2C27", "v": 1400.0, "f": "SETE PNEUS", "e": "TEC"}, {"p": "EXV3F24", "v": 80.0, "f": "CENTRO AUTOMOTIVO ROTA 101", "e": "THS"}, {"p": "RZC2C37", "v": 1920.0, "f": "BARRETÃO AUTO PEÇAS", "e": "TEC"}, {"p": "GGW9G47", "v": 667.65, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "EFW6626", "v": 120.0, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "TEC"}, {"p": "FPG7G53", "v": 120.0, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "GGJ5E35", "v": 954.6, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "EFV6387", "v": 188.0, "f": "PAI&FILHO", "e": "TEC"}, {"p": "GDD3C49", "v": 120.0, "f": "SETE PNEUS", "e": "THS"}, {"p": "EHJ0E76", "v": 100.99, "f": "PERIM COMERCIO DE AUTOPECAS LTDA", "e": "THS"}, {"p": "EFW6626", "v": 300.0, "f": "55.020.906 EDSON DE SOUZA LUNA", "e": "TEC"}, {"p": "EHJ0E76", "v": 347.0, "f": "DUTRACAR", "e": "THS"}, {"p": "GFL3G04", "v": 105.0, "f": "REDE FAISÃO", "e": "THS"}, {"p": "GFL3G04", "v": 200.0, "f": "AUTO PECAS FAISAO", "e": "THS"}, {"p": "GFL3G04", "v": 80.0, "f": "ADNILSON OLIVEIRA - OFICINA MECANICA", "e": "THS"}, {"p": "FPG7G53", "v": 1090.0, "f": "CHUCAR COMERCIO E DISTRIBUIÇAI DE AUTOPEÇAS LTDA-M", "e": "THS"}, {"p": "EXV3F24", "v": 90.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "THS"}, {"p": "FET3H45", "v": 70.0, "f": "BORRACHARIA DO BOY", "e": "THS"}, {"p": "FET3H45", "v": 431.0, "f": "DUTRACAR", "e": "THS"}, {"p": "LAVAGEM", "v": 250.0, "f": "HM TRANSPORTES", "e": ""}, {"p": "QSQ3D59", "v": 150.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "OAN8755", "v": 490.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EXV3F24", "v": 200.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "LAVAGEM", "v": 930.0, "f": "JA LAVA RAPIDO", "e": ""}, {"p": "NAW6I81", "v": 1640.2, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "TEC"}, {"p": "BXZ3F52", "v": 332.5, "f": "VM PUERTAS MECANICA DIESEL", "e": "THS"}, {"p": "NAW6I81", "v": 130.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "TEC"}, {"p": "FPG7G53", "v": 152.49, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "NAW6I81", "v": 855.0, "f": "VM PUERTAS MECANICA DIESEL", "e": "TEC"}, {"p": "FPG7G53", "v": 847.51, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "GFL3G04", "v": 150.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "GDY0H87", "v": 100.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "FZZ2B94", "v": 50.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "ESTOQUE", "v": 107.37, "f": "DL LAMP", "e": ""}, {"p": "EXV3F24", "v": 100.0, "f": "CHAVEIRO VII PINOS", "e": "THS"}, {"p": "RZC2C27", "v": 89.33, "f": "BARRETÃO AUTO PEÇAS", "e": "TEC"}, {"p": "RZC2C37", "v": 89.33, "f": "BARRETÃO AUTO PEÇAS", "e": "TEC"}, {"p": "GDD3C49", "v": 89.33, "f": "BARRETÃO AUTO PEÇAS", "e": "THS"}, {"p": "NAW6I81", "v": 1038.0, "f": "DUTRACAR", "e": "TEC"}, {"p": "CFD4B98", "v": 1245.2, "f": "SANTOS DUMONT I LUBRIFICANTES E FILTROS LTDA", "e": "THS"}, {"p": "BXZ3F52", "v": 1025.1, "f": "SANTOS DUMONT I LUBRIFICANTES E FILTROS LTDA", "e": "THS"}, {"p": "GGW9G47", "v": 74.0, "f": "DUTRACAR", "e": "THS"}, {"p": "ARLA", "v": 629.4, "f": "REDE DUQUE", "e": ""}, {"p": "EMPILAHDEIRA", "v": 1000.0, "f": "NS HELP", "e": ""}, {"p": "FWK8A94", "v": 935.46, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "FWK8A94", "v": 964.54, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "NAW6C82", "v": 160.0, "f": "TACOGRAFO BOX TRUCK MACAE", "e": "TEC"}, {"p": "UGA2B60", "v": 523.0, "f": "DUTRACAR", "e": "THS"}, {"p": "BXZ3F52", "v": 42.0, "f": "DUTRACAR", "e": "THS"}, {"p": "FPG7G53", "v": 14.0, "f": "DUTRACAR", "e": "THS"}, {"p": "FET3H45", "v": 702.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "NAW6C82", "v": 407.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "TEC"}, {"p": "EXV3F24", "v": 957.14, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "ESTOQUE", "v": 121.82, "f": "SK SUPERMERCADOS LTDA", "e": ""}, {"p": "CFD4B98", "v": 704.0, "f": "FLECHA DIESEL COMERCIO E SERVICOS DE PECAS PARA VE", "e": "THS"}, {"p": "OAH6974", "v": 3800.0, "f": "FAMILIA TOP TRUCK", "e": "THS"}, {"p": "EFW6626", "v": 900.0, "f": "SOS REBOQUE", "e": "TEC"}, {"p": "OAH6974", "v": 2300.0, "f": "ATACADÃO COMERCIO E REPRESENTAÇÃO LTDA", "e": "THS"}, {"p": "CFD4B98", "v": 3300.0, "f": "THERMOTEC", "e": "THS"}, {"p": "OAH6974", "v": 1900.0, "f": "FRANCISCO DE ASSIS SILVA BEZERRA", "e": "THS"}, {"p": "EXV3F24", "v": 1100.0, "f": "G.K.R. MIRANDA COMERCIO DE RADIADORES LTDA", "e": "THS"}, {"p": "EFW6626", "v": 1435.0, "f": "CHUCAR COMERCIO E DISTRIBUIÇAI DE AUTOPEÇAS LTDA-M", "e": "TEC"}, {"p": "OAH6974", "v": 500.0, "f": "FAMILIA TOP TRUCK", "e": "THS"}, {"p": "GFL3G04", "v": 1325.0, "f": "TITAN DIESEL", "e": "THS"}, {"p": "GFL3G04", "v": 2950.0, "f": "TITAN DIESEL", "e": "THS"}, {"p": "NAW6C82", "v": 600.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "TEC"}, {"p": "NAW6C82", "v": 600.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "TEC"}, {"p": "STD3J94", "v": 1697.5, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "TEC"}, {"p": "FET3H45", "v": 500.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "OAH6974", "v": 230.0, "f": "JUNIOR DOS SANTOS SILVA", "e": "THS"}, {"p": "OAH6974", "v": 550.0, "f": "JOSÉ PORTO FREIRE", "e": "THS"}, {"p": "OAH6974", "v": 280.0, "f": "L C L DA COSTA BORRACHARIA & PECAS", "e": "THS"}, {"p": "MKD4H07", "v": 160.0, "f": "POSTO TIGRAO", "e": "TEC"}, {"p": "OAH6974", "v": 100.0, "f": "EDVAN PAULO DE JESUS DO NASCIMENTO 99968339172", "e": "THS"}, {"p": "GDY0H87", "v": 75.0, "f": "REAL ACESSORIOS", "e": "THS"}, {"p": "GDY0H87", "v": 1425.0, "f": "REAL ACESSORIOS", "e": "THS"}, {"p": "EXV3F24", "v": 236.7, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "RTW8H87", "v": 1750.0, "f": "VALDECIR (MANUTENÇÃO)", "e": "TEC"}, {"p": "EXV3F24", "v": 1130.0, "f": "VALDECIR (MANUTENÇÃO)", "e": "THS"}, {"p": "FPG7G53", "v": 700.0, "f": "VALDECIR (MANUTENÇÃO)", "e": "THS"}, {"p": "EXV3F24", "v": 4922.0, "f": "POSTO DE MOLAS GEMEOS MARTINS", "e": "THS"}, {"p": "FWK8A94", "v": 1082.26, "f": "R.A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "FET3H45", "v": 50.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "THS"}, {"p": "NAW6C82", "v": 1050.0, "f": "CLIMAX FREE MANUTENCAO GERAIS", "e": "TEC"}, {"p": "OAH6974", "v": 755.34, "f": "PACAEMBU", "e": "THS"}, {"p": "PNEU", "v": 11388.0, "f": "DELLA VIA PNEUS", "e": ""}, {"p": "EFV6387", "v": 2825.0, "f": "TITAN DIESEL", "e": "TEC"}, {"p": "EFV6387", "v": 4420.0, "f": "TITAN DIESEL", "e": "TEC"}, {"p": "OAH6974", "v": 180.0, "f": "DELLA VIA PNEUS", "e": "THS"}, {"p": "NAW6C82", "v": 50.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "NAW6C82", "v": 85.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "UGA2B60", "v": 175.0, "f": "NILSA PEREIRA FREITAS", "e": "THS"}, {"p": "GFL3G04", "v": 175.0, "f": "NILSA PEREIRA FREITAS", "e": "THS"}, {"p": "GFL3G04", "v": 100.0, "f": "AUTO MECANICA TEODORO LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 1144.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 3622.73, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "UGQ5H10", "v": 2280.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "FET3H45", "v": 500.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "EFW6601", "v": 174.0, "f": "DUTRACAR", "e": "TEC"}, {"p": "GDY0H87", "v": 100.0, "f": "BORRACHARIA GALO CEGO COMERCIO E SERVICOS LTDA", "e": "THS"}, {"p": "GGJ5E35", "v": 150.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EXV3F24", "v": 1284.3, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "CFD4B98", "v": 1718.22, "f": "PACAEMBU", "e": "THS"}, {"p": "LAVAGEM", "v": 1950.0, "f": "JA LAVA RAPIDO", "e": ""}, {"p": "GFL3F04", "v": 200.0, "f": "IGUANA AUTOPECAS E SERVICOS - LOJA 08", "e": ""}, {"p": "GFL3F04", "v": 210.0, "f": "IGUANA AUTOPECAS E SERVICOS - LOJA 08", "e": ""}, {"p": "ESTOQUE", "v": 250.0, "f": "MARCELO PNEUS", "e": ""}, {"p": "CFD4B98", "v": 422.23, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "EHJ0E76", "v": 1533.64, "f": "REDE DE POSTOS MARAJO TOCANTINS LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 800.0, "f": "G.K.R. MIRANDA COMERCIO DE RADIADORES LTDA", "e": "THS"}]
    },
    jan: {
        records: 70, value: 52469.14, avgMaint: 750,
        types: [
            { name: 'CORRETIVA', count: 30, value: 22863.73 },
            { name: 'RECAPAGEM', count: 4, value: 8860.0 },
            { name: 'PREVENTIVA', count: 9, value: 5711.11 },
            { name: 'PNEU', count: 1, value: 5190.0 },
            { name: 'ÓLEO MOTOR', count: 1, value: 2782.0 },
            { name: 'BORRACHARIA', count: 18, value: 2664.0 },
            { name: 'LAVAGEM E LUBRIFICAÇÃO', count: 1, value: 1960.0 },
            { name: 'ESTOQUE', count: 4, value: 1145.54 },
            { name: 'CERTIFICADO', count: 1, value: 1042.76 },
            { name: 'LAVAGEM', count: 1, value: 250.0 },
        ],
        suppliers: [
            { name: 'SERGIPANA TRUCK CLIENTER', value: 'R$ 7.460,00' },
            { name: 'DELLA VIA PNEUS LTDA', value: 'R$ 5.190,00' },
            { name: 'DUTRACAR', value: 'R$ 4.394,00' },
            { name: 'SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA', value: 'R$ 4.010,40' },
            { name: 'PANTHER COMERCIO DE AUTO PECAS EIRELI', value: 'R$ 3.586,54' },
            { name: '55.020.906 EDSON DE SOUZA LUNA', value: 'R$ 2.545,00' },
            { name: '60.463.921 SAMUEL DA SILVA FERREIRA', value: 'R$ 2.205,00' },
        ],
        topVehicle: { plate: 'GFL3G04', value: '5.919,00' },
        topSupplier: { name: 'SERGIPANA TRUCK CLIENTER', value: '7.460,00' },
        allRecords: [{"p": "LAVAGEM", "v": 1960.0, "f": "JA LAVA RAPIDO", "e": ""}, {"p": "GDYOH87", "v": 150.0, "f": "BORRACHARIA MOVEL JR", "e": ""}, {"p": "FPG7G53", "v": 90.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EFV6387", "v": 90.0, "f": "BORRACHARIA MOVEL JR", "e": "TEC"}, {"p": "OAH6984", "v": 50.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EXV3F24", "v": 100.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "FET3H45", "v": 100.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "GIQ2I12", "v": 400.0, "f": "BORRACHARIA MOVEL JR", "e": ""}, {"p": "GGW9G47", "v": 90.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "FWK8A94", "v": 290.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "GGJ5E35", "v": 200.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "UGA2B60", "v": 200.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "QSQ3D59", "v": 190.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "FPG7G53", "v": 100.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "GFL3G04", "v": 120.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "ESTOQUE", "v": 300.0, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": ""}, {"p": "EHJ0E76", "v": 468.9, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "EFW6601", "v": 1270.0, "f": "JOSENILDO BARBOSA DANTAS - AUTO ELETRICO", "e": "TEC"}, {"p": "EFW6601", "v": 350.0, "f": "JOSENILDO BARBOSA DANTAS - AUTO ELETRICO", "e": "TEC"}, {"p": "FWK8A94", "v": 1080.0, "f": "SERGIPANA TRUCK CLIENTER", "e": "THS"}, {"p": "ESTOQUE", "v": 260.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": ""}, {"p": "FPG7G53", "v": 550.0, "f": "THERMOTEC COMERCIO E SERVICOS DE RADIADORES E INTE", "e": "THS"}, {"p": "FZZ2B94", "v": 300.0, "f": "MULTI DIESEL SERVIÇOS DE MANUTENÇÃO", "e": "THS"}, {"p": "EFW6626", "v": 2245.0, "f": "55.020.906 EDSON DE SOUZA LUNA", "e": "TEC"}, {"p": "EXV3F24", "v": 1462.0, "f": "CASA DAS BATERIAS GALILEU EIRELI", "e": "THS"}, {"p": "ESTOQUE", "v": 114.54, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": ""}, {"p": "UGA2B60", "v": 3060.0, "f": "SERGIPANA TRUCK CLIENTER", "e": "THS"}, {"p": "RECAPAGEM", "v": 3320.0, "f": "SERGIPANA TRUCK CLIENTER", "e": ""}, {"p": "EFV6387", "v": 50.0, "f": "DMAX BATERIAS", "e": "TEC"}, {"p": "QSQ3D59", "v": 1042.76, "f": "CUMBICA TACOGRAFOS", "e": "THS"}, {"p": "FPG7G53", "v": 150.0, "f": "D.B.S. SERVICOS E MANUTENCOES LTDA", "e": "THS"}, {"p": "FPG7G53", "v": 1250.0, "f": "D.B.S. SERVICOS E MANUTENCOES LTDA", "e": "THS"}, {"p": "GGJ5E35", "v": 70.0, "f": "DUTRACAR", "e": "THS"}, {"p": "GDY0H87", "v": 925.71, "f": "PERIM COMERCIO DE AUTOPECAS LTDA", "e": "THS"}, {"p": "STD3J94", "v": 690.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "TEC"}, {"p": "ÓLEO MOTOR", "v": 2782.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": ""}, {"p": "ESTOQUE", "v": 471.0, "f": "DUTRACAR", "e": ""}, {"p": "NAW6C82", "v": 663.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "NAW6C82", "v": 370.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "GFL3G04", "v": 5190.0, "f": "DELLA VIA PNEUS LTDA", "e": "THS"}, {"p": "STD3J94", "v": 710.49, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "TEC"}, {"p": "FWK8A94", "v": 213.6, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "QSQ3D59", "v": 3075.0, "f": "DUTRACAR", "e": "THS"}, {"p": "GFL3G04", "v": 224.0, "f": "VR AUTOPECAS", "e": "THS"}, {"p": "FET3H45", "v": 2205.0, "f": "60.463.921 SAMUEL DA SILVA FERREIRA", "e": "THS"}, {"p": "FWK8A94", "v": 1422.2, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 2085.0, "f": "POSTO DE MOLAS", "e": "THS"}, {"p": "CFD4B98", "v": 250.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "THS"}, {"p": "ELY9J91", "v": 864.7, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "RZC2C27", "v": 220.0, "f": "SETE PNEUS", "e": "TEC"}, {"p": "RZC2C27", "v": 1400.0, "f": "SETE PNEUS", "e": "TEC"}, {"p": "EXV3F24", "v": 80.0, "f": "CENTRO AUTOMOTIVO ROTA 101", "e": "THS"}, {"p": "RZC2C37", "v": 1920.0, "f": "BARRETÃO AUTO PEÇAS", "e": "TEC"}, {"p": "GGW9G47", "v": 667.65, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "EFW6626", "v": 120.0, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "TEC"}, {"p": "FPG7G53", "v": 120.0, "f": "R. A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "GGJ5E35", "v": 954.6, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "THS"}, {"p": "EFV6387", "v": 188.0, "f": "PAI&FILHO", "e": "TEC"}, {"p": "GDD3C49", "v": 120.0, "f": "SETE PNEUS", "e": "THS"}, {"p": "EHJ0E76", "v": 100.99, "f": "PERIM COMERCIO DE AUTOPECAS LTDA", "e": "THS"}, {"p": "EFW6626", "v": 300.0, "f": "55.020.906 EDSON DE SOUZA LUNA", "e": "TEC"}, {"p": "EHJ0E76", "v": 347.0, "f": "DUTRACAR", "e": "THS"}, {"p": "GFL3G04", "v": 105.0, "f": "REDE FAISÃO", "e": "THS"}, {"p": "GFL3G04", "v": 200.0, "f": "AUTO PECAS FAISAO", "e": "THS"}, {"p": "GFL3G04", "v": 80.0, "f": "ADNILSON OLIVEIRA - OFICINA MECANICA", "e": "THS"}, {"p": "FPG7G53", "v": 1090.0, "f": "CHUCAR COMERCIO E DISTRIBUIÇAI DE AUTOPEÇAS LTDA-M", "e": "THS"}, {"p": "EXV3F24", "v": 90.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "THS"}, {"p": "FET3H45", "v": 70.0, "f": "BORRACHARIA DO BOY", "e": "THS"}, {"p": "FET3H45", "v": 431.0, "f": "DUTRACAR", "e": "THS"}, {"p": "LAVAGEM", "v": 250.0, "f": "HM TRANSPORTES", "e": ""}]
    },
    feb: {
        records: 79, value: 81568.25, avgMaint: 1033,
        types: [
            { name: 'CORRETIVA', count: 52, value: 52039.43 },
            { name: 'PNEU', count: 1, value: 11388.0 },
            { name: 'PREVENTIVA', count: 9, value: 10742.23 },
            { name: 'BORRACHARIA', count: 11, value: 2410.0 },
            { name: 'PNEU RECAPADO', count: 1, value: 2300.0 },
            { name: 'LAVAGEM', count: 1, value: 930.0 },
            { name: 'GUINCHO', count: 1, value: 900.0 },
            { name: 'ARLA', count: 1, value: 629.4 },
            { name: 'ESTOQUE', count: 2, value: 229.19 },
        ],
        suppliers: [
            { name: 'DELLA VIA PNEUS', value: 'R$ 11.568,00' },
            { name: 'TITAN DIESEL', value: 'R$ 11.520,00' },
            { name: 'TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA', value: 'R$ 10.944,23' },
            { name: 'POSTO DE MOLAS GEMEOS MARTINS', value: 'R$ 4.922,00' },
            { name: 'FAMILIA TOP TRUCK', value: 'R$ 4.300,00' },
            { name: 'VALDECIR (MANUTENÇÃO)', value: 'R$ 3.580,00' },
            { name: 'THERMOTEC', value: 'R$ 3.300,00' },
        ],
        topVehicle: { plate: 'EXV3F24', value: '13.412,57' },
        topSupplier: { name: 'DELLA VIA PNEUS', value: '11.568,00' },
        allRecords: [{"p": "QSQ3D59", "v": 150.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "OAN8755", "v": 490.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EXV3F24", "v": 200.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "LAVAGEM", "v": 930.0, "f": "JA LAVA RAPIDO", "e": ""}, {"p": "NAW6I81", "v": 1640.2, "f": "SANTOS DUMONT II LUBRIFICANTES E ACESSORIOS LTDA", "e": "TEC"}, {"p": "BXZ3F52", "v": 332.5, "f": "VM PUERTAS MECANICA DIESEL", "e": "THS"}, {"p": "NAW6I81", "v": 130.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "TEC"}, {"p": "FPG7G53", "v": 152.49, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "NAW6I81", "v": 855.0, "f": "VM PUERTAS MECANICA DIESEL", "e": "TEC"}, {"p": "FPG7G53", "v": 847.51, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "GFL3G04", "v": 150.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "GDY0H87", "v": 100.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "FZZ2B94", "v": 50.0, "f": "TJ TRUCK", "e": "THS"}, {"p": "ESTOQUE", "v": 107.37, "f": "DL LAMP", "e": ""}, {"p": "EXV3F24", "v": 100.0, "f": "CHAVEIRO VII PINOS", "e": "THS"}, {"p": "RZC2C27", "v": 89.33, "f": "BARRETÃO AUTO PEÇAS", "e": "TEC"}, {"p": "RZC2C37", "v": 89.33, "f": "BARRETÃO AUTO PEÇAS", "e": "TEC"}, {"p": "GDD3C49", "v": 89.33, "f": "BARRETÃO AUTO PEÇAS", "e": "THS"}, {"p": "NAW6I81", "v": 1038.0, "f": "DUTRACAR", "e": "TEC"}, {"p": "CFD4B98", "v": 1245.2, "f": "SANTOS DUMONT I LUBRIFICANTES E FILTROS LTDA", "e": "THS"}, {"p": "BXZ3F52", "v": 1025.1, "f": "SANTOS DUMONT I LUBRIFICANTES E FILTROS LTDA", "e": "THS"}, {"p": "GGW9G47", "v": 74.0, "f": "DUTRACAR", "e": "THS"}, {"p": "ARLA", "v": 629.4, "f": "REDE DUQUE", "e": ""}, {"p": "EMPILAHDEIRA", "v": 1000.0, "f": "NS HELP", "e": ""}, {"p": "FWK8A94", "v": 935.46, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "FWK8A94", "v": 964.54, "f": "CARCORP AUTO PECAS LTDA", "e": "THS"}, {"p": "NAW6C82", "v": 160.0, "f": "TACOGRAFO BOX TRUCK MACAE", "e": "TEC"}, {"p": "UGA2B60", "v": 523.0, "f": "DUTRACAR", "e": "THS"}, {"p": "BXZ3F52", "v": 42.0, "f": "DUTRACAR", "e": "THS"}, {"p": "FPG7G53", "v": 14.0, "f": "DUTRACAR", "e": "THS"}, {"p": "FET3H45", "v": 702.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "NAW6C82", "v": 407.0, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "TEC"}, {"p": "EXV3F24", "v": 957.14, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "ESTOQUE", "v": 121.82, "f": "SK SUPERMERCADOS LTDA", "e": ""}, {"p": "CFD4B98", "v": 704.0, "f": "FLECHA DIESEL COMERCIO E SERVICOS DE PECAS PARA VE", "e": "THS"}, {"p": "OAH6974", "v": 3800.0, "f": "FAMILIA TOP TRUCK", "e": "THS"}, {"p": "EFW6626", "v": 900.0, "f": "SOS REBOQUE", "e": "TEC"}, {"p": "OAH6974", "v": 2300.0, "f": "ATACADÃO COMERCIO E REPRESENTAÇÃO LTDA", "e": "THS"}, {"p": "CFD4B98", "v": 3300.0, "f": "THERMOTEC", "e": "THS"}, {"p": "OAH6974", "v": 1900.0, "f": "FRANCISCO DE ASSIS SILVA BEZERRA", "e": "THS"}, {"p": "EXV3F24", "v": 1100.0, "f": "G.K.R. MIRANDA COMERCIO DE RADIADORES LTDA", "e": "THS"}, {"p": "EFW6626", "v": 1435.0, "f": "CHUCAR COMERCIO E DISTRIBUIÇAI DE AUTOPEÇAS LTDA-M", "e": "TEC"}, {"p": "OAH6974", "v": 500.0, "f": "FAMILIA TOP TRUCK", "e": "THS"}, {"p": "GFL3G04", "v": 1325.0, "f": "TITAN DIESEL", "e": "THS"}, {"p": "GFL3G04", "v": 2950.0, "f": "TITAN DIESEL", "e": "THS"}, {"p": "NAW6C82", "v": 600.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "TEC"}, {"p": "NAW6C82", "v": 600.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "TEC"}, {"p": "STD3J94", "v": 1697.5, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "TEC"}, {"p": "FET3H45", "v": 500.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "OAH6974", "v": 230.0, "f": "JUNIOR DOS SANTOS SILVA", "e": "THS"}, {"p": "OAH6974", "v": 550.0, "f": "JOSÉ PORTO FREIRE", "e": "THS"}, {"p": "OAH6974", "v": 280.0, "f": "L C L DA COSTA BORRACHARIA & PECAS", "e": "THS"}, {"p": "MKD4H07", "v": 160.0, "f": "POSTO TIGRAO", "e": "TEC"}, {"p": "OAH6974", "v": 100.0, "f": "EDVAN PAULO DE JESUS DO NASCIMENTO 99968339172", "e": "THS"}, {"p": "GDY0H87", "v": 75.0, "f": "REAL ACESSORIOS", "e": "THS"}, {"p": "GDY0H87", "v": 1425.0, "f": "REAL ACESSORIOS", "e": "THS"}, {"p": "EXV3F24", "v": 236.7, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "RTW8H87", "v": 1750.0, "f": "VALDECIR (MANUTENÇÃO)", "e": "TEC"}, {"p": "EXV3F24", "v": 1130.0, "f": "VALDECIR (MANUTENÇÃO)", "e": "THS"}, {"p": "FPG7G53", "v": 700.0, "f": "VALDECIR (MANUTENÇÃO)", "e": "THS"}, {"p": "EXV3F24", "v": 4922.0, "f": "POSTO DE MOLAS GEMEOS MARTINS", "e": "THS"}, {"p": "FWK8A94", "v": 1082.26, "f": "R.A. FEDERZONI LOPES - FREIOS E PECAS", "e": "THS"}, {"p": "FET3H45", "v": 50.0, "f": "MAX LONAS E ACESSORIOS DE CARGA LTDA", "e": "THS"}, {"p": "NAW6C82", "v": 1050.0, "f": "CLIMAX FREE MANUTENCAO GERAIS", "e": "TEC"}, {"p": "OAH6974", "v": 755.34, "f": "PACAEMBU", "e": "THS"}, {"p": "PNEU", "v": 11388.0, "f": "DELLA VIA PNEUS", "e": ""}, {"p": "EFV6387", "v": 2825.0, "f": "TITAN DIESEL", "e": "TEC"}, {"p": "EFV6387", "v": 4420.0, "f": "TITAN DIESEL", "e": "TEC"}, {"p": "OAH6974", "v": 180.0, "f": "DELLA VIA PNEUS", "e": "THS"}, {"p": "NAW6C82", "v": 50.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "NAW6C82", "v": 85.0, "f": "PAI E FILHOS ACESSORIOS", "e": "TEC"}, {"p": "UGA2B60", "v": 175.0, "f": "NILSA PEREIRA FREITAS", "e": "THS"}, {"p": "GFL3G04", "v": 175.0, "f": "NILSA PEREIRA FREITAS", "e": "THS"}, {"p": "GFL3G04", "v": 100.0, "f": "AUTO MECANICA TEODORO LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 1144.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 3622.73, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "UGQ5H10", "v": 2280.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "FET3H45", "v": 500.0, "f": "TRUCKDIAGNOSE PEÇAS E SERVIÇOS LTDA", "e": "THS"}, {"p": "EFW6601", "v": 174.0, "f": "DUTRACAR", "e": "TEC"}]
    },
    mar: {
        records: 11, value: 8618.39, avgMaint: 783,
        types: [
            { name: 'CORRETIVA', count: 6, value: 4634.75 },
            { name: 'LAVAGEM', count: 1, value: 1950.0 },
            { name: 'PREVENTIVA', count: 1, value: 1533.64 },
            { name: 'BORRACHARIA', count: 3, value: 500.0 },
        ],
        suppliers: [
            { name: 'JA LAVA RAPIDO', value: 'R$ 1.950,00' },
            { name: 'PACAEMBU', value: 'R$ 1.718,22' },
            { name: 'PANTHER COMERCIO DE AUTO PECAS EIRELI', value: 'R$ 1.706,53' },
            { name: 'REDE DE POSTOS MARAJO TOCANTINS LTDA', value: 'R$ 1.533,64' },
            { name: 'G.K.R. MIRANDA COMERCIO DE RADIADORES LTDA', value: 'R$ 800,00' },
            { name: 'IGUANA AUTOPECAS E SERVICOS - LOJA 08', value: 'R$ 410,00' },
            { name: 'MARCELO PNEUS', value: 'R$ 250,00' },
        ],
        topVehicle: { plate: 'CFD4B98', value: '2.140,45' },
        topSupplier: { name: 'JA LAVA RAPIDO', value: '1.950,00' },
        allRecords: [{"p": "GDY0H87", "v": 100.0, "f": "BORRACHARIA GALO CEGO COMERCIO E SERVICOS LTDA", "e": "THS"}, {"p": "GGJ5E35", "v": 150.0, "f": "BORRACHARIA MOVEL JR", "e": "THS"}, {"p": "EXV3F24", "v": 1284.3, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "CFD4B98", "v": 1718.22, "f": "PACAEMBU", "e": "THS"}, {"p": "LAVAGEM", "v": 1950.0, "f": "JA LAVA RAPIDO", "e": ""}, {"p": "GFL3F04", "v": 200.0, "f": "IGUANA AUTOPECAS E SERVICOS - LOJA 08", "e": ""}, {"p": "GFL3F04", "v": 210.0, "f": "IGUANA AUTOPECAS E SERVICOS - LOJA 08", "e": ""}, {"p": "ESTOQUE", "v": 250.0, "f": "MARCELO PNEUS", "e": ""}, {"p": "CFD4B98", "v": 422.23, "f": "PANTHER COMERCIO DE AUTO PECAS EIRELI", "e": "THS"}, {"p": "EHJ0E76", "v": 1533.64, "f": "REDE DE POSTOS MARAJO TOCANTINS LTDA", "e": "THS"}, {"p": "EXV3F24", "v": 800.0, "f": "G.K.R. MIRANDA COMERCIO DE RADIADORES LTDA", "e": "THS"}]
    },
};

// Default empty financial month
const EMPTY_FIN = { records: 0, value: 0, avgMaint: 0, types: [], suppliers: [], topVehicle: { plate: '—', value: '0' }, topSupplier: { name: '—', value: '0' } };

// Build accumulated 'todos' for FINANCIAL_DATA
if (!FINANCIAL_DATA.todos) {
    FINANCIAL_DATA.todos = { records: 0, value: 0, avgMaint: 0, types: [], suppliers: [] };
    let allFinTypes = {};
    let allFinSupps = {};
    ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].forEach(m => {
        if (FINANCIAL_DATA[m]) {
            FINANCIAL_DATA.todos.records += FINANCIAL_DATA[m].records;
            FINANCIAL_DATA.todos.value += FINANCIAL_DATA[m].value;
            FINANCIAL_DATA[m].types.forEach(t => {
                if (!allFinTypes[t.name]) allFinTypes[t.name] = { count: 0, value: 0 };
                allFinTypes[t.name].count += t.count;
                allFinTypes[t.name].value += t.value;
            });
            FINANCIAL_DATA[m].suppliers.forEach(s => {
                let valStr = s.value.replace('R$ ', '').replace(/\./g, '').replace(',', '.');
                let val = parseFloat(valStr);
                if (!allFinSupps[s.name]) allFinSupps[s.name] = 0;
                allFinSupps[s.name] += val;
            });
        }
    });
    FINANCIAL_DATA.todos.avgMaint = FINANCIAL_DATA.todos.records > 0 ? Math.round(FINANCIAL_DATA.todos.value / FINANCIAL_DATA.todos.records) : 0;
    FINANCIAL_DATA.todos.types = Object.entries(allFinTypes).map(([k, v]) => ({ name: k, count: v.count, value: v.value })).sort((a,b)=>b.value-a.value);
    
    let suppArray = Object.entries(allFinSupps).map(([k, v]) => ({ name: k, valNum: v, value: v.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2}) })).sort((a,b)=>b.valNum-a.valNum);
    FINANCIAL_DATA.todos.suppliers = suppArray.map(s => ({ name: s.name, value: 'R$ ' + s.value }));
    FINANCIAL_DATA.todos.topSupplier = suppArray.length > 0 ? { name: suppArray[0].name, value: suppArray[0].value } : { name: '—', value: '0' };
}

// Monthly Vehicle Ranking (Financial Analysis)
const FIN_VEHICLE_RANKINGS = {
    todos: [
        { placa: 'EXV3F24', modelo: '2022', especie: 'THS', valor: 19313.87, count: 16 },
        { placa: 'PNEU', modelo: '—', especie: '—', valor: 11388.0, count: 1 },
        { placa: 'GFL3G04', modelo: '2018', especie: 'THS', valor: 10619.0, count: 11 },
        { placa: 'OAH6974', modelo: '2013', especie: 'THS', valor: 10595.34, count: 10 },
        { placa: 'CFD4B98', modelo: '2020', especie: 'THS', valor: 7639.65, count: 6 },
        { placa: 'EFV6387', modelo: '2010', especie: 'TEC', valor: 7573.0, count: 5 },
        { placa: 'FWK8A94', modelo: '2023', especie: 'THS', valor: 5988.06, count: 7 },
        { placa: 'LAVAGEM', modelo: '—', especie: '—', valor: 5090.0, count: 4 },
        { placa: 'FPG7G53', modelo: '2020', especie: 'THS', valor: 5064.0, count: 11 },
        { placa: 'EFW6626', modelo: '2011', especie: 'TEC', valor: 5000.0, count: 5 },
        { placa: 'FET3H45', modelo: '2022', especie: 'THS', valor: 4558.0, count: 8 },
        { placa: 'QSQ3D59', modelo: '2025', especie: 'THS', valor: 4457.76, count: 4 },
        { placa: 'NAW6C82', modelo: '2024', especie: 'TEC', valor: 3985.0, count: 9 },
        { placa: 'UGA2B60', modelo: '2025', especie: 'THS', valor: 3958.0, count: 4 },
        { placa: 'NAW6I81', modelo: '2024', especie: 'TEC', valor: 3663.2, count: 4 },
        { placa: 'RECAPAGEM', modelo: '—', especie: '—', valor: 3320.0, count: 1 },
        { placa: 'STD3J94', modelo: '203', especie: 'TEC', valor: 3097.99, count: 3 },
        { placa: 'ÓLEO MOTOR', modelo: '—', especie: '—', valor: 2782.0, count: 1 },
        { placa: 'GDY0H87', modelo: '2021', especie: 'THS', valor: 2625.71, count: 5 },
        { placa: 'EHJ0E76', modelo: '2021', especie: 'THS', valor: 2450.53, count: 4 },
        { placa: 'UGQ5H10', modelo: '2025', especie: 'THS', valor: 2280.0, count: 1 },
        { placa: 'RZC2C37', modelo: '2023', especie: 'TEC', valor: 2009.33, count: 2 },
        { placa: 'EFW6601', modelo: '2011', especie: 'TEC', valor: 1794.0, count: 3 },
        { placa: 'RTW8H87', modelo: '2021', especie: 'TEC', valor: 1750.0, count: 1 },
        { placa: 'RZC2C27', modelo: '2023', especie: 'TEC', valor: 1709.33, count: 3 },
        { placa: 'ESTOQUE', modelo: '—', especie: '—', valor: 1624.73, count: 7 },
        { placa: 'BXZ3F52', modelo: '2023', especie: 'THS', valor: 1399.6, count: 3 },
        { placa: 'GGJ5E35', modelo: '2023', especie: 'THS', valor: 1374.6, count: 4 },
        { placa: 'EMPILAHDEIRA', modelo: '—', especie: '—', valor: 1000.0, count: 1 },
        { placa: 'ELY9J91', modelo: '2023', especie: 'THS', valor: 864.7, count: 1 },
        { placa: 'GGW9G47', modelo: '2022', especie: 'THS', valor: 831.65, count: 3 },
        { placa: 'ARLA', modelo: '—', especie: '—', valor: 629.4, count: 1 },
        { placa: 'OAN8755', modelo: '2013', especie: 'THS', valor: 490.0, count: 1 },
        { placa: 'GFL3F04', modelo: '—', especie: '—', valor: 410.0, count: 2 },
        { placa: 'GIQ2I12', modelo: '—', especie: '—', valor: 400.0, count: 1 },
        { placa: 'FZZ2B94', modelo: '2022', especie: 'THS', valor: 350.0, count: 2 },
        { placa: 'GDD3C49', modelo: '2020', especie: 'THS', valor: 209.33, count: 2 },
        { placa: 'MKD4H07', modelo: '2012', especie: 'TEC', valor: 160.0, count: 1 },
        { placa: 'GDYOH87', modelo: '—', especie: '—', valor: 150.0, count: 1 },
        { placa: 'OAH6984', modelo: '2013', especie: 'THS', valor: 50.0, count: 1 },
    ],
    jan: [
        { placa: 'GFL3G04', modelo: '2018', especie: 'THS', valor: 5919.0, count: 6 },
        { placa: 'QSQ3D59', modelo: '2025', especie: 'THS', valor: 4307.76, count: 3 },
        { placa: 'EXV3F24', modelo: '2022', especie: 'THS', valor: 3817.0, count: 5 },
        { placa: 'FPG7G53', modelo: '2020', especie: 'THS', valor: 3350.0, count: 7 },
        { placa: 'RECAPAGEM', modelo: '—', especie: '—', valor: 3320.0, count: 1 },
        { placa: 'UGA2B60', modelo: '2025', especie: 'THS', valor: 3260.0, count: 2 },
        { placa: 'FWK8A94', modelo: '2023', especie: 'THS', valor: 3005.8, count: 4 },
        { placa: 'FET3H45', modelo: '2022', especie: 'THS', valor: 2806.0, count: 4 },
        { placa: 'ÓLEO MOTOR', modelo: '—', especie: '—', valor: 2782.0, count: 1 },
        { placa: 'EFW6626', modelo: '2011', especie: 'TEC', valor: 2665.0, count: 3 },
        { placa: 'LAVAGEM', modelo: '—', especie: '—', valor: 2210.0, count: 2 },
        { placa: 'RZC2C37', modelo: '2023', especie: 'TEC', valor: 1920.0, count: 1 },
        { placa: 'EFW6601', modelo: '2011', especie: 'TEC', valor: 1620.0, count: 2 },
        { placa: 'RZC2C27', modelo: '2023', especie: 'TEC', valor: 1620.0, count: 2 },
        { placa: 'STD3J94', modelo: '203', especie: 'TEC', valor: 1400.49, count: 2 },
        { placa: 'GGJ5E35', modelo: '2023', especie: 'THS', valor: 1224.6, count: 3 },
        { placa: 'ESTOQUE', modelo: '—', especie: '—', valor: 1145.54, count: 4 },
        { placa: 'NAW6C82', modelo: '2024', especie: 'TEC', valor: 1033.0, count: 2 },
        { placa: 'GDY0H87', modelo: '2021', especie: 'THS', valor: 925.71, count: 1 },
        { placa: 'EHJ0E76', modelo: '2021', especie: 'THS', valor: 916.89, count: 3 },
        { placa: 'ELY9J91', modelo: '2023', especie: 'THS', valor: 864.7, count: 1 },
        { placa: 'GGW9G47', modelo: '2022', especie: 'THS', valor: 757.65, count: 2 },
        { placa: 'GIQ2I12', modelo: '—', especie: '—', valor: 400.0, count: 1 },
        { placa: 'EFV6387', modelo: '2010', especie: 'TEC', valor: 328.0, count: 3 },
        { placa: 'FZZ2B94', modelo: '2022', especie: 'THS', valor: 300.0, count: 1 },
        { placa: 'CFD4B98', modelo: '2020', especie: 'THS', valor: 250.0, count: 1 },
        { placa: 'GDYOH87', modelo: '—', especie: '—', valor: 150.0, count: 1 },
        { placa: 'GDD3C49', modelo: '2020', especie: 'THS', valor: 120.0, count: 1 },
        { placa: 'OAH6984', modelo: '2013', especie: 'THS', valor: 50.0, count: 1 },
    ],
    feb: [
        { placa: 'EXV3F24', modelo: '2022', especie: 'THS', valor: 13412.57, count: 9 },
        { placa: 'PNEU', modelo: '—', especie: '—', valor: 11388.0, count: 1 },
        { placa: 'OAH6974', modelo: '2013', especie: 'THS', valor: 10595.34, count: 10 },
        { placa: 'EFV6387', modelo: '2010', especie: 'TEC', valor: 7245.0, count: 2 },
        { placa: 'CFD4B98', modelo: '2020', especie: 'THS', valor: 5249.2, count: 3 },
        { placa: 'GFL3G04', modelo: '2018', especie: 'THS', valor: 4700.0, count: 5 },
        { placa: 'NAW6I81', modelo: '2024', especie: 'TEC', valor: 3663.2, count: 4 },
        { placa: 'FWK8A94', modelo: '2023', especie: 'THS', valor: 2982.26, count: 3 },
        { placa: 'NAW6C82', modelo: '2024', especie: 'TEC', valor: 2952.0, count: 7 },
        { placa: 'EFW6626', modelo: '2011', especie: 'TEC', valor: 2335.0, count: 2 },
        { placa: 'UGQ5H10', modelo: '2025', especie: 'THS', valor: 2280.0, count: 1 },
        { placa: 'FET3H45', modelo: '2022', especie: 'THS', valor: 1752.0, count: 4 },
        { placa: 'RTW8H87', modelo: '2021', especie: 'TEC', valor: 1750.0, count: 1 },
        { placa: 'FPG7G53', modelo: '2020', especie: 'THS', valor: 1714.0, count: 4 },
        { placa: 'STD3J94', modelo: '203', especie: 'TEC', valor: 1697.5, count: 1 },
        { placa: 'GDY0H87', modelo: '2021', especie: 'THS', valor: 1600.0, count: 3 },
        { placa: 'BXZ3F52', modelo: '2023', especie: 'THS', valor: 1399.6, count: 3 },
        { placa: 'EMPILAHDEIRA', modelo: '—', especie: '—', valor: 1000.0, count: 1 },
        { placa: 'LAVAGEM', modelo: '—', especie: '—', valor: 930.0, count: 1 },
        { placa: 'UGA2B60', modelo: '2025', especie: 'THS', valor: 698.0, count: 2 },
        { placa: 'ARLA', modelo: '—', especie: '—', valor: 629.4, count: 1 },
        { placa: 'OAN8755', modelo: '2013', especie: 'THS', valor: 490.0, count: 1 },
        { placa: 'ESTOQUE', modelo: '—', especie: '—', valor: 229.19, count: 2 },
        { placa: 'EFW6601', modelo: '2011', especie: 'TEC', valor: 174.0, count: 1 },
        { placa: 'MKD4H07', modelo: '2012', especie: 'TEC', valor: 160.0, count: 1 },
        { placa: 'QSQ3D59', modelo: '2025', especie: 'THS', valor: 150.0, count: 1 },
        { placa: 'RZC2C27', modelo: '2023', especie: 'TEC', valor: 89.33, count: 1 },
        { placa: 'RZC2C37', modelo: '2023', especie: 'TEC', valor: 89.33, count: 1 },
        { placa: 'GDD3C49', modelo: '2020', especie: 'THS', valor: 89.33, count: 1 },
        { placa: 'GGW9G47', modelo: '2022', especie: 'THS', valor: 74.0, count: 1 },
        { placa: 'FZZ2B94', modelo: '2022', especie: 'THS', valor: 50.0, count: 1 },
    ],
    mar: [
        { placa: 'CFD4B98', modelo: '2020', especie: 'THS', valor: 2140.45, count: 2 },
        { placa: 'EXV3F24', modelo: '2022', especie: 'THS', valor: 2084.3, count: 2 },
        { placa: 'LAVAGEM', modelo: '—', especie: '—', valor: 1950.0, count: 1 },
        { placa: 'EHJ0E76', modelo: '2021', especie: 'THS', valor: 1533.64, count: 1 },
        { placa: 'GFL3F04', modelo: '—', especie: '—', valor: 410.0, count: 2 },
        { placa: 'ESTOQUE', modelo: '—', especie: '—', valor: 250.0, count: 1 },
        { placa: 'GGJ5E35', modelo: '2023', especie: 'THS', valor: 150.0, count: 1 },
        { placa: 'GDY0H87', modelo: '2021', especie: 'THS', valor: 100.0, count: 1 },
    ],
};

function buildFinVehicleChart(month = 'todos') {
    const specFilter = document.getElementById('finModelFilter') ? document.getElementById('finModelFilter').value : 'todos';
    const plateSearch = document.getElementById('finSearchPlate') ? document.getElementById('finSearchPlate').value.toUpperCase() : '';
    let rawData = FIN_VEHICLE_RANKINGS[month] || [];

    // Map IPVA_DATA for correct especie lookup
    const ipvaMap = {};
    if (typeof IPVA_DATA !== 'undefined') {
        IPVA_DATA.forEach(v => {
            if (v.placa) ipvaMap[v.placa.replace(/\s/g, '').toUpperCase()] = v.especie;
        });
    }

    // Enrich data and fix THS/TEC mismatch
    let enrichedData = rawData.map(v => {
        const key = v.placa.replace(/\s/g, '').toUpperCase();
        let species = v.especie;
        // If especie is missing or is an company ID, try to get from IPVA_DATA
        if (!species || species === 'THS' || species === 'TEC' || species === '—') {
            species = ipvaMap[key] || species;
        }
        return { ...v, especie: species };
    });

    // Apply filters
    if (specFilter !== 'todos') {
        enrichedData = enrichedData.filter(v => 
            v.especie === specFilter || (v.modelo && v.modelo.includes(specFilter))
        );
    }
    if (plateSearch) {
        enrichedData = enrichedData.filter(v => v.placa.toUpperCase().includes(plateSearch));
    }

    // Sort descending by value and take TOP 4
    enrichedData.sort((a, b) => b.valor - a.valor);
    const displayData = enrichedData.slice(0, 4);

    const bgColors = ['#2563eb', '#4f8cff', '#60a5fa', '#93c5fd', '#3b82f6', '#38bdf8', '#0ea5e9', '#0284c7', '#1d4ed8', '#1e40af'];

    createChart('finVehicleRankingChart', {
        type: 'bar',
        data: {
            labels: displayData.map(v => v.placa),
            datasets: [{
                label: 'Gasto (R$)',
                data: displayData.map(v => v.valor),
                backgroundColor: bgColors.slice(0, displayData.length),
                borderWidth: 0,
                borderRadius: 8
            }]
        },
        options: {
            ...baseOpts,
            indexAxis: 'y',
            plugins: {
                ...baseOpts.plugins,
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const v = displayData[ctx.dataIndex];
                            return `R$ ${v.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} — ${v.count} registros — ${v.especie} (${v.modelo})`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + (v / 1000).toFixed(1) + 'k' } },
                y: { grid: { display: false } }
            }
        }
    });
}

// Top toll routes by spending
const TOP_TOLL_ROUTES = [
    { trecho: 'BR116', valor: 11865.71, count: 380 },
    { trecho: 'BR101', valor: 10060.62, count: 586 },
    { trecho: 'SP065', valor: 6492.9, count: 293 },
    { trecho: 'SP348', valor: 6136.8, count: 309 },
    { trecho: 'SP330', valor: 5187.55, count: 317 },
    { trecho: 'SP070', valor: 2857.0, count: 246 },
    { trecho: 'BR493', valor: 2533.18, count: 52 },
    { trecho: 'MOREIRA CESAR NORTE', valor: 2039.04, count: 53 },
    { trecho: 'SP021', valor: 2036.0, count: 253 },
    { trecho: 'SP075', valor: 2021.69, count: 79 },
];

// Overview: Preventive Revision status chart (OK / ALERTA / VENCIDA)
function buildOverviewPreventiveChart() {
    if (typeof REVISAO_DATA === 'undefined' || REVISAO_DATA.length === 0) {
        console.warn("REVISAO_DATA is empty or undefined.");
        return;
    }

    const okCount = REVISAO_DATA.filter(v => v.status === 'OK').length;
    const alertaCount = REVISAO_DATA.filter(v => v.status === 'ALERTA').length;
    const vencidaCount = REVISAO_DATA.filter(v => v.status === 'VENCIDA').length;

    createChart('overviewPreventiveChart', {
        type: 'doughnut',
        data: {
            labels: [`Em Dia (${okCount})`, `Alerta (${alertaCount})`, `Vencidas (${vencidaCount})`],
            datasets: [{
                data: [okCount, alertaCount, vencidaCount],
                backgroundColor: ['#1d4ed8', '#60a5fa', '#ef4444'],
                borderWidth: 0, borderRadius: 4
            }]
        },
        options: { ...baseOpts, cutout: '68%' }
    });
}


// Render Preventive Maintenance table
function renderPreventiveTable() {
    if (typeof REVISAO_DATA === 'undefined') return;

    let tableHtml = '';
    let criticalHtml = '';
    let alertHtml = '';

    // Sort by remaining km: Vencidas first, then lowest remaining
    const sorted = [...REVISAO_DATA].sort((a, b) => {
        if (a.status === 'VENCIDA' && b.status !== 'VENCIDA') return -1;
        if (a.status !== 'VENCIDA' && b.status === 'VENCIDA') return 1;
        return a.kmRestantes - b.kmRestantes;
    });

    const formatKm = (v) => v !== null && v !== undefined ? v.toLocaleString('pt-BR') : '—';

    sorted.forEach(v => {
        const badgeClass = v.status === 'VENCIDA' ? 'critico' : v.status === 'ALERTA' ? 'alerta' : 'ok';
        const kmColor = v.kmRestantes < 0 ? 'color:#ef4444' : v.kmRestantes < 500 ? 'color:#fb923c' : 'color:#34d399';

        // Table row (8 columns)
        tableHtml += `<tr>
            <td style="font-weight:600;color:#4f8cff">${v.placa}</td>
            <td>${v.modelo || '—'}</td>
            <td style="text-align:center">${formatKm(v.intervalo)}</td>
            <td style="text-align:center">${formatKm(v.kmTroca)}</td>
            <td style="text-align:center">${formatKm(v.kmProxima)}</td>
            <td style="text-align:center">${formatKm(v.kmAtual)}</td>
            <td style="text-align:center;font-weight:700;${kmColor}">${formatKm(v.kmRestantes)}</td>
            <td><span class="badge ${badgeClass}">${v.status}</span></td>
        </tr>`;

        // Alert sections
        if (v.status === 'VENCIDA') {
            criticalHtml += `<div class="stat-row">
                <span class="label">🚨 ${v.placa} — ${v.modelo || ''}</span>
                <span class="value" style="color:#ef4444">${formatKm(v.kmRestantes)} km vencidos</span>
            </div>`;
        } else if (v.status === 'ALERTA') {
            alertHtml += `<div class="stat-row">
                <span class="label">${v.placa} — ${v.modelo || ''}</span>
                <span class="value" style="color:#fb923c">${formatKm(v.kmRestantes)} km para vencer</span>
            </div>`;
        }
    });

    setHtml('preventive-table-body', tableHtml);
    setHtml('preventive-critical-list', criticalHtml || '<div class="stat-row"><span class="label">Nenhuma revisão vencida</span><span class="value" style="color:#4ade80">Todas em dia ✅</span></div>');
    setHtml('preventive-alert-list', alertHtml || '<div class="stat-row"><span class="label">Nenhum veículo em alerta próximo</span></div>');

    // Update KPIs for the tab
    const totalCount = REVISAO_DATA.length;
    const okCount = REVISAO_DATA.filter(v => v.status === 'OK').length;
    const alertaCount = REVISAO_DATA.filter(v => v.status === 'ALERTA').length;
    const vencidaCount = REVISAO_DATA.filter(v => v.status === 'VENCIDA').length;

    setText('kpi-rev-total', totalCount);
    setText('kpi-rev-critico', vencidaCount);
    setText('kpi-rev-critico-sub', vencidaCount === 0 ? 'nenhuma revisão vencida' : `${vencidaCount} veículos vencidos`);
    setText('kpi-rev-alerta', alertaCount);
    setText('kpi-rev-ok', okCount);
}

// Overview: Top toll routes chart
function buildOverviewTollChart() {
    const HIGHWAY_NAMES = {
        'SP021': 'SP021 — Rodoanel Mario Covas',
        'SP075': 'SP075 — Sorocaba, Itu, Campinas',
        'SP070': 'SP070 — Rod. Airton Senna (Penha a Guararema)',
        'BR116': 'BR116 — Pres. Dutra / Régis Bittencourt',
        'BR101': 'BR101 — Rio-Santos / Translitorânea',
        'SP065': 'SP065 — Rod. Dom Pedro I',
        'SP348': 'SP348 — Rod. dos Bandeirantes',
        'SP330': 'SP330 — Rod. Anhanguera',
        'BR493': 'BR493 — Arco Metropolitano / Magé-Manilha',
        'BR153': 'BR153 — Rod. Transbrasiliana'
    };

    createChart('overviewTollChart', {
        type: 'bar',
        data: {
            labels: TOP_TOLL_ROUTES.map(r => HIGHWAY_NAMES[r.trecho] || r.trecho),
            datasets: [{
                label: 'Gasto (R$)',
                data: TOP_TOLL_ROUTES.map(r => r.valor),
                backgroundColor: ['#2563eb', '#3b82f6', '#4f8cff', '#60a5fa', '#7dd3fc', '#93c5fd', '#38bdf8', '#0ea5e9', '#0284c7', '#1d4ed8'],
                borderWidth: 0, borderRadius: 8
            }]
        },
        options: {
            ...baseOpts,
            indexAxis: 'y',
            plugins: {
                ...baseOpts.plugins,
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const r = TOP_TOLL_ROUTES[ctx.dataIndex];
                            return `R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} — ${r.count} passagens`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + (v / 1000).toFixed(1) + 'k' } },
                y: { grid: { display: false }, ticks: { font: { size: 10 } } } // Reduced font size for longer labels
            }
        }
    });
}

// Empty month template (used for months without data yet)
const EMPTY_MONTH = (label) => ({
    label,
    fuel: { records: 0, liters: 0, value: 0, avgLiter: 0 },
    maintenance: { records: 0, value: 0 },
    fuelProducts: { labels: ['Sem dados'], values: [0], liters: [0], details: [{ name: 'Aguardando dados', count: 0, liters: '0', value: '0' }] },
    fuelVehiclesValue: { labels: ['—'], data: [0] },
    fuelVehiclesLiters: { labels: ['—'], data: [0] },
    maintTypes: { labels: ['Sem dados'], data: [0] },
    maintTypesCount: { labels: ['Sem dados'], data: [0] },
    maintTypeDetails: [{ name: `Nenhum registro`, count: 0, value: '0' }],
    suppliers: [{ name: 'Nenhum registro', value: 'R$ 0,00' }],
    topMaintVehicle: { plate: '—', value: '0' },
    topSupplier: { name: '—', value: '0' },
    avgMaint: 0,
    fuelTable: [],
    trendData: [0, 0, 0, 0, 0, 0, 0],
    weeklyMaint: [0, 0, 0, 0, 0],
    weeklyFuel: [0, 0, 0, 0, 0]
});

// Register months Mar-Dec if not already defined
const MONTH_LABELS = {
    mar: 'Março 2026', apr: 'Abril 2026', may: 'Maio 2026', jun: 'Junho 2026',
    jul: 'Julho 2026', aug: 'Agosto 2026', sep: 'Setembro 2026', oct: 'Outubro 2026',
    nov: 'Novembro 2026', dec: 'Dezembro 2026'
};
Object.entries(MONTH_LABELS).forEach(([key, label]) => {
    if (!DATA[key]) DATA[key] = EMPTY_MONTH(label);
});

// Build accumulated "todos" dynamically from all months

// ═══════════════════════════════════════
// CHART INSTANCES (for updating)
// ═══════════════════════════════════════
let charts = {};

function createChart(id, config) {
    if (charts[id]) charts[id].destroy();
    charts[id] = new Chart(document.getElementById(id), config);
    return charts[id];
}

// ═══════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════
function populateFinSuppliers(month) {
    const fin = FINANCIAL_DATA[month] || EMPTY_FIN;
    const select = document.getElementById('finSupplierFilter');
    if (!select) return;

    let html = '<option value="todos">Todos os Fornecedores</option>';
    if (fin.suppliers) {
        fin.suppliers.forEach(s => {
            html += `<option value="${s.name}">${s.name}</option>`;
        });
    }
    select.innerHTML = html;
}

function filterFinancial() {
    const month = document.getElementById('monthFilter').value;
    const type = document.getElementById('finModelFilter').value;
    const plate = document.getElementById('finSearchPlate').value.toUpperCase();
    const supplier = document.getElementById('finSupplierFilter').value;

    const fin = FINANCIAL_DATA[month] || EMPTY_FIN;

    // 1. Update Vehicle Ranking Chart
    buildFinVehicleChart(month, type, plate);

    // 2. Update Supplier Details list
    let suppHtml = '';
    if (fin.suppliers) {
        fin.suppliers.forEach(s => {
            if (supplier === 'todos' || s.name === supplier) {
                suppHtml += `<div class="stat-row"><span class="label">${s.name}</span><span class="value">${s.value}</span></div>`;
            }
        });
    }
    setHtml('supplier-details', suppHtml);

    // 3. Dynamic KPIs based on filters
    let filteredRecords = fin.allRecords || [];
    
    // Apply filters matching
    if (type !== 'todos') {
        filteredRecords = filteredRecords.filter(r => r.e === type);
    }
    if (plate) {
        filteredRecords = filteredRecords.filter(r => r.p.includes(plate));
    }
    if (supplier !== 'todos') {
        filteredRecords = filteredRecords.filter(r => r.f === supplier);
    }

    // Compute metrics
    let dynTotal = 0;
    let suppTotals = {};
    let vehTotals = {};

    filteredRecords.forEach(r => {
        dynTotal += r.v;
        suppTotals[r.f] = (suppTotals[r.f] || 0) + r.v;
        vehTotals[r.p] = (vehTotals[r.p] || 0) + r.v;
    });

    const count = filteredRecords.length;
    const avg = count > 0 ? dynTotal / count : 0;
    
    // Find top supplier
    let topSupp = 'Nenhum';
    let topSuppVal = 0;
    Object.entries(suppTotals).forEach(([name, val]) => {
        if (val > topSuppVal) { topSupp = name; topSuppVal = val; }
    });

    // Find top vehicle
    let topVeh = 'Nenhum';
    let topVehVal = 0;
    Object.entries(vehTotals).forEach(([p, val]) => {
        if (val > topVehVal) { topVeh = p; topVehVal = val; }
    });

    // Format helpers
    const formatBRL = (val) => val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    // Update the DOM elements
    setText('kpi-fin-total', `R$ ${(dynTotal / 1000).toFixed(1)}k`);
    setText('kpi-fin-total-sub', `${count} registros`);
    setText('kpi-fin-avg', avg > 0 ? `R$ ${Math.round(avg).toLocaleString('pt-BR')}` : '—');
    setText('kpi-fin-supplier', topSupp);
    setText('kpi-fin-supplier-sub', `R$ ${formatBRL(topSuppVal)}`);
    setText('kpi-fin-vehicle', topVeh);
    setText('kpi-fin-vehicle-sub', `R$ ${formatBRL(topVehVal)}`);
}

function updateDashboard(month) {
    const d = DATA[month];

    // Update KPIs - Overview — compute REAL total from all sources
    // Exclude 'COMBUSTIVEL' from maintenance to avoid double-counting with fuel slice
    let fuelMaintValue = 0;
    if (d.maintTypes && d.maintTypes.labels) {
        const fuelIdx = d.maintTypes.labels.indexOf('COMBUSTIVEL');
        if (fuelIdx !== -1) fuelMaintValue = d.maintTypes.data[fuelIdx];
    }
    let fuelMaintCount = 0;
    if (d.maintTypesCount && d.maintTypesCount.labels) {
        const fuelIdx = d.maintTypesCount.labels.indexOf('COMBUSTIVEL');
        if (fuelIdx !== -1) fuelMaintCount = d.maintTypesCount.data[fuelIdx];
    }
    const overviewFuel = d.fuel.value;
    const overviewFin = d.maintenance.value - fuelMaintValue;
    const overviewToll = (month === 'todos' ? PEDAGIO_MONTHLY_DATA : PEDAGIO_MONTHLY_DATA.filter(r => r.mes === month)).reduce((s, r) => s + r.total, 0);
    const overviewOps = (month === 'todos' ? OPS_DATA : OPS_DATA.filter(r => r.mes === month)).reduce((s, r) => s + r.valor, 0);
    const overviewFines = (month === 'todos' ? MULTAS_DATA : MULTAS_DATA.filter(r => r.mes === month)).reduce((s, r) => s + r.valor, 0);

    // Preventive Reviews - Overview KPI (Dynamic)
    // Note: REVISAO_DATA is current state, if month is 'todos' or 'feb' (current) we show it.
    // If user selects past months, we might not have historical REVISAO_DATA, 
    // but for now we make it react to the 'todos' vs 'month' logic if the data had month info.
    // Since REVISAO_DATA is a snapshot, we show it for 'todos' and current month.
    const revCritico = REVISAO_DATA.filter(v => v.status === 'VENCIDA CONNECTED' || v.status === 'VENCIDA').length;
    const revAlerta = REVISAO_DATA.filter(v => v.status === 'ALERTA').length;

    setText('kpi-overview-rev-critico', revCritico);
    setText('kpi-overview-rev-alerta', `+ ${revAlerta} alertas próximos`);
    // Change color of critico value if > 0
    const critElem = document.getElementById('kpi-overview-rev-critico');
    if (critElem) {
        critElem.style.color = revCritico > 0 ? '#ef4444' : '#60a5fa';
    }

    const gastoTotal = overviewFuel + overviewFin + overviewToll + overviewOps;
    const totalRegistros = d.fuel.records + (d.maintenance.records - fuelMaintCount) + (month === 'todos' ? PEDAGIO_MONTHLY_DATA : PEDAGIO_MONTHLY_DATA.filter(r => r.mes === month)).length + (month === 'todos' ? OPS_DATA : OPS_DATA.filter(r => r.mes === month)).length;
    setText('kpi-gasto-total', `R$ ${(gastoTotal / 1000).toFixed(1)}k`);
    setText('kpi-gasto-total-sub', `${totalRegistros} registros`);
    setText('kpi-gasto-fuel-sub', `${d.fuel.records} abastecimentos`);

    // Update KPIs - Financial (Corretiva + Preventiva + Estoque only)
    const fin = FINANCIAL_DATA[month] || EMPTY_FIN;
    setText('kpi-fin-total', `R$ ${(fin.value / 1000).toFixed(1)}k`);
    setText('kpi-fin-total-sub', `${fin.records} registros`);
    setText('kpi-fin-avg', fin.avgMaint > 0 ? `R$ ${fin.avgMaint.toLocaleString('pt-BR')}` : '—');
    setText('kpi-fin-supplier', fin.topSupplier.name);
    setText('kpi-fin-supplier-sub', `R$ ${fin.topSupplier.value}`);
    setText('kpi-fin-vehicle', fin.topVehicle.plate);
    setText('kpi-fin-vehicle-sub', `R$ ${fin.topVehicle.value}`);

    // Update KPIs - Fuel
    setText('kpi-fuel-records', d.fuel.records);
    setText('kpi-fuel-records-sub', `registros — ${d.label}`);
    setText('kpi-fuel-liters', `${d.fuel.liters.toLocaleString('pt-BR')} L`);
    setText('kpi-fuel-value', `R$ ${(d.fuel.value / 1000).toFixed(1)}k`);
    setText('kpi-fuel-avg', `R$ ${d.fuel.avgLiter.toFixed(2).replace('.', ',')}`);

    // Update fuel product details
    let prodHtml = '';
    d.fuelProducts.details.forEach(p => {
        prodHtml += `<div class="stat-row"><span class="label">${p.name}</span><span class="value">${p.count} reg — ${p.liters}L — R$ ${p.value}</span></div>`;
    });
    setHtml('fuel-product-details', prodHtml);

    // Update maintenance type details (financial only: Corretiva, Preventiva, Estoque)
    let maintHtml = '';
    fin.types.forEach(t => {
        maintHtml += `<div class="stat-row"><span class="label">${t.name}</span><span class="value">${t.count} registros — R$ ${(t.value / 1000).toFixed(1)}k</span></div>`;
    });
    setHtml('maint-type-details', maintHtml);

    // Update supplier details and filters
    populateFinSuppliers(month);
    filterFinancial();

    // Update fuel table
    let tableHtml = '';
    if (d.fuelTable) {
        d.fuelTable.forEach(r => {
            tableHtml += `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`;
        });
    }
    setHtml('fuel-table-body', tableHtml);

    // Update reports
    setText('rep-period', d.label);
    setText('rep-maint-records', `${d.maintenance.records} registros`);
    setText('rep-maint-value', `R$ ${d.maintenance.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    setText('rep-fuel-records', `${d.fuel.records} registros`);
    setText('rep-fuel-value', `R$ ${d.fuel.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    setText('rep-total', `R$ ${(d.maintenance.value + d.fuel.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    setText('rep-avg-liter', `R$ ${d.fuel.avgLiter.toFixed(2).replace('.', ',')}`);
    setText('rep-liters', `${d.fuel.liters.toLocaleString('pt-BR')} litros`);

    // Update Overview KPIs — IPVA, Licenciamento, Pedágio, Operação
    updateOverviewIPVA(month);

    // Pedágio — filtered by month
    if (typeof renderPreventiveTable === 'function') renderPreventiveTable();

    // Pedágio — filtered by month
    const tollData = (month === 'todos') ? PEDAGIO_MONTHLY_DATA : PEDAGIO_MONTHLY_DATA.filter(r => r.mes === month);
    const totalToll = tollData.reduce((s, r) => s + r.total, 0);
    const totalPassagens = tollData.reduce((s, r) => s + r.passagens, 0);
    setText('kpi-overview-toll', `R$ ${(totalToll / 1000).toFixed(1)}k`);
    setText('kpi-overview-toll-sub', `${totalPassagens} passagens`);

    // Operação — filtered by month
    const opsData = (month === 'todos') ? OPS_DATA : OPS_DATA.filter(r => r.mes === month);
    const totalOps = opsData.reduce((s, r) => s + r.valor, 0);
    setText('kpi-overview-ops', `R$ ${(totalOps / 1000).toFixed(1)}k`);
    setText('kpi-overview-ops-sub', `${opsData.length} registros`);


    // Multas — filtered by month
    const finesData = (month === 'todos') ? MULTAS_DATA : MULTAS_DATA.filter(r => r.mes === month);
    const totalFines = finesData.reduce((s, r) => s + r.valor, 0);
    setText('kpi-overview-fines', `R$ ${(totalFines / 1000).toFixed(1)}k`);
    setText('kpi-overview-fines-sub', `${finesData.length} multas`);
    // Rebuild charts
    const components = {
        fuel: overviewFuel,
        fin: overviewFin,
        toll: overviewToll,
        ops: overviewOps,
        fines: overviewFines,
        total: gastoTotal
    };
    buildCharts(d, fin, components);
    // Already called via filterFinancial() inside updateDashboard
    // buildFinVehicleChart(month);
    buildOverviewPreventiveChart();
    buildOverviewTollChart();
}


function buildCharts(d, fin, comp) {
    if (!fin) fin = EMPTY_FIN;
    const chartLabels = ["Combustível", "Manutenção", "Pedágio", "Operação"];
    const chartData = [comp.fuel, comp.fin, comp.toll, comp.ops];
    const chartColors = ['#60a5fa', '#2563eb', '#38bdf8', '#93c5fd'];

    createChart('compositionChart', {
        type: 'doughnut',
        data: {
            labels: chartLabels.map((l, i) => `${l} R$${(chartData[i] / 1000).toFixed(1)}k`),
            datasets: [{ data: chartData, backgroundColor: chartColors, borderWidth: 0, borderRadius: 4 }]
        },
        options: {
            ...baseOpts, cutout: '72%',
            plugins: {
                ...baseOpts.plugins,
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const val = ctx.raw || 0;
                            const pct = comp.total > 0 ? ((val / comp.total) * 100).toFixed(1) : 0;
                            return `${ctx.label.split(' R$')[0]}: ${pct}% do gasto total`;
                        }
                    }
                }
            }
        }
    });
    // Filter out "Outros" from maintenance types chart
    const mtFilteredLabels = [];
    const mtFilteredData = [];
    d.maintTypes.labels.forEach((l, i) => {
        if (l !== 'Outros') { mtFilteredLabels.push(l); mtFilteredData.push(d.maintTypes.data[i]); }
    });
    createChart('maintenanceTypeChart', {
        type: 'doughnut',
        data: {
            labels: mtFilteredLabels.map((l, i) => `${l} — R$${(mtFilteredData[i] / 1000).toFixed(1)}k`),
            datasets: [{
                data: mtFilteredData,
                backgroundColor: ['#1d4ed8', '#2563eb', '#3b82f6', '#4f8cff', '#60a5fa', '#93c5fd', '#7dd3fc'],
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            ...baseOpts,
            cutout: '70%',
            plugins: {
                ...baseOpts.plugins,
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const val = ctx.raw || 0;
                            const totalMaint = d.maintenance.value || 1;
                            const pct = ((val / totalMaint) * 100).toFixed(1);
                            return `${ctx.label.split(' — ')[0]}: ${formatBRL(val)} (${pct}%)`;
                        }
                    }
                }
            }
        }
    });

    createChart('productsChart', {
        type: 'doughnut', data: { labels: d.fuelProducts.labels, datasets: [{ data: d.fuelProducts.values, backgroundColor: ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'], borderWidth: 0, borderRadius: 4 }] },
        options: {
            ...baseOpts, cutout: '68%',
            plugins: {
                ...baseOpts.plugins,
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const val = ctx.raw || 0;
                            const fuelTotal = d.fuel.value || 1;
                            const pct = ((val / fuelTotal) * 100).toFixed(1);
                            return `${ctx.label}: R$ ${val.toLocaleString('pt-BR')} (${pct}% do combustível)`;
                        }
                    }
                }
            }
        }
    });
    createChart('costDistributionChart', {
        type: 'doughnut', data: { labels: fin.types.map(t => `${t.name} — R$${(t.value / 1000).toFixed(1)}k`), datasets: [{ data: fin.types.map(t => t.value), backgroundColor: ['#2563eb', '#3b82f6', '#60a5fa'], borderWidth: 0, borderRadius: 4 }] },
        options: { ...baseOpts, cutout: '70%' }
    });
    // Trend chart using financial-only data (Corretiva + Preventiva + Estoque)
    const finTrend = fin.value > 0 ? [
        Math.round(fin.value * 0.05), Math.round(fin.value * 0.15), Math.round(fin.value * 0.30),
        Math.round(fin.value * 0.50), Math.round(fin.value * 0.70), Math.round(fin.value * 0.88), Math.round(fin.value)
    ] : [0, 0, 0, 0, 0, 0, 0];
    createChart('trendChart', {
        type: 'line', data: { labels: ['01', '05', '10', '15', '20', '25', '31'], datasets: [{ label: 'Gasto Acumulado (Manutenção Frota)', data: finTrend, borderColor: '#4f8cff', backgroundColor: 'rgba(79,140,255,0.1)', borderWidth: 3, fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#4f8cff' }] },
        options: { ...baseOpts, scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + (v / 1000).toFixed(1) + 'k' } } } }
    });
    createChart('fuelByVehicleChart', {
        type: 'bar', data: { labels: d.fuelVehiclesLiters.labels, datasets: [{ label: 'Litros', data: d.fuelVehiclesLiters.data, backgroundColor: '#60a5fa', borderWidth: 0, borderRadius: 6 }] },
        options: { ...baseOpts, indexAxis: 'y', plugins: { ...baseOpts.plugins, legend: { display: false } }, scales: { x: { grid: { color: 'rgba(30,58,95,0.5)' } }, y: { grid: { display: false } } } }
    });
    createChart('fuelProductsChart', {
        type: 'doughnut', data: { labels: d.fuelProducts.labels, datasets: [{ data: d.fuelProducts.liters, backgroundColor: ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd'], borderWidth: 0 }] },
        options: { ...baseOpts, cutout: '65%' }
    });
    createChart('monthlyChart', {
        type: 'line', data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'], datasets: [
                { label: 'Combustível', data: d.weeklyFuel, borderColor: '#60a5fa', backgroundColor: 'rgba(96,165,250,0.08)', borderWidth: 2, fill: true, tension: 0.4 },
                { label: 'Manutenção', data: d.weeklyMaint, borderColor: '#2563eb', backgroundColor: 'rgba(37,99,235,0.08)', borderWidth: 2, fill: true, tension: 0.4 }
            ]
        },
        options: { ...baseOpts, scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + (v / 1000).toFixed(0) + 'k' } } } }
    });
    createChart('comparisonChart', {
        type: 'bar', data: {
            labels: chartLabels,
            datasets: [{ label: 'Total (R$)', data: chartData, backgroundColor: chartColors, borderWidth: 0, borderRadius: 8 }]
        },
        options: {
            ...baseOpts,
            plugins: {
                ...baseOpts.plugins,
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const val = ctx.raw || 0;
                            const pct = comp.total > 0 ? ((val / comp.total) * 100).toFixed(1) : 0;
                            return `${formatBRL(val)} (${pct}% do total)`;
                        }
                    }
                }
            },
            scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + (v / 1000).toFixed(0) + 'k' } } }
        }
    });
}

// Helpers
function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function setHtml(id, val) { const el = document.getElementById(id); if (el) el.innerHTML = val; }

// Month filter handler
function changeMonth() {
    const month = document.getElementById('monthFilter').value;
    updateDashboard(month);
    document.getElementById('topbar-period').textContent = DATA[month].label;
    // Also refresh toll and operations modules for the selected month
    if (typeof filterToll === 'function') filterToll();
    if (typeof filterOps === 'function') filterOps();
    if (typeof filterFines === 'function') filterFines();
}

// Tab switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Expandable sections
function toggleExpand(el) {
    const body = el.nextElementSibling;
    const arrow = el.querySelector('.expand-arrow');
    body.classList.toggle('open');
    arrow.classList.toggle('open');
}

// Init
/* window.addEventListener('load', () => {
       updateDashboard('jan');
       initIPVAModule();
       initLicensingModule();
       initTollModule();
       initOpsModule();
       initFinesModule();
   }); 
*/

// ═══════════════════════════════════════
// IPVA & LICENSING DATA (from spreadsheet)
// ═══════════════════════════════════════
const IPVA_DATA = [
    { placa: 'BXZ3F52', renavam: '1338164675', marca: 'FIAT', modelo: 'SCUDO CARGO TD', ano: '2023', especie: 'VAN', empresa: 'THS', cotaUnica: '13/jan', parcela1: '13/jan', ipva: 2818.36, prazoLic: 'Julho', licenciamento: 174.08 },
    { placa: 'CFD4B98', renavam: '1241683627', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719 CL', ano: '2020', especie: 'TOCO', empresa: 'THS', cotaUnica: '21/jan', parcela1: '20/mar', ipva: 3378.94, prazoLic: 'Novembro', licenciamento: 174.08 },
    { placa: 'EFV6387', renavam: '209859350', marca: 'VOLKSWAGEN', modelo: '15.180 CNM', ano: '2010', especie: 'TOCO', empresa: 'TEC', cotaUnica: '20/jan', parcela1: '20/mar', ipva: 2779.63, prazoLic: 'Novembro', licenciamento: 174.08 },
    { placa: 'EFW6601', renavam: '327486937', marca: 'VOLKSWAGEN', modelo: '8.150 E DELIVERY PLUS', ano: '2011', especie: 'TOCO', empresa: 'TEC', cotaUnica: '12/jan', parcela1: '20/mar', ipva: 2296.95, prazoLic: 'Setembro', licenciamento: 174.08 },
    { placa: 'EFW6626', renavam: '327486171', marca: 'VOLKSWAGEN', modelo: 'Volkswagen 13.180 e Constellation 4x2', ano: '2011', especie: 'TOCO', empresa: 'TEC', cotaUnica: '19/jan', parcela1: '20/mar', ipva: 2449.65, prazoLic: 'Novembro', licenciamento: 174.08 },
    { placa: 'ELY9J91', renavam: '1349728346', marca: 'FIAT', modelo: 'SCUDO CARGO TD', ano: '2023', especie: 'VAN', empresa: 'THS', cotaUnica: '12/jan', parcela1: '12/jan', ipva: 2818.36, prazoLic: 'Julho', licenciamento: 174.08 },
    { placa: 'EHJ0E76', renavam: '1284848288', marca: 'VOLVO', modelo: 'FH 460', ano: '2021', especie: 'CAVALO', empresa: 'THS', cotaUnica: '19/jan', parcela1: '20/mar', ipva: 7996.27, prazoLic: 'Novembro', licenciamento: 174.08 },
    { placa: 'EXV3F24', renavam: '1343011164', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1419 CE', ano: '2022', especie: 'TOCO', empresa: 'THS', cotaUnica: '15/jan', parcela1: '20/mar', ipva: 4548.13, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'FET3H45', renavam: '1343011300', marca: 'MERCEDES BENZ', modelo: 'M.BENZ/ATEGO 1419 CE', ano: '2022', especie: 'TOCO', empresa: 'THS', cotaUnica: '16/jan', parcela1: '20/mar', ipva: 4548.13, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'FPG7G53', renavam: '1235216257', marca: 'MERCEDES BENZ', modelo: 'ACCELO 1016 CE', ano: '2020', especie: 'TOCO', empresa: 'THS', cotaUnica: '14/jan', parcela1: '20/mar', ipva: 4099.24, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'FZZ2B94', renavam: '1325867460', marca: 'MERCEDES BENZ', modelo: '416 GUERRA MIS', ano: '2022', especie: 'UTILITÁRIO', empresa: 'THS', cotaUnica: '15/jan', parcela1: '15/jan', ipva: 5625.06, prazoLic: 'Agosto', licenciamento: 174.08 },
    { placa: 'GDD3C49', renavam: '1252546324', marca: 'MERCEDES BENZ', modelo: 'ATEGO 2426 CL', ano: '2020', especie: 'TRUCK', empresa: 'THS', cotaUnica: '22/jan', parcela1: '20/mar', ipva: 6605.29, prazoLic: 'Dezembro', licenciamento: 174.08 },
    { placa: 'GDY0H87', renavam: '1278547786', marca: 'SCANIA', modelo: 'G 410 A4X2', ano: '2021', especie: 'CAVALO', empresa: 'THS', cotaUnica: '20/jan', parcela1: '20/mar', ipva: 7375.17, prazoLic: 'Novembro', licenciamento: 174.08 },
    { placa: 'GFL3G04', renavam: '1172772182', marca: 'MERCEDES BENZ', modelo: 'ACTROS 2546LS', ano: '2018', especie: 'CAVALO', empresa: 'THS', cotaUnica: '15/jan', parcela1: '20/mar', ipva: 4711.62, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'GGJ5E35', renavam: '1338164721', marca: 'FIAT', modelo: 'I/FIAT SCUDO CARGO TD', ano: '2023', especie: 'VAN', empresa: 'THS', cotaUnica: '16/jan', parcela1: '16/jan', ipva: 2254.69, prazoLic: 'Setembro', licenciamento: 174.08 },
    { placa: 'GGW9G47', renavam: '1299666024', marca: 'MERCEDES BENZ', modelo: 'ACCELO 815', ano: '2022', especie: 'TOCO', empresa: 'THS', cotaUnica: '20/jan', parcela1: '20/mar', ipva: 4261.57, prazoLic: 'Novembro', licenciamento: 174.08 },
    { placa: 'OAH6974', renavam: '544939140', marca: 'BERTOLINI', modelo: 'AMZ BAL3EL', ano: '2013', especie: 'CARRETA', empresa: 'THS', cotaUnica: '15/jan', parcela1: '20/mar', ipva: 0, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'OAH6984', renavam: '544933168', marca: 'BERTOLINI', modelo: 'AMZ BAL3EL', ano: '2013', especie: 'CARRETA', empresa: 'THS', cotaUnica: '15/jan', parcela1: '20/mar', ipva: 0, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'OAN8755', renavam: '535968388', marca: 'BERTOLINI', modelo: 'AMZ BAL3EL', ano: '2013', especie: 'CARRETA', empresa: 'THS', cotaUnica: '16/jan', parcela1: '20/mar', ipva: 0, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'MKD4H07', renavam: '493899200', marca: 'LIBRELATO', modelo: 'LIBRELATO CACAENCR', ano: '2012', especie: 'CARRETA', empresa: 'TEC', cotaUnica: '20/jan', parcela1: '20/mar', ipva: 0, prazoLic: 'Novembro', licenciamento: 174.08 },
    { placa: 'RZC2C27', renavam: '1355241160', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719', ano: '2023', especie: 'TOCO', empresa: 'TEC', cotaUnica: '20/jan', parcela1: '20/mar', ipva: 6027.55, prazoLic: 'Novembro', licenciamento: 214.40 },
    { placa: 'RZC2C37', renavam: '1355243294', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719', ano: '2023', especie: 'TOCO', empresa: 'TEC', cotaUnica: '20/jan', parcela1: '20/mar', ipva: 5411.84, prazoLic: 'Novembro', licenciamento: 214.40 },
    { placa: 'FWK8A94', renavam: '1362122634', marca: 'MERCEDES BENZ', modelo: 'ACCELO 1017 CE', ano: '2023', especie: 'TOCO', empresa: 'THS', cotaUnica: '15/jan', parcela1: '20/mar', ipva: 4522.56, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'RUE1B98', renavam: '1298070365', marca: 'PEUGEOT', modelo: 'EXPERT CARGO', ano: '2021', especie: 'VAN', empresa: 'TEC', cotaUnica: '21/jan', parcela1: '21/jan', ipva: 2482.02, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'RTW8H87', renavam: '1292684833', marca: 'PEUGEOT', modelo: 'EXPERT CARGO', ano: '2021', especie: 'VAN', empresa: 'TEC', cotaUnica: '20/jan', parcela1: '20/jan', ipva: 2482.02, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'RTX1E72', renavam: '1292456997', marca: 'CITROEN', modelo: 'JUMP CARGO', ano: '2021', especie: 'VAN', empresa: 'THS', cotaUnica: '13/jan', parcela1: '13/jan', ipva: 3603.80, prazoLic: 'Julho', licenciamento: 174.08 },
    { placa: 'NAW6C82', renavam: '1428357367', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719', ano: '2024', especie: 'TOCO', empresa: 'TEC', cotaUnica: '13/jan', parcela1: '20/mar', ipva: 7138.01, prazoLic: 'Setembro', licenciamento: 214.40 },
    { placa: 'NAW6I81', renavam: '1428356778', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719', ano: '2024', especie: 'TOCO', empresa: 'TEC', cotaUnica: '12/jan', parcela1: '20/mar', ipva: 7138.01, prazoLic: 'Setembro', licenciamento: 214.40 },
    { placa: 'UGQ5H10', renavam: '1468489604', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719', ano: '2025', especie: 'TOCO', empresa: 'THS', cotaUnica: '23/jan', parcela1: '20/mar', ipva: 6484.93, prazoLic: 'Dezembro', licenciamento: 174.08 },
    { placa: 'QSQ3D59', renavam: '1468569217', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719', ano: '2025', especie: 'TOCO', empresa: 'THS', cotaUnica: '22/jan', parcela1: '20/mar', ipva: 5203.41, prazoLic: 'Dezembro', licenciamento: 174.08 },
    { placa: 'STD3J94', renavam: '1368343667', marca: 'MERCEDES BENZ', modelo: 'ATEGO 1719', ano: '2023', especie: 'TOCO', empresa: 'TEC', cotaUnica: '15/jan', parcela1: '20/mar', ipva: 4608.15, prazoLic: 'Outubro', licenciamento: 174.08 },
    { placa: 'UGA2B60', renavam: '1469600789', marca: 'MERCEDES BENZ', modelo: 'ATEGO 2429CE', ano: '2025', especie: 'TRUCK', empresa: 'THS', cotaUnica: '23/jan', parcela1: '20/mar', ipva: 6428.1, prazoLic: 'Dezembro', licenciamento: 174.08 },
];

// Month name to number mapping
const MONTH_MAP = {
    'Janeiro': 1, 'Fevereiro': 2, 'Março': 3, 'Abril': 4, 'Maio': 5, 'Junho': 6,
    'Julho': 7, 'Agosto': 8, 'Setembro': 9, 'Outubro': 10, 'Novembro': 11, 'Dezembro': 12
};

function updateOverviewIPVA(month) {
    const formatValue = (val) => {
        if (val >= 10000) return 'R$ ' + (val / 1000).toFixed(1) + 'k';
        return 'R$ ' + val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    if (month === 'todos') {
        const totalIPVA = IPVA_DATA.reduce((s, v) => s + v.ipva, 0);
        const tributadosCount = IPVA_DATA.filter(v => v.ipva > 0).length;
        const totalLic = IPVA_DATA.reduce((s, v) => s + v.licenciamento, 0);

        setText('kpi-overview-ipva', formatValue(totalIPVA));
        setText('kpi-overview-ipva-sub', `${tributadosCount} veículos tributados`);
        setText('kpi-overview-lic', formatValue(totalLic));
        setText('kpi-overview-lic-sub', `32 veículos na frota`);
        return;
    }

    // Filter by Month
    const monthMapAbbr = {
        'jan': 'janeiro', 'feb': 'fevereiro', 'mar': 'mar\u00e7o', 'apr': 'abril',
        'may': 'maio', 'jun': 'junho', 'jul': 'julho', 'aug': 'agosto',
        'sep': 'setembro', 'oct': 'outubro', 'nov': 'novembro', 'dec': 'dezembro'
    };
    const targetMonthName = monthMapAbbr[month];

    const monthlyIPVA = IPVA_DATA.filter(v =>
        (v.cotaUnica && v.cotaUnica.toLowerCase().includes(month)) ||
        (v.parcela1 && v.parcela1.toLowerCase().includes(month))
    );
    const ipvaValue = monthlyIPVA.reduce((s, v) => s + v.ipva, 0);
    const ipvaCount = monthlyIPVA.length;

    const monthlyLic = IPVA_DATA.filter(v =>
        v.prazoLic && v.prazoLic.toLowerCase() === targetMonthName
    );
    const licValue = monthlyLic.reduce((s, v) => s + v.licenciamento, 0);
    const licCount = monthlyLic.length;

    setText('kpi-overview-ipva', formatValue(ipvaValue));
    setText('kpi-overview-ipva-sub', `${ipvaCount} veículos a pagar`);
    setText('kpi-overview-lic', formatValue(licValue));
    setText('kpi-overview-lic-sub', `${licCount} licenciamentos no m\u00eas`);
}

// ═══════════════════════════════════════
// IPVA MODULE
// ═══════════════════════════════════════
function formatBRL(val) {
    return 'R$ ' + val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function filterIPVA() {
    const modelFilter = document.getElementById('ipvaModelFilter').value;
    const searchPlate = document.getElementById('ipvaSearchPlate').value.toUpperCase().trim();
    const empresaFilter = document.getElementById('ipvaEmpresaFilter').value;

    let filtered = IPVA_DATA.filter(v => {
        if (modelFilter !== 'todos' && v.especie !== modelFilter) return false;
        if (searchPlate && !v.placa.toUpperCase().includes(searchPlate)) return false;
        if (empresaFilter !== 'todos' && v.empresa !== empresaFilter) return false;
        return true;
    });

    renderIPVATable(filtered);
    updateIPVAKPIs(filtered);
}

function renderIPVATable(data) {
    let html = '';
    data.sort((a, b) => b.ipva - a.ipva);
    data.forEach(v => {
        const ipvaColor = v.ipva > 6000 ? 'color:#f87171' : v.ipva > 4000 ? 'color:#fb923c' : 'color:#34d399';
        html += `<tr>
            <td style="font-weight:600;color:#4f8cff">${v.placa}</td>
            <td>${v.marca}</td>
            <td>${v.modelo}</td>
            <td>${v.ano}</td>
            <td><span class="badge emitida">${v.especie}</span></td>
            <td>${v.cotaUnica}</td>
            <td>${v.parcela1}</td>
            <td style="font-weight:700;${ipvaColor}">${v.ipva > 0 ? formatBRL(v.ipva) : 'ISENTO'}</td>
            <td>${v.empresa}</td>
        </tr>`;
    });
    setHtml('ipva-table-body', html);
}

function updateIPVAKPIs(data) {
    const taxed = data.filter(v => v.ipva > 0);
    const total = taxed.reduce((s, v) => s + v.ipva, 0);
    const maxV = taxed.length > 0 ? taxed.reduce((a, b) => a.ipva > b.ipva ? a : b) : null;
    const avg = taxed.length > 0 ? total / taxed.length : 0;

    setText('kpi-ipva-total', formatBRL(total));
    setText('kpi-ipva-total-sub', `${data.length} veículos exibidos`);
    setText('kpi-ipva-count', taxed.length);
    setText('kpi-ipva-max', maxV ? formatBRL(maxV.ipva) : '—');
    setText('kpi-ipva-max-sub', maxV ? `${maxV.placa} — ${maxV.modelo}` : '—');
    setText('kpi-ipva-avg', avg > 0 ? formatBRL(avg) : '—');
}

function initIPVAModule() {
    filterIPVA();
    buildIPVACharts();
}

function buildIPVACharts() {
    // Group by espécie
    const groups = {};
    IPVA_DATA.forEach(v => {
        const key = v.especie;
        if (!groups[key]) groups[key] = { total: 0, count: 0 };
        groups[key].total += v.ipva;
        groups[key].count++;
    });

    const labels = Object.keys(groups);
    const totals = labels.map(k => groups[k].total);
    const counts = labels.map(k => groups[k].count);
    const bgColors = ['#1d4ed8', '#2563eb', '#3b82f6', '#4f8cff', '#60a5fa', '#93c5fd', '#7dd3fc', '#a5d8ff'];

    createChart('ipvaByModelChart', {
        type: 'bar',
        data: { labels, datasets: [{ label: 'Total IPVA (R$)', data: totals, backgroundColor: bgColors.slice(0, labels.length), borderWidth: 0, borderRadius: 8 }] },
        options: { ...baseOpts, indexAxis: 'y', plugins: { ...baseOpts.plugins, legend: { display: false } }, scales: { x: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + (v / 1000).toFixed(1) + 'k' } }, y: { grid: { display: false } } } }
    });

    createChart('ipvaCountByModelChart', {
        type: 'doughnut',
        data: { labels, datasets: [{ data: counts, backgroundColor: bgColors.slice(0, labels.length), borderWidth: 0, borderRadius: 4 }] },
        options: { ...baseOpts, cutout: '65%' }
    });
}

// ═══════════════════════════════════════
// LICENSING MODULE
// ═══════════════════════════════════════
function initLicensingModule() {
    // Current date: Feb 2026
    const currentMonth = 2; // February
    const currentYear = 2026;

    let alertCount = 0, overdueCount = 0, okCount = 0;
    let alertHtml = '', overdueHtml = '', tableHtml = '';
    const licByMonth = {};
    const statusCounts = { 'OK': 0, 'ALERTA': 0, 'VENCIDO': 0 };

    // Sort by deadline month
    const sorted = [...IPVA_DATA].sort((a, b) => (MONTH_MAP[a.prazoLic] || 0) - (MONTH_MAP[b.prazoLic] || 0));

    sorted.forEach(v => {
        const deadlineMonth = MONTH_MAP[v.prazoLic] || 0;
        let status, badgeClass;

        // Determine status based on current date (Feb 2026)
        // License year assumed 2026
        if (deadlineMonth < currentMonth) {
            // Month already passed in current year = VENCIDO
            status = 'VENCIDO';
            badgeClass = 'critico';
            overdueCount++;
            overdueHtml += `<div class="stat-row"><span class="label">⚠️ ${v.placa} — ${v.modelo}</span><span class="value" style="color:#f87171">Prazo: ${v.prazoLic} 2026 — VENCIDO</span></div>`;
        } else if (deadlineMonth === currentMonth) {
            // Same month = VENCIDO (already in the deadline month)
            status = 'VENCIDO';
            badgeClass = 'critico';
            overdueCount++;
            overdueHtml += `<div class="stat-row"><span class="label">⚠️ ${v.placa} — ${v.modelo}</span><span class="value" style="color:#f87171">Prazo: ${v.prazoLic} 2026 — MÊS ATUAL</span></div>`;
        } else if (deadlineMonth === currentMonth + 1) {
            // Next month = ALERTA (1 month ahead warning)
            status = 'ALERTA';
            badgeClass = 'alerta';
            alertCount++;
            alertHtml += `<div class="stat-row"><span class="label">🚨 ${v.placa} — ${v.modelo}</span><span class="value" style="color:#fb923c">Licenciar até: ${v.prazoLic} 2026</span></div>`;
        } else {
            // More than 1 month ahead = OK
            status = 'OK';
            badgeClass = 'ok';
            okCount++;
        }

        statusCounts[status]++;

        // Count by month
        if (!licByMonth[v.prazoLic]) licByMonth[v.prazoLic] = 0;
        licByMonth[v.prazoLic]++;

        tableHtml += `<tr>
            <td style="font-weight:600;color:#4f8cff">${v.placa}</td>
            <td>${v.marca}</td>
            <td>${v.modelo}</td>
            <td><span class="badge emitida">${v.especie}</span></td>
            <td style="font-weight:600">${v.prazoLic} 2026</td>
            <td style="font-weight:600">${formatBRL(v.licenciamento)}</td>
            <td>${v.empresa}</td>
            <td><span class="badge ${badgeClass}">${status}</span></td>
        </tr>`;
    });

    // Update KPIs
    setText('kpi-lic-total', IPVA_DATA.length);
    setText('kpi-lic-alert', alertCount);
    setText('kpi-lic-overdue', overdueCount);
    setText('kpi-lic-ok', okCount);

    // Render alerts
    if (alertCount > 0) {
        document.getElementById('lic-alert-section').style.display = 'block';
        setHtml('lic-alert-list', alertHtml);
    }
    if (overdueCount > 0) {
        document.getElementById('lic-overdue-section').style.display = 'block';
        setHtml('lic-overdue-list', overdueHtml);
    }

    // Render table
    setHtml('lic-table-body', tableHtml);

    // Build charts
    const monthOrder = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const sortedMonths = monthOrder.filter(m => licByMonth[m]);
    const monthCounts = sortedMonths.map(m => licByMonth[m]);
    const monthColors = sortedMonths.map(m => {
        const mn = MONTH_MAP[m];
        if (mn < currentMonth || mn === currentMonth) return '#93c5fd';
        if (mn === currentMonth + 1) return '#38bdf8';
        return '#4f8cff';
    });

    createChart('licByMonthChart', {
        type: 'bar',
        data: { labels: sortedMonths, datasets: [{ label: 'Veículos', data: monthCounts, backgroundColor: monthColors, borderWidth: 0, borderRadius: 8 }] },
        options: { ...baseOpts, plugins: { ...baseOpts.plugins, legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { stepSize: 1 } } } }
    });

    createChart('licStatusChart', {
        type: 'doughnut',
        data: { labels: ['Em Dia', 'Alerta', 'Vencido'], datasets: [{ data: [statusCounts['OK'], statusCounts['ALERTA'], statusCounts['VENCIDO']], backgroundColor: ['#4f8cff', '#38bdf8', '#93c5fd'], borderWidth: 0, borderRadius: 4 }] },
        options: { ...baseOpts, cutout: '68%' }
    });

    // Calculate total licensing cost
    const totalLic = IPVA_DATA.reduce((s, v) => s + v.licenciamento, 0);
    // Could add a KPI for this if needed
}

// ═══════════════════════════════════════
// PEDÁGIO (TOLL) MODULE — Monthly Data
// ═══════════════════════════════════════

// Toll data aggregated by plate + month (from PEDAGIO.xlsm — updated)
const PEDAGIO_MONTHLY_DATA = [
    { placa: 'UGA2B60', mes: 'jan', total: 4618.01, passagens: 179, empresaPedagio: 'PEDAGIO DIGITAL;SEM PARAR;VELOE TAG;VeloeTag' },
    { placa: 'EHJ0E76', mes: 'jan', total: 3079.54, passagens: 50, empresaPedagio: 'SEM PARAR' },
    { placa: 'EXV3F24', mes: 'jan', total: 2992.02, passagens: 157, empresaPedagio: 'SEM PARAR' },
    { placa: 'FET3H45', mes: 'jan', total: 2840.63, passagens: 149, empresaPedagio: 'SEM PARAR' },
    { placa: 'GFL3G04', mes: 'jan', total: 2800.8, passagens: 88, empresaPedagio: 'SEM PARAR' },
    { placa: 'NAW6I81', mes: 'jan', total: 2732.96, passagens: 149, empresaPedagio: 'PEDAGIO DIGITAL;VELOE TAG;VeloeTag' },
    { placa: 'GGW9G47', mes: 'jan', total: 2689.25, passagens: 149, empresaPedagio: 'SEM PARAR' },
    { placa: 'GDY0H87', mes: 'jan', total: 2560.33, passagens: 55, empresaPedagio: 'SEM PARAR' },
    { placa: 'FWK8A94', mes: 'jan', total: 2509.57, passagens: 124, empresaPedagio: 'SEM PARAR' },
    { placa: 'ELY9J91', mes: 'jan', total: 2076.48, passagens: 198, empresaPedagio: 'SEM PARAR' },
    { placa: 'FPG7G53', mes: 'jan', total: 1999.98, passagens: 125, empresaPedagio: 'SEM PARAR' },
    { placa: 'CFD4B98', mes: 'jan', total: 1958.16, passagens: 114, empresaPedagio: 'SEM PARAR' },
    { placa: 'QSQ3D59', mes: 'jan', total: 1514.45, passagens: 89, empresaPedagio: 'PEDAGIO DIGITAL;SEM PARAR;VELOE TAG;VeloeTag' },
    { placa: 'BXZ3F52', mes: 'jan', total: 1275.72, passagens: 189, empresaPedagio: 'SEM PARAR' },
    { placa: 'NAW6C82', mes: 'jan', total: 1131.67, passagens: 72, empresaPedagio: 'PEDAGIO DIGITAL;VELOE TAG;VeloeTag' },
    { placa: 'UGQ5H10', mes: 'jan', total: 875.03, passagens: 63, empresaPedagio: 'SEM PARAR;VeloeTag' },
    { placa: 'STD3J94', mes: 'jan', total: 655.68, passagens: 45, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFW6601', mes: 'jan', total: 586.14, passagens: 48, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFW6626', mes: 'jan', total: 333.36, passagens: 24, empresaPedagio: 'SEM PARAR' },
    { placa: 'FZZ2B94', mes: 'jan', total: 208.47, passagens: 25, empresaPedagio: 'SEM PARAR' },
    { placa: 'RUE1B98', mes: 'jan', total: 99.14, passagens: 7, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFW6624', mes: 'jan', total: 42.99, passagens: 2, empresaPedagio: 'SEM PARAR' },
    { placa: 'GDD3C49', mes: 'jan', total: 31.24, passagens: 3, empresaPedagio: 'SEM PARAR' },
    { placa: 'GGJ5E35', mes: 'jan', total: 27.69, passagens: 6, empresaPedagio: 'SEM PARAR' },
    { placa: 'RTX1E72', mes: 'jan', total: 20.28, passagens: 5, empresaPedagio: 'VELOE TAG;VeloeTag' },
    { placa: 'GIQ2I12', mes: 'jan', total: 18.82, passagens: 2, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFV6387', mes: 'jan', total: 13.97, passagens: 2, empresaPedagio: 'SEM PARAR' },
    { placa: 'RTW8H87', mes: 'jan', total: 8.56, passagens: 2, empresaPedagio: 'SEM PARAR' },
    { placa: 'UGA2B60', mes: 'feb', total: 3728.75, passagens: 125, empresaPedagio: 'SEM PARAR;VELOE TAG' },
    { placa: 'ELY9J91', mes: 'feb', total: 2380.16, passagens: 231, empresaPedagio: 'SEM PARAR' },
    { placa: 'GFL3G04', mes: 'feb', total: 1695.51, passagens: 33, empresaPedagio: 'SEM PARAR' },
    { placa: 'GDY0H87', mes: 'feb', total: 1663.26, passagens: 37, empresaPedagio: 'SEM PARAR' },
    { placa: 'FET3H45', mes: 'feb', total: 1484.61, passagens: 77, empresaPedagio: 'SEM PARAR' },
    { placa: 'QSQ3D59', mes: 'feb', total: 1464.81, passagens: 86, empresaPedagio: 'SEM PARAR;VELOE TAG' },
    { placa: 'UGQ5H10', mes: 'feb', total: 1420.21, passagens: 77, empresaPedagio: 'SEM PARAR' },
    { placa: 'BXZ3F52', mes: 'feb', total: 1319.37, passagens: 152, empresaPedagio: 'SEM PARAR' },
    { placa: 'FPG7G53', mes: 'feb', total: 1289.54, passagens: 63, empresaPedagio: 'SEM PARAR' },
    { placa: 'CFD4B98', mes: 'feb', total: 1177.19, passagens: 65, empresaPedagio: 'SEM PARAR' },
    { placa: 'STD3J94', mes: 'feb', total: 1130.59, passagens: 57, empresaPedagio: 'SEM PARAR' },
    { placa: 'FWK8A94', mes: 'feb', total: 1115.79, passagens: 61, empresaPedagio: 'SEM PARAR' },
    { placa: 'GGW9G47', mes: 'feb', total: 656.85, passagens: 63, empresaPedagio: 'SEM PARAR' },
    { placa: 'NAW6C82', mes: 'feb', total: 548.0, passagens: 30, empresaPedagio: 'VELOE TAG' },
    { placa: 'EFW6626', mes: 'feb', total: 547.59, passagens: 36, empresaPedagio: 'SEM PARAR' },
    { placa: 'EXV3F24', mes: 'feb', total: 497.7, passagens: 26, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFW6601', mes: 'feb', total: 410.25, passagens: 38, empresaPedagio: 'SEM PARAR' },
    { placa: 'NAW6I81', mes: 'feb', total: 347.46, passagens: 21, empresaPedagio: 'VELOE TAG' },
    { placa: 'FZZ2B94', mes: 'feb', total: 116.32, passagens: 19, empresaPedagio: 'SEM PARAR' },
    { placa: 'RTW8H87', mes: 'feb', total: 13.11, passagens: 7, empresaPedagio: 'SEM PARAR' },
    { placa: 'GIQ2I12', mes: 'feb', total: 7.6, passagens: 1, empresaPedagio: 'SEM PARAR' },
    { placa: 'UGA2B60', mes: 'mar', total: 1737.78, passagens: 62, empresaPedagio: 'SEM PARAR' },
    { placa: 'EHJ0E76', mes: 'mar', total: 1268.61, passagens: 28, empresaPedagio: 'SEM PARAR' },
    { placa: 'NAW6C82', mes: 'mar', total: 959.31, passagens: 53, empresaPedagio: 'VELOE TAG' },
    { placa: 'EXV3F24', mes: 'mar', total: 822.06, passagens: 42, empresaPedagio: 'SEM PARAR' },
    { placa: 'BXZ3F52', mes: 'mar', total: 815.29, passagens: 77, empresaPedagio: 'SEM PARAR' },
    { placa: 'STD3J94', mes: 'mar', total: 626.74, passagens: 32, empresaPedagio: 'SEM PARAR' },
    { placa: 'CFD4B98', mes: 'mar', total: 589.0, passagens: 29, empresaPedagio: 'SEM PARAR' },
    { placa: 'GGW9G47', mes: 'mar', total: 587.89, passagens: 32, empresaPedagio: 'SEM PARAR' },
    { placa: 'QSQ3D59', mes: 'mar', total: 583.17, passagens: 49, empresaPedagio: 'SEM PARAR' },
    { placa: 'ELY9J91', mes: 'mar', total: 563.8, passagens: 55, empresaPedagio: 'SEM PARAR' },
    { placa: 'FPG7G53', mes: 'mar', total: 542.48, passagens: 32, empresaPedagio: 'SEM PARAR' },
    { placa: 'FWK8A94', mes: 'mar', total: 519.65, passagens: 29, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFW6601', mes: 'mar', total: 516.95, passagens: 39, empresaPedagio: 'SEM PARAR' },
    { placa: 'GDY0H87', mes: 'mar', total: 454.6, passagens: 7, empresaPedagio: 'SEM PARAR' },
    { placa: 'NAW6I81', mes: 'mar', total: 359.93, passagens: 24, empresaPedagio: 'VELOE TAG' },
    { placa: 'UGQ5H10', mes: 'mar', total: 288.45, passagens: 20, empresaPedagio: 'SEM PARAR' },
    { placa: 'FET3H45', mes: 'mar', total: 210.29, passagens: 11, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFW6626', mes: 'mar', total: 123.31, passagens: 6, empresaPedagio: 'SEM PARAR' },
    { placa: 'GFL3G04', mes: 'mar', total: 69.2, passagens: 2, empresaPedagio: 'SEM PARAR' },
    { placa: 'EFV6387', mes: 'mar', total: 15.18, passagens: 2, empresaPedagio: 'SEM PARAR' },
];

// Fallback info for plates not in IPVA_DATA
const TOLL_PLATE_EXTRAS = {
    'ELY9J91': { especie: 'VAN', modelo: 'SCUDO CARGO TD', marca: 'FIAT', empresa: 'THS' },
    'EFW6624': { especie: 'TOCO', modelo: 'VW 8.150 DELIVERY', marca: 'VOLKSWAGEN', empresa: 'TEC' },

};

// Get toll data filtered by current month and aggregated per plate
function getTollDataForMonth() {
    const selectedMonth = document.getElementById('monthFilter').value;

    // Filter by month
    let records;
    if (selectedMonth === 'todos') {
        records = PEDAGIO_MONTHLY_DATA;
    } else {
        records = PEDAGIO_MONTHLY_DATA.filter(r => r.mes === selectedMonth);
    }

    // Aggregate by plate (in 'todos' mode, same plate may appear in multiple months)
    const plateMap = {};
    records.forEach(r => {
        if (!plateMap[r.placa]) {
            plateMap[r.placa] = { placa: r.placa, total: 0, passagens: 0, empresaPedagio: r.empresaPedagio };
        }
        plateMap[r.placa].total += r.total;
        plateMap[r.placa].passagens += r.passagens;
    });

    // Enrich with vehicle info from IPVA_DATA
    const ipvaMap = {};
    IPVA_DATA.forEach(v => {
        ipvaMap[v.placa.replace(/\s/g, '')] = v;
    });

    return Object.values(plateMap).map(t => {
        const key = t.placa.replace(/\s/g, '');
        const v = ipvaMap[key];
        const extra = TOLL_PLATE_EXTRAS[key];
        return {
            ...t,
            total: Math.round(t.total * 100) / 100,
            especie: v ? v.especie : (extra ? extra.especie : '—'),
            modelo: v ? v.modelo : (extra ? extra.modelo : '—'),
            marca: v ? v.marca : (extra ? extra.marca : '—'),
            empresaVeiculo: v ? v.empresa : (extra ? extra.empresa : '—'),
        };
    });
}

function filterToll() {
    const modelFilter = document.getElementById('tollModelFilter').value;
    const searchPlate = document.getElementById('tollSearchPlate').value.toUpperCase().trim();
    const empresaFilter = document.getElementById('tollEmpresaFilter').value;

    let data = getTollDataForMonth();

    let filtered = data.filter(t => {
        if (modelFilter !== 'todos' && t.especie !== modelFilter) return false;
        if (searchPlate && !t.placa.toUpperCase().includes(searchPlate)) return false;
        if (empresaFilter !== 'todos') {
            if (empresaFilter === 'VeloeTag') {
                if (!t.empresaPedagio.includes('VeloeTag') && !t.empresaPedagio.includes('VELOE')) return false;
            } else {
                if (!t.empresaPedagio.includes(empresaFilter)) return false;
            }
        }
        return true;
    });

    renderTollTable(filtered);
    updateTollKPIs(filtered);
    buildTollCharts(filtered);
}

function renderTollTable(data) {
    let html = '';
    data.sort((a, b) => b.total - a.total);
    if (data.length === 0) {
        html = '<tr><td colspan="7" style="text-align:center;color:#5a7a9a;padding:40px">Nenhum registro de pedágio neste período</td></tr>';
    }
    data.forEach(t => {
        const avg = t.passagens > 0 ? t.total / t.passagens : 0;
        const valColor = t.total > 3000 ? 'color:#1d4ed8' : t.total > 1500 ? 'color:#3b82f6' : 'color:#93c5fd';
        html += `<tr>
            <td style="font-weight:600;color:#4f8cff">${t.placa}</td>
            <td><span class="badge emitida">${t.especie}</span></td>
            <td>${t.modelo}</td>
            <td>${t.empresaVeiculo}</td>
            <td style="text-align:center">${t.passagens}</td>
            <td style="font-weight:700;${valColor}">${formatBRL(t.total)}</td>
            <td>${formatBRL(avg)}</td>
        </tr>`;
    });
    setHtml('toll-table-body', html);
}

function updateTollKPIs(data) {
    const total = data.reduce((s, t) => s + t.total, 0);
    const count = data.reduce((s, t) => s + t.passagens, 0);
    const topV = data.length > 0 ? data.reduce((a, b) => a.total > b.total ? a : b) : null;
    const avg = count > 0 ? total / count : 0;

    setText('kpi-toll-total', formatBRL(total));
    setText('kpi-toll-total-sub', `${data.length} veículos exibidos`);
    setText('kpi-toll-count', count.toLocaleString('pt-BR'));
    setText('kpi-toll-top', topV ? topV.placa : '—');
    setText('kpi-toll-top-sub', topV ? `${formatBRL(topV.total)} — ${topV.passagens} passagens` : '—');
    setText('kpi-toll-avg', formatBRL(avg));
}

function buildTollCharts(data) {
    const bgColors = ['#1d4ed8', '#2563eb', '#3b82f6', '#4f8cff', '#60a5fa', '#93c5fd', '#7dd3fc', '#a5d8ff', '#bae6fd', '#dbeafe'];
    const totalTolls = data.reduce((s, t) => s + t.total, 0);

    const top10 = [...data].sort((a, b) => b.total - a.total).slice(0, 10);
    createChart('tollByVehicleChart', {
        type: 'bar',
        data: {
            labels: top10.map(t => t.placa),
            datasets: [{ label: 'Gasto Total (R$)', data: top10.map(t => t.total), backgroundColor: bgColors.slice(0, top10.length), borderWidth: 0, borderRadius: 8 }]
        },
        options: {
            ...baseOpts,
            indexAxis: 'y',
            plugins: {
                ...baseOpts.plugins,
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const val = ctx.raw;
                            const perc = totalTolls > 0 ? ((val / totalTolls) * 100).toFixed(1) : 0;
                            return `Gasto Total: ${formatBRL(val)} (${perc.replace('.', ',')}%)`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + (v / 1000).toFixed(1) + 'k' } },
                y: { grid: { display: false } }
            }
        }
    });

    const typeGroups = {};
    data.forEach(t => {
        const key = t.especie || '—';
        if (key === '—') return; // Filter out invalid/unknown vehicle types
        if (!typeGroups[key]) typeGroups[key] = 0;
        typeGroups[key] += t.total;
    });
    const typeLabels = Object.keys(typeGroups).sort((a, b) => typeGroups[b] - typeGroups[a]);
    const typeValues = typeLabels.map(k => Math.round(typeGroups[k] * 100) / 100);

    createChart('tollByTypeChart', {
        type: 'doughnut',
        data: {
            labels: typeLabels.map((l, i) => `${l} — ${formatBRL(typeValues[i])}`),
            datasets: [{ data: typeValues, backgroundColor: bgColors.slice(0, typeLabels.length), borderWidth: 0, borderRadius: 4 }]
        },
        options: { ...baseOpts, cutout: '65%' }
    });
}

function initTollModule() {
    filterToll();
}

// ═══════════════════════════════════════
// OPERAÇÃO (OPERATIONS) MODULE
// ═══════════════════════════════════════

const OPS_DATA = [
    { data: '14/01', mes: 'jan', categoria: 'OPERAÇÃO', descricao: 'ROSANGELA MARTINS DE ANDRADE-ME', fornecedor: 'ROSANGELA MARTINS DE ANDRADE-ME', valor: 1200.0, nota: '2697', obs: '' },
    { data: '21/01', mes: 'jan', categoria: 'OPERACIONAL', descricao: 'ROSANGELA MARTINS DE ANDRADE-ME', fornecedor: 'ROSANGELA MARTINS DE ANDRADE-ME', valor: 872.0, nota: '2704', obs: '' },
    { data: '24/01', mes: 'jan', categoria: 'EMPILHADEIRA', descricao: 'POSTO DOS CAVALEIROS', fornecedor: 'POSTO DOS CAVALEIROS', valor: 259.47, nota: '10252', obs: '' },
    { data: '03/02', mes: 'feb', categoria: 'EMPILHADEIRA', descricao: 'POSTO DOS CAVALEIROS', fornecedor: 'POSTO DOS CAVALEIROS', valor: 301.46, nota: '10510', obs: '' },
    { data: '04/02', mes: 'feb', categoria: 'EMPILHADEIRA', descricao: 'NOVO MUNDO EQUIP.DE PROTEÇÃO LTDA', fornecedor: 'NOVO MUNDO EQUIP.DE PROTEÇÃO LTDA', valor: 395.0, nota: '36476', obs: '' },
    { data: '11/02', mes: 'feb', categoria: 'OPERAÇÃO', descricao: 'FENIX EMBALAGENS', fornecedor: 'FENIX EMBALAGENS', valor: 1360.0, nota: '23', obs: '' },
];

function getOpsDataForMonth() {
    const selectedMonth = document.getElementById('monthFilter').value;
    if (selectedMonth === 'todos') return OPS_DATA;
    return OPS_DATA.filter(r => r.mes === selectedMonth);
}

function filterOps() {
    const categFilter = document.getElementById('opsCategFilter').value;
    const searchDesc = document.getElementById('opsSearchDesc').value.toUpperCase().trim();
    const fornFilter = document.getElementById('opsFornFilter').value;

    let data = getOpsDataForMonth();

    // Populate supplier filter dynamically
    const fornSelect = document.getElementById('opsFornFilter');
    const currentForn = fornSelect.value;
    const uniqueForns = [...new Set(data.map(r => r.fornecedor))].sort();
    fornSelect.innerHTML = '<option value="todos">Todos</option>' + uniqueForns.map(f => `<option value="${f}">${f.length > 30 ? f.substring(0, 30) + '...' : f}</option>`).join('');
    fornSelect.value = currentForn;

    let filtered = data.filter(r => {
        if (categFilter !== 'todos' && r.categoria !== categFilter) return false;
        if (searchDesc && !r.descricao.toUpperCase().includes(searchDesc)) return false;
        if (fornFilter !== 'todos' && r.fornecedor !== fornFilter) return false;
        return true;
    });

    renderOpsTable(filtered);
    updateOpsKPIs(filtered);
    buildOpsCharts(filtered);
}

function renderOpsTable(data) {
    let html = '';
    if (data.length === 0) {
        html = '<tr><td colspan="6" style="text-align:center;color:#5a7a9a;padding:40px">Nenhum registro operacional neste período</td></tr>';
    }
    data.sort((a, b) => b.valor - a.valor);
    data.forEach(r => {
        const categBadge = r.categoria === 'OPERAÇÃO' ? 'emitida' : r.categoria === 'OPERACIONAL' ? 'emitida' : 'emitida';
        html += `<tr>
            <td style="white-space:nowrap">${r.data}</td>
            <td><span class="badge ${categBadge}">${r.categoria}</span></td>
            <td>${r.descricao}</td>
            <td>${r.fornecedor.length > 35 ? r.fornecedor.substring(0, 35) + '...' : r.fornecedor}</td>
            <td style="text-align:center">${r.nota}</td>
            <td style="font-weight:700;color:#4f8cff">${formatBRL(r.valor)}</td>
        </tr>`;
    });
    setHtml('ops-table-body', html);
}

function updateOpsKPIs(data) {
    const total = data.reduce((s, r) => s + r.valor, 0);
    const count = data.length;
    const avg = count > 0 ? total / count : 0;

    // Find top supplier
    const suppTotals = {};
    data.forEach(r => {
        if (!suppTotals[r.fornecedor]) suppTotals[r.fornecedor] = 0;
        suppTotals[r.fornecedor] += r.valor;
    });
    const topSupp = Object.entries(suppTotals).sort((a, b) => b[1] - a[1])[0];

    setText('kpi-ops-total', formatBRL(total));
    setText('kpi-ops-total-sub', `${count} registros`);
    setText('kpi-ops-count', count);
    setText('kpi-ops-supplier', topSupp ? (topSupp[0].length > 20 ? topSupp[0].substring(0, 20) + '...' : topSupp[0]) : '—');
    setText('kpi-ops-supplier-sub', topSupp ? formatBRL(topSupp[1]) : '—');
    setText('kpi-ops-avg', formatBRL(avg));
}

function buildOpsCharts(data) {
    const bgColors = ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd', '#a5d8ff'];

    // By category
    const categGroups = {};
    data.forEach(r => {
        if (!categGroups[r.categoria]) categGroups[r.categoria] = 0;
        categGroups[r.categoria] += r.valor;
    });
    const categLabels = Object.keys(categGroups).sort((a, b) => categGroups[b] - categGroups[a]);
    const categValues = categLabels.map(k => Math.round(categGroups[k] * 100) / 100);

    createChart('opsByCategoryChart', {
        type: 'doughnut',
        data: {
            labels: categLabels.map((l, i) => `${l} — ${formatBRL(categValues[i])}`),
            datasets: [{ data: categValues, backgroundColor: bgColors.slice(0, categLabels.length), borderWidth: 0, borderRadius: 4 }]
        },
        options: { ...baseOpts, cutout: '65%' }
    });

    // By supplier
    const suppGroups = {};
    data.forEach(r => {
        const name = r.fornecedor.length > 25 ? r.fornecedor.substring(0, 25) + '...' : r.fornecedor;
        if (!suppGroups[name]) suppGroups[name] = 0;
        suppGroups[name] += r.valor;
    });
    const suppLabels = Object.keys(suppGroups).sort((a, b) => suppGroups[b] - suppGroups[a]);
    const suppValues = suppLabels.map(k => Math.round(suppGroups[k] * 100) / 100);

    createChart('opsBySupplierChart', {
        type: 'bar',
        data: {
            labels: suppLabels,
            datasets: [{ label: 'Gasto (R$)', data: suppValues, backgroundColor: bgColors.slice(0, suppLabels.length), borderWidth: 0, borderRadius: 8 }]
        },
        options: { ...baseOpts, indexAxis: 'y', plugins: { ...baseOpts.plugins, legend: { display: false } }, scales: { x: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { callback: v => 'R$' + v.toFixed(0) } }, y: { grid: { display: false } } } }
    });
}

function initOpsModule() {
    filterOps();
}

// ═══════════════════════════════════════
// MULTAS DATA (from spreadsheet)
// ═══════════════════════════════════════
const MULTAS_DATA = [
    { placa: 'GFL3G04', horario: '19:17', dataInfracao: '03/02/2026', mes: 'feb', dataLimite: '03/02/2026', orgao: 'SEINFRA', valor: 293.47, motorista: 'JAILSON', status: 'PENDENTE', local: 'ROD. BA524 KM 6 ENTR BA 093 KM 12,9 - ENTR BR 3/ SIMOES FILHO- BA', descricao: 'CONDUZIR O VEICULO COM QUALQUER UMA DAS PLACAS SEM', dataPagto: '' },
    { placa: 'GFL3G04', horario: '08:37', dataInfracao: '18/02/2026', mes: 'feb', dataLimite: '27/03/2026', orgao: 'MUNICIPAL', valor: 130.16, motorista: 'JAILSON', status: 'APONTAR', local: 'AV.FRANCISCO RODRIGUES ALVES SN/ CAJAZEIRAS- PB', descricao: 'TRANSITAR EM LOCAL/HORARIO NAO PERMITIDO PELA', dataPagto: '' },
    { placa: 'CFD4B98', horario: '11:12', dataInfracao: '27/01/2026', mes: 'jan', dataLimite: '07/04/2026', orgao: 'PRF', valor: 130.16, motorista: '', status: 'APONTAR', local: 'SP - BR 116 - KM 176.35 - C/ GUARAREMA', descricao: 'REGULAMENTACAO - CAMINHAO', dataPagto: '' },
    { placa: 'CFD4B98', horario: '02:19', dataInfracao: '23/01/2026', mes: 'jan', dataLimite: '02/04/2026', orgao: 'PRF', valor: 130.16, motorista: 'GLEIDON EVARISTO', status: 'APONTAR', local: 'SP - BR 116 - KM 176.35 - C/ GUARAREMA', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'CFD4B98', horario: '21:32', dataInfracao: '20/01/2026', mes: 'jan', dataLimite: '31/03/2026', orgao: 'PRF', valor: 130.16, motorista: 'JAIR FERNANDES', status: 'INDICADA', local: 'RJ - BR 101 - KM 298.30 - C/ ITABORAI- RJ', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'CFD4B98', horario: '02:00', dataInfracao: '14/01/2026', mes: 'jan', dataLimite: '24/03/2026', orgao: 'PRF', valor: 130.16, motorista: 'GLEIDON EVARISTO', status: 'APONTAR', local: 'SP - BR 116 - KM 176.35 - C/ GUARAREMA', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'CFD4B98', horario: '02:59', dataInfracao: '09/01/2026', mes: 'jan', dataLimite: '20/03/2026', orgao: 'PRF', valor: 130.16, motorista: 'JORGE LUIS', status: 'APONTAR', local: 'SP - BR 116 - KM 176.35 - C/ GUARAREMA', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'CFD4B98', horario: '23:08', dataInfracao: '08/01/2026', mes: 'jan', dataLimite: '19/03/2026', orgao: 'PRF', valor: 130.16, motorista: 'JORGE LUIS', status: 'INDICADA', local: 'RJ - BR 116 - KM 305.95 - C/ RESENDE', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'GDY0H87', horario: '19:24', dataInfracao: '15/02/2026', mes: 'feb', dataLimite: '10/04/2026', orgao: 'PRF', valor: 130.16, motorista: 'LUIS TAVEIRA', status: 'INDICADA', local: 'TO - BR 153 - KM 499.00 - C/ PARAISO DO TOCANTINS', descricao: 'CONDUZIR VEíC DE TRANSP PASSAG OU CARGA EM DESACORDO COM', dataPagto: '' },
    { placa: 'FZZ2B94', horario: '09:40', dataInfracao: '08/01/2026', mes: 'jan', dataLimite: '15/03/2026', orgao: 'MUNICIPAL', valor: 130.16, motorista: 'JAILSON', status: 'AGUARD. ACEITE', local: 'AV. LACERDA AGOSTINHO - ACESSO PIRACEMA/ MACAÉ- RJ', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'FWK8A94', horario: '17:19', dataInfracao: '14/01/2026', mes: 'jan', dataLimite: '03/04/2026', orgao: 'CET', valor: 130.16, motorista: 'EDSON FERREIRA', status: 'APONTAR', local: 'MARGINAL TIETE, PTA EXPRESSA (CB-AS) A MENOS 167M DA PTE PR J./ SAO PAULO', descricao: 'TRANSITAR EM LOCAL/HORARIO NAO PERMITIDO PELA', dataPagto: '' },
    { placa: 'GGW9G47', horario: '11:05', dataInfracao: '07/02/2026', mes: 'feb', dataLimite: '24/04/2026', orgao: 'CET', valor: 130.16, motorista: 'MICHAEL PALMEIRA', status: 'APONTAR', local: 'MARGINAL TIETE, PISTA CENTRAL (CB-AS), A MAIS 200M PONTE JULIO M NETO/ SÃO PAULO', descricao: 'TRANSITAR EM LOCAL/HORARIO NAO PERMITIDO PELA REGULAMENTACAO - CAMINHAO', dataPagto: '' },
    { placa: 'FET3H45', horario: '04:08', dataInfracao: '30/01/2026', mes: 'jan', dataLimite: '10/04/2026', orgao: 'PRF', valor: 130.16, motorista: 'JORGE LUIS', status: 'APONTAR', local: 'SP - BR 116 - KM 176.35 - C/ GUARAREMA', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'FET3H45', horario: '02:46', dataInfracao: '28/01/2026', mes: 'jan', dataLimite: '08/04/2026', orgao: 'PRF', valor: 130.16, motorista: 'JORGE LUIS', status: 'APONTAR', local: 'SP - BR 116 - KM 176.35 - C/ GUARAREMA', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'FET3H45', horario: '04:01', dataInfracao: '27/01/2026', mes: 'jan', dataLimite: '07/04/2026', orgao: 'PRF', valor: 130.16, motorista: 'JORGE LUIS', status: 'APONTAR', local: 'RJ - BR 116 - KM 184.25 - D/ NOVA IGUAÇU- RJ', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'FET3H45', horario: '10:59', dataInfracao: '09/01/2026', mes: 'jan', dataLimite: '09/03/2026', orgao: 'PRF', valor: 130.16, motorista: 'ADRIANO PEREIRA', status: 'APONTAR', local: 'R LOS ANGELES , 137/ JACAREI-SP', descricao: 'TRANSITAR EM LOCAL/HORARIO NAO PERMITIDO PELA', dataPagto: '' },
    { placa: 'FET3H45', horario: '03;45', dataInfracao: '06/01/2026', mes: 'jan', dataLimite: '17/03/2026', orgao: 'PRF', valor: 130.16, motorista: 'GLEIDON EVARISTO', status: 'AGUARD. ACEITE', local: 'SP - BR 116 - KM 176.35 - C/ GUARAREMA', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
    { placa: 'ELY9J91', horario: '09:30', dataInfracao: '12/01/2026', mes: 'jan', dataLimite: '29/03/2026', orgao: 'CET', valor: 130.16, motorista: 'RAIMUNDO VALENTIM', status: 'APONTAR', local: 'MARGINAL TIETE, PISTA EXPRESSA (AS-CB), A MENOS 133M DO KM 15/ SÃO PAULO', descricao: 'TRANSITAR EM LOCAL/HORARIO NAO PERMITIDO PELA', dataPagto: '' },
    { placa: 'MKD4H07', horario: '23:40', dataInfracao: '14/02/2026', mes: 'feb', dataLimite: '07/04/2026', orgao: 'DNAINF', valor: 130.16, motorista: 'JAILSON', status: 'APONTAR', local: 'BR356 KM 19,650/ ITAPERUNA- RJ', descricao: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE', dataPagto: '' },
];

function filterFines() {
    const month = document.getElementById('monthFilter').value;
    const searchPlate = document.getElementById('finesSearchPlate').value.toUpperCase().trim();
    const statusFilter = document.getElementById('finesStatusFilter').value;
    const tipoFilter = document.getElementById('finesTipoFilter').value;

    let filtered = MULTAS_DATA.filter(m => {
        if (month !== 'todos' && m.mes !== month) return false;
        if (searchPlate && !m.placa.toUpperCase().includes(searchPlate)) return false;
        if (statusFilter !== 'todos' && m.status !== statusFilter) return false;
        if (tipoFilter !== 'todos' && m.descricao !== tipoFilter) return false;
        return true;
    });

    renderFinesTable(filtered);
    updateFinesKPIs(filtered);
    buildFinesCharts(filtered);
}

function renderFinesTable(data) {
    data.sort((a, b) => {
        const da = a.dataInfracao.split('/').reverse().join('');
        const db = b.dataInfracao.split('/').reverse().join('');
        return db.localeCompare(da);
    });
    let html = '';
    if (data.length === 0) {
        html = '<tr><td colspan="7" style="text-align:center;color:#5a7a9a;padding:40px">Nenhuma multa encontrada neste período</td></tr>';
    }
    data.forEach(m => {
        const statusClass = m.status === 'PENDENTE' ? 'pendente' : m.status === 'DESCONTADA' ? 'paga' : m.status === 'INDICADA' ? 'indicada' : 'apontar';
        const valColor = m.valor > 200 ? 'color:#e74c3c' : m.valor > 100 ? 'color:#f39c12' : 'color:#93c5fd';
        const descShort = m.descricao.length > 45 ? m.descricao.substring(0, 45) + '...' : m.descricao;
        html += `<tr>
            <td style="font-weight:600;color:#4f8cff">${m.placa}</td>
            <td style="white-space:nowrap">${m.dataInfracao}</td>
            <td>${m.motorista}</td>
            <td title="${m.descricao}">${descShort}</td>
            <td>${m.orgao}</td>
            <td style="font-weight:700;${valColor}">${formatBRL(m.valor)}</td>
            <td><span class="badge ${statusClass}">${m.status}</span></td>
        </tr>`;
    });
    setHtml('fines-table-body', html);
}

function updateFinesKPIs(data) {
    const total = data.reduce((s, m) => s + m.valor, 0);
    const count = data.length;
    const pendentes = data.filter(m => m.status === 'PENDENTE').length;

    // Top motorista
    const motoristaCounts = {};
    data.forEach(m => {
        if (m.motorista && m.motorista !== 'EMPRESA') {
            if (!motoristaCounts[m.motorista]) motoristaCounts[m.motorista] = 0;
            motoristaCounts[m.motorista]++;
        }
    });
    const topM = Object.entries(motoristaCounts).sort((a, b) => b[1] - a[1])[0];

    setText('kpi-fines-total', count);
    setText('kpi-fines-total-sub', 'infrações registradas');
    setText('kpi-fines-value', formatBRL(total));
    setText('kpi-fines-value-sub', `${count} multas`);
    setText('kpi-fines-top', topM ? (topM[0].length > 18 ? topM[0].substring(0, 18) + '...' : topM[0]) : '—');
    setText('kpi-fines-top-sub', topM ? `${topM[1]} infrações` : '—');
    setText('kpi-fines-pending', pendentes);
    setText('kpi-fines-pending-sub', 'aguardando resolução');
}

function buildFinesCharts(data) {
    const bgColors = ['#e74c3c', '#f39c12', '#3498db', '#2ecc71', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];

    // 1. By Status (doughnut)
    const statusGroups = {};
    data.forEach(m => {
        if (!statusGroups[m.status]) statusGroups[m.status] = 0;
        statusGroups[m.status]++;
    });
    const statusLabels = Object.keys(statusGroups).sort((a, b) => statusGroups[b] - statusGroups[a]);
    const statusValues = statusLabels.map(k => statusGroups[k]);

    createChart('finesStatusChart', {
        type: 'doughnut',
        data: {
            labels: statusLabels.map((l, i) => `${l} — ${statusValues[i]}`),
            datasets: [{ data: statusValues, backgroundColor: ['#e74c3c', '#f39c12', '#3498db', '#2ecc71'].slice(0, statusLabels.length), borderWidth: 0, borderRadius: 4 }]
        },
        options: { ...baseOpts, cutout: '65%' }
    });

    // 2. Ranking Motoristas (bar horizontal)
    const motoristaCounts = {};
    data.forEach(m => {
        if (m.motorista) {
            if (!motoristaCounts[m.motorista]) motoristaCounts[m.motorista] = 0;
            motoristaCounts[m.motorista]++;
        }
    });
    const motLabels = Object.keys(motoristaCounts).sort((a, b) => motoristaCounts[b] - motoristaCounts[a]).slice(0, 10);
    const motValues = motLabels.map(k => motoristaCounts[k]);

    createChart('finesRankingChart', {
        type: 'bar',
        data: {
            labels: motLabels.map(l => l.length > 20 ? l.substring(0, 20) + '...' : l),
            datasets: [{ label: 'Infrações', data: motValues, backgroundColor: bgColors.slice(0, motLabels.length), borderWidth: 0, borderRadius: 8 }]
        },
        options: { ...baseOpts, indexAxis: 'y', plugins: { ...baseOpts.plugins, legend: { display: false } }, scales: { x: { grid: { color: 'rgba(30,58,95,0.5)' }, ticks: { stepSize: 1 } }, y: { grid: { display: false } } } }
    });
}

function initFinesModule() {
    filterFines();
}


// ═══════════════════════════════════════
// PERFORMANCE CHARTS (DRIVER & VEHICLE)
// ═══════════════════════════════════════

let driverChart = null;
let vehicleChart = null;

function initPerformanceCharts() {
    populatePerformanceFilters();
    updateDriverPerformance();
    updateVehiclePerformance();

    const driverSel = document.getElementById('driverSelect');
    if (driverSel) driverSel.addEventListener('change', updateDriverPerformance);

    const vehicleSel = document.getElementById('vehicleSelect');
    if (vehicleSel) vehicleSel.addEventListener('change', updateVehiclePerformance);

    const monthSelect = document.getElementById('monthFilter');
    if (monthSelect) {
        monthSelect.addEventListener('change', () => {
            populatePerformanceFilters();
            updateDriverPerformance();
            updateVehiclePerformance();
        });
    }
}

function populatePerformanceFilters() {
    const monthEl = document.getElementById('monthFilter');
    if (!monthEl) return;
    const month = monthEl.value;
    const driverSelect = document.getElementById('driverSelect');
    const vehicleSelect = document.getElementById('vehicleSelect');

    if (!driverSelect || !vehicleSelect) return;

    const currentDriver = driverSelect.value;
    const currentVehicle = vehicleSelect.value;

    driverSelect.innerHTML = '<option value="">Selecione um Motorista</option>';
    vehicleSelect.innerHTML = '<option value="">Selecione um Ve\u00edculo</option>';

    let records = [];
    if (month === 'todos') {
        Object.values(DATA).forEach(m => {
            if (m.allRecords) records = records.concat(m.allRecords);
        });
    } else if (DATA[month] && DATA[month].allRecords) {
        records = DATA[month].allRecords;
    }

    const drivers = [...new Set(records.map(r => r.m).filter(x => x))].sort();
    const vehicles = [...new Set(records.map(r => r.p).filter(x => x))].sort();

    drivers.forEach(d => {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = d;
        driverSelect.appendChild(option);
    });

    vehicles.forEach(v => {
        const option = document.createElement('option');
        option.value = v;
        option.textContent = v;
        vehicleSelect.appendChild(option);
    });

    if (drivers.includes(currentDriver)) driverSelect.value = currentDriver;
    if (vehicles.includes(currentVehicle)) vehicleSelect.value = currentVehicle;
}

function calculatePerformance(keyType, keyVal) {
    try {
        const monthEl = document.getElementById('monthFilter');
        if (!monthEl) return null;
        const month = monthEl.value;
        let allRecords = [];

        // 1. Gather ALL records for the period (DO NOT filter by driver yet)
        if (month === 'todos') {
            if (typeof DATA === 'undefined' || !DATA) {
                console.error("DATA object is undefined or null");
                return null;
            }
            Object.values(DATA).forEach(m => {
                if (m && m.allRecords) allRecords = allRecords.concat(m.allRecords);
            });
        } else if (DATA && DATA[month] && DATA[month].allRecords) {
            allRecords = DATA[month].allRecords;
        }

        if (allRecords.length === 0) return null;

        // 2. Get Vehicle Type from Hardcoded Data (Robust)
        // Map: Plate -> Type
        const FLEET_TYPES = {
            'BXZ3F52': 'UTILITÁRIO', 'CFD4B98': 'CARGA', 'EFV6387': 'CAMINHÃO', 'EFW6601': 'CAMINHÃO',
            'EFW6626': 'CAMINHÃO', 'ELY9J91': 'UTILITÁRIO', // SCUDO / EXPERT (threshold 4-18)
            'EHJ0E76': 'CARGA', 'EXV3F24': 'CARGA',
            'FET3H45': 'CARGA', 'FPG7G53': 'CAMINHÃO', 'FZZ2B94': 'UTILITÁRIO', 'GDD3C49': 'CAMINHÃO',
            'GDY0H87': 'CARRETA', 'GFL3G04': 'CAMINHÃO', 'GGJ5E35': 'UTILITÁRIO', 'GGW9G47': 'CARGA',
            'OAH6974': 'CARGA', 'OAH6984': 'CARGA', 'OAN8755': 'CARGA', 'MKD4H07': 'CARGA',
            'RZC2C27': 'CARGA', 'RZC2C37': 'CARGA', 'FWK8A94': 'CARGA', 'RUE1B98': 'UTILITÁRIO',
            'RTW8H87': 'UTILITÁRIO', 'RTX1E72': 'UTILITÁRIO', 'NAW6C82': 'CARGA', 'NAW6I81': 'CARGA',
            'UGA2B60': 'CARGA', 'UGQ5H10': 'CARGA', 'QSQ3D59': 'CARGA', 'STD3J94': 'CARGA'
        };

        // Fallback if table is not ready (should not happen if static, but safety first)
        // if (Object.keys(vehicleTypes).length === 0) console.warn("Vehicle Type Map is empty! Check #fleet table.");

        // 3. Group by Vehicle
        const vehicles = {};
        allRecords.forEach(r => {
            if (!vehicles[r.p]) vehicles[r.p] = [];
            vehicles[r.p].push(r);
        });

        let grandTotalLiters = 0;
        let totalRawDist = 0;

        let validDistForAvg = 0;
        let validLitersForAvg = 0;

        let matchingRecords = [];

        // 4. Process timelines
        Object.values(vehicles).forEach(vRecs => {
            vRecs.sort((a, b) => a.k - b.k);

            // Determine Thresholds based on Vehicle Type
            // Default (Cars/Unknown): 0.5 to 20
            let minKml = 0.5;
            let maxKml = 20;

            // Get type for this vehicle
            const plate = vRecs[0].p; // All records in this group have same plate
            const type = FLEET_TYPES[plate] || 'CARGA'; // Default to CARGA if unknown

            if (type === 'UTILITÁRIO') {
                // Vans (Scudo, Expert): usually 8-14 km/l.
                // Strict limit to catch missing fill-ups (which double the efficiency)
                minKml = 4.0;
                maxKml = 18.0;
            } else if (type === 'CAMINHÃO' || type === 'CARGA' || type === 'CARRETA') {
                // Trucks: usually 2-5 km/l.
                minKml = 0.5;
                maxKml = 8.0;
            }

            // a. Sum Liters for the target
            vRecs.forEach(r => {
                if (r[keyType] === keyVal) {
                    grandTotalLiters += r.l;
                    matchingRecords.push(r);
                }
            });

            // b. Calculate segments
            for (let i = 1; i < vRecs.length; i++) {
                const prev = vRecs[i - 1];
                const curr = vRecs[i];

                if (curr[keyType] === keyVal) {
                    const dist = curr.k - prev.k;
                    const liters = curr.l;

                    if (dist > 0) {
                        totalRawDist += dist;
                    }

                    if (dist > 0 && liters > 0) {
                        const kml = dist / liters;

                        // Specific Outlier Check
                        // Also filter out crazy low values (stationary idling or typo)
                        if (kml >= minKml && kml <= maxKml) {
                            validDistForAvg += dist;
                            validLitersForAvg += liters;
                        }
                    }
                }
            }
        });

        if (matchingRecords.length === 0) return null;

        const finalKml = validDistForAvg > 0 && validLitersForAvg > 0 ? validDistForAvg / validLitersForAvg : 0;

        return {
            km: validDistForAvg, // Use Filtered distance
            liters: grandTotalLiters,
            kml: finalKml,
            records: matchingRecords
        };
    } catch (e) {
        console.error("CRITICAL ERROR in calculatePerformance:", e);
        return null;
    }
}

function updateDriverPerformance() {
    const driverSelect = document.getElementById('driverSelect');
    if (!driverSelect) return;
    const driver = driverSelect.value;
    const statsDiv = document.getElementById('driverStats');

    if (!driver) {
        if (statsDiv) statsDiv.style.display = 'none';
        if (driverChart) { driverChart.destroy(); driverChart = null; }
        return;
    }

    const data = calculatePerformance('m', driver);
    if (!data) return;

    document.getElementById('driverKM').textContent = data.km.toLocaleString('pt-BR') + ' km';
    document.getElementById('driverLiters').textContent = data.liters.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + ' L';
    document.getElementById('driverKML').textContent = data.kml.toFixed(2) + ' km/l';
    if (statsDiv) statsDiv.style.display = 'grid';

    renderPerformanceChart('driverPerformanceChart', driver, data.records);
}

function updateVehiclePerformance() {
    const vehicleSelect = document.getElementById('vehicleSelect');
    if (!vehicleSelect) return;
    const vehicle = vehicleSelect.value;
    const statsDiv = document.getElementById('vehicleStats');

    if (!vehicle) {
        if (statsDiv) statsDiv.style.display = 'none';
        if (vehicleChart) { vehicleChart.destroy(); vehicleChart = null; }
        return;
    }

    const data = calculatePerformance('p', vehicle);
    if (!data) return;

    document.getElementById('vehicleKM').textContent = data.km.toLocaleString('pt-BR') + ' km';
    document.getElementById('vehicleLiters').textContent = data.liters.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + ' L';
    document.getElementById('vehicleKML').textContent = data.kml.toFixed(2) + ' km/l';
    if (statsDiv) statsDiv.style.display = 'grid';

    renderPerformanceChart('vehiclePerformanceChart', vehicle, data.records);
}

function renderPerformanceChart(canvasId, label, records) {
    const cvs = document.getElementById(canvasId);
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    const isDriver = canvasId.includes('driver');

    const labels = records.map(r => r.d);
    const dataKm = records.map(r => r.k);
    const dataLiters = records.map(r => r.l);

    if (isDriver) {
        if (driverChart) driverChart.destroy();
    } else {
        if (vehicleChart) vehicleChart.destroy();
    }

    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Consumo (L)',
                    data: dataLiters,
                    borderColor: COLORS.blue,
                    backgroundColor: COLORS.blue,
                    yAxisID: 'y'
                },
                {
                    label: 'Hod\u00f4metro (KM)',
                    data: dataKm,
                    borderColor: COLORS.orange,
                    backgroundColor: COLORS.orange,
                    yAxisID: 'y1',
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            interaction: { mode: 'index', intersect: false },
            scales: {
                y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'Litros' } },
                y1: { type: 'linear', display: true, position: 'right', title: { display: true, text: 'KM' }, grid: { drawOnChartArea: false } }
            }
        }
    };

    if (isDriver) {
        driverChart = new Chart(ctx, config);
    } else {
        vehicleChart = new Chart(ctx, config);
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard initializing...");

    const safeInit = (fn, name) => {
        try {
            if (typeof fn === 'function') {
                fn();
                console.log(name + " initialized.");
            } else {
                console.warn(name + " function not found.");
            }
        } catch (e) {
            console.error("Error initializing " + name + ":", e);
        }
    };

    try {
        if (typeof updateDashboard === 'function') {
            const initialMonth = document.getElementById('monthFilter').value || 'todos';
            updateDashboard(initialMonth);
        }
    } catch (e) { console.error("Error in updateDashboard:", e); }

    // Modules
    safeInit(window.initIPVAModule, 'IPVA');
    safeInit(window.initLicensingModule, 'Licensing');
    safeInit(window.initTollModule, 'Toll');
    safeInit(window.initOpsModule, 'Operations');
    safeInit(window.initFinesModule, 'Fines');
    safeInit(window.initPerformanceCharts, 'PerformanceCharts');
});

