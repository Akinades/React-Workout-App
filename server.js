require('dotenv').config();
const express = require('express'); 
const workRoutes = require('./routes/index');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    next();
})

app.use("/api/workouts" , workRoutes);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONG_URI)
 .then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log('connect MongoDB && listening on port ' , process.env.PORT);
    })
 })
 .catch((err)=>{
    console.log(err);
 });

