
**How to query the first 5 tokens,reward tokens and transfers done on aave v2 with their id ,name and symbol the transfer amount in Usd and blocknumber and hash.**

**Description-**
Aave V2 protocol subgraphs are hosted on the Graph Protocol Network and use a standardized GraphQL API endpoint to query indexed information from Aave smart contracts. Using the Aave Subgraphs, developers can track on-chain activities like borrows, deposits, collateral ratios, and more. These insights are useful for building decentralized applications that analyze and report on individual or market-level activities. Additionally, developers can efficiently extract necessary information without thoroughly investigating the internal protocol implementation.

**Subgraph to query**
https://thegraph.com/explorer/subgraphs/C2zniPn45RnLDGzVeGZCx2Sw3GXrbc9gL4ZfL8B8Em2j?v=0&view=Playground&chain=arbitrum-one

**Example Query**
Also in the Query.graphql file there is the query code. 

{
  tokens(first: 5) {
    id
    name
    symbol
    decimals
  }
  rewardTokens(first: 5) {
    id
    token {
      id
      name
      symbol
    }
  }
  transfers(first: 5) {
    amountUSD
    blockNumber
    hash
  }
}
**Result**

{
  "data": {
    "rewardTokens": [
      {
        "id": "DEPOSIT-0x4da27a545c0c5b758a6ba100e3a049001de870f5",
        "token": {
          "id": "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
          "name": "Staked Aave",
          "symbol": "stkAAVE"
        }
      },
      {
        "id": "DEPOSIT-0xbd31ea8212119f94a611fa969881cba3ea06fa3d",
        "token": {
          "id": "0xbd31ea8212119f94a611fa969881cba3ea06fa3d",
          "name": "LUNA (Wormhole)",
          "symbol": "LUNA"
        }
      },
      {
        "id": "STABLE_BORROW-0x4da27a545c0c5b758a6ba100e3a049001de870f5",
        "token": {
          "id": "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
          "name": "Staked Aave",
          "symbol": "stkAAVE"
        }
      },
      {
        "id": "STABLE_BORROW-0xbd31ea8212119f94a611fa969881cba3ea06fa3d",
        "token": {
          "id": "0xbd31ea8212119f94a611fa969881cba3ea06fa3d",
          "name": "LUNA (Wormhole)",
          "symbol": "LUNA"
        }
      },
      {
        "id": "VARIABLE_BORROW-0x4da27a545c0c5b758a6ba100e3a049001de870f5",
        "token": {
          "id": "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
          "name": "Staked Aave",
          "symbol": "stkAAVE"
        }
      }
    ],
    "tokens": [
      {
        "decimals": 18,
        "id": "0x0000000000085d4780b73119b644ae5ecd22b376",
        "name": "TrueUSD",
        "symbol": "TUSD"
      },
      {
        "decimals": 18,
        "id": "0x00ad8ebf64f141f1c81e9f8f792d3d1631c6c684",
        "name": "Aave variable debt bearing CRV",
        "symbol": "variableDebtCRV"
      },
      {
        "decimals": 18,
        "id": "0x01c0eb1f8c6f1c1bf74ae028697ce7aa2a8b0e92",
        "name": "Aave variable debt bearing TUSD",
        "symbol": "variableDebtTUSD"
      },
      {
        "decimals": 18,
        "id": "0x028171bca77440897b824ca71d1c56cac55b68a3",
        "name": "Aave interest bearing DAI",
        "symbol": "aDAI"
      },
      {
        "decimals": 18,
        "id": "0x030ba81f1c18d280636f32af80b9aad02cf0854e",
        "name": "Aave interest bearing WETH",
        "symbol": "aWETH"
      }
    ],
    "transfers": [
      {
        "amountUSD": "85564.77925845076928903234719943095",
        "blockNumber": "15408293",
        "hash": "0x0000aae8980e0021a2032c39e482f991ee3548bd0181f5d782063a12775ec782"
      },
      {
        "amountUSD": "85564.77925845076928903234719943095",
        "blockNumber": "15408293",
        "hash": "0x0000aae8980e0021a2032c39e482f991ee3548bd0181f5d782063a12775ec782"
      },
      {
        "amountUSD": "85198.035034",
        "blockNumber": "15408293",
        "hash": "0x0000aae8980e0021a2032c39e482f991ee3548bd0181f5d782063a12775ec782"
      },
      {
        "amountUSD": "85198.035034",
        "blockNumber": "15408293",
        "hash": "0x0000aae8980e0021a2032c39e482f991ee3548bd0181f5d782063a12775ec782"
      },
      {
        "amountUSD": "104.1761499050714695621182502411331",
        "blockNumber": "16792406",
        "hash": "0x0000b1c1aec280808a8f08e169e696bf3acf350d69b9c6cbff835c1b1f6990d8"
      }
    ]
  }
}
