// reset.js

const mongoose = require('mongoose');
require('dotenv').config();
// Connect to the database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        // ⚠️⚠️⚠️ PLease Make sure that you have database backup because thi will delete the database
        console.log("⚠️⚠️⚠️ PLease Make sure that you have database backup because thi will delete the database")
        console.log('Connected to MongoDB');

        try {
            // Fetch all collections
            const collections = await mongoose.connection.db.collections();

            // Delete all documents from each collection
            for (let collection of collections) {
                await collection.deleteMany();
                console.log(`Cleared collection: ${collection.namespace}`);
            }

            console.log('Database reset complete');
            mongoose.connection.close();
        } catch (error) {
            console.error('Error resetting database:', error);
            mongoose.connection.close();
        }
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
