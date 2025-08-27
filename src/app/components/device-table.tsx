import { DeviceSummary } from '@/app/api/v1/types'

type DeviceTableProps = {
  data?: DeviceSummary[] | null
}

export const DeviceTable = ({ data }: DeviceTableProps) => <div>
  <table className="w-fit mt-4 m-auto">
    <thead className="font-bold">
    <tr>
      <th>Product</th>
      <th className="hidden sm:block">Description</th>
      <th>MAC address</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
    {
      data?.map(device => <tr key={device.uid}>
        <td>{device.productId}</td>
        <td className="hidden sm:block">{device.name}</td>
        <td>{device.uid}</td>
        <td>{device.status}</td>
      </tr>)
    }
    </tbody>
  </table>
</div>
