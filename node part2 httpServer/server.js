const http = require('http');



http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin' : '*' });
            return res.end(JSON.stringify({ test: "test" }));
        }
    } else if (req.method === 'POST') {

    } 

    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<div>404임<div>');
   
}).listen(8001, () => {
    console.log('서버 기동 성공! 8001');
})