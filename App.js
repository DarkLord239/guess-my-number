import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './assets/screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
