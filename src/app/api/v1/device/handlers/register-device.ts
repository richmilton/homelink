import { NewDevice } from '@/app/api/v1/types'
import { insertDevice } from '@/data-access/insert-device'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'
import { getDeviceId } from '@/data-access/get-device-id'
import { getAllDeviceTypes } from '@/data-access/get-all-device-types'
import { updateHistory } from '@/data-access/update-history'

export const registerDevice = async (device: NewDevice) => {
  const macAddress = checkMacAddress(device.productUid)
  const defaultStatus = 'default'

  const existingDevice = await getDeviceId(device.productUid)

  if (existingDevice?.results?.length) {
    throw new Error('device is already registered')
  }

  const devices = await getAllDeviceTypes()
  const deviceType = devices?.results?.find(({ productTypeId }) => productTypeId === device.productType)
  const now = Date.now()

  if (!deviceType) {
    throw new Error('unknown device type')
  }

  const deviceResponse = await insertDevice({ ...device, productUid: macAddress }, now, defaultStatus)

  if (deviceResponse) {
    await updateHistory(device.productUid, 'register', defaultStatus, now)
  }

  return deviceResponse
}
