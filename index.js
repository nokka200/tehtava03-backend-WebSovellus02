import { app } from './app.js';
import { initDb } from './utils/initDb.js';

// Set the application to listen on port 3000
const PORT = 3000;

initDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});