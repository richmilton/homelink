'use client'
import { DeviceSummary } from '@/app/api/v1/types'
import { useEffect, useState } from 'react'
import { DeviceDetails } from '@/app/components/device-details'
import { DeviceTable } from '@/app/components/device-table'

export const DeviceList = () => {
  const [data, setData] = useState<DeviceSummary[] | null>(null)
  const [view, setView] = useState<'card' | 'list'>('list')

  const toggleView = () => {
    setView(prevState => prevState === 'list' ? 'card' : 'list')
  }

  useEffect(() => {
    if (!data) {
      fetch('/api/v1/device').then((res) => {
        return res.json()
      }).then((json) => {
        setData(json as DeviceSummary[])
      })
    }
  })

  return <div>
    <div className="w-full sm:text-right mt-2">
      <button className="border border-gray-500 rounded w-36 bg-gray-700 cursor-pointer" onClick={toggleView}>
        go to {view === 'list' ? 'card' : 'list'} view
      </button>
    </div>
    {
      view === 'list' && <DeviceTable data={data} />
    }
    {
      view === 'card' && <ul className="my-1 flex flex-wrap lg:flex-row justify-center space-y-0">
        {data?.map((device) => <DeviceDetails key={device?.uid} deviceData={device} />)}
      </ul>
    }
  </div>
}
