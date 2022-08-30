import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import StartGameScreen from './assets/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#792843','#8d8d11']} style={styles.container}>
      <ImageBackground source={require('./assets/images/Dice1.jpg')} resizeMode="cover" style={styles.container} imageStyle={styles.imageBackgroud} >
      <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgroud:{
    opacity:0.2,
  }
});
