// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen for requests
const port = 3000;

// Apply Middleware
// Print out what kind of request was made and to what URL
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next(); // call next middleware function in stack
});

// Middleware to parse JSON bodies
app.use(express.json());


let items = []; // array of items

// GET method route
// Define a route handler for the root URL ('/')
// When a GET request is made to the root URL, send the action as a response
app.get('/items', (req, res) => {
    // res.send('GET request to the /data route');
    res.json(items);

});

// POST method route
app.post('/items', (req, res) => {
    // res.send('POST request to the /data route');
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
})

// PUT method route
// Allows us to update existing items in the array
app.put('/items/:id', (req, res) => {
    // res.send('PUT request to the /data route');
    const id = req.params.id; // extract ID from the route parameter
    const updatedItem = req.body; // extract the JSON data, which contains the updated item data
    let item = items.find(item => item.id === id); // search the items array for an item with matching iD
    if (item) { // check if item was found
        Object.assign(item, updatedItem); // merge properties of updatedItem to item
        res.json(item); // send the updated item back to the client in JSON format
    } else {
        res.status(404).send('Item not found');
    }

})

// DELETE method route
app.delete('/items/:id', (req, res) => {
    // res.send('DELETE request to the /data route');
    const id = req.params.id;
    const initialLength = items.length; // get the initial length of the array

    items = items.filter(item => item.id !== id); // filter out item with matching id

    if (items.length === initialLength){
        res.status(404).send('item not found') // if the length hasn't changed, the item was not found
    }else {
        res.status(204).send(); // respond with nothing
    }
    res.status(204).send();
})

// Start the server and have it listen on the defined port
// When the server starts, log a message to the console
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
