import { checkMacAddress } from '@/app/api/v1/device/validation/check-mac-address'

describe('checkMacAddress test', () => {
  it('should return a mac address when valid', () => {
    const validAddress = '00-00-00-00-00-00'
    const result = checkMacAddress(validAddress)

    expect(result).toEqual(validAddress)
  })

  it('should return a sanitised mac address when valid', () => {
    const validMixedCaseAddress = 'ff-FF-ff-ff-FF-ff'
    const result = checkMacAddress(validMixedCaseAddress)

    expect(result).toEqual('FF-FF-FF-FF-FF-FF')
  })

  it('should throw an error if it is not a valid mac address', () => {
    const invalidMixedCaseAddress = 'ff-FF-FF-FF-FZ-FF'

    try {
      checkMacAddress(invalidMixedCaseAddress)
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect((e as Error).message as string).toEqual('incorrect device id format')
    }
  })
})
