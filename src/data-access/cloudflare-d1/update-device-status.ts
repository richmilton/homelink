import { runQuery } from '@/data-access/cloudflare-d1/util/run-query'

export const updateDeviceStatus = async (deviceId: string, status: string, updateTime: number) => {
  return await runQuery('update device set status=?, lastUpdated=? where deleteDate is null and productUid=?', [status, updateTime, deviceId])
}
