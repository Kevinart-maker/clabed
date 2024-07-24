const mongoose = require('mongoose')
const Vehicles = require('../modules/productModel')

// get all vehicles
const getVehicles = async (req, res) =>{
    const vehicles = await Vehicles.find({}).sort({createdAt: -1})

    res.status(200).json(vehicles)
}

// get a single vehicle
const getVehicle = async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such vehicle"})
    }

    const vehicle = await Vehicles.findById(id)

    if(!vehicle){
        return res.status(404).json({error: 'Vehicle not found!'})
    }

    res.status(200).json(vehicle)
}

// create a new vehicle
const createVehicle = async (req, res)=>{
    const { make, model, year, price, mileage, condition, available, engineType, transmission, fuelType, exteriorColor, interiorColor, interiorMaterial, vin, location, images } = req.body

    let emptyFields = []

    if(!make){
        emptyFields.push('make')
    }
    if(!model){
        emptyFields.push('model')
    }
    if(!year){
        emptyFields.push('year')
    }
    if(!price){
        emptyFields.push('price')
    }
    if(!mileage){
        emptyFields.push('mileage')
    }
    if(!condition){
        emptyFields.push('condition')
    }
    if(!available){
        emptyFields.push('available')
    }
    if(!engineType){
        emptyFields.push('engineType')
    }
    if(!transmission){
        emptyFields.push('transmission')
    }
    if(!available){
        emptyFields.push('transimission')
    }
    if(!fuelType){
        emptyFields.push('fuelType')
    }
    if(!exteriorColor){
        emptyFields.push('exteriorColor')
    }
    if(!interiorColor){
        emptyFields.push('interiorColor')
    }
    if(!interiorMaterial){
        emptyFields.push('interiorMaterial')
    }
    if(!location){
        emptyFields.push('location')
    }
    if( !images || images.length === 0 ){
        emptyFields.push('photos')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    // add doc to db
    try{
        const vehicle = await Vehicles.create({ make, model, year, price, mileage, condition, available, engineType, transmission, fuelType, exteriorColor, interiorColor, interiorMaterial, location, images })
        res.status(200).json(vehicle)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete a vehicle
const deleteVehicle = async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such vehicle"})
    }

    const vehicle = await Vehicles.findOneAndDelete({_id: id})

    if(!vehicle){
        return res.status(400).json({error: 'Vehicle not found!'})
    }

    res.status(200).json(vehicle)
}

// update a vehicle
const updateVehicle = async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such vehicle"})
    }

    const vehicle = await Vehicles.findOneAndUpdate(
        {_id: id}, 
        { ...req.body },
        { new: true }
    )
    if(!vehicle){
        return res.status(400).json({error: 'Vehicle not found!'})
    }

    res.status(200).json(vehicle)
}


module.exports = {
    getVehicles,
    getVehicle,
    createVehicle,
    deleteVehicle,
    updateVehicle
}