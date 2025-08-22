import { updateDeviceStatus } from '@/app/api/v1/device/data-access/update-device-status'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'
import { getDeviceById } from '@/app/api/v1/device/data-access/get-device-by-id'

export const patchStatus = async (deviceId: string, status: string) => {
  checkMacAddress(deviceId)

  const d1Result = await updateDeviceStatus(deviceId, status)

  console.log('PATCH', d1Result)

  if (!d1Result?.success) {
    throw new Error(`${deviceId} not updated`)
  }

  return await getDeviceById(deviceId)
}
