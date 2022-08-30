import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = () => {

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInputContainer} maxLength={2} keyboardType='number-pad' />
            <View style={styles.buttonsContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e0322',
        marginHorizontal: 15,
        borderRadius: 5,
        elevation: 15,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 6 },
        marginTop:150,

    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    textInputContainer:{
        height:50,
        width:50,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 32,
        color: '#ffffff',
        alignItems: 'center'
    },
    buttonContainer:{
        flex:1,
    }    
})

export default StartGameScreen;