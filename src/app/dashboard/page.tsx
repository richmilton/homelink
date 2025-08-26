import { listDevices } from '@/app/api/v1/device/handlers/list-devices'
import { DeviceSummary } from '@/app/api/v1/types'

type DeviceSummaryProps = {
  data: DeviceSummary
}

const DeviceDetails = ({ data }: DeviceSummaryProps) => <li>
  <div className="rounded border border-gray-500 m-4 p-8">
    <p>Product code: {data?.productId}</p>
    <p>Device name: {data?.name}</p>
    <p>Mac address: {data?.uid}</p>
    <p>Status: {data.status}</p>
  </div>
</li>

export default async function Dashboard() {
  const devices = await listDevices()

  return <main className="w-full text-center p-4">
    <h1 className="text-xl font-bold">Registered Homelink devices</h1>
    <ul className="my-2 flex flex-wrap lg:flex-row justify-center">
      {devices?.map((device) => <DeviceDetails key={device?.uid} data={device} />)}
    </ul>
  </main>
}
