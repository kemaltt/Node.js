// console.log("Hello from server");

// setTimeout(() => console.log("hello"), 3000);

const fs = require("fs");

// fs.mkdir("students", { recursive: true }, (err) => {
//     console.log("directory created");
//     if (err) throw err;
// });

// fs.mkdirSync("second");

// console.log("this command runs before mkdir");

// fs.mkdirSync("Project");
fs.writeFileSync("app.css", "a");
fs.writeFileSync("./Project/index.html", "a");