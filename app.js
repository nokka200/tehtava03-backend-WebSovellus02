// Import the express module
import express from 'express';
const app = express();

app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export { app };