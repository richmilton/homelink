import { DeviceDetail, ProductId } from '@/app/api/v1/types'
import { getDeviceById } from '@/app/api/v1/device/data-access/get-device-by-id'
import { getDeviceTypeById } from '@/app/api/v1/device/data-access/get-device-type-by-id'
import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'

export const deviceDetails = async (deviceId: string): Promise<DeviceDetail> => {
  checkMacAddress(deviceId)

  const device = await getDeviceById(deviceId)

  if (device) {
    const deviceType = await getDeviceTypeById(device.productType as string)

    if (deviceType) {
      return {
        productUid: device.productUid as string,
        productType: device.productType as ProductId,
        productName: deviceType.productName as string,
        description: deviceType.description as string,
        status: device.status as string,
        dataSheetUrl: deviceType.dataSheetUrl as string,
        manualUrl: deviceType.manualUrl as string,
      }
    }
  }

  throw new Error('not found')
}
