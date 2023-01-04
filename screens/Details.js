import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"

export const Details = () => {
    const nav = useNavigation()
    return(
        <View>
            <Text>This is Details</Text>
        </View>
    )
}