import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Title from "../../components/Title";
import NumberContainer from "../../components/NumberContainer";

function generateRandomBetween(min,max,exclude)
{
    const rndNum = Math.floor(Math.random() * (max-min)) + min ;

    if(rndNum===exclude){
        return generateRandomBetween(min,max,exclude);
    }
    else {
        return rndNum;
    }
}
function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1,100,userNumber) 
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    return (
        <View style={styles.screen} >
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems:'center',
        marginTop:150,
    }
})

export default GameScreen;