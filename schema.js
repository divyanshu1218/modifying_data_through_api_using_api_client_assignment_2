const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema); // ✅ Correct way

module.exports = MenuItem;