const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 18);

module.exports = mongoose.model("User", {
	_id: {
		type: String,
		default: () => nanoid(),
	},
	username: String,
	email: String,
	password: String,
	logoUrl: String,
	emailValidated: Boolean,
});
