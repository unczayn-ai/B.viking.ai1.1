const Goal = require("../models/Goal");

exports.BreakdonwGoal = async (req,res) => {
    try {
        const goal = await Goal.findOne({
            _id: req.params.id,
            user: req.user._id || req.user.id,
        });

        if(!goal){
            return res.status(404).json({
                message: "Goal not found"
            });
        }

        const analysis = {
            difficulty:"HIGH",

            strategy:[
                "Break goal into smaller tasks",
                "Complete milestones consistently",
                "Review progress weekly"
            ],

            nextAction:
            "Complete your next milestone"
        };

        res.json({goal:goal.title, analysis});

    } catch(error){
        res.status(500).json({
            error:error.message
        });
    }
}