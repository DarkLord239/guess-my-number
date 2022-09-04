import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Title from '../../components/Title';
import Colors from '../../constants/colors';
import Card from '../../constants/Card';
import CardTitle from '../../components/CardTitle';

const StartGameScreen = ({ onConfirm }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmNumberHandler() {
        const number = parseInt(enteredNumber)
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert("Invalid Number!",
                "Number has to be a number between 1 and 99.",
                [
                    {
                        text: "Cancel",
                        onPress: () => resetInputHandler(),
                        style: "cancel",
                    },
                ],
            )
            return;
        }
        onConfirm(number);
    }
    return (
        <View>
            <Title style={styles.textTitle}>Guess My Number</Title>
            <Card>
                <CardTitle>Enter a number</CardTitle>
                <TextInput
                    style={styles.textInputContainer}
                    maxLength={2}
                    keyboardType='number-pad'
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressing={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressing={confirmNumberHandler}>Confirm</PrimaryButton>
                    </View>


                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
    },
    textInputContainer: {
        height: 50,
        width: 50,
        borderBottomColor: Colors.primary4,
        borderBottomWidth: 2,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 32,
        color: Colors.primary2,
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
    },
})

export default StartGameScreen;