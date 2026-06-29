const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {getGoals, createGoal, updateGoal, deleteGoal,} = require("../controllers/goalController");
const {BreakdonwGoal} = require("../controllers/aiController");

router.get("/", auth, getGoals);
router.post("/", auth, createGoal);
router.post("/:id/breakdown", auth, BreakdonwGoalGoal);
router.put("/:id", auth, updateGoal);
router.delete("/:id", auth, deleteGoal);

module.exports = router;