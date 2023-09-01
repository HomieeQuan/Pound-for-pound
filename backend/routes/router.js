const express = require('express')
const router = express.Router()


const {
    getFighterByID,
    

} = require('../controllers/controller')


router.get('/getFighter',getFighterByID)

module.exports = router



