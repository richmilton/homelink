import { DeviceDetail } from '@/app/api/v1/types'
import { getDeviceById } from '@/data-access/cloudflare-d1/get-device-by-id'
import { getDeviceTypeById } from '@/data-access/cloudflare-d1/get-device-type-by-id'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'

export const deviceDetails = async (deviceId: string): Promise<DeviceDetail> => {
  checkMacAddress(deviceId)

  const device = await getDeviceById(deviceId)

  if (device && !device.deleteDate) {
    const deviceType = await getDeviceTypeById(device.productType as string)

    if (deviceType) {
      return {
        productUid: device.productUid as string,
        productType: device.productType as string,
        productName: deviceType.productName as string,
        description: deviceType.description as string,
        status: device.status as string,
        dataSheetUrl: deviceType.dataSheetUrl as string,
        manualUrl: deviceType.manualUrl as string,
      }
    }
  }

  throw new Error('device not found')
}
