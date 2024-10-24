import {useEffect, useState} from 'react';
import io, {Socket} from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "ws://127.0.0.1"
// Define custom hook for socket
function useSocket(){
  const [socket, setSocket] = useState<Socket| null>(null);

  useEffect(()=>{
    const socketIo = io(SOCKET_URL, {
      reconnection: true,
      upgrade: true,
      transports: ["websocket", "polling"],
    });

    setSocket(socketIo);

    return function() {
      socketIo.disconnect();
    }
  }, []);

  return socket;
}

export default function Home() {
  return (
    <main>

    </main>
  );
}
