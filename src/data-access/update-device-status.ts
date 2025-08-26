import { runQuery } from '@/data-access/util/run-query'

export const updateDeviceStatus = async (deviceId: string, status: string) => {
  return await runQuery('update device set status=? where deleteDate is null and productUid=?', [status, deviceId])
}
