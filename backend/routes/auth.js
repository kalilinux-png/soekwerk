const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const { validateUserRegistration,validateUserAuthentication  } = require('../middleware/validationMiddleware');



// Route for user registration
router.get("/", (req, res) => {
    res.status(200).send("All Good 👍")
})

router.post('/staff/register', validateUserRegistration,authController.register);
// Route for user login
router.post('/login',validateUserAuthentication, authController.login);
// Route for updating user profile
router.put('/profile/update', authMiddleware.authenticateUser, authController.updateProfile);
// Route for changing user password
router.put('/profile/password', authMiddleware.authenticateUser, authController.changePassword);



module.exports = router;
