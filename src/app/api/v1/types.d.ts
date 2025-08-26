export interface DeviceType {
  productTypeId?: string
  productName: string
  description: string
  dataSheetUrl: string
  manualUrl: string
}

export interface Device {
  productUid: string
  productType: string
  status: string
  deletedDate?: number
}

export interface NewDevice {
  productUid: string
  productType: string
}

export interface DeviceResponse extends Device {
  pathToSelf: string
  lastUpdated: number
}

export interface DeviceDetail extends Device, DeviceType {}

export type DeviceSummary = {
  uid: string
  productId: string
  name: string
  description: string
  status: string
}

export type DeviceParams = {
  deviceId: string
}

