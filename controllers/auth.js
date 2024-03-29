const User = require("../models/User");

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = async (req , res , next) => {
    try{
        const { name , email , password , role } = req.body;
        const user = await User.create({
            name,
            email,
            password,
            role
        });
        res.status(200).json({ success: true });
    }
    catch(error){
        res.status(500).json({ success: false, error: error.message });
    }
    
}