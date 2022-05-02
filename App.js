import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import Register from "./Screens/Register";
import { useFonts } from "expo-font";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail } from "./Screens/Detail";

const Stack = createNativeStackNavigator();

export default (props) => {
	const [fontLoads] = useFonts({
		Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
	});

	if (!fontLoads) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="home" component={HomeScreen} />
				<Stack.Screen name="detail" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
