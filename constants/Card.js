import { StyleSheet,Text,View } from "react-native";
import Colors from "./colors";

function Card ({children}) {
    return <View style={styles.cardContainer}>{children}</View>
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary3,
        marginHorizontal: 15,
        borderRadius: 5,
        elevation: 15,
        shadowColor: Colors.primary1,
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 6 },
        marginTop: 20,

    },
});

export default Card;