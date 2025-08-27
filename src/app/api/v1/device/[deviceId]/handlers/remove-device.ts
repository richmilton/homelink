import { deleteDevice } from '@/data-access/cloudflare-d1/delete-device'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'
import { getDeviceById } from '@/data-access/cloudflare-d1/get-device-by-id'
import { updateHistory } from '@/data-access/cloudflare-d1/update-history'

export const removeDevice = async (deviceId: string) => {
  checkMacAddress(deviceId)

  const d1FindResult = await getDeviceById(deviceId)

  if (!d1FindResult?.productUid) {
    throw new Error('device not found')
  }

  if (d1FindResult?.deleteDate) {
    throw new Error('device already deleted')
  }

  const now = Date.now()

  const d1Result = await deleteDevice(deviceId, now)

  if (d1Result?.meta?.rows_written !== 1) {
    throw new Error(`${deviceId} not found`)
  }

  await updateHistory(deviceId, 'removeDevice', 'removed', now)
}
