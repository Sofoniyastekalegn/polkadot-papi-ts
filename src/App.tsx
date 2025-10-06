import { createClient } from "polkadot-api"
import { getSmProvider } from "polkadot-api/sm-provider"
import { polkadotTypes } from "@polkadot-api/descriptors"
import { smoldot } from "./smoldot"

// dynamically importing the chainSpec improves the performance of your dApp
const smoldotRelayChain = import("polkadot-api/chains/polkadot").then(
  ({ chainSpec }) => smoldot.addChain({ chainSpec }),
)

// getting a `JsonRpcProvider` from a `smoldot` chain.
const jsonRpcProvider = getSmProvider(smoldotRelayChain)

// we could also create a `JsonRpcProvider` from a WS connection, eg:
// const jsonRpcProvider = WsProvider("wss://some-rpc-endpoint.io")

const polkadotClient = createClient(jsonRpcProvider)

// logging blocks as they get finalized
polkadotClient.finalizedBlock$.subscribe((block) => {
  console.log(`#${block.number} - ${block.hash} - parentHash: ${block.parent}`)
})

// pulling the latest finalized block
const block = await polkadotClient.getFinalizedBlock()

// obtaining a delightfully typed interface from the descriptors
// previously generated from the metadata
const polkadotApi = polkadotClient.getTypedApi(polkadotTypes)

// presenting the transferrable amount of a given account
const {
  data: { free, frozen },
} = await polkadotApi.query.System.Account.getValue(
  "15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5",
)
console.log(`Transferrable amount: ${free - frozen}`)