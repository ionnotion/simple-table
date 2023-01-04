import { useNavigation } from "@react-navigation/native";
import { Button, Pressable, Text, View } from "react-native";

export const Onboarding = () => {
	const nav = useNavigation();
	return (
		<View>
			<Text>This is Onboarding</Text>
			<Button onPress={() => nav.navigate("Home")} title="Home" />
		</View>
	);
};
