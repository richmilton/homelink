'use client'
import { DeviceSummary } from '@/app/api/v1/types'
import { useEffect, useState } from 'react'

type DeviceSummaryProps = {
  deviceData: DeviceSummary
}

type DeviceListProps = {
  data: DeviceSummary[]
}

const DeviceDetails = ({ deviceData }: DeviceSummaryProps) => <li>
  <div className="rounded border border-gray-500 m-4 p-8">
    <p>Product code: {deviceData?.productId}</p>
    <p>Device name: {deviceData?.name}</p>
    <p>Mac address: {deviceData?.uid}</p>
    <p>Status: {deviceData.status}</p>
  </div>
</li>

export const DeviceList = () => {
  const [data, setData] = useState<DeviceSummary[] | null>(null)

  useEffect(() => {
    if (!data) {
      fetch('/api/v1/device').then((res) => {
        return res.json()
      }).then((json) => {
        setData(json as DeviceSummary[])
      })
    }
  })

  return <ul className="my-2 flex flex-wrap lg:flex-row justify-center">
    {data?.map((device) => <DeviceDetails key={device?.uid} deviceData={device} />)}
  </ul>
}
