const Goal = require("../models/Goal");
const calculateProgress = require("../utils/calculateProgress");

exports.getGoals = async (req,res) => {
    try {
        const goals = await Goal.find({
            user: req.user._id || req.user.id
        });

        res.json(goals);

    } catch(error) {
        console.log("Get Goal Error: ", error);
        res.status(500).json({
            error: error.message
        });
    }
}

exports.createGoal = async (req, res) => {
    try {
        const milestones = req.body.milestones || [];

        const goal = await Goal.create({
            user: req.user._id || req.user.id,
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            deadline: req.body.deadline,
            milestones,
            progress: calculateProgress(milestones),
            velocity: req.body.velocity,
            streak: req.body.streak,
        });

        res.status(201).json(goal);

    } catch(error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateGoal = async (req, res) => {

    
    try {
        const updateData = req.body;
        if(updateData.milestones){
            updateData.progress = calculateProgress(updateData.milestones);
        };

        const goal = await Goal.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user._id || req.user.id,
            },

            updateData,

            {
                new: true
            }
        );

        if(!goal) {
            return res.status(404).json({
                message: "Goal not found"
            });
        }

        res.json(goal);

    } catch(error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteGoal = async (req, res) => {
    try {
        const goal = await Goal.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id || req.user.id,
        });

        if(!goal) {
            return res.status(404).json({
                message: "Goal not found"
            });
        }

        res.json({
            message: "Goal deleted"
        });

    } catch(error) {
        res.status(500).json({
            error: error.message
        })
    }
}