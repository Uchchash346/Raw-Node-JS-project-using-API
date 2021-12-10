/* 
* Title: Uptime Monitoring Application 
* Description: A RESTFul API to monitor up or down time of user defined links
* Author: Mahmudur Rahman
* Date: 10/12/2021
*/
// dependencies
const http = require('http');

// app object - module scaffolding 
const app = {};

// configuration 
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`)
    });
}

// handle Request Response
app.handleReqRes = (req, res) => {
    // response handle
    res.end("Hello Uchchash")
}

// start the server
app.createServer();