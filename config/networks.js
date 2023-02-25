// import { BSC, BSCTestnet } from '@usedapp/core'
import { BSCTestnet, BSC, Mainnet } from '@usedapp/core'
// import { RbaChain } from './constants/chain'

export const networkConfig = {
  readOnlyChainId: BSCTestnet.chainId,
  autoConnect: false,
  readOnlyUrls: {
    [BSCTestnet.chainId]: 'https://rpc.ankr.com/bsc_testnet_chapel',
    //[Mainnet.chainId]: 'https://rpc.ankr.com/bsc',
    // [BSC.chainId]: BSC.rpcUrl,
    // [BSCTestnet.chainId]: BSCTestnet.rpcUrl,
  },
  networks: [BSCTestnet],
  noMetamaskDeactivate: true,
  refresh: 'never',
  pollingInterval: 15000,
}
