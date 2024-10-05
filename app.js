// Import the express module
import express from 'express';
import { urheilijatRouter } from './controllers/urheilijat.js';
const app = express();

app.use(express.json());

// alustetaan routet
app.use('/api/urheilijat', urheilijatRouter);

export { app };