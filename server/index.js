import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("connected for DB succefully");
    app.listen(PORT, () => {
      console.log(`app listen this port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

app.use("/api", route);
