export const formatAddress = (address) => {
  return `${address.substring(0, 6)}...${address.substring(39, 42)}`.toLowerCase()
}
