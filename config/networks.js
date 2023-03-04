// import { BSC, BSCTestnet } from '@usedapp/core'
import { BSCTestnet, BSC, Mainnet } from '@usedapp/core'
// import { RbaChain } from './constants/chain'

export const networkConfig = {
  readOnlyChainId: BSCTestnet.chainId,
  autoConnect: true,
  readOnlyUrls: {
    [BSCTestnet.chainId]: 'https://rpc.ankr.com/bsc_testnet_chapel',
    //[BSCTestnet.chainId]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    //[Mainnet.chainId]: 'https://rpc.ankr.com/bsc',
    // [BSC.chainId]: BSC.rpcUrl,
    // [BSCTestnet.chainId]: BSCTestnet.rpcUrl,
  },
  networks: [BSCTestnet],
  noMetamaskDeactivate: true,
  refresh: 'never',
  pollingInterval: 15000,
}
