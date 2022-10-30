const express = require("express");
const router = express.Router();

// ミドルウェア
const myLogger = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

// router.use(myLogger);

router.get("/", myLogger, (req, res) => {
  res.send("ユーザーです");
});

router.get("/info", (req, res) => {
  res.send("ユーザー情報です");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報`);
});

module.exports = router;
