'use server'
import { runQuery } from '@/data-access/util/run-query'

export const getAllDeviceTypes = async () => {
  return await runQuery('select productTypeId, productName, description, dataSheetUrl, manualUrl from device_type')
}
