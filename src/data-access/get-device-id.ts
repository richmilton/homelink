import { runQuery } from '@/data-access/util/run-query'

export const getDeviceId = async (id: string) => {
  const sql = 'select productUid from device where productUid=?'
  const params = [id]

  return await runQuery(sql, params)
}
