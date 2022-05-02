const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const signinUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const getUser = await userModel.findOne({ email });

		if (getUser) {
			const checkPass = await bcrypt.compare(password, getUser.password);

			if (checkPass) {
				const token = jwt.sign(
					{
						_id: getUser._id,
						email: getUser.email,
						userName: getUser.userName,
						avatar: getUser.avatar,
					},
					"THisisThe_BestSecretKEYEVER",
					{ expiresIn: "1d" }
				);

				const { password, ...data } = getUser._doc;

				res.status(201).json({
					message: `welcome ${getUser.userName}`,
					data: { ...data, token },
				});
			} else {
				res.status(500).json({
					message: "password is incorrect",
				});
			}
		} else {
			res.status(500).json({
				message: "user not in our database",
			});
		}
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

const getUsers = async (req, res) => {
	try {
		const users = await userModel.find();

		res.status(200).json({
			message: "users data found",
			length: users.length,
			data: users,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

const getUser = async (req, res) => {
	try {
		const users = await userModel.findById(req.params.id);

		res.status(200).json({
			message: "user data found",
			data: users,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		const users = await userModel.findByIdAndDelete(req.params.id);

		res.status(200).json({
			message: "user data found",
			length: users.length,
			data: users,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

module.exports = {
	getUsers,
	deleteUser,
	getUser,
	signinUser,
};
