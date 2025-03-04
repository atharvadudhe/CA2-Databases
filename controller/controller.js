import User from "../model/User.js";

export const POST = async (req,res) => {
    try{
        const userData = req.body;
        const {name, date, duration} = req.body;
        if(!name){
            return res.status(400).json({"error": `Validation field: name is required.`})
        }
        if(!date){
            return res.status(400).json({"error": `Validation field: date is required.`})
        }
        if(!duration){
            return res.status(400).json({"error": `Validation field: duration is required.`})
        }
        const data = await User(userData);
        const savedData = await data.save();
        res.status(201).json(savedData);
    } catch(err){
        res.status(500).json({"error": "Something went wrong"});
    }
};

export const GET = async (req, res) => {
    try{
        const user = await User.find();
        if(user.length == 0){
            return res.status(404).json({"error":"Workout not found"})
        }
        res.status(201).json(user);
    } catch(err){
        res.status(500).json({"error": "Something went wrong"});
    }
}

export const PUT = async (req, res) => {
    try{
        const id = req.params.id;
        const userExists = await User.find({_id: id});
        if(!userExists){
            return res.status(404).json({"error": "Workout not found"});
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(201).json(updateUser);
    } catch(err){
        res.status(500).json({"error": "Something went wrong"});
    }
}

export const DELETE = async (req, res) => {
    try{
        const id = req.params.id;
        const userExists = await User.find({_id: id});
        if(!userExists){
            return res.status(404).json({"error": "Workout not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({"message": "Workout deleted successfully!"});
    } catch(err){
        res.status(500).json({"error": "Something went wrong"});
    }
}