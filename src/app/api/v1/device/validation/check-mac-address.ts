export const checkMacAddress = (deviceId: string): string => {
  const upperCaseDeviceId = deviceId.toUpperCase()

  if (!/^([0-9A-F]{2}-){5}([0-9A-F]{2})$/.test(upperCaseDeviceId)) {
    throw new Error('incorrect device id format')
  }

  return upperCaseDeviceId
}
