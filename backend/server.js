const express = require('express');
const cookieParser = require("cookie-parser");
const logger = require('./loggers/logger');
const logRequests = require('./loggers/requestLogger');
const { handleError } = require('./middleware/errorMiddleware');
const fileUpload = require('express-fileupload');
// Api Docs
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json")

// All Routes 
// root 
app.use("/",(req,res)=>{ 
res.send("Hello World")
} )
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const companyRoutes = require('./routes/company');
const staffRoutes = require('./routes/staff');
const forgotPasswordRoute = require('./routes/forgotPassword');
const jobFileRoutes = require("./routes/jobFile");
const userRoutes = require("./routes/user");


const path = require('path');
const glob = require('glob');

// const userRoutes = require('./routes/users');
// const applicationRoutes = require('./routes/applications');
const cors = require('cors');

require('dotenv').config()




const mongoose = require('mongoose');

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/job_matching';
// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => logger.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 5000;

const app = express();
// CORS middleware
app.use((req, res, next) => {
    const allowedOrigins = ['https://soekwerk-beryl.vercel.app', 'http://localhost:3000'];
    const origin = req.headers.origin;
  
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// Handle preflight requests
app.options('*', (req, res) => {
    res.status(200).end();
});

app.use(cookieParser())
app.use(fileUpload());
app.use(express.json({limit: '50mb'})); // cookies parser
app.use(logRequests)
// Routes 
app.use('/api/auth', authRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/jobFiles', jobFileRoutes);
app.use('/api/user', userRoutes);
app.use('/api', forgotPasswordRoute);




app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));// app.use('/api/applications', applicationRoutes);
app.use(handleError);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    logger.info(`Server is running on port ${PORT}`);
});

module.exports = app;
