import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert, FlatList, useWindowDimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';

import Title from "../../components/Title";
import NumberContainer from "../../components/NumberContainer";
import PrimaryButton from '../../components/PrimaryButton';
import GameOverScreen from "./GameOverScreen";
import GuessLogItem from "../../components/GuessLogItem";
import Colors from "../../constants/colors";
import Card from "../../constants/Card";
import CardTitle from "../../components/CardTitle";


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
    const [guessedRounds, setGuessedRounds] = useState([initialGuess]);

    const { height, width } = useWindowDimensions();

    const guessedRoundsLogLength = guessedRounds.length;

    useEffect(() => {
        if (currentGuess == inputNumber) {
            onGameOver(guessedRounds.length);
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
        setGuessedRounds((prevGuess) => [...prevGuess, newRndNum]);
    };

    let content = (
        <>
        <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <CardTitle>Lower or Greater?</CardTitle>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressing={nextNumHandler.bind(this, 'Lower')} >
                            <Entypo name="minus" size={24} color={Colors.primary2} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressing={nextNumHandler.bind(this, 'Greater')} >
                            <Entypo name="plus" size={24} color={Colors.primary2} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width>450) {
        content = (
            <>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressing={nextNumHandler.bind(this, 'Lower')} >
                            <Entypo name="minus" size={24} color={Colors.primary2} />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressing={nextNumHandler.bind(this, 'Greater')} >
                            <Entypo name="plus" size={24} color={Colors.primary2} />
                        </PrimaryButton>
                    </View>
                </View>
        </>
        )
    }

    return (
        <View style={styles.screen} >
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessedRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={(guessedRoundsLogLength - itemData.index)} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                    showsVerticalScrollIndicator={true}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        justifyContent: 'center',
        flex: 1,
    }
})

export default GameScreen;