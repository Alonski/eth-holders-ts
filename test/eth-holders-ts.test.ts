import EthHolders from '../src/eth-holders-ts'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new EthHolders()).toBeInstanceOf(EthHolders)
  })
})
