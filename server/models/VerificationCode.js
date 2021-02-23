const mongoose = require(`mongoose`);
const { nanoid } = require(`nanoid`);

module.exports = mongoose.model(`verificationcode`, {
	code: {
		type: String,
		default: () => nanoid(5),
	},
	email: String,
	expiry: Number,
})