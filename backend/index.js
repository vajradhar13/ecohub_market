const express = require("express")
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./db/connect")
const userRouter = require("./routes/user");

app.use(cors());
app.use(express.json());
app.use(userRouter);

connectDB(process.env.MONGO_URI);

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT);
})