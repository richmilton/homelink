'use server'
import { runQuery } from '@/data-access/cloudflare-d1/util/run-query'

export const getAllDevices = async () => {
  return await runQuery('select productUid, productType, status, lastUpdated from device where deleteDate is null')
}
