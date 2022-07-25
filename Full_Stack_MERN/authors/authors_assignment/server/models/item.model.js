/** @format */

const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Name is required'],
			minlength: [3, 'Name must be at least 3 characters'],
		},
	},
	{ timestamps: true },
);

// module.exports.Product = mongoose.model("Product", BeltExamSchema);
const Item = mongoose.model('Item', AuthorsSchema);
module.exports = Item;
