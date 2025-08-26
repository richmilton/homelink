import { listDevices } from '@/app/api/v1/device/handlers/list-devices'
import { DeviceResponse, NewDevice } from '@/app/api/v1/types'
import { registerDevice } from '@/app/api/v1/device/handlers/register-device'
import { NextResponse } from 'next/server'

export async function GET() {
  const deviceList = await listDevices()

  return Response.json(deviceList)
}

export async function POST(request: Request) {
  try {
    const body: NewDevice = await request.json<DeviceResponse>()
    const result = await registerDevice(body)

    return Response.json(result, { status: 201 })
  } catch (error) {
    console.error(error)

    return new NextResponse(error as string, { status: 400 })
  }
}
