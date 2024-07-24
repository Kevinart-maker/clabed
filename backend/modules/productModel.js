const mongoose = require('mongoose');

const Schema = mongoose.Schema 

const carSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    mileage: { type: Number, required: true },
    condition: { type: String, required: true, enum: ['foreign', 'local'] },
    available: { type: String, required: true, enum: ['available', 'sold'] },
    engineType: { type: String, required: true },
    transmission: { type: String, required: true },
    fuelType: { type: String, required: true },
    exteriorColor: { type: String, required: true },
    interiorColor: { type: String, required: true },
    interiorMaterial: { type: String, required: true },
    location: { type: String, required: true },
    images: [{
        type: String
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Vehicles', carSchema);