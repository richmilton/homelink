export interface DeviceTypeDao {
  productTypeId?: string
  productName: string
  description: string
  dataSheetUrl: string
  manualUrl: string
}

export interface DeviceDao {
  productUid: string
  productType: string
  status: string
  deletedDate?: number
}

export interface NewDevice {
  productUid: string
  productType: string
}

export interface DeviceResponse extends DeviceDao {
  pathToSelf: string
  lastUpdated: number
}

export interface DeviceDetail extends DeviceDao, DeviceTypeDao {}

export type DeviceSummary = {
  uid: string
  productId: ProductId
  name: string
  description: string
} | undefined

export type DeviceParams = {
  deviceId: string
}

