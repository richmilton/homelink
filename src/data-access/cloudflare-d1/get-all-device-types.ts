'use server'
import { runQuery } from '@/data-access/cloudflare-d1/util/run-query'

export const getAllDeviceTypes = async () => {
  return await runQuery('select productTypeId, productName, description, dataSheetUrl, manualUrl from device_type')
}
