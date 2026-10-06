# recipe-api

A Node.js and Express API for my Recipe Finder app.

**Live:** <https://recipe-api-three-cyan.vercel.app>

## Features

- `GET /hello` returns a short JSON message.
- `GET /recipes` returns all recipes from `pakistani-recipes.json`.
- `GET /recipes/:id` returns one recipe by its `idMeal` (for example `pk-01`), or a 404 JSON error if no recipe matches.
- CORS allows only the GitHub Pages frontend (`https://iqra-glitch.github.io`) and local Live Server (port 5500).

## Endpoints

### `GET /hello`

Returns a short JSON message.

```json
{ "message": "Hello from the Recipe API!" }
```

### `GET /recipes`

Returns all recipes as an array.

```json
[
  { "idMeal": "pk-01", "strMeal": "Chicken Karahi", "strCategory": "Chicken", "...": "..." },
  { "idMeal": "pk-02", "strMeal": "Nihari", "strCategory": "Beef", "...": "..." }
]
```

### `GET /recipes/:id`

Returns one recipe by its `idMeal`, for example `/recipes/pk-01`.

```json
{ "idMeal": "pk-01", "strMeal": "Chicken Karahi", "strCategory": "Chicken", "...": "..." }
```

If no recipe has that id, it returns status **404** with an error message:

```json
{ "error": "Recipe with id 'pk-99' not found" }
```

## Run locally

```bash
npm install
npm start
```

Locally it runs at <http://localhost:3000>.
