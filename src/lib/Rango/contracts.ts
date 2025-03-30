import { Contract, ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RangoDiamondAbi from "./abis/RangoDiamond.json"

export enum CONTRACT_ENUM {
    RANGO_DIAMOND = "RangoDiamond"
}

export enum EVENT_ENUM {
    // Event for swapping
    RANGO_SWAP = "0x0e9201911743fd4d03e146f00ad23945dc8f3ffc200906eff25179a52b726f17",

    // Event for when bridge is initiated
    RANGO_BRIDGE_INITIATED = "0x012c155f3836c4edb9222305b909a109f9efa46288efffe40a0e66da3a9a9800"
}

export const contracts: IProtocolContractDefinitions = {
    [CONTRACT_ENUM.RANGO_DIAMOND]:{
        interface: new ethers.Interface(RangoDiamondAbi),
        deployments:{
            [CHAIN_ID.ETHEREUM]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.POLYGON]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.OPTIMISM]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.ARBITRUM]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.FANTOM]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.AVALANCHE]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.MOONBEAM]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.MOONRIVER]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.POLYGON_ZK]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.AURORA]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.GNOSIS]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.LINEA]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BASE]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.SCROLL]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.CELO]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BLAST]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.METIS]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.MODE]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.TAIKO]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.ZORA]:{
                address: "0x69460570c93f9DE5E2edbC3052bf10125f0Ca22d",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },

        },
        events: {
            [EVENT_ENUM.RANGO_BRIDGE_INITIATED]:{
                abi : new ethers.Interface([
                    "event RangoBridgeInitiated(address indexed requestId, address bridgeToken, uint256 bridgeAmount, address receiver, uint256 destinationChainId, bool hasInterchainMessage, bool hasDestinationSwap, uint8 indexed bridgeId, uint16 indexed dAppTag, string dAppName)"
                ])
            },
            [EVENT_ENUM.RANGO_SWAP]:{
                abi: new ethers.Interface([
                    "event RangoSwap(address indexed requestId, address fromToken, address toToken, uint256 amountIn, uint256 minimumAmountExpected, uint16 indexed dAppTag, uint256 outputAmount, address receiver, string dAppName)"
                ])
            }
        }
    }
}

