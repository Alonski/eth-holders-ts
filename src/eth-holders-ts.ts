// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
// import { Web3Wrapper } from '@0xproject/web3-wrapper'
// import Web3 from 'web3'

// const provider = 'https://mainnet.infura.io/KPd6siGMdskNVIW1WeNj'

// const web3 = new Web3(new Web3.providers.HttpProvider(provider))
// const web3Wrapper = new Web3Wrapper(web3.currentProvider)

export default class EthHolders {
  private helloWorld: string
  constructor() {
    this.helloWorld = 'Hello World'
  }

  printHelloWorld(): string {
    console.log(this.helloWorld)
    return this.helloWorld
  }
  // public async getAvailableAddresses(): Promise<string[]> {
  //   const availableAddresses = await web3Wrapper.getAvailableAddressesAsync()
  //   return availableAddresses
  // }
}
