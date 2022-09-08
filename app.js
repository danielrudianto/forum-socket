const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.post("/", (req, res) => {
    
})

io.on("connection", (socket) => {
    socket.on("sendChat", function(data){
        io.emit("chat", data);
    });
});

httpServer.listen(5000, () => {
    console.log(`[server]: Server is running on port 5000`);
});