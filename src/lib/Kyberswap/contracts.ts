import { Contract, ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import KyberswapAggregatorAbi from "./abis/KyberswapAggregator.json"
import KSZapRouterPositionAbi from "./abis/KSZapRouterPosition.json"

export enum CONTRACT_ENUM {
    KYBERSWAP_AGGREGATOR = "MetaAggregationRouterV2",
    KSZapRouter = "KSZapRouterPosition"
}

export enum EVENT_ENUM {
    // Event for swapping
    SWAPPED = "0xd6d4f5681c246c9f42c203e287975af1601f8df8035a9251f79aab5c8f09e2f8",

}

export const contracts: IProtocolContractDefinitions = {
    [CONTRACT_ENUM.KYBERSWAP_AGGREGATOR]:{
        interface: new ethers.Interface(KyberswapAggregatorAbi),
        deployments:{
            [CHAIN_ID.ETHEREUM]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.POLYGON]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.OPTIMISM]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.ARBITRUM]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.FANTOM]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.AVALANCHE]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.SONIC]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.ZKSYNC_ERA]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.MANTLE]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.LINEA]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BASE]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.SCROLL]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BLAST]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BSC]:{
                address: "0x6131B5fae19EA4f9D964eAc0408E4408b66337b5",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },

        },
        events: {
            [EVENT_ENUM.SWAPPED]:{
                abi : new ethers.Interface([
                    "event Swapped(address sender, address srcToken, address dstToken, address dstReceiver, uint256 spentAmount, uint256 returnAmount)"
                ])
            },
        }
    },
    [CONTRACT_ENUM.KSZapRouter]:{
        interface: new ethers.Interface(KSZapRouterPositionAbi),
        deployments:{
            [CHAIN_ID.ETHEREUM]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.POLYGON]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.OPTIMISM]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.ARBITRUM]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.AVALANCHE]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.ZKSYNC_ERA]:{
                address: "0xa56fed87768c7fde0597f5090356af30aed9d22e",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.POLYGON_ZK]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.LINEA]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BASE]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.SCROLL]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BLAST]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BSC]:{
                address: "0x0e97C887b61cCd952a53578B04763E7134429e05",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },

        },
        events: {
            [EVENT_ENUM.SWAPPED]:{
                abi : new ethers.Interface([
                    "event Swapped(address sender, address srcToken, address dstToken, address dstReceiver, uint256 spentAmount, uint256 returnAmount)"
                ])
            },
        }
    }
}

