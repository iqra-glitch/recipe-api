// Step 1: Import Express.
// Express is a library that makes it easy to build web servers in Node.js.
const express = require("express");
// cors is a small library that lets other websites (like your frontend) call this server.
const cors = require("cors");

// Step 2: Create the app.
// "app" is our server. We will add routes (URLs) to it.
const app = express();

// Turn on CORS (Cross-Origin Resource Sharing).
// Browsers block a page on one website (for example our frontend) from calling
// a server on another website or port unless the server says it's allowed.
// Here we only allow our own frontends. The addresses must match exactly (no "/" at the end).
const allowedOrigins = [
  "https://iqra-glitch.github.io", // the live frontend on GitHub Pages
  "http://localhost:5500", // Live Server on your computer
  "http://127.0.0.1:5500", // Live Server on your computer (other address)
];

// cors() adds the permission only for the websites in the list above.
// It must come before the routes so it applies to all of them.
app.use(cors({ origin: allowedOrigins }));

// Step 3: Choose a port.
// A port is like a door number on your computer.
// Hosting services like Render tell us which port to use through process.env.PORT.
// On your own computer PORT is not set, so we use 3000 instead ("||" means "otherwise").
const PORT = process.env.PORT || 3000;

// Step 4: Add the GET /hello route.
// When someone visits http://localhost:3000/hello, this function runs.
// "req" (request) holds info about what the visitor asked for.
// "res" (response) is what we use to send an answer back.
app.get("/hello", (req, res) => {
  // res.json() sends data back in JSON format.
  res.json({ message: "Hello from the Recipe API!" });
});

// Step 5: Load the recipes from the JSON file.
// require() reads the file once, when the server starts, and turns it into a JavaScript object.
// The recipes are inside the "meals" array, so we can reach them with data.meals.
// Note: if you edit the JSON file, restart the server to see the changes.
const data = require("./pakistani-recipes.json");

// Step 6: Add the GET /recipes route.
// When someone visits http://localhost:3000/recipes, we send back all the recipes.
app.get("/recipes", (req, res) => {
  res.json(data.meals);
});

// Step 7: Add the GET /recipes/:id route.
// ":id" is a placeholder. If someone visits /recipes/pk-01, then req.params.id is "pk-01".
app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;

  // .find() goes through the recipes one by one and returns the first one whose idMeal matches.
  // If none match, it returns undefined.
  const recipe = data.meals.find((meal) => meal.idMeal === id);

  // If no recipe was found, send a 404 ("Not Found") status with an error message.
  // "return" stops the function here so we don't send a second response.
  if (!recipe) {
    return res.status(404).json({ error: `Recipe with id '${id}' not found` });
  }

  // Otherwise, send back the recipe we found.
  res.json(recipe);
});

// Step 8: Start the server.
// app.listen() tells the server to start waiting for visitors on our port.
// The function inside runs once the server is ready.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
