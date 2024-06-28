import * as clientTextData from 'src/assets/json/language/client_indonesian.json';
import * as serverTextData from 'src/assets/json/language/server_indonesian.json';

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Translate Local Text
export function localText(key: string): string {
  const keys = key.toLowerCase().split('_')

  // Traverse the JSON object using the keys
  let textData: any = clientTextData
  let value = ""

  for (const k of keys) {
    if (textData[k]) {
      value = textData[k]
    } else {
      return ''
    }
  }

  return value as string
}

export function localAlertServer(key: string) {
  let tkey = key.toLowerCase()
  let textData: any = serverTextData
  let data = null

  try {
    data = textData[tkey]
  } catch (err) {}

  return data
}

// Rupiah Local
export function rupiahText(num: number, option: {short?: boolean} = {short: false}): string {
  const formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }

  let isShort = false
  let rupiah = 0

  // Option Short
  if (option.short && num >= 1000) {
    rupiah = Math.round(num / 1000)
    isShort = true
  } else {
    rupiah = num
  }

  return new Intl.NumberFormat('id-ID', formatOptions).format(rupiah) + (isShort ? 'K' : '')
}
