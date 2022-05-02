import {
	TextInput,
	Image,
	Dimensions,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";
import pix from "./baby.jpeg";

const { width, height } = Dimensions.get("window");

let SIZE = width * 0.8;
let WIDTH_SIZE = width;
let H_SIZE = height * 0.35;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},

	image: {
		width: WIDTH_SIZE,
		height: H_SIZE,
		resizeMode: "cover",
		backgroundColor: "orange",
	},
	input: {
		width: SIZE,
		height: 45,
		borderWidth: 1,
		borderColor: "silver",
		borderRadius: 2,
		paddingLeft: 10,
		marginTop: 5,
	},
	text: {
		fontFamily: "Poppins",
		marginTop: 15,
	},
	button: {
		backgroundColor: "#004080",
		height: 50,
		width: SIZE,
		marginTop: 30,
		borderRadius: 3,
		justifyContent: "center",
		alignItems: "center",
	},
	textColor: {
		color: "white",
		fontFamily: "Poppins",
		fontSize: 20,
	},
	downText: {
		marginTop: 20,
		fontFamily: "Poppins",
	},
	downLoad: {
		fontFamily: "Poppins",
		color: "red",
		fontWeight: "bold",
	},
});

const Register = () => {
	return (
		<View>
			<Image source={pix} style={styles.image} />

			<View style={styles.container}>
				<View>
					<Text style={styles.text}>User Name</Text>
					<TextInput placeholder="User Name" style={styles.input} />
				</View>
				<View>
					<Text style={styles.text}>Email</Text>
					<TextInput placeholder="Email" style={styles.input} />
				</View>
				<View>
					<Text style={styles.text}>Password</Text>
					<TextInput placeholder="Password" style={styles.input} />
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.textColor}>Register</Text>
				</TouchableOpacity>

				<Text style={styles.downText}>Already have an Account? </Text>
				<TouchableOpacity>
					<Text style={styles.downLoad}>Sign in Here</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Register;

// const styles = StyleSheet.create({
// 	image: {
// 		height: 100,
// 		resizeMode: "cover",
// 		backgroundColor: "orange",
// 	},
// 	textInput: {
// 		width: 400,
// 		marginTop: 10,
// 		paddingLeft: 10,
// 		height: 50,
// 		borderWidth: 1,
// 		borderColor: "silver",
// 		borderRadius: 3,
// 	},
// 	text: {
// 		fontFamily: "Poppins",
// 	},
// 	container: {
// 		flex: 1,
// 		alignItems: center,
// 	},
// });
