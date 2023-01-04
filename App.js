import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigator/StackNavigator";
export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
