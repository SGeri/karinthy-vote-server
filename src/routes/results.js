import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const votes = req.app.locals.votes;

  res.json({ votes: votes });
});

export default router;
