function calculateProgress(milestones) {
    if(!milestones.length){
        return 0;
    }

    const completed = milestones.filter(m => m.completed).length;

    return Math.round((completed / milestones.length) * 100);
}

module.exports = calculateProgress;