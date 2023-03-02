const Workout = require('../models/Workout');
const mongoose = require('mongoose');

const getWorkouts = async (req, res) =>{
   const workouts = await Workout.find({})
        res.status(200).json(workouts); 
};

const getWorkout = async (req, res) =>{
    const {id } = req.params
    Workout.findOne({_id : id} , (err, workout) =>{
        if(!workout){
            res.status(400).json({err : "Not Found"});
      }else{
          res.status(200).json(workout)
      }
    })
     
    }


const createWorkout = async (req, res) => {
    const { title , load , reps } = req.body;

    let emptyFields = []
    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({err : 'Please fill in all the field', emptyFields})
    }
    try{
       const newWorkout =  await Workout.create({ title , load , reps });
       res.status(200).json(newWorkout);

   }catch(err){
       res.status(400).json({ err: err.message });
   }
};

const deleteWorkout = async (req, res) =>{
    const {id } = req.params
    Workout.deleteOne({_id : id} , (err, workout) =>{
        if(!workout){
            res.status(400).json({err : "Delete not compelete"});
      }else{
          res.status(200).json({massge : "Delete compeleted"});
      }
    });
}
    
const updateWorkout = async (req, res) =>{
    const {id } = req.params
    Workout.findByIdAndUpdate({_id : id} ,{...req.body},(err) =>{
        if(err){
            res.status(400).json({err : "Update not compelete"});
      }else{
          res.status(200).json({massge : "Update compeleted"});
      }
    });
}
module.exports = {getWorkouts,getWorkout , createWorkout , deleteWorkout, updateWorkout} 