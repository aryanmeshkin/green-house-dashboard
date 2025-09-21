import { io } from "socket.io-client";

export function createSocket(url, onMessage, accessToken) {
  // اضافه کردن توکن به header یا query
  const socket = io(url, {
    auth: {
      token: accessToken,
    },
    reconnection: true, // تلاش مجدد خودکار
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
  });

  socket.on("connect", () => {
    console.log(url, " : connected, id =", socket.id);
  });

  socket.on("disconnect", (reason) => {
    console.log("Socket disconnected:", reason);
  });

  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message);
  });

  socket.on("message", (data) => {
    try {
      onMessage(data);
    } catch (err) {
      console.error("Error processing message:", data);
    }
  });

  return {
    socket,
    send: (event, data) => socket.emit(event, data),
    close: () => socket.disconnect(),
  };
}