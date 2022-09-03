import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.Number}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary4,
        padding:8,
        paddingHorizontal:20,
        margin: 10,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Number: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.primary4,

    }
});

export default NumberContainer;