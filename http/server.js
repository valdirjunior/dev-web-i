const http = require('http');

const cats = ['Garfield', 'Tom', 'Simba'];

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello World!');
            break;
        case '/cats':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(cats));
            break;
        default:
            res.writeHead(404);
            res.write('404 Not Found');
    }
    res.end();
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});