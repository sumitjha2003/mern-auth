import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import bodyParser from 'body-parser';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to mongodb')
})
.catch((err)=>{
    console.log(err);
});

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);


app.listen(3000,()=>{
    console.log('server is running on port 3000');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes)