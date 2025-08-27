import { runQuery } from '@/data-access/cloudflare-d1/util/run-query'

export const getDeviceTypeById = async (deviceTypeId: string) => {
  const d1Result =
    await runQuery('select productName, description, dataSheetUrl, manualUrl from device_type where productTypeId=?', [deviceTypeId])

  return d1Result?.results[0]
}
