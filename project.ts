import {
  EthereumProject,
  EthereumDatasourceKind,
  EthereumHandlerKind,
} from "@subql/types-ethereum";

// Can expand the Datasource processor types via the generic param
const project: EthereumProject = {
  specVersion: "1.0.0",
  version: "0.0.1",
  name: "Fan-Tech-Subgraph",
  description:
    "FT",
  runner: {
    node: {
      name: "@subql/node-ethereum",
      version: ">=3.0.0",
    },
    query: {
      name: "@subql/query",
      version: "*",
    },
  },
  schema: {
    file: "./schema.graphql",
  },
  network: {
    /**
     * chainId is the EVM Chain ID, for mantle this is 5000
     * https://chainlist.org/chain/5000
     */
    chainId: "5000",
    /**
     * These endpoint(s) should be public non-pruned archive node
     * We recommend providing more than one endpoint for improved reliability, performance, and uptime
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     */
    endpoint: [ "https://rpc.mantle.xyz","https://mantle.public-rpc.com","https://mantle.drpc.org" ],
    // Recommended to provide the HTTP endpoint of a full chain dictionary to speed up processing
    // dictionary: "https://gx.api.subquery.network/sq/subquery/mantle-dictionary"
  },
  dataSources: [
    {
      kind: EthereumDatasourceKind.Runtime,
      startBlock: 16512000,
      // This is the contract address for the Mantle native token https://explorer.mantle.xyz/token/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000/token-transfers
      options: {
        // Must be a key of assets
        abi: "erc20",
        // this is the contract address for wrapped ether https://lineascan.build/token/0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f
        address: "0x53167401aeebFf5677C31E1DDA945628422D7Ed2",
      },
      assets: new Map([["erc20", { file: "./abis/FT_17-10.json" }]]),
      mapping: {
        file: "./dist/index.js",
        handlers: [
          // {
          //   kind: EthereumHandlerKind.Event,
          //   handler: "handleInitShares",
          //   filter: {
          //     /**
          //      * Follows standard log filters https://docs.ethers.io/v5/concepts/events/
          //      * address: "0x60781C2586D68229fde47564546784ab3fACA982"
          //      */
          //     topics: [
          //       "initializeShares(address indexed from, address referrer, uint256 _initialShares, uint256 _blockTime, uint256 nonce, bytes signature)",
          //     ],
          //   }, },
          {
            kind: EthereumHandlerKind.Call,
            handler: "handleInitShares",
            filter: {
              /**
               * The function can either be the function fragment or signature
               * function: '0x095ea7b3'
               * function: '0x7ff36ab500000000000000000000000000000000000000000000000000000000'
               */
              function: "initializeShares(address referrer, uint256 _initialShares, uint256 _blockTime, uint256 nonce, bytes signature)",
            },
          },
        ],
      },
    },
  ]
};

// Must set default to the project instance
export default project;
