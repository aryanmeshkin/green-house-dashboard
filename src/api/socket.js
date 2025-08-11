import { io } from "socket.io-client";

// آدرس بک‌اند رو اینجا میذاری
const SOCKET_URL = "http://37.152.181.124"; // این رو از بک‌اند بگیر

export const socket = io(SOCKET_URL, {
  transports: ["websocket"], // فقط WebSocket
  reconnection: true,        // دوباره وصل شه اگه قطع شد
});