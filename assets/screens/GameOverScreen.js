import { Text, Image, View, StyleSheet , useWindowDimensions } from "react-native";

import Title from "../../components/Title";
import Colors from "../../constants/colors";
import PrimaryButton from '../../components/PrimaryButton';

function GameOverScreen({onStartAgain,numRounds,initialNum}) {
    const {width,height} = useWindowDimensions();
    let imageSize = 300;
    let marginTopImage = 20;

    if(width>450){
        imageSize = 100;
        marginTopImage = 0;
    };
    
    const imageLayout = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2,
    }
    const imageContainer = {
        marginTop: marginTopImage,
    }

    return (
        <View style={styles.container} >
            <Title>Game Over!!!</Title>
            <View style={imageContainer}>
                <Image source={require('../images/GameOver.jpg')} style={[styles.imageStyle ,imageLayout]} />
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
        alignItems: 'center',
    },
    imageStyle: {
        //width: 300,
       // height: 300,
       // borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary1
    },
    textContainer: {
        paddingTop: 15,
        padding:10,
    },
    textStyle: {
        fontFamily: 'roboto-regular',
        fontSize: 25,
        textAlign: 'center',
    }

})

export default GameOverScreen;