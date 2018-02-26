import EthHolders from '../src/eth-holders-ts'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('EthHolders is instantiable', () => {
    expect(new EthHolders()).toBeInstanceOf(EthHolders)
  })

  it('Check Hello World', () => {
    expect(new EthHolders().printHelloWorld()).toBe('Hello World')
  })
})
