const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        default: "Developer",
    },

    phase: {
        type: String,
        default:"SYSTEM ARCHITECT",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    bio: {
        type: String,
        default: "",
    },

    github: {
        type: String,
        default: "",
    },

    portfolio: {
        type: String,
        default: "",
    },

    skills: {
        type: [String],
        default: [],
    },

    avatar: {
        type: String,
        default: "",
    },

});

module.exports = mongoose.model("User", userSchema);