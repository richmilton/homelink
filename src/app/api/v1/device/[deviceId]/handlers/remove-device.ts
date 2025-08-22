import { deleteDevice } from '@/app/api/v1/device/data-access/delete-device'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'

export const removeDevice = async (deviceId: string) => {
  checkMacAddress(deviceId)

  const d1Result = await deleteDevice(deviceId)

  if (d1Result?.meta?.rows_written !== 1) {
    throw new Error(`${deviceId} not found`)
  }
}
