import { deleteDevice } from '@/app/api/v1/device/data-access/delete-device'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'
import { getDeviceById } from '@/app/api/v1/device/data-access/get-device-by-id'

export const removeDevice = async (deviceId: string) => {
  checkMacAddress(deviceId)

  const d1FindResult = await getDeviceById(deviceId)

  if (!d1FindResult?.productUid) {
    throw new Error('device not found')
  }

  if (d1FindResult?.deleteDate) {
    throw new Error('device already deleted')
  }

  const d1Result = await deleteDevice(deviceId)

  if (d1Result?.meta?.rows_written !== 1) {
    throw new Error(`${deviceId} not found`)
  }
}
