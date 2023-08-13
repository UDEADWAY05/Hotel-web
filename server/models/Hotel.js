const { Schema, model } = require('mongoose')

const schema = new Schema({
    about: { type: String },
    Room: { type: Number },
    img: { type: String },
    available: { type: Boolean},
}, {
    timestamps: true
})

module.exports = model('HotelRoom', schema)