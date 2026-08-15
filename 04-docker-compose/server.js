const http = require("http");
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/devopsdb";

async function startServer() {
    const client = new MongoClient(MONGO_URL);

    try {
        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("devopsdb");
        const collection = db.collection("tasks");

        const server = http.createServer(async (req, res) => {
            res.setHeader("Content-Type", "application/json");

            if (req.url === "/") {
                res.end(JSON.stringify({
                    message: "DevOps Docker Compose Application",
                    status: "running"
                }));
            }

            else if (req.url === "/tasks") {
                const tasks = await collection.find().toArray();

                res.end(JSON.stringify(tasks));
            }

            else if (req.url === "/health") {
                res.end(JSON.stringify({
                    application: "healthy",
                    database: "connected"
                }));
            }

            else {
                res.statusCode = 404;

                res.end(JSON.stringify({
                    error: "Route not found"
                }));
            }
        });

        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

startServer();
