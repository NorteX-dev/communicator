const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", (req, res) => {
	res.send("Api index");
});

// Warning: this route is heavy
router.route("/users")
	.get((req, res) => {
		User.find({}, (err, users) => {
			res.json(users);
		})
	})

	.post((req, res) => {
		if(!req.body.email) return res.status(400).json({ message: `"email" json field must be specified."` });
		if(!req.body.username) return res.status(400).json({ message: `"username" json field must be specified."` });
		User.findOne({ _id: req.query.id }, (err, user) => {
			if(err) throw err;
			if(user) return res.status(409).json({ message: "User already exists." });
			new User({
				email: req.body.email,
				username: req.body.username,
			}).save().then(() => {
				res.status(201).json({ message: "User registered." });
			}).catch(e => {
				res.status(500).json({ message: e })
			})
		})
	})

router.get("/currentuser", (req, res) => {
	res.json(req.user || { message: "Logged out" });
})

module.exports = router;
