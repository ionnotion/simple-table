import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Home, Onboarding, Search } from "../screens";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{orientation:"all"}}>
			<Stack.Screen name="Onboarding" component={Onboarding} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Search" component={Search} />
			<Stack.Screen name="Details" component={Details} />
		</Stack.Navigator>
	);
};
