import { runQuery } from '@/data-access/util/run-query'

export const deleteDevice = async (deviceId: string) => {
  return await runQuery('update device set deleteDate=? where productUid=?', [Date.now(), deviceId])
}
