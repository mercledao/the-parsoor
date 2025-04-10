import { Contract, ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import CoreBridgeAbi from "./abis/CoreBridge.json"

export enum CONTRACT_ENUM {
    CORE_BRIDGE = "Bridge"
}

export enum EVENT_ENUM {
    // Event for swapping
    SWAP = "0xe85f63622be58135a84c6e9de632115a3c471b0540a04d37a7c53a0647cd0c39",

    //Event for Token Bridged in case of both swap and bridge
    TOKENSENT = "0x9cd6008e8d4ebd34fd9d022278fec7f95d133780ecc1a0dea459fae3e9675390",

    //Event for token swapped in case of both swap and bridge
    SWAPPEDTOVUSD = "0xa930da1d3f27a25892307dd59cec52dd9b881661a0f20364757f83a0da2f6873"

}

export const contracts: IProtocolContractDefinitions = {
    [CONTRACT_ENUM.CORE_BRIDGE]:{
        interface: new ethers.Interface(CoreBridgeAbi),
        deployments:{
            [CHAIN_ID.ETHEREUM]:{
                address: "0x609c690e8F7D68a59885c9132e812eEbDaAf0c9e",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BSC]:{
                address:"0x3C4FA639c8D7E65c603145adaD8bD12F2358312f",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.SOLANA]:{
                address: "BrdgN2RPzEMWF96ZbnnJaUtQDQx7VRXYaHHbYCBvceWB",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.CELO]:{
                address: "0x80858f5F8EFD2Ab6485Aba1A0B9557ED46C6ba0e",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.ARBITRUM]:{
                address: "0x9Ce3447B58D58e8602B7306316A5fF011B92d189",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.POLYGON]:{
                address: "0x7775d63836987f444E2F14AA0fA2602204D7D3E0",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.AVALANCHE]:{
                address: "0x9068E1C28941D0A680197Cc03be8aFe27ccaeea9",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.OPTIMISM]:{
                address:"0x97E5BF5068eA6a9604Ee25851e6c9780Ff50d5ab",
                listenForTransactions :[LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
            [CHAIN_ID.BASE]:{
                address: "0x001E3f136c2f804854581Da55Ad7660a2b35DEf7",
                listenForTransactions : [LISTEN_FOR_TRANSACTIONS.INCOMING]
            },
        },
        events: {
            [EVENT_ENUM.SWAP]:{
                abi : new ethers.Interface([
                    "event Swapped(address sender, address recipient, bytes32 sendToken, bytes32 receiveToken, uint256 sendAmount, uint256 receiveAmount)"
                ])
            },

            [EVENT_ENUM.TOKENSENT]:{
                abi : new ethers.Interface([
                    "event TokensSent(uint256 amount, bytes32 recipient, uint256 destinationChainId, bytes32 receiveToken, uint256 nonce, uint8 messenger)"
                ])
            },

            [EVENT_ENUM.SWAPPEDTOVUSD]:{
                abi:new ethers.Interface([
                    "event SwappedToVUsd(address sender, address token, uint256 amount, uint256 vUsdAmount, uint256 fee)"
                ])
            }
        }
    }
}

