import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./routes/routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL;

app.use(express.json());

mongoose.connect(URL)
    .then(() => console.log("Connected to DB!"))
    .catch(err => console.log(`Error Connecting to DB! ${err}`));

app.get('/', (req,res) => {
    res.send("<h1>Welcome to My CA2 of Database!</h1>")
})

app.use("/api/user", route);

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
})