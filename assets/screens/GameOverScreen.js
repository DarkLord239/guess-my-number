import { Text, Image, View, StyleSheet } from "react-native";
import Title from "../../components/Title";
import Colors from "../../constants/colors";
import PrimaryButton from '../../components/PrimaryButton';

function GameOverScreen({onStartAgain,numRounds,initialNum}) {
    return (
        <View style={styles.container} >
            <Title>Game Over!!!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../images/GameOver.jpg')} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>
                    Your phone needed
                    <Text> {numRounds} </Text>
                    rounds to guess the number<Text> {initialNum}</Text>.
                </Text>
            </View>
            <View >
                <PrimaryButton onPressing={onStartAgain}>Start new game</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
       padding:15,
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 20,
    },
    imageStyle: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary1
    },
    textContainer: {
        paddingTop: 15,
    },
    textStyle: {
        fontFamily: 'roboto-regular',
        fontSize: 25,
        textAlign: 'center',
    }

})

export default GameOverScreen;