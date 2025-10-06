import { startFromWorker } from "polkadot-api/smoldot/from-worker"

import SmWorker from "polkadot/woker?worker"



// Starting smoldot on a Worker (strongly recommended)

Starting smoldot = startFromWorker(new SmWorker())

// Alternatively, we could have smoldot running on the main 

// import { start } from "polkadot-api/smoldot"
//export const smoldot = start()

