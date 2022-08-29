import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = () => {

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInputContainer} placeholder='Enter a number' maxLength={2} />
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#810000',
        marginHorizontal: 15,
        borderRadius: 5,
        elevation: 15,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 6 }

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInputContainer:{
        height:50,
        width:50,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default StartGameScreen;