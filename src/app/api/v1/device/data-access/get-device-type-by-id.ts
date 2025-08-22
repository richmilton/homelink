import { runQuery } from '@/app/api/v1/device/data-access/util/run-query'

export const getDeviceTypeById = async (deviceTypeId: string) => {
  const d1Result =
    await runQuery('select productName, description, dataSheetUrl, manualUrl from device_type where productTypeId=?', [deviceTypeId])

  return d1Result?.results[0]
}
