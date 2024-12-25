import express from "express";
import mongoose from "mongoose";
import routes from "./Routes/product.route.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const env = process.env.MONGO_URL;
// Middleware
app.use(express.json());

// Port
const port = 3000;

app.use("/api/products", routes);

// Start the server
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((e) => {
    console.log("Database connection error:", e.message);
  });

