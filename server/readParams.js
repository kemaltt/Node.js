const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    console.log(url.parse(req, url, true));
    res.end("PRODUCT");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening request on port 8000");
});