import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { QuizzMap } from "../front/src/app/interfaces/quizz-map";

const app = express();
const port = 3000;
const www = "../front/dist/front";

const map: QuizzMap = {};

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(cors());

app.get("/ws/quizz", (req, res) => {
  res.json(map);
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
