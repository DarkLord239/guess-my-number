import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import Title from "../../components/Title";
import NumberContainer from "../../components/NumberContainer";
import PrimaryButton from '../../components/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}
let min = 1;
let max = 100;

function GameScreen({ inputNumber }) {
    const initialGuess = generateRandomBetween(min, max, inputNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextNumHandler(direction) {
        if ((direction === 'Lower' && currentGuess < inputNumber) || (direction === 'Higher' && currentGuess > inputNumber)) {
            Alert.alert('You are a liar !', 'You already know the number.');
            return;
        }

        if (direction === 'Lower') {
            max = currentGuess;
        } else {
            min = currentGuess + 1;
        }
        
        const newRndNum = generateRandomBetween(min,max,currentGuess);

        setCurrentGuess(newRndNum);
    };

    return (
        <View style={styles.screen} >
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPressing={nextNumHandler.bind(this, 'Lower')} >Lower</PrimaryButton>
                <PrimaryButton onPressing={nextNumHandler.bind(this, 'Higher')} >Higher</PrimaryButton>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 150,
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})

export default GameScreen;