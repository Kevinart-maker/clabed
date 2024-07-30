const express = require('express')
const{
    getVehicles,
    getVehicle,
    createVehicle,
    deleteVehicle,
    updateVehicle
} = require('../controllers/vehicleController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

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