import { config } from 'dotenv';
config();
import app from './config/app.js';
import { dbConnect } from './config/mongodb.js';
function server() {
  const PORT = process.env.PORT || 1000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}
async function database() {
  await dbConnect();
}
server();
database();
