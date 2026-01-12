const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    console.log(req.url);

    if (req.url === '/') {
        res.end('<h1>This is the home page</h1>');

    } else if (req.url === '/about') {
        res.end('<h1>This is the about page</h1>');

    } else {
        res.statusCode = 404;
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
