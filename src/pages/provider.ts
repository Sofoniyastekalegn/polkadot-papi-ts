interface JsonRpcProvider {
    (onmessage: (message: string) => void) => JsonRpcConnection;
}

interface JsonRpcConnection {
    send: (message: string) => void;
    disconnect: () => void;
}