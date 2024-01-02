const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200; //status code: OK
        res.setHeader("Content-Type", "text/html"); // tell the browser what type of data we are seding
        res.write('<h1 style="color: red">Hello World!</h1>'); // the actual content - html content
        res.write("<p>I wonder what else we can send...</p>"); // in this way we tell that we finish to send the info
        res.end();
      } else if (req.url === "/test") {
        res.status = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>This is a test</h2>");
        res.end();
      } else if (req.url === "/products") {
        res.status = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<h3>Product Page</h3>");
        res.end();
      } else {
        res.status = 404; // we request an url that is not here (/banana for example)
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Page Not Found</h1>");
        res.end();
      }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
