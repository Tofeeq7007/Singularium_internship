import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    urgency: {
        type: Number,
        required: true
    },
    importance: {
        type: Number,
        required: true
    },
    effort: {
        type: Number,
        required: true
    },
    deadline:{
        type: Date,
    },
    dependencies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Task",
    },
    score: {
        type: Number,
        default: 0
    },

});

const Task = mongoose.model("Task", taskSchema);

export default Task;