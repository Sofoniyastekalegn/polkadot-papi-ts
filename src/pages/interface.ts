const logProvieder = (inner: JsonRpcProvider): JsonRpcProvider => {
    return (onMsg) => {
        const { send: innerSend, disconnect: innerDisconnect } = inner(msg)=> {
            console.log(`MSG IN: ${msg}`)
            onmessage(msg)


        }) 
        return {
            send(msg) {
                console.log(`MSG OUT: ${msg}`)
                innerSend(msg)
            },

            disconnect() {
                console.log(`DISCONNECTED`)
                innerDisconnect()


            },
        }
    }
}