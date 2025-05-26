import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import conectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';


// APP CONFIG 
const app = express();
const port = process.env.PORT || 4000;
connectDB();
conectCloudinary();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// API ENDPOINTS
app.use('/api/admin', adminRouter);
// localhost:4000/api/admin/

app.get('/', (req, res) => {
    res.send('API WORKING! ');
});

app.listen(port, () => {
    console.log("server started", port);
});

