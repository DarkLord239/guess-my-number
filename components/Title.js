import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Colors from '../constants/colors';

function Title({ children }) {

    const { height, width } = useWindowDimensions();

    const marginTopLayout= height< 400 ? 50 : 100;
    return (
        <View style={styles.titleContainer}>
            <Text style={[styles.titleText, {marginTop:marginTopLayout}]}> {children} </Text>
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
        fontFamily: 'raleway-bold'
    },
    titleContainer: {
        alignItems:'center',
        marginBottom:20,
    }
})

export default Title;