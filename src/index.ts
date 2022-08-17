import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { mongoDBConfig } from "./config/dotenv";
import { corsOptions } from "./config/cors";
import authRoute from "./routes/auth/root";
import weatherRoute from "./routes/weather/weather.route";
import postRoute from "./routes/post/post.route";
import youtubeRoute from "./routes/youtube/youtube.route";

const app: express.Application = express();
const port: string | number = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/auth", authRoute);
app.use("/api/weather", weatherRoute);
app.use("/api/post", postRoute);
app.use("/api/youtube", youtubeRoute);

const connect = mongoose
  .connect(mongoDBConfig.uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err: any) => console.log(err));

app.listen(typeof port === "string" ? parseInt(port) : port, () => {
  console.log(`Example app listening on port ${port}`);
});
