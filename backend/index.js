import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from 'cors';

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected successfully');
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Database connection failed:', error);
  });

const app = express();
app.use(express.json());

app.listen(PORT,() => {
  console.log(`App is listening for the port ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to MERN Stack Development');
});

app.use('/books',bookRoute);