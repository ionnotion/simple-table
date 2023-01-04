import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"

export const Search = () => {
    const nav = useNavigation()
    return(
        <View>
            <Text>This is Search</Text>
        </View>
    )
}