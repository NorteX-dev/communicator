const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 18);

module.exports = mongoose.model("Community", {
	_id: {
		type: String,
		default: () => nanoid(),
	},
	ownerId: String,
	name: String,
	imageUrl: String,
	region: {
		type: String,
		enum: ["EU", "NA"],
	},

});
