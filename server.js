const http = require('http');

const port = process.env.PORT || 3000;
const enableLogging = Boolean(process.env.ENABLE_LOGGING) || false;
console.log(`Starting server on port ${port}`);
http.createServer((req, res) => { 
    if (enableLogging) {
        console.log(`Received request`);
        console.log(req);
    }
    if (req.method === 'GET' && req.url === '/ping') {
        res.statusCode = 200;
        res.end('pong');
    }   else {
        console.error("404 request on path " + req.url);
        res.statusCode = 404;
        res.end('Not found');
    }
}
).listen(port);

console.log(`Server started`);

