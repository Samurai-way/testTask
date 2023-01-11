import io from "socket.io-client";

const socket = io.connect(process.env.SERVER_URL || "http://localhost:4000");

export default socket;
