import { DeviceResponse, NewDevice } from '@/app/api/v1/types'
import { getAllDeviceTypes } from '@/data-access/get-all-device-types'
import { runQuery } from '@/data-access/util/run-query'
import { getDeviceId } from '@/data-access/get-device-id'

export const insertDevice = async (device: NewDevice): Promise<DeviceResponse> => {
  const existingDevice = await getDeviceId(device.productUid)

  if (existingDevice?.results?.length) {
    throw new Error('device is already registered')
  }

  const devices = await getAllDeviceTypes()
  const deviceType = devices?.results?.find(({ productTypeId }) => productTypeId === device.productType)
  const now = Date.now()
  const defaultStatus = 'default'

  if (!deviceType) {
    throw new Error('unknown device type')
  }

  const sql = 'insert into device(productUid, productType, status, lastUpdated) values (?,?,?,?)'
  const params = [device.productUid, device.productType, defaultStatus, now]

  const response = await runQuery(sql, params)

  if (response?.success) {
    return { ...device, pathToSelf: `/api/v1/device/${device.productUid}`, lastUpdated: now, status: defaultStatus }
  }

  throw new Error(`Unable to insert device ${device.productUid}`)
}
