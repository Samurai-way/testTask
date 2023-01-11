import socket from "./socket";

const startPolling = (interval) => {
  socket.emit("start", interval);
};

const endPolling = () => {
  socket.emit("terminate");
};

export { startPolling, endPolling };
