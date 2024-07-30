require('dotenv').config();
const Vehicles = require('./modules/productModel')


const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicleRoutes');
const cors = require('cors');
const userRoutes = require('./routes/user')

// Express app
const app = express();

const corsOptions = {
    origin: 'https://clabed.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    maxAge: 3600
  };

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
    // console.log(req.path, req.method);
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
const searchVehicles = async (req, res) => {
    const { query } = req.query;
    console.log("Searched query: ", query)
    try {
        const vehicles = await Vehicles.find({
            $or: [
                { make: { $regex: query, $options: 'i' } },
                { model: { $regex: query, $options: 'i' } },
                { year: { $regex: query, $options: 'i' } },
                { mileage: { $regex: query, $options: 'i' } },
                { condition: { $regex: query, $options: 'i' } },
                { available: { $regex: query, $options: 'i' } },
                { engineType: { $regex: query, $options: 'i' } },
                { transmission: { $regex: query, $options: 'i' } },
                { fuelType: { $regex: query, $options: 'i' } },
                { exteriorColor: { $regex: query, $options: 'i' } },
                { interiorColor: { $regex: query, $options: 'i' } },
                { interiorMaterial: { $regex: query, $options: 'i' } },
                { location: { $regex: query, $options: 'i' } },
            ]
        });
        console.log('Found vehicles:', vehicles);
        res.status(200).json(vehicles);
    } catch (error) {
        console.error('Error searching vehicles:', error);
        res.status(500).json({ error: 'Failed to search vehicles' });
    }
};

// Routes
app.use('/api/vehicles/', vehicleRoutes);
app.use('/api/vehicle/search', searchVehicles);
app.use('/api/user', userRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db & listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
