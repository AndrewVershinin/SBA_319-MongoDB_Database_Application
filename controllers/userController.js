import User from "../models/users.js";

// Create a new user
const createUser = async (req, res) => {
    try {
        const { name, username, email, age } = req.body;

        const newUser = new User({
            name,
            username,
            email,
            age
        });

        // Save the user to the mongo
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (e) {
        console.log(e.message)
        res.status(400).json(e);
    }
};

// Get all users
const getAllusers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users); // Respond with the list of users
    } catch (e) {
        res.status(500).json(e);
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
    }
};

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const { name, username, email, age } = req.body;

        // Find the user by ID and update
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, username, email, age },
            { new: true } // Return the updated user
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (e) {
        res.status(400).json(e);
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (e) {
        res.status(500).json(e);
    }
};

export default { createUser, getAllusers, getUserById, updateUser, deleteUser };