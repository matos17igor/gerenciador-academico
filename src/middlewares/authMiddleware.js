const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Token nao fornecido" });
  }

  // O split(' ') divide em ["Bearer", "<token>"]
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token mal formatado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalido" });
  }
}

module.exports = { verifyToken };
