const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const noteSchema = new Schema({
    
    title :{ type : String, required : true
    },
    load :{type : Number, required : true
    },
    reps :{type : Number, required : true},
   
}, {timestamps:true});

module.exports = mongoose.model('noteList', noteSchema);
