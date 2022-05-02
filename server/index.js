const express = require("express");
const cors = require("cors");
require("./utils/database");
const app = express();
const port = 2289;

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./router/userRouter"));
app.use("/api/user", require("./router/otherUserFile"));

app.listen(port, () => {
	console.log("server is now up and running..!");
});
