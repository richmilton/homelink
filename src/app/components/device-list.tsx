'use client'
import { DeviceSummary } from '@/app/api/v1/types'
import { useEffect, useState } from 'react'
import { DeviceDetails } from '@/app/components/device-details'

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
