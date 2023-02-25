// import { BSC, BSCTestnet } from '@usedapp/core'
import { BSCTestnet, BSC, Mainnet } from '@usedapp/core'
// import { RbaChain } from './constants/chain'

export const networkConfig = {
  readOnlyChainId: Mainnet.chainId,
  autoConnect: true,
  readOnlyUrls: {
   // [BSCTestnet.chainId]: 'https://rpc.ankr.com/bsc_testnet_chapel',
    [Mainnet.chainId]: 'https://rpc.ankr.com/bsc',
    // [BSC.chainId]: BSC.rpcUrl,
    // [BSCTestnet.chainId]: BSCTestnet.rpcUrl,
  },
  networks: [ Mainnet],
  noMetamaskDeactivate: true,
  refresh: 'never',
  pollingInterval: 15000,
}
