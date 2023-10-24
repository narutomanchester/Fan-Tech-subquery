/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FT_1710, FT_1710Interface } from "../FT_1710";

const _abi = [
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        type: "uint8",
        name: "version",
        internalType: "uint8",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
        indexed: true,
      },
      {
        type: "bytes32",
        name: "previousAdminRole",
        internalType: "bytes32",
        indexed: true,
      },
      {
        type: "bytes32",
        name: "newAdminRole",
        internalType: "bytes32",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
        indexed: true,
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "sender",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
        indexed: true,
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "sender",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Trade",
    inputs: [
      {
        type: "address",
        name: "trader",
        internalType: "address",
        indexed: false,
      },
      {
        type: "address",
        name: "subject",
        internalType: "address",
        indexed: false,
      },
      {
        type: "bool",
        name: "isBuy",
        internalType: "bool",
        indexed: false,
      },
      {
        type: "uint256",
        name: "shareAmount",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "ethAmount",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "protocolFee",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "subjectFee",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "referrerFee",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "poolFee",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "balance",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "totalSupply",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "bool",
        name: "isAirdrop",
        internalType: "bool",
        indexed: false,
      },
      {
        type: "bool",
        name: "isBid",
        internalType: "bool",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "INIT_BID_PRICE",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    name: "OPERATOR_ROLE",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "PERCENT_BASE",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "PRICE_A",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "PRICE_B",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "PRICE_C",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "PRICE_STEP_PERCENT",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "activateOwner",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "address",
        name: "referrer",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "nonce",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "signature",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "balanceOf",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [],
    name: "buyShares",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getBiddingTime",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "price",
        internalType: "uint256",
      },
    ],
    name: "getBuyPrice",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getBuyPriceAfterFee",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "protocolFee",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "subjectFee",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "referrerFee",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "poolFee",
        internalType: "uint256",
      },
    ],
    name: "getFee",
    inputs: [
      {
        type: "uint256",
        name: "price",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "getPoolInitialBuy",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getPoolInitialBuyPriceAfterFee",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "tuple[]",
        name: "",
        internalType: "struct PoolInitialTop[]",
        components: [
          {
            type: "address",
            name: "account",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "amount",
            internalType: "uint256",
          },
        ],
      },
    ],
    name: "getPoolInitialTops",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "getPoolReferrer",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getPoolReferrerFee",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getPoolSubjectFee",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getPoolValue",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getPrice",
    inputs: [
      {
        type: "uint256",
        name: "supply",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "price",
        internalType: "uint256",
      },
    ],
    name: "getSellPrice",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getSellPriceAfterFee",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "grantRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "hasRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "initialize",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [],
    name: "initializeShares",
    inputs: [
      {
        type: "address",
        name: "referrer",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_initialShares",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_blockTime",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "nonce",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "signature",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "initializeSharesBySystem",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "address",
        name: "referrer",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_initialShares",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_blockTime",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [],
    name: "initializeSharesSub",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_initialShares",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_blockTime",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "maxInitialShares",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "owner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "ownerOf",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "poolFeePercent",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "protocolFeeDestination",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "protocolFeePercent",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "referrerFeePercent",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "renounceOwnership",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "renounceRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "revokeRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "sellShares",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setMaxInitialShares",
    inputs: [
      {
        type: "uint256",
        name: "_maxInitialShares",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPoolFeePercent",
    inputs: [
      {
        type: "uint256",
        name: "_feePercent",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setProtocolFeeDestination",
    inputs: [
      {
        type: "address",
        name: "_feeDestination",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setProtocolFeePercent",
    inputs: [
      {
        type: "uint256",
        name: "_feePercent",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setReferrerFeePercent",
    inputs: [
      {
        type: "uint256",
        name: "_feePercent",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setSubjectFeePercent",
    inputs: [
      {
        type: "uint256",
        name: "_feePercent",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "subjectFeePercent",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "supplyOf",
    inputs: [
      {
        type: "address",
        name: "sharesSubject",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferOwnership",
    inputs: [
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    name: "version",
    inputs: [],
  },
] as const;

export class FT_1710__factory {
  static readonly abi = _abi;
  static createInterface(): FT_1710Interface {
    return new utils.Interface(_abi) as FT_1710Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FT_1710 {
    return new Contract(address, _abi, signerOrProvider) as FT_1710;
  }
}
