import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listContainer}>
            <View style={styles.listItem} >
                <Text> #{roundNumber}</Text>
                <Text>Opponent's Guees: {guess}</Text>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
listContainer:{
    paddingHorizontal:25,

},

    listItem: {
        borderColor: Colors.primary1,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primary6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: Colors.primary1,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

})


export default GuessLogItem;