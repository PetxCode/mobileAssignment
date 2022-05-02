import { TouchableOpacity, FlatList, Image, View, Text } from "react-native";
import React from "react";

const myData = [
	{
		id: 1,
		name: "Peter Oti",
		contact: "08137204472",
		image: require("./baby.jpeg"),
	},
	{
		id: 2,
		name: "Peter Pan",
		contact: "08137204472",
		image: require("./dev.jpg"),
	},
	{
		id: 3,
		name: "Peter Best",
		contact: "08137204472",
		image: require("./1.jpg"),
	},
	{
		id: 4,
		name: "Peter Gamer",
		contact: "08137204472",
		image: require("./2.jpeg"),
	},
	{
		id: 5,
		name: "Peter Oti",
		contact: "08137204472",
		image: require("./3.jpeg"),
	},
];

export default function HomeScreen({ navigation }) {
	return (
		<View>
			<FlatList
				data={myData}
				renderItem={({ item }) => (
					<View
						style={{
							height: 80,
							backgroundColor: "lightgray",
							shadowOffset: { width: 2, height: 3 },
							shadowColor: "black",
							shadowOpacity: 0.1,
							elevation: 3,
							marginBottom: 5,
							alignItems: "center",
							flexDirection: "row",
							padding: 10,
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.push("detail", (item = { item }));
							}}
						>
							<Image
								style={{
									width: 60,
									height: 60,
									borderRadius: 30,
									backgroundColor: "orange",
									marginRight: 30,
								}}
								source={item.image}
							/>
						</TouchableOpacity>
						<View>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 20,
									fontWeight: "bold",
								}}
							>
								{item.name}
							</Text>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 12,
									fontWeight: "bold",
								}}
							>
								{item.contact}
							</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
}
