import * as express from "express";
import { Cat, CatType } from "./app.model";
const app: express.Express = express();

const data = [1, 2, 3, 4];

app.use((req, res, next) => {
  //미들웨어 (next를 추가하게되면 미들웨어가 된다.)
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

app.get("/cats/som", (req, res, next) => {
  //미들웨어
  console.log(req.rawHeaders[1]);
  console.log("this is som middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  //미들웨어 (next를 추가하게되면 미들웨어가 된다.)
  console.log(req.rawHeaders[1]);
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
