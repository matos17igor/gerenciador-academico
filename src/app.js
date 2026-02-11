const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = 3000;

app.use(express.json());

app.get("/teste", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");
    res.json({ message: "Conectado ao MYSQL!", result: rows[0].result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
