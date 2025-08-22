import { runQuery } from '@/app/api/v1/device/data-access/util/run-query'

export const getDeviceById = async (id: string) => {
  const d1Result =
    await runQuery('select productUid, productType, status, lastUpdated from device where deleteDate is null and productUid=?', [id])

  return d1Result?.results[0]
}
