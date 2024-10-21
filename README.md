# Item list API

This is a simple RESTful API for managing a list of items, built using Node.js and Express.

## Features

- **GET /items**: Retrieve all items.
- **POST /items**: Add a new item.
- **PUT /items/:id**: Update an existing item.
- **DELETE /items/:id**: Delete an item.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shad0603/grocery-api.git
   cd grocery-api
2. **Install dependencies:**
   ```bash
   npm install
3. **Run the server:**
   ```bash
   node index.js
4. **Access the API:**  
   Open your browser or API client (e.g., Postman) and go to http://localhost:3000.


   
## Endpoints

- **GET /items**
  - Retrieves all items.
  - Response: Array of items.

- **POST /items**
  - Adds a new item.
  - Request Body: JSON object with `id` and `name`.
  - Response: The added item.

- **PUT /items/:id**
  - Updates an existing item.
  - Request Body: JSON object with `name` (and optionally `id`).
  - Response: The updated item or 404 if not found.

- **DELETE /items/:id**
  - Deletes an item.
  - Response: 204 No Content or 404 if not found.
