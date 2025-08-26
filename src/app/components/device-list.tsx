'use client'
import { DeviceSummary } from '@/app/api/v1/types'
import { useEffect, useState } from 'react'

type DeviceSummaryProps = {
  deviceData: DeviceSummary
}

type DeviceItemProps = {
  label: string
  value: string
}

const DeviceItem = ({ label, value }: DeviceItemProps) => <li>
  <span className="inline-block font-bold w-36 mt-1 sm:text-right mr-2">{label}:</span>
  <span className="inline-block w-48 sm:text-left">{value}</span>
</li>

const DeviceDetails = ({ deviceData }: DeviceSummaryProps) => <li>
  <ul className="rounded border border-gray-500 m-4 p-8">
    <DeviceItem label="Product code" value={deviceData?.productId} />
    <DeviceItem label="Device name" value={deviceData?.name} />
    <DeviceItem label="Mac address" value={deviceData?.uid} />
    <DeviceItem label="Status" value={deviceData?.status} />
  </ul>
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
