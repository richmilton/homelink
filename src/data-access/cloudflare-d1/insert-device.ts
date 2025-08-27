import { DeviceResponse, NewDevice } from '@/app/api/v1/types'
import { runQuery } from '@/data-access/cloudflare-d1/util/run-query'

export const insertDevice = async (device: NewDevice, updtateTime: number, status: string): Promise<DeviceResponse> => {
  const sql = 'insert into device(productUid, productType, status, lastUpdated) values (?,?,?,?)'
  const params = [device.productUid, device.productType, status, updtateTime]

  const response = await runQuery(sql, params)

  if (response?.success) {
    return { ...device, pathToSelf: `/api/v1/device/${device.productUid}`, lastUpdated: updtateTime, status }
  }

  throw new Error(`Unable to insert device ${device.productUid}`)
}
