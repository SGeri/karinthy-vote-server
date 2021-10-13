import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const isActive = req.app.locals.isActive;

  res.json({ isActive: isActive });
});

export default router;
