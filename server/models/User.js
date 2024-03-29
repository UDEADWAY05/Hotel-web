const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    rooms: [{ type: Schema.Types.ObjectId, ref: 'HotelRoom' }],
    admin: { type: Boolean }

}, {
    timestamps: true
})

module.exports = model('User', schema)