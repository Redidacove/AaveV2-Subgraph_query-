**How to query the first 5 tokens,reward tokens and transfers done on aave v2 with their id ,name and symbol the transfer amount in Usd and blocknumber and hash.**

**Description-**
Aave V2 protocol subgraphs are hosted on the Graph Protocol Network and use a standardized GraphQL API endpoint to query indexed information from Aave smart contracts. Using the Aave Subgraphs, developers can track on-chain activities like borrows, deposits, collateral ratios, and more. These insights are useful for building decentralized applications that analyze and report on individual or market-level activities. Additionally, developers can efficiently extract necessary information without thoroughly investigating the internal protocol implementation.

**How to run the Application Code**
git clone the repo
cd Aave_subgraph_query
npm i
Simply Replace API_key with your api_key in the .env file
npm run dev

**Subgraph to query**
https://thegraph.com/explorer/subgraphs/C2zniPn45RnLDGzVeGZCx2Sw3GXrbc9gL4ZfL8B8Em2j?v=0&view=Playground&chain=arbitrum-one

**Sample Query Used**
{
tokens(first: 5) {
id
name
symbol
decimals
}
}

**Result of Query**
{
"decimals": 0,
"id": "0x00000000000000017c2a62278256a4e18ac28924",
"name": "unknown",
"symbol": "unknown"
},
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
}
