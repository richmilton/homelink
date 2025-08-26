import { DeviceParams } from '@/app/api/v1/types'
import { putStatus } from '@/app/api/v1/device/[deviceId]/status/handlers/put-status'

type RequestBody = {
  status: string
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    const deviceId = (await params).deviceId

    const { status } = await request.json<RequestBody>()

    if (status) {
      const newDevice = await putStatus(deviceId, status)

      return Response.json(newDevice)
    }

    return new Response('property status not in request body', { status: 400 })
  } catch (error) {
    console.error(error)

    return new Response('', { status: 404 })
  }
}
