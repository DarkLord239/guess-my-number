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
        padding: 15,
        margin: 25,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Number: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.primary2,

    }
});

export default NumberContainer;