import { runQuery } from '@/data-access/cloudflare-d1/util/run-query'

export const getDeviceById = async (id: string) => {
  const d1Result =
    await runQuery('select productUid, productType, status, lastUpdated, deleteDate from device where productUid=?', [id])

  return d1Result?.results[0]
}
