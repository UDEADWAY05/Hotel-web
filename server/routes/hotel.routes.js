const express = require('express')
const router = express.Router({ mergeParams: true })
const HotelRoom = require("../models/Hotel")
const auth = require("../middleware/auth.middleware")

router.patch('/:roomId', auth, async (req, res) => {
    try {
        const { roomId } = req.params
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
        const sorted = list.sort((user1, user2) => user1.Room > user2.Room ? 1 : -1);
        res.send(sorted)
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже'
        }) 
    }
})

router.post('/', auth , async (req, res) => {
    try {
        if (req?.user) {
            const newHotel = await HotelRoom.create({
                ...req.body,
                available: true,
                userId: null
            })
            res.send(newHotel)
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

router.delete('/:roomId', auth, async (req, res) => {
    try {
        const { roomId } = req.params
        if (req?.user) {
            const deletedRoom = await HotelRoom.findByIdAndDelete(roomId)
            res.send(deletedRoom)
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


module.exports = router