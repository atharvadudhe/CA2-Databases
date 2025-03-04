import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    reps:{
        type: Number,
    },
    sets:{
        type: Number,
    },
    weight:{
        type: Number,
    }
});

const workoutSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    date:{
        type: Date,
        require: true,
    },
    duration:{
        type: Number,
        require: true,
    },
    caloriesBurned:{
        type: Number,
    },
    exercises:{
        type: [exerciseSchema],
    },
});

export default mongoose.model('Workout', workoutSchema);