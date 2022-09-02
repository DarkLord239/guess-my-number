import { StyleSheet, Text, View, } from 'react-native';
import Colors from '../constants/colors';

function Title({ children }) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}> {children} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 28,
        color: Colors.primary2,
        borderColor: Colors.primary2,
        borderWidth: 2,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    titleContainer: {
        alignItems:'center',
        marginTop: 80,
    }
})

export default Title;