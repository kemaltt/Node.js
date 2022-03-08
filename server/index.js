const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end("Hello from server!");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening request on port 8000");
});