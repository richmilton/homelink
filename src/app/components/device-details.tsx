import { DeviceSummary } from '@/app/api/v1/types'
import { DeviceItem } from '@/app/components/device-item'

type DeviceSummaryProps = {
  deviceData: DeviceSummary
}

export const DeviceDetails = ({ deviceData }: DeviceSummaryProps) => <li>
  <ul className="rounded border border-gray-500 m-4 p-2">
    <DeviceItem label="Product code" value={deviceData?.productId} />
    <DeviceItem label="Device name" value={deviceData?.name} />
    <DeviceItem label="Mac address" value={deviceData?.uid} />
    <DeviceItem label="Status" value={deviceData?.status} />
  </ul>
</li>
