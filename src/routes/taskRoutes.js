const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");

router.use(verifyToken);

router.get("/", (req, res) => {
  return res.json({
    message: "Acesso autorizado!",
    usuarioLogado: req.userId,
  });
});

module.exports = router;
