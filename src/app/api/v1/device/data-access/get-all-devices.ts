'use server'
import { runQuery } from '@/app/api/v1/device/data-access/util/run-query'

export const getAllDevices = async () => {
  return await runQuery('select productUid, productType, status, lastUpdated from device where deleteDate is null')
}
