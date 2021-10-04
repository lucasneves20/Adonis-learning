const express = require("express");
import { json, Request, Response } from "express";
import { urlencoded } from "body-parser";
// import fs from "fs";
// import path from "path";

const app = express();
const port = 3003;

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello world",
  });
  //   res.render("./index.html", (err, content) => {
  //     if (err) throw res.send(err);

  //     return res.send(content);
  //   });
});

app.listen(port, () => {
  console.log(`deu certo, http://localhost:${port}`);
});
