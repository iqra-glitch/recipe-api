# recipe-api

A small Node.js server built with Express.

## Features

- `GET /hello` returns a short JSON message.
- `GET /recipes` returns all recipes from `pakistani-recipes.json`.
- `GET /recipes/:id` returns one recipe by its `idMeal` (for example `pk-01`), or a 404 JSON error if no recipe matches.
- CORS allows only the GitHub Pages frontend (`https://iqra-glitch.github.io`) and local Live Server (port 5500).

## Install

```
npm install
```

## Run

```
npm start
```

The server uses the `PORT` environment variable if it is set (for example on Render). Otherwise it runs at http://localhost:3000.

## Endpoint

### `GET /hello`

Returns a short JSON message.

Example response:

```json
{ "message": "Hello from the Recipe API!" }
```
