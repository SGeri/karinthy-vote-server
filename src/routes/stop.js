import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  req.app.locals.isActive = false;

  res.json({ sucess: true });
});

export default router;
