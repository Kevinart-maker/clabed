const express = require('express')
const{
    getVehicles,
    getVehicle,
    createVehicle,
    deleteVehicle,
    updateVehicle
} = require('../controllers/vehicleController')

const router = express.Router()

// get all vehicles
router.get('/', getVehicles)

// get single vehicle
router.get('/:id', getVehicle)

// Post a new vehicle
router.post('/', createVehicle)

// delete a vehicle
router.delete('/:id', deleteVehicle)

// update a vehicle
router.patch('/:id', updateVehicle)

module.exports = router