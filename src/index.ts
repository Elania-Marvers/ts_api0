import express,{Router, Request, Response, NextFunction} from 'express';
var expr = express();
const port = 3089

expr.get("/", (req, res) => {
  res.send(new Date());
});

expr.listen(3089)