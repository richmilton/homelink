import { listDevices } from '@/app/api/v1/device/handlers/list-devices'
import { DeviceResponse, DeviceSummary, NewDevice } from '@/app/api/v1/types'
import { registerDevice } from '@/app/api/v1/device/handlers/register-device'
import { NextResponse } from 'next/server'

/**
 * @swagger
 * /api/v1/device:
 *   get:
 *     description: Returns a list of registered devices
 *     responses:
 *       200:
 *         description: ok
 */
export async function GET() {
  const deviceList: DeviceSummary[] = await listDevices()

  return Response.json(deviceList)
}

/**
 * @swagger
 * /api/v1/device:
 *   get:
 *     description: Registers a new device
 *     responses:
 *       201:
 *         description: created
 *       400:
 *         description: device is already registered, incorrect device id format
 */
export async function POST(request: Request) {
  try {
    const body: NewDevice = await request.json<DeviceResponse>()
    const result: DeviceResponse = await registerDevice(body)

    return Response.json(result, { status: 201 })
  } catch (error) {
    console.error(error)

    return new NextResponse(error as string, { status: 400 })
  }
}
