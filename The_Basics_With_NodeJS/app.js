const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);

});

//Keeps on listening for requests
server.listen(3000);