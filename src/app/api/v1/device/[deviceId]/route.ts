import { deviceDetails } from '@/app/api/v1/device/[deviceId]/handlers/device-details'
import { removeDevice } from '@/app/api/v1/device/[deviceId]/handlers/remove-device'
import { DeviceParams } from '@/app/api/v1/types'

export async function GET(
  _: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    const deviceId = (await params).deviceId

    return Response.json(await deviceDetails(deviceId))
  } catch (error) {
    console.error(error)

    return new Response(null, { status: 404 })
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    await removeDevice((await params).deviceId)

    return new Response(null, { status: 204 })
  } catch (error) {
    console.error(error)

    return new Response(null, { status: 404 })
  }
}
