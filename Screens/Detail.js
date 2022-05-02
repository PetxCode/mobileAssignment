import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
const styles = StyleSheet.create({});

export const Detail = () => {
	const route = useRoute();
	const data = route.params.item;
	console.log(data);
	return (
		<View>
			<Text>{data.name}</Text>
		</View>
	);
};
