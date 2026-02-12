const taskServices = require("../services/taskServices");

async function create(req, res) {
  try {
    const { title, description, deadline, subjectId } = req.body;
    const userId = req.userId;

    const register = await taskServices.registerTask(
      title,
      description,
      deadline,
      userId,
      subjectId
    );

    return res.status(201).json(register);
  } catch (error) {
    return res.stauts(400).json({ error: error.message });
  }
}

module.exports = { create };
