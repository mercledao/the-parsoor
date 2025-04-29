import { ACTION_ENUM, CHAIN_ID } from "../../../src/enums";
import { IProtocolTestTransaction } from "../../../src/types/chunks/ITestingData";

export enum PANDORA_VERSIONS {
  V2 = "v2",
  V3 = "v3",
}

export const pandoraData: Record<PANDORA_VERSIONS, IProtocolTestTransaction[]> =
  {
    [PANDORA_VERSIONS.V2]: [
      {
        txnHash:
          "0xf18579705a1004524ff7fb538085387b107f74a8902f28fb48b8db25fa54b483",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "40287901777572858000000",
            toAmount: "19930430356424029",
            recipient: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
            sender: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
          },
        ],
      },
      {
        txnHash:
          "0x203053698180e275b127c4671428c509ca2c257e104e43b0cc0edf3bca20753f",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            toToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
            fromAmount: "229500000000000000",
            toAmount: "148093727297668572366817",
            recipient: "0x0eD07A108Ff1C66d483a194acbC12026f20F8949",
          },
        ],
      },
      {
        txnHash:
          "0xbaeea72b97cd67a625e21ae779f9884123565b15454bacd842cdcb4f83d094e9",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "97723817260815920000000",
            toAmount: "152399028843204625",
            recipient: "0x46BE16B349B84764a2f536D2EB39e0F2Ce62af61",
            sender: "0x46BE16B349B84764a2f536D2EB39e0F2Ce62af61",
          },
        ],
      },
      {
        txnHash:
          "0xd86bcb89296539ad6dfe10118e2fc0344318b0d0615276c17de31d2d36119309",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "69637818540267428000000",
            toAmount: "34184229498641995",
            recipient: "0xed0Ee37dD434ED57FF1a5Ccf1cd616A3184A12EC",
            sender: "0xed0Ee37dD434ED57FF1a5Ccf1cd616A3184A12EC",
          },
        ],
      },
      {
        txnHash:
          "0x5e21a9d89dcbffada770f327eb00867d300338e859d9f51aae9a9d42ccaef25b",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "78796684727106325000000",
            toAmount: "39097491489330221",
            recipient: "0x5a2de1F663062C5fAdc108F4dd17053a338502A6",
            sender: "0x5a2de1F663062C5fAdc108F4dd17053a338502A6",
          },
        ],
      },
      {
        txnHash:
          "0x88a9cfba21a73c3a42245e6d9fb5a4e255d1e01cceee9b42d544ed5fa807ddea",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            toToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
            fromAmount: "82700000000000000",
            toAmount: "54835775512406124791309",
            recipient: "0xC02085e98c4BF9a74B5be00795D5D966A03F5dcC",
          },
        ],
      },
      {
        txnHash:
          "0x9a08124fa59e501929fe8996a34fc7dd413855d251ae1e5cba5e865734c87a7e",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "12421092108913666000000",
            toAmount: "18472452244688926",
            recipient: "0xa6a42C77851Af5e48cDF7b785b3cACa0bD9E8360",
            sender: "0xa6a42C77851Af5e48cDF7b785b3cACa0bD9E8360",
          },
        ],
      },
      {
        txnHash:
          "0xf18579705a1004524ff7fb538085387b107f74a8902f28fb48b8db25fa54b483",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "40287901777572858000000",
            toAmount: "19930430356424029",
            recipient: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
            sender: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
          },
        ],
      },
      {
        txnHash:
          "0xf18579705a1004524ff7fb538085387b107f74a8902f28fb48b8db25fa54b483",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "40287901777572858000000",
            toAmount: "19930430356424029",
            recipient: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
            sender: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
          },
        ],
      },
      //   {
      //     txnHash:
      //       "0x3fa02076573ab3d2bc4653a572ed31e37dd617979ccc8e19be64c8c112b61037",
      //     chainId: CHAIN_ID.ABSTRACT,
      //     emittedActions: [
      //       {
      //         type: ACTION_ENUM.SINGLE_SWAP,
      //         fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //         toToken: "0xDf70075737E9F96B078ab4461EeE3e055E061223",
      //         fromAmount: "200000000000000000",
      //         toAmount: "281249679849264743002",
      //         recipient: "0xdB172eD9e1354Bde90583dCA0F2247c7b4A62a35",
      //       },
      //     ],
      //   },
    ],
    [PANDORA_VERSIONS.V3]: [
      {
        txnHash:
          "0x64543d7edb1442b49bd9a7494e7ec2b57c9f85c27e7f57d7067e60170f1be807",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            toToken: "0x84A71ccD554Cc1b02749b35d22F684CC8ec987e1",
            fromAmount: "2156000000000000256",
            toAmount: "3972464562",
            recipient: "0x43D2564C2521FCb0D275E9E2e6bB3a458FFff17f",
          },
        ],
      },
      {
        txnHash:
          "0x5a8a99827317c74b8624536a670cf0e30dc8652b87eab145aed43817da05c407",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x9eBe3A824Ca958e4b3Da772D2065518F009CBa62",
            toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            fromAmount: "40000000000000000000000",
            toAmount: "256116577000348107",
            recipient: "0xD49EEafa6BdbcC551f462c5A582959a9B7A2EFDb",
          },
        ],
      },
      {
        txnHash:
          "0x315d99215a8ef11dfaafdff02b0718d43ec7fe29bf13655c319800fdf9c85180",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x9eBe3A824Ca958e4b3Da772D2065518F009CBa62",
            toToken: "0x84A71ccD554Cc1b02749b35d22F684CC8ec987e1",
            fromAmount: "8599681782017415970816",
            toAmount: "100003889",
            recipient: "0xfceb76A6cC0b833c3F864EE264Bc7D44760Cc907",
          },
        ],
      },
      {
        txnHash:
          "0x582543da84394437b6481b08addca6b5b2f79bc6270dacd33bb96a743d590018",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x9eBe3A824Ca958e4b3Da772D2065518F009CBa62",
            toToken: "0x84A71ccD554Cc1b02749b35d22F684CC8ec987e1",
            fromAmount: "8545256887715516907520",
            toAmount: "99861590",
            recipient: "0xfceb76A6cC0b833c3F864EE264Bc7D44760Cc907",
          },
        ],
      },
      {
        txnHash:
          "0x9376c3008eafe463a32df70fa6f3baa0bac28f1fa5265a9e91992d5b0b6cfcb3",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            toToken: "0x9eBe3A824Ca958e4b3Da772D2065518F009CBa62",
            fromAmount: "350000000000000000",
            toAmount: "53186314378303494310418",
            recipient: "0xD49EEafa6BdbcC551f462c5A582959a9B7A2EFDb",
          },
        ],
      },
      {
        txnHash:
          "0x241266b0cb8db343d5213fc6388a018c0d928dbb77adae9f5797f5ef6aff62f8",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x9eBe3A824Ca958e4b3Da772D2065518F009CBa62",
            toToken: "0x84A71ccD554Cc1b02749b35d22F684CC8ec987e1",
            fromAmount: "91433999999999993184256",
            toAmount: "1113639012",
            recipient: "0x43D2564C2521FCb0D275E9E2e6bB3a458FFff17f",
          },
        ],
      },
    ],
  };
