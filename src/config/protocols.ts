import { ActionTags, IProtocolDefinitionMap, ProtocolType } from "../types";

export const protocols: IProtocolDefinitionMap = {
  rhinofi: {
    identifier: "rhinofi",
    name: "RhinoFi",
    twitter: "https://x.com/rhinofi",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/rhinologo.png",
    website: "https://rhino.fi/",
    type: ProtocolType.CROSS_CHAIN_BRIDGE,
    actionTags: [ActionTags.BRIDGE],
  },
  uniswap: {
    identifier: "uniswap",
    name: "Uniswap",
    twitter: "https://x.com/Uniswap",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/uniswap.png",
    website: "https://uniswap.org/",
    type: ProtocolType.DEX,
    actionTags: [ActionTags.SWAP],
  },
  lifi: {
    identifier: "lifi",
    name: "LiFi",
    twitter: "https://x.com/lifiprotocol",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/lifi.png",
    website: "https://li.fi/",
    type: ProtocolType.DEX_AGGREGGATOR,
    actionTags: [ActionTags.SWAP, ActionTags.BRIDGE],
  },
  odos: {
    identifier: "odos",
    name: "Odos",
    twitter: "https://x.com/odosprotocol",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/odos.png",
    website: "https://www.odos.xyz/",
    type: ProtocolType.DEX_AGGREGGATOR,
    actionTags: [ActionTags.SWAP],
  },
  across: {
    identifier: "across",
    name: "Across",
    twitter: "https://x.com/AcrossProtocol",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/across.png",
    website: "https://across.to/",
    type: ProtocolType.CROSS_CHAIN_BRIDGE,
    actionTags: [ActionTags.BRIDGE],
  },
  debridge: {
    identifier: "debridge",
    name: "Debridge",
    twitter: "https://x.com/deBridgeFinance",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/debridge.png",
    website: "https://app.debridge.finance/",
    type: ProtocolType.CROSS_CHAIN_BRIDGE,
    actionTags: [ActionTags.BRIDGE],
  },
  aerodrome: {
    identifier: "aerodrome",
    name: "Aerodrome",
    twitter: "https://x.com/AerodromeFi",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/aerodrome.png",
    website: "https://aerodrome.finance/",
    type: ProtocolType.DEX,
    actionTags: [ActionTags.SWAP],
  },
  pancakeswap: {
    identifier: "pancakeswap",
    name: "Pancakeswap",
    twitter: "https://x.com/PancakeSwap",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/pancakeswap.png",
    website: "https://pancakeswap.finance/",
    type: ProtocolType.DEX,
    actionTags: [ActionTags.SWAP],
  },
  cowswap: {
    identifier: "cowswap",
    name: "Cowswap",
    twitter: "https://x.com/CoWSwap",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/cowswap.png",
    website: "https://swap.cow.fi/",
    type: ProtocolType.DEX_AGGREGGATOR,
    actionTags: [ActionTags.SWAP],
  },
  paraswap: {
    identifier: "paraswap",
    name: "Paraswap",
    twitter: "https://x.com/parasvwap",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/paraswap.png",
    website: "https://www.paraswap.xyz/",
    type: ProtocolType.DEX_AGGREGGATOR,
    actionTags: [ActionTags.SWAP],
  },
  sushiswap: {
    identifier: "sushiswap",
    name: "Sushiswap",
    twitter: "https://x.com/SushiSwap",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/sushiswap.png",
    website: "https://www.sushi.com/",
    type: ProtocolType.DEX,
    actionTags: [ActionTags.SWAP],
  },
  bungee: {
    identifier: "bungee",
    name: "Bungee",
    twitter: "https://x.com/BungeeExchange",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/bungee.png",
    website: "https://www.bungee.exchange/",
    type: ProtocolType.CROSS_CHAIN_BRIDGE,
    actionTags: [ActionTags.BRIDGE],
  },
  curve: {
    identifier: "curve",
    name: "Curve",
    twitter: "https://x.com/CurveFinance",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/curve.png",
    website: "https://curve.fi/dex/",
    type: ProtocolType.DEX,
    actionTags: [ActionTags.SWAP],
  },
  maverick: {
    identifier: "maverick",
    name: "Maverick",
    twitter: "https://x.com/mavprotocol",
    logo: "https://storage-mercle-prod.s3.amazonaws.com/public/protocol-logos/maverick.png",
    website: "https://app.mav.xyz/",
    type: ProtocolType.DEX,
    actionTags: [ActionTags.SWAP],
  },
};
