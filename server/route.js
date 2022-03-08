const http = require("http");
const fs = require("fs");

//const data = fs.readFileSync("./data/data.json", "utf-8"); // node komutunun çalıştığı klasörün bir üstünü alır.
const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8"); //node node.js/server/route.js bu şekilde de dışardan çalıştırılabilir.

const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log("path:", pathName);

    if (pathName === "/" || pathName === "/home") {
        res.end("This is Home page.");
    } else if (pathName === "/about") {
        res.end("This is About page.");
    } else if (pathName === "/api") {
        /**
                             * Her istekte tekrar tekrar okuma yapmaması için global değşken olarak tanımlayacağız
                             
                                fs.readFile("./data/data.json", "utf-8", (err, data) => {
                                const apiData = JSON.parse(data);
                                res.writeHead(200, {
                                    "Content-type": "application/json",
                                });
                                res.end(data);
                            });
                             */
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "My-Header": "no-result",
        });
        res.end(" <h1> page not found </h1>");
    }

    // res.end("route");
});

server.listen(8001, "127.0.0.1", () => {
    console.log("Listening 8001");
});