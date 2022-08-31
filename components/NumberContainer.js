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
        borderColor: Colors.primary2,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Number: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.primary4,

    }
});

export default NumberContainer;