const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = 3000;

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRotes");
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
