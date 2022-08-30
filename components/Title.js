import { StyleSheet, Text, View, } from 'react-native';

function Title({ children }) {
    return (
        <Text style={styles.title}> {children} </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: 'yellow',
        borderColor: 'yellow',
        borderWidth: 2,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Title;