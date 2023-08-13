const express = require('express')
const router = express.Router({ mergeParams: true })
const HotelRoom = require("../models/Hotel")
const auth = require("../middleware/auth.middleware")

router.patch('/:roomId', auth, async (req, res) => {
    try {
        const { roomId } = req.params
        console.log(req.user)
        if (req?.user) {
            const updatedRoom = await HotelRoom.findByIdAndUpdate(roomId, req.body, { new: true })
            res.send(updatedRoom)
        } else {
            res.status(401).json({
                message: "Unauthorized"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже'
        }) 
    }
})

router.get('/', async (req, res) => {
    try {
        const list = await HotelRoom.find()
        res.send(list)
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже'
        }) 
    }
})



module.exports = router