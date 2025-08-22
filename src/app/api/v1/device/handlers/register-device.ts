import { DeviceDao } from '@/app/api/v1/types'
import { insertDevice } from '@/app/api/v1/device/data-access/insert-device'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'

export const registerDevice = async (device: DeviceDao) => {
  const macAddress = checkMacAddress(device.productUid)

  return await insertDevice({ ...device, productUid: macAddress })
}
