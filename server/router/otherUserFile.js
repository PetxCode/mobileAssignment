const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const router = express.Router();
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");

router.post("/register", upload, async (req, res) => {
	try {
		const { userName, email, password } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hashed = await bcrypt.hash(password, salt);

		const image = await cloudinary.uploader.upload(req.file.path);

		const creatUser = await userModel.create({
			userName,
			email,
			password: hashed,
			avatar: image.secure_url,
			avatarID: image.public_id,
		});

		res.status(201).json({
			message: "user created",
			data: creatUser,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

router.patch("/:id/update", upload, async (req, res) => {
	try {
		const { userName, email } = req.body;

		const findUser = await userModel.findOne({ email });

		if (findUser) {
			await cloudinary.uploader.destroy(findUser.avatarID);

			const image = await cloudinary.uploader.upload(req.file.path);

			const creatUser = await userModel.findByIdAndUpdate(
				{
					userName,
					avatar: image.secure_url,
					avatarID: image.public_id,
				},
				{ new: true }
			);

			res.status(201).json({
				message: "user updated",
				data: creatUser,
			});
		}
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

module.exports = router;
