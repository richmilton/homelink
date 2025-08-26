type ProductId = 'Ei1020' | 'Ei1025'

export interface DeviceTypeDao {
  productTypeId?: string
  productName: string
  description: string
  dataSheetUrl: string
  manualUrl: string
}

export interface DeviceDao {
  productUid: string
  productType: ProductId
  status: string
  deletedDate?: number
}

export interface NewDevice {
  productUid: string
  productType: ProductId
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
}

export type DeviceParams = {
  deviceId: string
}

