import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0);

const [fontsLoaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
})

if (!fontsLoaded) {
  return <AppLoading />
}

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false); //set gameIsOver when the game starts
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  } 
  
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.primary800 ,Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/dice.jpg')}
        resizeMode='cover' 
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
        {/*makes sure that all the available space besides the safearea is available for {screen} */}
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
          
        </ImageBackground>
      </LinearGradient>
    </>

    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // take up as much space as possible or else it only takes the space of the view
  },
  backgroundImage: {
    opacity: 0.15,
  }
})