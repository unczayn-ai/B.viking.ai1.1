function addActivity(goal,type,message) {

    if(!goal.activity){
        goal.activity = [];
    }

    goal.activity.push({
        type,
        message,
        createdAt:new Date(),
    });
}

module.exports = addActivity;