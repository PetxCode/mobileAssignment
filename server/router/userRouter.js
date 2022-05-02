const express = require("express");
const router = express.Router();
const {
	getUsers,
	deleteUser,
	getUser,
	signinUser,
} = require("../controller/userController");

router.route("/").get(getUsers);
router.route("/signin").post(signinUser);
router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
