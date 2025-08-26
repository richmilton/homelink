import { getAllDeviceTypes } from '@/app/api/v1/device/data-access/get-all-device-types'
import { getAllDevices } from '@/app/api/v1/device/data-access/get-all-devices'
import { DeviceSummary } from '@/app/api/v1/types'

export const listDevices = async (): Promise<DeviceSummary[]> => {
  const devices = await getAllDevices()
  const response: DeviceSummary[]  = []

  if (devices?.results?.length) {
    const deviceTypes = await getAllDeviceTypes()

    if (deviceTypes?.results?.length) {
      devices?.results?.forEach(device => {
        const thisDeviceType
          = deviceTypes?.results?.find((deviceType) => device.productType === deviceType.productTypeId)

        if (thisDeviceType) {
          response.push({
            uid: device.productUid as string,
            productId: device.productType as string,
            name: thisDeviceType?.productName as string,
            description: thisDeviceType?.description as string,
            status: device?.status as string,
          })
        }
      })
    }
  }

  return response
}
