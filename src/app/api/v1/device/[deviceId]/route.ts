import { deviceDetails } from '@/app/api/v1/device/[deviceId]/handlers/device-details'
import { removeDevice } from '@/app/api/v1/device/[deviceId]/handlers/remove-device'
import { DeviceParams } from '@/app/api/v1/types'

/**
 * @swagger
 * /api/v1/device/{deviceId}:
 *   get:
 *     description: Returns device details
 *     responses:
 *       200:
 *         description: ok
 *       404:
 *         description: device not found, incorrect device id format
 */
export async function GET(
  _: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    const deviceId = (await params).deviceId

    return Response.json(await deviceDetails(deviceId))
  } catch (error) {
    console.error(error)

    return new Response(error as string, { status: 404 })
  }
}

/**
 * @swagger
 * /api/v1/device/{deviceId}:
 *   delete:
 *     description: Deletes a device
 *     responses:
 *       200:
 *         description: deleted successfully
 *       404:
 *         description: device not found, incorrect device id format, device already deleted
 */
export async function DELETE(
  _: Request,
  { params }: { params: Promise<DeviceParams> }
) {
  try {
    await removeDevice((await params).deviceId)

    return new Response('deleted successfully', { status: 200 })
  } catch (error) {
    console.error(error)

    return new Response(error as string, { status: 404 })
  }
}
