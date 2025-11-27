import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDatabase from './db';
import taskRouter from './routes/taskRouter';
import { MONGODB_URI } from './config';

console.log("MongoDB URI:", MONGODB_URI);
connectToDatabase();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/tasks",taskRouter);



// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});