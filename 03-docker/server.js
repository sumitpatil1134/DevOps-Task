const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>DevOps Docker Task</h1>
        <p>Node.js application is running inside Docker.</p>
        <p>Task 3: Docker Containerization</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
