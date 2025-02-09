const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Dummy GET route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Node.js backend!" });
});

// Dummy POST route
app.post("/data", (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}!` });
});

// PUT - Update an existing user (Replaces entire object)
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users[userIndex] = { id: parseInt(id), name };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// PATCH - Partially update an existing user
app.patch("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find(user => user.id === parseInt(id));

    if (user) {
        if (name) user.name = name;
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// DELETE - Remove a user
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser[0]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
