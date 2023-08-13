const HotelRoom = require('../models/Hotel')
const hotelMock = require('../mock/hotelRoom.json')

module.exports = async () => {
    const hotel = await HotelRoom.find() 
    if (hotel.length !== hotelMock.length) {
        createInitialEntity(HotelRoom, hotelMock)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (error) {
                return error                
            }
        })
    )
}