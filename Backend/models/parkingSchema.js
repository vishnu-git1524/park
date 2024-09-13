const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true // optional field
    },
    googleMapLink: {
        type: String,
        required: true // optional field
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model("Parking", parkingSchema);
