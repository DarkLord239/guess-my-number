import {  StyleSheet,Text } from "react-native";
import Colors from "../constants/colors";

function CardTitle ({children}) {
    return <Text style={styles.textContainer}>{children}</Text>
};


const styles = StyleSheet.create({
    textContainer: {
        color: Colors.primary4,
        fontFamily: 'roboto-regular',
        fontSize: 20,
    }
})

export default CardTitle;