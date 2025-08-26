import { DeviceParams } from '@/app/api/v1/types'
import { putStatus } from '@/app/api/v1/device/[deviceId]/status/handlers/put-status'

type RequestBody = {
  newStatus: string
}

/**
 * @swagger
 * /api/v1/device/{deviceId}/status:
 *   put:
 *     description: Updates a device status
 *     responses:
 *       200:
 *         description: ok
 *       400:
 *         description: property newStatus not in request body
 *       404:
 *         description: device not found, incorrect device id format, device has been deleted
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    const { deviceId } = await params

    const { newStatus } = await request.json<RequestBody>()

    if (newStatus) {
      //
      // Here we would need to interact with the physical device or controller to change something
      // then only update the state in the db if we are successful
      //

      const updatedDevice = await putStatus(deviceId, newStatus)

      return Response.json(updatedDevice)
    }

    return new Response('property newStatus not in request body', { status: 400 })
  } catch (error) {
    console.error(error)

    return new Response(error as string, { status: 404 })
  }
}
