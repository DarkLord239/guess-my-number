import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function CardTitle({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    text: {
        color: Colors.primary4,
        fontFamily: 'roboto-regular',
        fontSize: 20,
    },
    container:{
        marginVertical:15,
    }
})

export default CardTitle;