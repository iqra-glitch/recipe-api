// Step 1: Import Express.
// Express is a library that makes it easy to build web servers in Node.js.
const express = require("express");

// Step 2: Create the app.
// "app" is our server. We will add routes (URLs) to it.
const app = express();

// Step 3: Choose a port.
// A port is like a door number on your computer. Our server will listen on port 3000.
const PORT = 3000;

// Step 4: Add the GET /hello route.
// When someone visits http://localhost:3000/hello, this function runs.
// "req" (request) holds info about what the visitor asked for.
// "res" (response) is what we use to send an answer back.
app.get("/hello", (req, res) => {
  // res.json() sends data back in JSON format.
  res.json({ message: "Hello from the Recipe API!" });
});

// Step 5: Start the server.
// app.listen() tells the server to start waiting for visitors on our port.
// The function inside runs once the server is ready.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
