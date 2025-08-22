import { DeviceParams } from '@/app/api/v1/types'
import { patchStatus } from '@/app/api/v1/device/[deviceId]/status/handlers/patch-status'

type RequestBody = {
  status: string
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    const deviceId = (await params).deviceId

    const { status } = await request.json<RequestBody>()

    console.log('PATCH', status)

    if (status) {
      const newDevice = await patchStatus(deviceId, status)

      console.log('PATCH', newDevice, deviceId)

      return Response.json(newDevice)
    }

    return new Response('property status not in request body', { status: 400 })
  } catch (error) {
    console.error(error)

    return new Response('', { status: 404 })
  }
}
