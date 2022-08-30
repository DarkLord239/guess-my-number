import { View, StyleSheet, Text } from "react-native";
import Title from "../../components/Title";

function GameScreen() {
    return (
        <View style={styles.screen} >
            <Title>Opponent's Guess</Title>
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