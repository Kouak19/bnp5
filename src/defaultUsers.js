export const DEFAULT_USERS = [
  {
    id: "user_000",
    identifiant: "1000000000",
    codeSecret: "101234",
    nom: "Dupont",
    prenom: "Jean",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2200", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5400", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8800", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000400000", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000400000", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1200 8800 2200", holder: "Jean Dupont", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "100", accountNumber: "5435012300", key: "10", iban: "FR76 3000 4100 5435012300 10", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_001",
    identifiant: "1000000001",
    codeSecret: "101241",
    nom: "Martin",
    prenom: "Marie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2201", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5401", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8801", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000412345", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000454321", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1201 8801 2201", holder: "Marie Martin", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "101", accountNumber: "5435112301", key: "11", iban: "FR76 3000 4101 5435112301 11", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_002",
    identifiant: "1000000002",
    codeSecret: "101248",
    nom: "Bernard",
    prenom: "Pierre",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2202", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5402", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8802", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000424690", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000508642", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1202 8802 2202", holder: "Pierre Bernard", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "102", accountNumber: "5435212302", key: "12", iban: "FR76 3000 4102 5435212302 12", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_003",
    identifiant: "1000000003",
    codeSecret: "101255",
    nom: "Tanguy",
    prenom: "Daniella",
    location: "Brest",
    manager: "Gilbert Leroy",
    status: "Bloqué",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2203", balance: 103510.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5403", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8803", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000437035", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000562963", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1203 8803 2203", holder: "Daniella Tanguy", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "103", accountNumber: "5435312303", key: "13", iban: "FR76 3000 4103 5435312303 13", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_004",
    identifiant: "1000000004",
    codeSecret: "101262",
    nom: "Devin",
    prenom: "Arnaud",
    location: "France",
    manager: "Gabriel Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2204", balance: 845255.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5404", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8804", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000449380", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000617284", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1204 8804 2204", holder: "Arnaud Devin", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "104", accountNumber: "5435412304", key: "14", iban: "FR76 3000 4104 5435412304 14", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_005",
    identifiant: "1000000005",
    codeSecret: "101269",
    nom: "Montagne",
    prenom: "Jean Louis",
    location: "France",
    manager: "Brice Fontaine",
    status: "Bloqué",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2205", balance: 377295.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5405", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8805", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000461725", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000671605", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1205 8805 2205", holder: "Jean Louis Montagne", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "105", accountNumber: "5435512305", key: "15", iban: "FR76 3000 4105 5435512305 15", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_006",
    identifiant: "1000000006",
    codeSecret: "101276",
    nom: "Simon",
    prenom: "Nicolas",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2206", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5406", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8806", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000474070", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000725926", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1206 8806 2206", holder: "Nicolas Simon", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "106", accountNumber: "5435612306", key: "16", iban: "FR76 3000 4106 5435612306 16", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_007",
    identifiant: "1000000007",
    codeSecret: "101283",
    nom: "Michel",
    prenom: "Camille",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2207", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5407", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8807", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000486415", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000780247", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1207 8807 2207", holder: "Camille Michel", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "107", accountNumber: "5435712307", key: "17", iban: "FR76 3000 4107 5435712307 17", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_008",
    identifiant: "1000000008",
    codeSecret: "101290",
    nom: "Lefebvre",
    prenom: "Antoine",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2208", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5408", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8808", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000498760", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000834568", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1208 8808 2208", holder: "Antoine Lefebvre", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "108", accountNumber: "5435812308", key: "18", iban: "FR76 3000 4108 5435812308 18", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_009",
    identifiant: "1000000009",
    codeSecret: "101297",
    nom: "Leroy",
    prenom: "Emma",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2209", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5409", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8809", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000511105", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000888889", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1209 8809 2209", holder: "Emma Leroy", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "109", accountNumber: "5435912309", key: "19", iban: "FR76 3000 4109 5435912309 19", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_010",
    identifiant: "1000000010",
    codeSecret: "101304",
    nom: "Roux",
    prenom: "Lucas",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2210", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5410", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8810", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000523450", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000943210", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1210 8810 2210", holder: "Lucas Roux", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "110", accountNumber: "5436012310", key: "20", iban: "FR76 3000 4110 5436012310 20", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_011",
    identifiant: "1000000011",
    codeSecret: "101311",
    nom: "David",
    prenom: "Léa",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2211", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5411", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8811", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000535795", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004000997531", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1211 8811 2211", holder: "Léa David", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "111", accountNumber: "5436112311", key: "21", iban: "FR76 3000 4111 5436112311 21", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_012",
    identifiant: "1000000012",
    codeSecret: "101318",
    nom: "Bertrand",
    prenom: "Hugo",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2212", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5412", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8812", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000548140", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001051852", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1212 8812 2212", holder: "Hugo Bertrand", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "112", accountNumber: "5436212312", key: "22", iban: "FR76 3000 4112 5436212312 22", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_013",
    identifiant: "1000000013",
    codeSecret: "101325",
    nom: "Morel",
    prenom: "Chloé",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2213", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5413", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8813", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000560485", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001106173", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1213 8813 2213", holder: "Chloé Morel", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "113", accountNumber: "5436312313", key: "23", iban: "FR76 3000 4113 5436312313 23", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_014",
    identifiant: "1000000014",
    codeSecret: "101332",
    nom: "Fournier",
    prenom: "Maxime",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2214", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5414", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8814", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000572830", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001160494", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1214 8814 2214", holder: "Maxime Fournier", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "114", accountNumber: "5436412314", key: "24", iban: "FR76 3000 4114 5436412314 24", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_015",
    identifiant: "1000000015",
    codeSecret: "101339",
    nom: "Girard",
    prenom: "Sarah",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2215", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5415", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8815", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000585175", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001214815", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1215 8815 2215", holder: "Sarah Girard", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "115", accountNumber: "5436512315", key: "25", iban: "FR76 3000 4115 5436512315 25", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_016",
    identifiant: "1000000016",
    codeSecret: "101346",
    nom: "Bonnet",
    prenom: "Alexandre",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2216", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5416", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8816", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000597520", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001269136", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1216 8816 2216", holder: "Alexandre Bonnet", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "116", accountNumber: "5436612316", key: "26", iban: "FR76 3000 4116 5436612316 26", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_017",
    identifiant: "1000000017",
    codeSecret: "101353",
    nom: "Dupuis",
    prenom: "Laura",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2217", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5417", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8817", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000609865", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001323457", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1217 8817 2217", holder: "Laura Dupuis", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "117", accountNumber: "5436712317", key: "27", iban: "FR76 3000 4117 5436712317 27", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_018",
    identifiant: "1000000018",
    codeSecret: "101360",
    nom: "Lambert",
    prenom: "Raphaël",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2218", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5418", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8818", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000622210", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001377778", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1218 8818 2218", holder: "Raphaël Lambert", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "118", accountNumber: "5436812318", key: "28", iban: "FR76 3000 4118 5436812318 28", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_019",
    identifiant: "1000000019",
    codeSecret: "101367",
    nom: "Fontaine",
    prenom: "Manon",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2219", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5419", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8819", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000634555", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001432099", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1219 8819 2219", holder: "Manon Fontaine", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "119", accountNumber: "5436912319", key: "29", iban: "FR76 3000 4119 5436912319 29", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_020",
    identifiant: "1000000020",
    codeSecret: "101374",
    nom: "Rousseau",
    prenom: "Théo",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2220", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5420", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8820", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000646900", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001486420", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1220 8820 2220", holder: "Théo Rousseau", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "120", accountNumber: "5437012320", key: "30", iban: "FR76 3000 4120 5437012320 30", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_021",
    identifiant: "1000000021",
    codeSecret: "101381",
    nom: "Vincent",
    prenom: "Clara",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2221", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5421", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8821", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000659245", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001540741", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1221 8821 2221", holder: "Clara Vincent", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "121", accountNumber: "5437112321", key: "31", iban: "FR76 3000 4121 5437112321 31", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_022",
    identifiant: "1000000022",
    codeSecret: "101388",
    nom: "Müller",
    prenom: "Lucien",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2222", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5422", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8822", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000671590", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001595062", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1222 8822 2222", holder: "Lucien Müller", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "122", accountNumber: "5437212322", key: "32", iban: "FR76 3000 4122 5437212322 32", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_023",
    identifiant: "1000000023",
    codeSecret: "101395",
    nom: "Fischer",
    prenom: "Amélie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2223", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5423", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8823", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000683935", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001649383", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1223 8823 2223", holder: "Amélie Fischer", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "123", accountNumber: "5437312323", key: "33", iban: "FR76 3000 4123 5437312323 33", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_024",
    identifiant: "1000000024",
    codeSecret: "101402",
    nom: "Weber",
    prenom: "Gabriel",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2224", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5424", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8824", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000696280", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001703704", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1224 8824 2224", holder: "Gabriel Weber", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "124", accountNumber: "5437412324", key: "34", iban: "FR76 3000 4124 5437412324 34", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_025",
    identifiant: "1000000025",
    codeSecret: "101409",
    nom: "Schmidt",
    prenom: "Charlotte",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2225", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5425", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8825", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000708625", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001758025", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1225 8825 2225", holder: "Charlotte Schmidt", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "125", accountNumber: "5437512325", key: "35", iban: "FR76 3000 4125 5437512325 35", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_026",
    identifiant: "1000000026",
    codeSecret: "101416",
    nom: "Schneider",
    prenom: "Nathan",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2226", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5426", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8826", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000720970", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001812346", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1226 8826 2226", holder: "Nathan Schneider", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "126", accountNumber: "5437612326", key: "36", iban: "FR76 3000 4126 5437612326 36", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_027",
    identifiant: "1000000027",
    codeSecret: "101423",
    nom: "Wagner",
    prenom: "Océane",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2227", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5427", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8827", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000733315", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001866667", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1227 8827 2227", holder: "Océane Wagner", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "127", accountNumber: "5437712327", key: "37", iban: "FR76 3000 4127 5437712327 37", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_028",
    identifiant: "1000000028",
    codeSecret: "101430",
    nom: "Becker",
    prenom: "Louis",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2228", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5428", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8828", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000745660", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001920988", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1228 8828 2228", holder: "Louis Becker", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "128", accountNumber: "5437812328", key: "38", iban: "FR76 3000 4128 5437812328 38", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_029",
    identifiant: "1000000029",
    codeSecret: "101437",
    nom: "Hoffmann",
    prenom: "Élodie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2229", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5429", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8829", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000758005", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004001975309", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1229 8829 2229", holder: "Élodie Hoffmann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "129", accountNumber: "5437912329", key: "39", iban: "FR76 3000 4129 5437912329 39", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_030",
    identifiant: "1000000030",
    codeSecret: "101444",
    nom: "Schulz",
    prenom: "Alexy",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2230", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5430", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8830", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000770350", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002029630", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1230 8830 2230", holder: "Alexy Schulz", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "130", accountNumber: "5438012330", key: "40", iban: "FR76 3000 4130 5438012330 40", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_031",
    identifiant: "1000000031",
    codeSecret: "101451",
    nom: "Koch",
    prenom: "Inès",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2231", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5431", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8831", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000782695", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002083951", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1231 8831 2231", holder: "Inès Koch", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "131", accountNumber: "5438112331", key: "41", iban: "FR76 3000 4131 5438112331 41", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_032",
    identifiant: "1000000032",
    codeSecret: "101458",
    nom: "Richter",
    prenom: "Enzo",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2232", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5432", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8832", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000795040", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002138272", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1232 8832 2232", holder: "Enzo Richter", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "132", accountNumber: "5438212332", key: "42", iban: "FR76 3000 4132 5438212332 42", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_033",
    identifiant: "1000000033",
    codeSecret: "101465",
    nom: "Klopp",
    prenom: "Sandra",
    location: "France",
    manager: "Thibault Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2233", balance: 13800.80, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5433", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8833", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000807385", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002192593", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1233 8833 2233", holder: "Romane Wolf", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "133", accountNumber: "5438312333", key: "43", iban: "FR76 3000 4133 5438312333 43", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_034",
    identifiant: "1000000034",
    codeSecret: "101472",
    nom: "Schröder",
    prenom: "Ethan",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2234", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5434", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8834", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000819730", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002246914", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1234 8834 2234", holder: "Ethan Schröder", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "134", accountNumber: "5438412334", key: "44", iban: "FR76 3000 4134 5438412334 44", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_035",
    identifiant: "1000000035",
    codeSecret: "101479",
    nom: "Finance",
    prenom: "Krexera",
    location: "France",
    manager: "Bernard Montaigne",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2235", balance: 10000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5435", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8835", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000832075", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002301235", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1235 8835 2235", holder: "Margaux Neumann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "135", accountNumber: "5438512335", key: "45", iban: "FR76 3000 4135 5438512335 45", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_036",
    identifiant: "1000000036",
    codeSecret: "101486",
    nom: "Schwarz",
    prenom: "Mathis",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2236", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5436", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8836", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000844420", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002355556", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1236 8836 2236", holder: "Mathis Schwarz", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "136", accountNumber: "5438612336", key: "46", iban: "FR76 3000 4136 5438612336 46", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_037",
    identifiant: "1000000037",
    codeSecret: "101493",
    nom: "Zimmermann",
    prenom: "Eva",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2237", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5437", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8837", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000856765", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002409877", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1237 8837 2237", holder: "Eva Zimmermann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "137", accountNumber: "5438712337", key: "47", iban: "FR76 3000 4137 5438712337 47", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_038",
    identifiant: "1000000038",
    codeSecret: "101500",
    nom: "Braun",
    prenom: "Noé",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2238", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5438", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8838", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000869110", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002464198", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1238 8838 2238", holder: "Noé Braun", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "138", accountNumber: "5438812338", key: "48", iban: "FR76 3000 4138 5438812338 48", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_039",
    identifiant: "1000000039",
    codeSecret: "101507",
    nom: "Krüger",
    prenom: "Jade",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2239", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5439", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8839", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000881455", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002518519", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1239 8839 2239", holder: "Jade Krüger", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "139", accountNumber: "5438912339", key: "49", iban: "FR76 3000 4139 5438912339 49", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_040",
    identifiant: "1000000040",
    codeSecret: "101514",
    nom: "Hartmann",
    prenom: "Liam",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2240", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5440", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8840", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000893800", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002572840", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1240 8840 2240", holder: "Liam Hartmann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "140", accountNumber: "5439012340", key: "50", iban: "FR76 3000 4140 5439012340 50", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_041",
    identifiant: "1000000041",
    codeSecret: "101521",
    nom: "Lange",
    prenom: "Louise",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2241", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5441", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8841", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000906145", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002627161", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1241 8841 2241", holder: "Louise Lange", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "141", accountNumber: "5439112341", key: "51", iban: "FR76 3000 4141 5439112341 51", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_042",
    identifiant: "1000000042",
    codeSecret: "101528",
    nom: "Schmitt",
    prenom: "Paul",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2242", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5442", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8842", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000918490", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002681482", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1242 8842 2242", holder: "Paul Schmitt", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "142", accountNumber: "5439212342", key: "52", iban: "FR76 3000 4142 5439212342 52", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_043",
    identifiant: "1000000043",
    codeSecret: "101535",
    nom: "Werner",
    prenom: "Lola",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2243", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5443", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8843", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000930835", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002735803", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1243 8843 2243", holder: "Lola Werner", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "143", accountNumber: "5439312343", key: "53", iban: "FR76 3000 4143 5439312343 53", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_044",
    identifiant: "1000000044",
    codeSecret: "101542",
    nom: "Krause",
    prenom: "Adam",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2244", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5444", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8844", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000943180", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002790124", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1244 8844 2244", holder: "Adam Krause", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "144", accountNumber: "5439412344", key: "54", iban: "FR76 3000 4144 5439412344 54", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_045",
    identifiant: "1000000045",
    codeSecret: "101549",
    nom: "Meier",
    prenom: "Anna",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2245", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5445", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8845", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000955525", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002844445", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1245 8845 2245", holder: "Anna Meier", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "145", accountNumber: "5439512345", key: "55", iban: "FR76 3000 4145 5439512345 55", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_046",
    identifiant: "1000000046",
    codeSecret: "101556",
    nom: "Lehmann",
    prenom: "Arthur",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2246", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5446", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8846", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000967870", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002898766", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1246 8846 2246", holder: "Arthur Lehmann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "146", accountNumber: "5439612346", key: "56", iban: "FR76 3000 4146 5439612346 56", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_047",
    identifiant: "1000000047",
    codeSecret: "101563",
    nom: "Schmid",
    prenom: "Alice",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2247", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5447", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8847", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000980215", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004002953087", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1247 8847 2247", holder: "Alice Schmid", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "147", accountNumber: "5439712347", key: "57", iban: "FR76 3000 4147 5439712347 57", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_048",
    identifiant: "1000000048",
    codeSecret: "101570",
    nom: "Brunner",
    prenom: "Jules",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2248", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5448", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8848", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003000992560", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003007408", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1248 8848 2248", holder: "Jules Brunner", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "148", accountNumber: "5439812348", key: "58", iban: "FR76 3000 4148 5439812348 58", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_049",
    identifiant: "1000000049",
    codeSecret: "101577",
    nom: "Moser",
    prenom: "Lina",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2249", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5449", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8849", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001004905", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003061729", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1249 8849 2249", holder: "Lina Moser", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "149", accountNumber: "5439912349", key: "59", iban: "FR76 3000 4149 5439912349 59", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_050",
    identifiant: "1000000050",
    codeSecret: "101584",
    nom: "Baumann",
    prenom: "Aaron",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2250", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5450", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8850", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001017250", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003116050", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1250 8850 2250", holder: "Aaron Baumann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "150", accountNumber: "5440012350", key: "60", iban: "FR76 3000 4150 5440012350 60", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_051",
    identifiant: "1000000051",
    codeSecret: "101591",
    nom: "Schuster",
    prenom: "Zoé",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2251", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5451", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8851", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001029595", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003170371", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1251 8851 2251", holder: "Zoé Schuster", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "151", accountNumber: "5440112351", key: "61", iban: "FR76 3000 4151 5440112351 61", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_052",
    identifiant: "1000000052",
    codeSecret: "101598",
    nom: "Keller",
    prenom: "Sacha",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2252", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5452", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8852", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001041940", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003224692", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1252 8852 2252", holder: "Sacha Keller", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "152", accountNumber: "5440212352", key: "62", iban: "FR76 3000 4152 5440212352 62", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_053",
    identifiant: "1000000053",
    codeSecret: "101605",
    nom: "Jung",
    prenom: "Nina",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2253", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5453", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8853", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001054285", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003279013", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1253 8853 2253", holder: "Nina Jung", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "153", accountNumber: "5440312353", key: "63", iban: "FR76 3000 4153 5440312353 63", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_054",
    identifiant: "1000000054",
    codeSecret: "101612",
    nom: "Hofmann",
    prenom: "Mathieu",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2254", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5454", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8854", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001066630", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003333334", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1254 8854 2254", holder: "Mathieu Hofmann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "154", accountNumber: "5440412354", key: "64", iban: "FR76 3000 4154 5440412354 64", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_055",
    identifiant: "1000000055",
    codeSecret: "101619",
    nom: "Frank",
    prenom: "Rose",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2255", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5455", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8855", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001078975", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003387655", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1255 8855 2255", holder: "Rose Frank", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "155", accountNumber: "5440512355", key: "65", iban: "FR76 3000 4155 5440512355 65", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_056",
    identifiant: "1000000056",
    codeSecret: "101626",
    nom: "König",
    prenom: "Étienne",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2256", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5456", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8856", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001091320", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003441976", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1256 8856 2256", holder: "Étienne König", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "156", accountNumber: "5440612356", key: "66", iban: "FR76 3000 4156 5440612356 66", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_057",
    identifiant: "1000000057",
    codeSecret: "101633",
    nom: "Walter",
    prenom: "Iris",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2257", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5457", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8857", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001103665", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003496297", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1257 8857 2257", holder: "Iris Walter", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "157", accountNumber: "5440712357", key: "67", iban: "FR76 3000 4157 5440712357 67", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_058",
    identifiant: "1000000058",
    codeSecret: "101640",
    nom: "Fuchs",
    prenom: "Bastien",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2258", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5458", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8858", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001116010", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003550618", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1258 8858 2258", holder: "Bastien Fuchs", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "158", accountNumber: "5440812358", key: "68", iban: "FR76 3000 4158 5440812358 68", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_059",
    identifiant: "1000000059",
    codeSecret: "101647",
    nom: "Klein",
    prenom: "Nora",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2259", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5459", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8859", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001128355", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003604939", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1259 8859 2259", holder: "Nora Klein", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "159", accountNumber: "5440912359", key: "69", iban: "FR76 3000 4159 5440912359 69", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_060",
    identifiant: "1000000060",
    codeSecret: "101654",
    nom: "Böhm",
    prenom: "Romain",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2260", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5460", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8860", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001140700", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003659260", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1260 8860 2260", holder: "Romain Böhm", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "160", accountNumber: "5441012360", key: "70", iban: "FR76 3000 4160 5441012360 70", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_061",
    identifiant: "1000000061",
    codeSecret: "101661",
    nom: "Lorenz",
    prenom: "Célia",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2261", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5461", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8861", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001153045", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003713581", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1261 8861 2261", holder: "Célia Lorenz", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "161", accountNumber: "5441112361", key: "71", iban: "FR76 3000 4161 5441112361 71", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_062",
    identifiant: "1000000062",
    codeSecret: "101668",
    nom: "Roth",
    prenom: "Damien",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2262", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5462", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8862", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001165390", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003767902", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1262 8862 2262", holder: "Damien Roth", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "162", accountNumber: "5441212362", key: "72", iban: "FR76 3000 4162 5441212362 72", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_063",
    identifiant: "1000000063",
    codeSecret: "101675",
    nom: "Albrecht",
    prenom: "Lou",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2263", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5463", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8863", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001177735", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003822223", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1263 8863 2263", holder: "Lou Albrecht", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "163", accountNumber: "5441312363", key: "73", iban: "FR76 3000 4163 5441312363 73", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_064",
    identifiant: "1000000064",
    codeSecret: "101682",
    nom: "Dupont",
    prenom: "Jean",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2264", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5464", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8864", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001190080", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003876544", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1264 8864 2264", holder: "Jean Dupont", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "164", accountNumber: "5441412364", key: "74", iban: "FR76 3000 4164 5441412364 74", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_065",
    identifiant: "1000000065",
    codeSecret: "101689",
    nom: "Martin",
    prenom: "Marie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2265", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5465", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8865", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001202425", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003930865", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1265 8865 2265", holder: "Marie Martin", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "165", accountNumber: "5441512365", key: "75", iban: "FR76 3000 4165 5441512365 75", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_066",
    identifiant: "1000000066",
    codeSecret: "101696",
    nom: "Bernard",
    prenom: "Pierre",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2266", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5466", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8866", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001214770", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004003985186", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1266 8866 2266", holder: "Pierre Bernard", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "166", accountNumber: "5441612366", key: "76", iban: "FR76 3000 4166 5441612366 76", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_067",
    identifiant: "1000000067",
    codeSecret: "101703",
    nom: "Dubois",
    prenom: "Sophie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2267", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5467", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8867", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001227115", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004039507", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1267 8867 2267", holder: "Sophie Dubois", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "167", accountNumber: "5441712367", key: "77", iban: "FR76 3000 4167 5441712367 77", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_068",
    identifiant: "1000000068",
    codeSecret: "101710",
    nom: "Moreau",
    prenom: "Thomas",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2268", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5468", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8868", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001239460", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004093828", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1268 8868 2268", holder: "Thomas Moreau", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "168", accountNumber: "5441812368", key: "78", iban: "FR76 3000 4168 5441812368 78", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_069",
    identifiant: "1000000069",
    codeSecret: "101717",
    nom: "Laurent",
    prenom: "Julie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2269", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5469", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8869", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001251805", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004148149", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1269 8869 2269", holder: "Julie Laurent", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "169", accountNumber: "5441912369", key: "79", iban: "FR76 3000 4169 5441912369 79", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_070",
    identifiant: "1000000070",
    codeSecret: "101724",
    nom: "Simon",
    prenom: "Nicolas",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2270", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5470", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8870", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001264150", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004202470", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1270 8870 2270", holder: "Nicolas Simon", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "170", accountNumber: "5442012370", key: "80", iban: "FR76 3000 4170 5442012370 80", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_071",
    identifiant: "1000000071",
    codeSecret: "101731",
    nom: "Michel",
    prenom: "Camille",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2271", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5471", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8871", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001276495", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004256791", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1271 8871 2271", holder: "Camille Michel", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "171", accountNumber: "5442112371", key: "81", iban: "FR76 3000 4171 5442112371 81", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_072",
    identifiant: "1000000072",
    codeSecret: "101738",
    nom: "Lefebvre",
    prenom: "Antoine",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2272", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5472", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8872", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001288840", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004311112", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1272 8872 2272", holder: "Antoine Lefebvre", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "172", accountNumber: "5442212372", key: "82", iban: "FR76 3000 4172 5442212372 82", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_073",
    identifiant: "1000000073",
    codeSecret: "101745",
    nom: "Leroy",
    prenom: "Emma",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2273", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5473", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8873", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001301185", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004365433", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1273 8873 2273", holder: "Emma Leroy", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "173", accountNumber: "5442312373", key: "83", iban: "FR76 3000 4173 5442312373 83", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_074",
    identifiant: "1000000074",
    codeSecret: "101752",
    nom: "Roux",
    prenom: "Lucas",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2274", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5474", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8874", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001313530", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004419754", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1274 8874 2274", holder: "Lucas Roux", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "174", accountNumber: "5442412374", key: "84", iban: "FR76 3000 4174 5442412374 84", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_075",
    identifiant: "1000000075",
    codeSecret: "101759",
    nom: "David",
    prenom: "Léa",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2275", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5475", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8875", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001325875", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004474075", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1275 8875 2275", holder: "Léa David", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "175", accountNumber: "5442512375", key: "85", iban: "FR76 3000 4175 5442512375 85", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_076",
    identifiant: "1000000076",
    codeSecret: "101766",
    nom: "Bertrand",
    prenom: "Hugo",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2276", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5476", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8876", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001338220", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004528396", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1276 8876 2276", holder: "Hugo Bertrand", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "176", accountNumber: "5442612376", key: "86", iban: "FR76 3000 4176 5442612376 86", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_077",
    identifiant: "1000000077",
    codeSecret: "101773",
    nom: "Morel",
    prenom: "Chloé",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2277", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5477", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8877", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001350565", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004582717", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1277 8877 2277", holder: "Chloé Morel", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "177", accountNumber: "5442712377", key: "87", iban: "FR76 3000 4177 5442712377 87", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_078",
    identifiant: "1000000078",
    codeSecret: "101780",
    nom: "Fournier",
    prenom: "Maxime",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2278", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5478", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8878", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001362910", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004637038", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1278 8878 2278", holder: "Maxime Fournier", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "178", accountNumber: "5442812378", key: "88", iban: "FR76 3000 4178 5442812378 88", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_079",
    identifiant: "1000000079",
    codeSecret: "101787",
    nom: "Girard",
    prenom: "Sarah",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2279", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5479", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8879", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001375255", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004691359", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1279 8879 2279", holder: "Sarah Girard", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "179", accountNumber: "5442912379", key: "89", iban: "FR76 3000 4179 5442912379 89", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_080",
    identifiant: "1000000080",
    codeSecret: "101794",
    nom: "Bonnet",
    prenom: "Alexandre",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2280", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5480", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8880", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001387600", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004745680", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1280 8880 2280", holder: "Alexandre Bonnet", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "180", accountNumber: "5443012380", key: "90", iban: "FR76 3000 4180 5443012380 90", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_081",
    identifiant: "1000000081",
    codeSecret: "101801",
    nom: "Dupuis",
    prenom: "Laura",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2281", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5481", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8881", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001399945", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004800001", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1281 8881 2281", holder: "Laura Dupuis", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "181", accountNumber: "5443112381", key: "91", iban: "FR76 3000 4181 5443112381 91", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_082",
    identifiant: "1000000082",
    codeSecret: "101808",
    nom: "Lambert",
    prenom: "Raphaël",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2282", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5482", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8882", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001412290", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004854322", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1282 8882 2282", holder: "Raphaël Lambert", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "182", accountNumber: "5443212382", key: "92", iban: "FR76 3000 4182 5443212382 92", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_083",
    identifiant: "1000000083",
    codeSecret: "101815",
    nom: "Fontaine",
    prenom: "Manon",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2283", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5483", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8883", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001424635", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004908643", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1283 8883 2283", holder: "Manon Fontaine", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "183", accountNumber: "5443312383", key: "93", iban: "FR76 3000 4183 5443312383 93", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_084",
    identifiant: "1000000084",
    codeSecret: "101822",
    nom: "Rousseau",
    prenom: "Théo",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2284", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5484", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8884", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001436980", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004004962964", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1284 8884 2284", holder: "Théo Rousseau", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "184", accountNumber: "5443412384", key: "94", iban: "FR76 3000 4184 5443412384 94", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_085",
    identifiant: "1000000085",
    codeSecret: "101829",
    nom: "Vincent",
    prenom: "Clara",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2285", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5485", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8885", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001449325", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005017285", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1285 8885 2285", holder: "Clara Vincent", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "185", accountNumber: "5443512385", key: "95", iban: "FR76 3000 4185 5443512385 95", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_086",
    identifiant: "1000000086",
    codeSecret: "101836",
    nom: "Müller",
    prenom: "Lucien",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2286", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5486", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8886", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001461670", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005071606", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1286 8886 2286", holder: "Lucien Müller", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "186", accountNumber: "5443612386", key: "96", iban: "FR76 3000 4186 5443612386 96", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_087",
    identifiant: "1000000087",
    codeSecret: "101843",
    nom: "Fischer",
    prenom: "Amélie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2287", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5487", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8887", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001474015", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005125927", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1287 8887 2287", holder: "Amélie Fischer", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "187", accountNumber: "5443712387", key: "97", iban: "FR76 3000 4187 5443712387 97", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_088",
    identifiant: "1000000088",
    codeSecret: "101850",
    nom: "Weber",
    prenom: "Gabriel",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2288", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5488", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8888", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001486360", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005180248", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1288 8888 2288", holder: "Gabriel Weber", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "188", accountNumber: "5443812388", key: "98", iban: "FR76 3000 4188 5443812388 98", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_089",
    identifiant: "1000000089",
    codeSecret: "101857",
    nom: "Schmidt",
    prenom: "Charlotte",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2289", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5489", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8889", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001498705", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005234569", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1289 8889 2289", holder: "Charlotte Schmidt", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "189", accountNumber: "5443912389", key: "99", iban: "FR76 3000 4189 5443912389 99", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_090",
    identifiant: "1000000090",
    codeSecret: "101864",
    nom: "Schneider",
    prenom: "Nathan",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2290", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5490", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8890", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001511050", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005288890", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1290 8890 2290", holder: "Nathan Schneider", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "190", accountNumber: "5444012390", key: "10", iban: "FR76 3000 4190 5444012390 10", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_091",
    identifiant: "1000000091",
    codeSecret: "101871",
    nom: "Wagner",
    prenom: "Océane",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2291", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5491", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8891", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001523395", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005343211", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1291 8891 2291", holder: "Océane Wagner", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "191", accountNumber: "5444112391", key: "11", iban: "FR76 3000 4191 5444112391 11", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_092",
    identifiant: "1000000092",
    codeSecret: "101878",
    nom: "Becker",
    prenom: "Louis",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2292", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5492", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8892", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001535740", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005397532", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1292 8892 2292", holder: "Louis Becker", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "192", accountNumber: "5444212392", key: "12", iban: "FR76 3000 4192 5444212392 12", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_093",
    identifiant: "1000000093",
    codeSecret: "101885",
    nom: "Hoffmann",
    prenom: "Élodie",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2293", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5493", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8893", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001548085", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005451853", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1293 8893 2293", holder: "Élodie Hoffmann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "193", accountNumber: "5444312393", key: "13", iban: "FR76 3000 4193 5444312393 13", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_094",
    identifiant: "1000000094",
    codeSecret: "101892",
    nom: "Schulz",
    prenom: "Alexy",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2294", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5494", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8894", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001560430", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005506174", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1294 8894 2294", holder: "Alexy Schulz", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "194", accountNumber: "5444412394", key: "14", iban: "FR76 3000 4194 5444412394 14", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_095",
    identifiant: "1000000095",
    codeSecret: "101899",
    nom: "Koch",
    prenom: "Inès",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2295", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5495", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8895", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001572775", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005560495", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1295 8895 2295", holder: "Inès Koch", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "195", accountNumber: "5444512395", key: "15", iban: "FR76 3000 4195 5444512395 15", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_096",
    identifiant: "1000000096",
    codeSecret: "101906",
    nom: "Richter",
    prenom: "Enzo",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2296", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5496", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8896", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001585120", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005614816", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1296 8896 2296", holder: "Enzo Richter", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "196", accountNumber: "5444612396", key: "16", iban: "FR76 3000 4196 5444612396 16", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_097",
    identifiant: "1000000097",
    codeSecret: "101913",
    nom: "Wolf",
    prenom: "Romane",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2297", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5497", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8897", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001597465", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005669137", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1297 8897 2297", holder: "Romane Wolf", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "197", accountNumber: "5444712397", key: "17", iban: "FR76 3000 4197 5444712397 17", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_098",
    identifiant: "1000000098",
    codeSecret: "101920",
    nom: "Schröder",
    prenom: "Ethan",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2298", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5498", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8898", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001609810", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005723458", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1298 8898 2298", holder: "Ethan Schröder", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "198", accountNumber: "5444812398", key: "18", iban: "FR76 3000 4198 5444812398 18", swift: "BNPAFRPPXXX" }
  },
  {
    id: "user_099",
    identifiant: "1000000099",
    codeSecret: "101927",
    nom: "Neumann",
    prenom: "Margaux",
    location: "France",
    manager: "Arnaud Leroy",
    status: "Actif",
    lastConnection: "",
    accounts: [
      { id: "cc", type: "Compte Courant", number: "N°******2299", balance: 1000000.0, icon: "wallet" },
      { id: "livret", type: "Livret A", number: "N°******5499", balance: 0.0, icon: "piggy-bank" },
      { id: "plan", type: "Plan Épargne", number: "N°******8899", balance: 0.0, icon: "chart-line" }
    ],
    transactions: [
      { id: 1, type: "Virement sortant", reference: "FR76000000003001622155", date: "14 Avril 2025", amount: -25000.0, status: "Effectué", category: "Virement" },
      { id: 2, type: "Virement entrant", reference: "FR76000000004005777779", date: "05 Mars 2025", amount: 20000.0, status: "Effectué", category: "Revenu" }
    ],
    card: { number: "4973 1299 8899 2299", holder: "Margaux Neumann", expiry: "12/27", isBlocked: false, foreignPayments: true, limit: 3000, withdrawalLimit: 1200 },
    rib: { bankName: "BNP PARIBAS", bankCode: "30004", branchCode: "199", accountNumber: "5444912399", key: "19", iban: "FR76 3000 4199 5444912399 19", swift: "BNPAFRPPXXX" }
  }
];
