import { useState,useCallback } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './assets/screens/StartGameScreen';
import GameScreen from './assets/screens/GameScreen';
import GameOverScreen from './assets/screens/GameOverScreen'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [inputNumber, setInputNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  };

  function pickedNumberHandler(pickedNumber) {
    setInputNumber(pickedNumber)
  }
  function gameOverHandler() {
    setGameOver(true);
  }

  let screen = <StartGameScreen onConfirm={pickedNumberHandler} />
  if (inputNumber) {
    screen = <GameScreen inputNumber={inputNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient colors={[Colors.primary5, Colors.primary6]} style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={require('./assets/images/Dice1.jpg')} resizeMode="cover" style={styles.container} imageStyle={styles.imageBackgroud} >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgroud: {
    opacity: 0.2,
  }
});