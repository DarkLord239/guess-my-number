import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import Title from "../../components/Title";
import NumberContainer from "../../components/NumberContainer";
import PrimaryButton from '../../components/PrimaryButton';
import GameOverScreen from "./GameOverScreen";
import Colors from "../../constants/colors";
import Card from "../../constants/Card";

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

function GameScreen({ inputNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, inputNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess == inputNumber) {
            onGameOver();
        }
    }, [currentGuess, inputNumber, onGameOver])

    function nextNumHandler(direction) {
        if ((direction === 'Lower' && currentGuess < inputNumber) || (direction === 'Greater' && currentGuess > inputNumber)) {
            Alert.alert('You are a liar !', 'You already know the number.');
            return;
        }

        if (direction === 'Lower') {
            max = currentGuess;
        } else {
            min = currentGuess + 1;
        }

        const newRndNum = generateRandomBetween(min, max, currentGuess);

        setCurrentGuess(newRndNum);
    };

    return (
        <View style={styles.screen} >
            <Title>Opponent's Guess</Title>
            <Card>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Text>Lower or Greater?</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton style={styles.innerButton} onPressing={nextNumHandler.bind(this, 'Lower')} >Lower</PrimaryButton>
                    <PrimaryButton onPressing={nextNumHandler.bind(this, 'Greater')} >Higher</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    },
    innerButton: {
        backgroundColor: Colors.primary1
    }
})

export default GameScreen;