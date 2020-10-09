import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { QuizzMap } from "../front/src/app/interfaces/quizz-map";
import { Quizz } from "../front/src/app/interfaces/quizz";

const app = express();
const port = 3000;
const www = "../front/dist/front";

const map: QuizzMap = {};

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(cors());

app.use(express.json());

app.get("/ws/quizz", (req, res) => {
  res.json(map);
});

app.post("/ws/quizz", (req, res) => {
  const q: Quizz = req.body;
  console.log('q: ', q);
  res.status(204).end();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
