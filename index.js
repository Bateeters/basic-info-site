// These are built-in modules
// That means there is no need for package.json file
const http = require('http');
const fs = require('fs');

// Create the server and define what happens on request (req)
const server = http.createServer((req, res) => {
    let path = './';        // Base folder where HTML files live
    let statusCode = 200;   // Default status code (200 = Working)

    // Routing Switch
    // Determine which HTML file is shown based on URL
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';
            statusCode = 404;
            break;
    }

    // Read the file and send it back to browser
    fs.readFile(path, (err, data) => {
        // If something is wrong, send server error
        if (err) {
            console.log(err);
            res.writeHead(500, {'Content-type': 'text/plain'});
            res.end('Server error');
            return;
        }

        // Set the correct status code and tell the browser this is HTML
        res.writeHead(statusCode, {'Content-Type': 'text/html'});

        // Send contents of HTML file as response
        res.end(data);
    });
});

// Start server and listen on port 8080
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
