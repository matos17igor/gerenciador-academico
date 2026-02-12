const db = require("../config/database");

async function create(task) {
  const sql = `
        INSERT INTO tasks (title, description, deadline, user_id, subject_id) VALUES (?, ?, ?, ?, ?)
    `;

  const [result] = await db.execute(sql, [
    task.title,
    task.description,
    task.deadline,
    task.userId,
    task.subjectId,
  ]);

  return result.insertId;
}

async function findAll(userId) {
  const sql = `
    SELECT * FROM tasks
    WHERE user_id = ?
  `;

  const [rows] = await db.execute(sql, [userId]);
  return rows;
}

module.exports = { create, findAll };
