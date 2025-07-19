const mongoose = require("mongoose");

const WarrantySchema = new mongoose.Schema({
    variant: {
        type: String,
        // required: true,
    },
    value: {
        type: String,
        // required: true,
    },

    status: {
        type: Boolean,
        default: false
    },

},
    {
        timestamps: true
    });

module.exports = mongoose.model("Warranty", WarrantySchema);