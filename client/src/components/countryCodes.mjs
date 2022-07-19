const countries = [
  {
    "Alpha-2 code": "AF",
    "Alpha-3 code": "AFG",
  },
  {
    "Alpha-2 code": "AL",
    "Alpha-3 code": "ALB",
  },
  {
    "Alpha-2 code": "DZ",
    "Alpha-3 code": "DZA",
  },
  {
    "Alpha-2 code": "AS",
    "Alpha-3 code": "ASM",
  },
  {
    "Alpha-2 code": "AD",
    "Alpha-3 code": "AND",
  },
  {
    "Alpha-2 code": "AO",
    "Alpha-3 code": "AGO",
  },
  {
    "Alpha-2 code": "AI",
    "Alpha-3 code": "AIA",
  },
  {
    "Alpha-2 code": "AQ",
    "Alpha-3 code": "ATA",
  },
  {
    "Alpha-2 code": "AG",
    "Alpha-3 code": "ATG",
  },
  {
    "Alpha-2 code": "AR",
    "Alpha-3 code": "ARG",
  },
  {
    "Alpha-2 code": "AM",
    "Alpha-3 code": "ARM",
  },
  {
    "Alpha-2 code": "AW",
    "Alpha-3 code": "ABW",
  },
  {
    "Alpha-2 code": "AU",
    "Alpha-3 code": "AUS",
  },
  {
    "Alpha-2 code": "AT",
    "Alpha-3 code": "AUT",
  },
  {
    "Alpha-2 code": "AZ",
    "Alpha-3 code": "AZE",
  },
  {
    "Alpha-2 code": "BS",
    "Alpha-3 code": "BHS",
  },
  {
    "Alpha-2 code": "BH",
    "Alpha-3 code": "BHR",
  },
  {
    "Alpha-2 code": "BD",
    "Alpha-3 code": "BGD",
  },
  {
    "Alpha-2 code": "BB",
    "Alpha-3 code": "BRB",
  },
  {
    "Alpha-2 code": "BY",
    "Alpha-3 code": "BLR",
  },
  {
    "Alpha-2 code": "BE",
    "Alpha-3 code": "BEL",
  },
  {
    "Alpha-2 code": "BZ",
    "Alpha-3 code": "BLZ",
  },
  {
    "Alpha-2 code": "BJ",
    "Alpha-3 code": "BEN",
  },
  {
    "Alpha-2 code": "BM",
    "Alpha-3 code": "BMU",
  },
  {
    "Alpha-2 code": "BT",
    "Alpha-3 code": "BTN",
  },
  {
    "Alpha-2 code": "BO",
    "Alpha-3 code": "BOL",
  },
  {
    "Alpha-2 code": "BQ",
    "Alpha-3 code": "BES",
  },
  {
    "Alpha-2 code": "BA",
    "Alpha-3 code": "BIH",
  },
  {
    "Alpha-2 code": "BW",
    "Alpha-3 code": "BWA",
  },
  {
    "Alpha-2 code": "BV",
    "Alpha-3 code": "BVT",
  },
  {
    "Alpha-2 code": "BR",
    "Alpha-3 code": "BRA",
  },
  {
    "Alpha-2 code": "IO",
    "Alpha-3 code": "IOT",
  },
  {
    "Alpha-2 code": "BN",
    "Alpha-3 code": "BRN",
  },
  {
    "Alpha-2 code": "BG",
    "Alpha-3 code": "BGR",
  },
  {
    "Alpha-2 code": "BF",
    "Alpha-3 code": "BFA",
  },
  {
    "Alpha-2 code": "BI",
    "Alpha-3 code": "BDI",
  },
  {
    "Alpha-2 code": "CV",
    "Alpha-3 code": "CPV",
  },
  {
    "Alpha-2 code": "KH",
    "Alpha-3 code": "KHM",
  },
  {
    "Alpha-2 code": "CM",
    "Alpha-3 code": "CMR",
  },
  {
    "Alpha-2 code": "CA",
    "Alpha-3 code": "CAN",
  },
  {
    "Alpha-2 code": "KY",
    "Alpha-3 code": "CYM",
  },
  {
    "Alpha-2 code": "CF",
    "Alpha-3 code": "CAF",
  },
  {
    "Alpha-2 code": "TD",
    "Alpha-3 code": "TCD",
  },
  {
    "Alpha-2 code": "CL",
    "Alpha-3 code": "CHL",
  },
  {
    "Alpha-2 code": "CN",
    "Alpha-3 code": "CHN",
  },
  {
    "Alpha-2 code": "CX",
    "Alpha-3 code": "CXR",
  },
  {
    "Alpha-2 code": "CC",
    "Alpha-3 code": "CCK",
  },
  {
    "Alpha-2 code": "CO",
    "Alpha-3 code": "COL",
  },
  {
    "Alpha-2 code": "KM",
    "Alpha-3 code": "COM",
  },
  {
    "Alpha-2 code": "CD",
    "Alpha-3 code": "COD",
  },
  {
    "Alpha-2 code": "CG",
    "Alpha-3 code": "COG",
  },
  {
    "Alpha-2 code": "CK",
    "Alpha-3 code": "COK",
  },
  {
    "Alpha-2 code": "CR",
    "Alpha-3 code": "CRI",
  },
  {
    "Alpha-2 code": "HR",
    "Alpha-3 code": "HRV",
  },
  {
    "Alpha-2 code": "CU",
    "Alpha-3 code": "CUB",
  },
  {
    "Alpha-2 code": "CW",
    "Alpha-3 code": "CUW",
  },
  {
    "Alpha-2 code": "CY",
    "Alpha-3 code": "CYP",
  },
  {
    "Alpha-2 code": "CZ",
    "Alpha-3 code": "CZE",
  },
  {
    "Alpha-2 code": "CI",
    "Alpha-3 code": "CIV",
  },
  {
    "Alpha-2 code": "DK",
    "Alpha-3 code": "DNK",
  },
  {
    "Alpha-2 code": "DJ",
    "Alpha-3 code": "DJI",
  },
  {
    "Alpha-2 code": "DM",
    "Alpha-3 code": "DMA",
  },
  {
    "Alpha-2 code": "DO",
    "Alpha-3 code": "DOM",
  },
  {
    "Alpha-2 code": "EC",
    "Alpha-3 code": "ECU",
  },
  {
    "Alpha-2 code": "EG",
    "Alpha-3 code": "EGY",
  },
  {
    "Alpha-2 code": "SV",
    "Alpha-3 code": "SLV",
  },
  {
    "Alpha-2 code": "GQ",
    "Alpha-3 code": "GNQ",
  },
  {
    "Alpha-2 code": "ER",
    "Alpha-3 code": "ERI",
  },
  {
    "Alpha-2 code": "EE",
    "Alpha-3 code": "EST",
  },
  {
    "Alpha-2 code": "SZ",
    "Alpha-3 code": "SWZ",
  },
  {
    "Alpha-2 code": "ET",
    "Alpha-3 code": "ETH",
  },
  {
    "Alpha-2 code": "FK",
    "Alpha-3 code": "FLK",
  },
  {
    "Alpha-2 code": "FO",
    "Alpha-3 code": "FRO",
  },
  {
    "Alpha-2 code": "FJ",
    "Alpha-3 code": "FJI",
  },
  {
    "Alpha-2 code": "FI",
    "Alpha-3 code": "FIN",
  },
  {
    "Alpha-2 code": "FR",
    "Alpha-3 code": "FRA",
  },
  {
    "Alpha-2 code": "GF",
    "Alpha-3 code": "GUF",
  },
  {
    "Alpha-2 code": "PF",
    "Alpha-3 code": "PYF",
  },
  {
    "Alpha-2 code": "TF",
    "Alpha-3 code": "ATF",
  },
  {
    "Alpha-2 code": "GA",
    "Alpha-3 code": "GAB",
  },
  {
    "Alpha-2 code": "GM",
    "Alpha-3 code": "GMB",
  },
  {
    "Alpha-2 code": "GE",
    "Alpha-3 code": "GEO",
  },
  {
    "Alpha-2 code": "DE",
    "Alpha-3 code": "DEU",
  },
  {
    "Alpha-2 code": "GH",
    "Alpha-3 code": "GHA",
  },
  {
    "Alpha-2 code": "GI",
    "Alpha-3 code": "GIB",
  },
  {
    "Alpha-2 code": "GR",
    "Alpha-3 code": "GRC",
  },
  {
    "Alpha-2 code": "GL",
    "Alpha-3 code": "GRL",
  },
  {
    "Alpha-2 code": "GD",
    "Alpha-3 code": "GRD",
  },
  {
    "Alpha-2 code": "GP",
    "Alpha-3 code": "GLP",
  },
  {
    "Alpha-2 code": "GU",
    "Alpha-3 code": "GUM",
  },
  {
    "Alpha-2 code": "GT",
    "Alpha-3 code": "GTM",
  },
  {
    "Alpha-2 code": "GG",
    "Alpha-3 code": "GGY",
  },
  {
    "Alpha-2 code": "GN",
    "Alpha-3 code": "GIN",
  },
  {
    "Alpha-2 code": "GW",
    "Alpha-3 code": "GNB",
  },
  {
    "Alpha-2 code": "GY",
    "Alpha-3 code": "GUY",
  },
  {
    "Alpha-2 code": "HT",
    "Alpha-3 code": "HTI",
  },
  {
    "Alpha-2 code": "HM",
    "Alpha-3 code": "HMD",
  },
  {
    "Alpha-2 code": "VA",
    "Alpha-3 code": "VAT",
  },
  {
    "Alpha-2 code": "HN",
    "Alpha-3 code": "HND",
  },
  {
    "Alpha-2 code": "HK",
    "Alpha-3 code": "HKG",
  },
  {
    "Alpha-2 code": "HU",
    "Alpha-3 code": "HUN",
  },
  {
    "Alpha-2 code": "IS",
    "Alpha-3 code": "ISL",
  },
  {
    "Alpha-2 code": "IN",
    "Alpha-3 code": "IND",
  },
  {
    "Alpha-2 code": "ID",
    "Alpha-3 code": "IDN",
  },
  {
    "Alpha-2 code": "IR",
    "Alpha-3 code": "IRN",
  },
  {
    "Alpha-2 code": "IQ",
    "Alpha-3 code": "IRQ",
  },
  {
    "Alpha-2 code": "IE",
    "Alpha-3 code": "IRL",
  },
  {
    "Alpha-2 code": "IM",
    "Alpha-3 code": "IMN",
  },
  {
    "Alpha-2 code": "IL",
    "Alpha-3 code": "ISR",
  },
  {
    "Alpha-2 code": "IT",
    "Alpha-3 code": "ITA",
  },
  {
    "Alpha-2 code": "JM",
    "Alpha-3 code": "JAM",
  },
  {
    "Alpha-2 code": "JP",
    "Alpha-3 code": "JPN",
  },
  {
    "Alpha-2 code": "JE",
    "Alpha-3 code": "JEY",
  },
  {
    "Alpha-2 code": "JO",
    "Alpha-3 code": "JOR",
  },
  {
    "Alpha-2 code": "KZ",
    "Alpha-3 code": "KAZ",
  },
  {
    "Alpha-2 code": "KE",
    "Alpha-3 code": "KEN",
  },
  {
    "Alpha-2 code": "KI",
    "Alpha-3 code": "KIR",
  },
  {
    "Alpha-2 code": "KP",
    "Alpha-3 code": "PRK",
  },
  {
    "Alpha-2 code": "KR",
    "Alpha-3 code": "KOR",
  },
  {
    "Alpha-2 code": "KW",
    "Alpha-3 code": "KWT",
  },
  {
    "Alpha-2 code": "KG",
    "Alpha-3 code": "KGZ",
  },
  {
    "Alpha-2 code": "LA",
    "Alpha-3 code": "LAO",
  },
  {
    "Alpha-2 code": "LV",
    "Alpha-3 code": "LVA",
  },
  {
    "Alpha-2 code": "LB",
    "Alpha-3 code": "LBN",
  },
  {
    "Alpha-2 code": "LS",
    "Alpha-3 code": "LSO",
  },
  {
    "Alpha-2 code": "LR",
    "Alpha-3 code": "LBR",
  },
  {
    "Alpha-2 code": "LY",
    "Alpha-3 code": "LBY",
  },
  {
    "Alpha-2 code": "LI",
    "Alpha-3 code": "LIE",
  },
  {
    "Alpha-2 code": "LT",
    "Alpha-3 code": "LTU",
  },
  {
    "Alpha-2 code": "LU",
    "Alpha-3 code": "LUX",
  },
  {
    "Alpha-2 code": "MO",
    "Alpha-3 code": "MAC",
  },
  {
    "Alpha-2 code": "MG",
    "Alpha-3 code": "MDG",
  },
  {
    "Alpha-2 code": "MW",
    "Alpha-3 code": "MWI",
  },
  {
    "Alpha-2 code": "MY",
    "Alpha-3 code": "MYS",
  },
  {
    "Alpha-2 code": "MV",
    "Alpha-3 code": "MDV",
  },
  {
    "Alpha-2 code": "ML",
    "Alpha-3 code": "MLI",
  },
  {
    "Alpha-2 code": "MT",
    "Alpha-3 code": "MLT",
  },
  {
    "Alpha-2 code": "MH",
    "Alpha-3 code": "MHL",
  },
  {
    "Alpha-2 code": "MQ",
    "Alpha-3 code": "MTQ",
  },
  {
    "Alpha-2 code": "MR",
    "Alpha-3 code": "MRT",
  },
  {
    "Alpha-2 code": "MU",
    "Alpha-3 code": "MUS",
  },
  {
    "Alpha-2 code": "YT",
    "Alpha-3 code": "MYT",
  },
  {
    "Alpha-2 code": "MX",
    "Alpha-3 code": "MEX",
  },
  {
    "Alpha-2 code": "FM",
    "Alpha-3 code": "FSM",
  },
  {
    "Alpha-2 code": "MD",
    "Alpha-3 code": "MDA",
  },
  {
    "Alpha-2 code": "MC",
    "Alpha-3 code": "MCO",
  },
  {
    "Alpha-2 code": "MN",
    "Alpha-3 code": "MNG",
  },
  {
    "Alpha-2 code": "ME",
    "Alpha-3 code": "MNE",
  },
  {
    "Alpha-2 code": "MS",
    "Alpha-3 code": "MSR",
  },
  {
    "Alpha-2 code": "MA",
    "Alpha-3 code": "MAR",
  },
  {
    "Alpha-2 code": "MZ",
    "Alpha-3 code": "MOZ",
  },
  {
    "Alpha-2 code": "MM",
    "Alpha-3 code": "MMR",
  },
  {
    "Alpha-2 code": "NA",
    "Alpha-3 code": "NAM",
  },
  {
    "Alpha-2 code": "NR",
    "Alpha-3 code": "NRU",
  },
  {
    "Alpha-2 code": "NP",
    "Alpha-3 code": "NPL",
  },
  {
    "Alpha-2 code": "NL",
    "Alpha-3 code": "NLD",
  },
  {
    "Alpha-2 code": "NC",
    "Alpha-3 code": "NCL",
  },
  {
    "Alpha-2 code": "NZ",
    "Alpha-3 code": "NZL",
  },
  {
    "Alpha-2 code": "NI",
    "Alpha-3 code": "NIC",
  },
  {
    "Alpha-2 code": "NE",
    "Alpha-3 code": "NER",
  },
  {
    "Alpha-2 code": "NG",
    "Alpha-3 code": "NGA",
  },
  {
    "Alpha-2 code": "NU",
    "Alpha-3 code": "NIU",
  },
  {
    "Alpha-2 code": "NF",
    "Alpha-3 code": "NFK",
  },
  {
    "Alpha-2 code": "MP",
    "Alpha-3 code": "MNP",
  },
  {
    "Alpha-2 code": "NO",
    "Alpha-3 code": "NOR",
  },
  {
    "Alpha-2 code": "OM",
    "Alpha-3 code": "OMN",
  },
  {
    "Alpha-2 code": "PK",
    "Alpha-3 code": "PAK",
  },
  {
    "Alpha-2 code": "PW",
    "Alpha-3 code": "PLW",
  },
  {
    "Alpha-2 code": "PS",
    "Alpha-3 code": "PSE",
  },
  {
    "Alpha-2 code": "PA",
    "Alpha-3 code": "PAN",
  },
  {
    "Alpha-2 code": "PG",
    "Alpha-3 code": "PNG",
  },
  {
    "Alpha-2 code": "PY",
    "Alpha-3 code": "PRY",
  },
  {
    "Alpha-2 code": "PE",
    "Alpha-3 code": "PER",
  },
  {
    "Alpha-2 code": "PH",
    "Alpha-3 code": "PHL",
  },
  {
    "Alpha-2 code": "PN",
    "Alpha-3 code": "PCN",
  },
  {
    "Alpha-2 code": "PL",
    "Alpha-3 code": "POL",
  },
  {
    "Alpha-2 code": "PT",
    "Alpha-3 code": "PRT",
  },
  {
    "Alpha-2 code": "PR",
    "Alpha-3 code": "PRI",
  },
  {
    "Alpha-2 code": "QA",
    "Alpha-3 code": "QAT",
  },
  {
    "Alpha-2 code": "MK",
    "Alpha-3 code": "MKD",
  },
  {
    "Alpha-2 code": "RO",
    "Alpha-3 code": "ROU",
  },
  {
    "Alpha-2 code": "RU",
    "Alpha-3 code": "RUS",
  },
  {
    "Alpha-2 code": "RW",
    "Alpha-3 code": "RWA",
  },
  {
    "Alpha-2 code": "RE",
    "Alpha-3 code": "REU",
  },
  {
    "Alpha-2 code": "BL",
    "Alpha-3 code": "BLM",
  },
  {
    "Alpha-2 code": "SH",
    "Alpha-3 code": "SHN",
  },
  {
    "Alpha-2 code": "KN",
    "Alpha-3 code": "KNA",
  },
  {
    "Alpha-2 code": "LC",
    "Alpha-3 code": "LCA",
  },
  {
    "Alpha-2 code": "MF",
    "Alpha-3 code": "MAF",
  },
  {
    "Alpha-2 code": "PM",
    "Alpha-3 code": "SPM",
  },
  {
    "Alpha-2 code": "VC",
    "Alpha-3 code": "VCT",
  },
  {
    "Alpha-2 code": "WS",
    "Alpha-3 code": "WSM",
  },
  {
    "Alpha-2 code": "SM",
    "Alpha-3 code": "SMR",
  },
  {
    "Alpha-2 code": "ST",
    "Alpha-3 code": "STP",
  },
  {
    "Alpha-2 code": "SA",
    "Alpha-3 code": "SAU",
  },
  {
    "Alpha-2 code": "SN",
    "Alpha-3 code": "SEN",
  },
  {
    "Alpha-2 code": "RS",
    "Alpha-3 code": "SRB",
  },
  {
    "Alpha-2 code": "SC",
    "Alpha-3 code": "SYC",
  },
  {
    "Alpha-2 code": "SL",
    "Alpha-3 code": "SLE",
  },
  {
    "Alpha-2 code": "SG",
    "Alpha-3 code": "SGP",
  },
  {
    "Alpha-2 code": "SX",
    "Alpha-3 code": "SXM",
  },
  {
    "Alpha-2 code": "SK",
    "Alpha-3 code": "SVK",
  },
  {
    "Alpha-2 code": "SI",
    "Alpha-3 code": "SVN",
  },
  {
    "Alpha-2 code": "SI",
    "Alpha-3 code": "SLO",
  },
  {
    "Alpha-2 code": "SB",
    "Alpha-3 code": "SLB",
  },
  {
    "Alpha-2 code": "SO",
    "Alpha-3 code": "SOM",
  },
  {
    "Alpha-2 code": "ZA",
    "Alpha-3 code": "ZAF",
  },
  {
    "Alpha-2 code": "GS",
    "Alpha-3 code": "SGS",
  },
  {
    "Alpha-2 code": "SS",
    "Alpha-3 code": "SSD",
  },
  {
    "Alpha-2 code": "ES",
    "Alpha-3 code": "ESP",
  },
  {
    "Alpha-2 code": "LK",
    "Alpha-3 code": "LKA",
  },
  {
    "Alpha-2 code": "SD",
    "Alpha-3 code": "SDN",
  },
  {
    "Alpha-2 code": "SR",
    "Alpha-3 code": "SUR",
  },
  {
    "Alpha-2 code": "SJ",
    "Alpha-3 code": "SJM",
  },
  {
    "Alpha-2 code": "SE",
    "Alpha-3 code": "SWE",
  },
  {
    "Alpha-2 code": "CH",
    "Alpha-3 code": "CHE",
  },
  {
    "Alpha-2 code": "SY",
    "Alpha-3 code": "SYR",
  },
  {
    "Alpha-2 code": "TW",
    "Alpha-3 code": "TWN",
  },
  {
    "Alpha-2 code": "TJ",
    "Alpha-3 code": "TJK",
  },
  {
    "Alpha-2 code": "TZ",
    "Alpha-3 code": "TZA",
  },
  {
    "Alpha-2 code": "TH",
    "Alpha-3 code": "THA",
  },
  {
    "Alpha-2 code": "TL",
    "Alpha-3 code": "TLS",
  },
  {
    "Alpha-2 code": "TG",
    "Alpha-3 code": "TGO",
  },
  {
    "Alpha-2 code": "TK",
    "Alpha-3 code": "TKL",
  },
  {
    "Alpha-2 code": "TO",
    "Alpha-3 code": "TON",
  },
  {
    "Alpha-2 code": "TT",
    "Alpha-3 code": "TTO",
  },
  {
    "Alpha-2 code": "TN",
    "Alpha-3 code": "TUN",
  },
  {
    "Alpha-2 code": "TR",
    "Alpha-3 code": "TUR",
  },
  {
    "Alpha-2 code": "TM",
    "Alpha-3 code": "TKM",
  },
  {
    "Alpha-2 code": "TC",
    "Alpha-3 code": "TCA",
  },
  {
    "Alpha-2 code": "TV",
    "Alpha-3 code": "TUV",
  },
  {
    "Alpha-2 code": "UG",
    "Alpha-3 code": "UGA",
  },
  {
    "Alpha-2 code": "UA",
    "Alpha-3 code": "UKR",
  },
  {
    "Alpha-2 code": "AE",
    "Alpha-3 code": "ARE",
  },
  {
    "Alpha-2 code": "GB",
    "Alpha-3 code": "GBR",
  },
  {
    "Alpha-2 code": "UM",
    "Alpha-3 code": "UMI",
  },
  {
    "Alpha-2 code": "US",
    "Alpha-3 code": "USA",
  },
  {
    "Alpha-2 code": "UY",
    "Alpha-3 code": "URY",
  },
  {
    "Alpha-2 code": "UZ",
    "Alpha-3 code": "UZB",
  },
  {
    "Alpha-2 code": "VU",
    "Alpha-3 code": "VUT",
  },
  {
    "Alpha-2 code": "VE",
    "Alpha-3 code": "VEN",
  },
  {
    "Alpha-2 code": "VN",
    "Alpha-3 code": "VNM",
  },
  {
    "Alpha-2 code": "VG",
    "Alpha-3 code": "VGB",
  },
  {
    "Alpha-2 code": "VI",
    "Alpha-3 code": "VIR",
  },
  {
    "Alpha-2 code": "WF",
    "Alpha-3 code": "WLF",
  },
  {
    "Alpha-2 code": "EH",
    "Alpha-3 code": "ESH",
  },
  {
    "Alpha-2 code": "YE",
    "Alpha-3 code": "YEM",
  },
  {
    "Alpha-2 code": "ZM",
    "Alpha-3 code": "ZMB",
  },
  {
    "Alpha-2 code": "ZW",
    "Alpha-3 code": "ZWE",
  },
  {
    "Alpha-2 code": "AX",
    "Alpha-3 code": "ALA",
  },
  {
    "Alpha-2 code": "CH",
    "Alpha-3 code": "SUI",
  },
  {
    "Alpha-2 code": "XX",
    "Alpha-3 code": "XXX",
  },
  {
    "Alpha-2 code": "CR",
    "Alpha-3 code": "CRC",
  },
  {
    "Alpha-2 code": "GR",
    "Alpha-3 code": "GRE",
  },
  {
    "Alpha-2 code": "NL",
    "Alpha-3 code": "NED",
  },
  {
    "Alpha-2 code": "DE",
    "Alpha-3 code": "GER",
  },
  {
    "Alpha-2 code": "ID",
    "Alpha-3 code": "INA",
  },
  {
    "Alpha-2 code": "CN",
    "Alpha-3 code": "ROC",
  },
  {
    "Alpha-2 code": "PT",
    "Alpha-3 code": "POR",
  },
  {
    "Alpha-2 code": "HR",
    "Alpha-3 code": "CRO",
  },
  {
    "Alpha-2 code": "VN",
    "Alpha-3 code": "VIE",
  },
  {
    "Alpha-2 code": "DK",
    "Alpha-3 code": "DEN",
  },
  {
    "Alpha-2 code": "MN",
    "Alpha-3 code": "MGL",
  },
  {
    "Alpha-2 code": "MY",
    "Alpha-3 code": "MYS",
  },
  {
    "Alpha-2 code": "PR",
    "Alpha-3 code": "PUR",
  },
  {
    "Alpha-2 code": "PH",
    "Alpha-3 code": "PHI",
  },
  {
    "Alpha-2 code": "CL",
    "Alpha-3 code": "CHI",
  },
  {
    "Alpha-2 code": "BG",
    "Alpha-3 code": "BUL",
  },
];

export function changeFlagCode(countryCode) {
  return countries.filter((country) => {
    return country["Alpha-3 code"] == countryCode;
  })[0]["Alpha-2 code"];
}
