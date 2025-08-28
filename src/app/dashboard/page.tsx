import { DeviceList } from '@/app/components/device-list'
import { listDevices } from '@/app/api/v1/device/handlers/list-devices'

export default async function Dashboard() {
  return <main className="w-full text-center p-4">
    <h1 className="text-xl font-bold">Registered Homelink devices</h1>
    <DeviceList />
  </main>
}
