import { getAllDeviceTypes } from '@/app/api/v1/device/data-access/get-all-device-types'
import { getAllDevices } from '@/app/api/v1/device/data-access/get-all-devices'

export const listDevices = async () => {
  const devices = await getAllDevices()

  if (devices?.results?.length) {
    const deviceTypes = await getAllDeviceTypes()

    if (deviceTypes?.results?.length) {
      return devices?.results?.map(device => {
        const thisDeviceType = deviceTypes?.results?.find((deviceType) => device.productType === deviceType.productTypeId)

        return {
          uid: device.productUid,
          productId: device.productType,
          name: thisDeviceType?.productName,
          description: thisDeviceType?.description,
        }
      })
    }
  }

  return []
}
