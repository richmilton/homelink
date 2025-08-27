import { runQuery } from '@/data-access/cloudflare-d1/util/run-query'

export const getDeviceId = async (id: string) => {
  const sql = 'select productUid from device where productUid=?'
  const params = [id]

  return await runQuery(sql, params)
}
