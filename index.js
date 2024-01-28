import express from "express";
import {WebSocketServer} from "ws";
const app = express();
const port=8081;
const server=app.listen(port,() => {
    console.log("Server listening...");
});
const wss = new WebSocketServer({server});

wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        const message = data.toString('utf-8');
        console.log("Data from client:", message);
    ws.send("hey buddy!");
    });
})
