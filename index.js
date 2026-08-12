import expres from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/useRoute.js";

const app = expres();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MODGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("connected for DB succefully");
    app.listen(PORT, () => {
      console.log(`app listen this port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

app.use("api", route);
