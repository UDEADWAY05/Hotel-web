const { Schema, model } = require('mongoose')

const schema = new Schema({
    about: { type: String },
    Room: { type: Number },
    img: { type: String },
    available: { type: Boolean },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

module.exports = model('HotelRoom', schema)