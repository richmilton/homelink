import { runQuery } from '@/data-access/util/run-query'

export const deleteDevice = async (deviceId: string, updateTime: number) => {
  return await runQuery('update device set deleteDate=? where productUid=?', [updateTime, deviceId])
}
