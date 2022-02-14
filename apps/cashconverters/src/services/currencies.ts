interface CurrencyResponse {
    success: boolean
    timestamp: number
    base: string
    date: Date
    rates: { [key: string]: number }
}

export interface Rates {
    base: string,
    rates: { [key: string]: number }
}

export const getLatestRates = async (apiKey: string): Promise<Rates> => {
    return new Promise((resolve, _reject) => {
        resolve({
            "base": "EUR",
            "rates": {
                "AED": 4.173613,
                "AFN": 105.025321,
                "ALL": 121.585081,
                "AMD": 547.603427,
                "ANG": 2.056053,
                "AOA": 599.673167,
                "ARS": 120.805282,
                "AUD": 1.59166,
                "AWG": 2.045599,
                "AZN": 1.94168,
                "BAM": 1.958167,
                "BBD": 2.303449,
                "BDT": 98.083838,
                "BGN": 1.950746,
                "BHD": 0.428411,
                "BIF": 2279.520035,
                "BMD": 1.136286,
                "BND": 1.53353,
                "BOB": 7.854673,
                "BRL": 5.969478,
                "BSD": 1.140861,
                "BTC": 2.6960147e-5,
                "BTN": 85.854546,
                "BWP": 13.135774,
                "BYN": 2.91658,
                "BYR": 22271.203089,
                "BZD": 2.299644,
                "CAD": 1.446009,
                "CDF": 2289.616392,
                "CHF": 1.050781,
                "CLF": 0.033356,
                "CLP": 920.402734,
                "CNY": 7.220644,
                "COP": 4468.512368,
                "CRC": 733.345063,
                "CUC": 1.136286,
                "CUP": 30.111576,
                "CVE": 110.396731,
                "CZK": 24.501734,
                "DJF": 203.102352,
                "DKK": 7.441512,
                "DOP": 65.232839,
                "DZD": 160.024282,
                "EGP": 17.833112,
                "ERN": 17.04431,
                "ETB": 57.410205,
                "EUR": 1,
                "FJD": 2.425405,
                "FKP": 0.827125,
                "GBP": 0.837738,
                "GEL": 3.329322,
                "GGP": 0.827125,
                "GHS": 7.312826,
                "GIP": 0.827125,
                "GMD": 60.336084,
                "GNF": 10286.974922,
                "GTQ": 8.773068,
                "GYD": 238.68481,
                "HKD": 8.863592,
                "HNL": 28.088517,
                "HRK": 7.540368,
                "HTG": 116.636176,
                "HUF": 356.413089,
                "IDR": 16307.974834,
                "ILS": 3.676905,
                "IMP": 0.827125,
                "INR": 85.872589,
                "IQD": 1665.056827,
                "IRR": 48008.077704,
                "ISK": 141.796553,
                "JEP": 0.827125,
                "JMD": 179.31697,
                "JOD": 0.80561,
                "JPY": 131.151816,
                "KES": 129.604616,
                "KGS": 96.339543,
                "KHR": 4642.039108,
                "KMF": 490.932052,
                "KPW": 1022.657463,
                "KRW": 1363.054332,
                "KWD": 0.343442,
                "KYD": 0.950734,
                "KZT": 490.615426,
                "LAK": 12959.964464,
                "LBP": 1725.158544,
                "LKR": 231.020365,
                "LRD": 174.52681,
                "LSL": 17.293906,
                "LTL": 3.355157,
                "LVL": 0.687328,
                "LYD": 5.227838,
                "MAD": 10.653512,
                "MDL": 20.306931,
                "MGA": 4543.401409,
                "MKD": 61.703628,
                "MMK": 2028.473073,
                "MNT": 3248.449462,
                "MOP": 9.165837,
                "MRO": 405.653861,
                "MUR": 49.724141,
                "MVR": 17.555627,
                "MWK": 914.32702,
                "MXN": 23.317839,
                "MYR": 4.762741,
                "MZN": 72.528906,
                "NAD": 17.294469,
                "NGN": 475.728685,
                "NIO": 40.448265,
                "NOK": 10.054295,
                "NPR": 137.366913,
                "NZD": 1.710332,
                "OMR": 0.437492,
                "PAB": 1.140861,
                "PEN": 4.26599,
                "PGK": 4.040521,
                "PHP": 58.323854,
                "PKR": 199.247952,
                "PLN": 4.566763,
                "PYG": 7952.38918,
                "QAR": 4.137229,
                "RON": 4.928869,
                "RSD": 117.69626,
                "RUB": 88.030797,
                "RWF": 1185.925104,
                "SAR": 4.263,
                "SBD": 9.189572,
                "SCR": 14.869743,
                "SDG": 502.807869,
                "SEK": 10.59064,
                "SGD": 1.529787,
                "SHP": 1.565123,
                "SLL": 13084.332066,
                "SOS": 663.591161,
                "SRD": 23.140467,
                "STD": 23518.823396,
                "SVC": 9.982912,
                "SYP": 2854.349855,
                "SZL": 17.268105,
                "THB": 37.029852,
                "TJS": 12.885776,
                "TMT": 3.977001,
                "TND": 3.277086,
                "TOP": 2.57704,
                "TRY": 15.382013,
                "TTD": 7.753552,
                "TWD": 31.711488,
                "TZS": 2638.76824,
                "UAH": 31.968046,
                "UGX": 4017.994468,
                "USD": 1.136286,
                "UYU": 49.341877,
                "UZS": 12379.541875,
                "VEF": 242972260629.0826,
                "VND": 25779.485719,
                "VUV": 129.163222,
                "WST": 2.968368,
                "XAF": 656.740655,
                "XAG": 0.05046,
                "XAU": 0.000628,
                "XCD": 3.070869,
                "XDR": 0.81267,
                "XOF": 656.740655,
                "XPF": 119.821496,
                "YER": 284.355715,
                "ZAR": 17.297222,
                "ZMK": 10227.919477,
                "ZMW": 21.402138,
                "ZWL": 365.883587
            }
        })
    })
}

export const convertCurrency = (amount: number, from: string, to: string, rates: Rates): number => {
    if (from === to)
        return amount

    if (from === rates.base)
        return amount * rates.rates[to]

    const toBase = amount / rates.rates[from]

    if (to === rates.base)
        return toBase

    return toBase * rates.rates[to]
}