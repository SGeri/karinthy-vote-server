import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  req.app.locals.votes = [0, 0, 0, 0];
  req.app.locals.isActive = true;

  res.json({ sucess: true });
});

export default router;
