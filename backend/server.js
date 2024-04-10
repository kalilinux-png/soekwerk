const express = require('express');
const authRoutes = require('./routes/auth');
const { handleError } = require('./middleware/errorMiddleware');
const jobRoutes = require('./routes/jobs');
const userRoutes = require('./routes/partner');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const glob = require('glob');
const swaggerSpec = require('./swagger.json');

// const userRoutes = require('./routes/users');
// const applicationRoutes = require('./routes/applications');
const cors = require('cors');

require('dotenv').config()




const mongoose = require('mongoose');

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/job_matching';
console.log("Mongo Uri", MONGODB_URI);
// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/partner', userRoutes);
app.use('/api/jobs', jobRoutes);

// app.use('/api/users', userRoutes);
// app.use('/api/applications', applicationRoutes);
app.use(handleError);

console.log("Swagger Spec", swaggerSpec);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
