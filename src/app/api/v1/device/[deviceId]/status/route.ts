import { DeviceParams } from '@/app/api/v1/types'
import { putStatus } from '@/app/api/v1/device/[deviceId]/status/handlers/put-status'

type RequestBody = {
  newStatus: string
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    const { deviceId } = await params

    const { newStatus } = await request.json<RequestBody>()

    if (newStatus) {
      const newDevice = await putStatus(deviceId, newStatus)

      return Response.json(newDevice)
    }

    return new Response('property newStatus not in request body', { status: 400 })
  } catch (error) {
    console.error(error)

    return new Response('', { status: 404 })
  }
}
