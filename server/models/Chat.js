const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 18);

module.exports = mongoose.model("Chat", {
	_id: {
		type: String,
		default: () => nanoid(),
	},
	name: String,
	messages: {
		type: Array,
		default: []
	}
});
