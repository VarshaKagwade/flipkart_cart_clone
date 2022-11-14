import express from "express";
import { Connection } from "./database/db.js";
import DefaultData from "./default.js";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./routes/routes.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
//app.use(urlencoded.json({ extended: true }));

app.use("/", Router);
Connection();

app.listen(5002, () => {
  console.log("server started on 5002");
});
//DefaultData();
