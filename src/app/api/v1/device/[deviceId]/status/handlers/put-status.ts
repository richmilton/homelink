import { updateDeviceStatus } from '@/app/api/v1/device/data-access/update-device-status'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'
import { getDeviceById } from '@/app/api/v1/device/data-access/get-device-by-id'

export const putStatus = async (deviceId: string, status: string) => {
  checkMacAddress(deviceId)

  const d1FindResult = await getDeviceById(deviceId)

  if (!d1FindResult?.productUid) {
    throw new Error('device not found')
  }

  if (d1FindResult?.deleteDate) {
    throw new Error('device has been deleted')
  }

  const d1Result = await updateDeviceStatus(deviceId, status)

  if (!d1Result?.success) {
    throw new Error(`${deviceId} not updated`)
  }

  return await getDeviceById(deviceId)
}
