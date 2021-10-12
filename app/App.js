import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PodcastScreen from './screens/PodcastScreen';
import SelectionScreen from './screens/SelectionScreen';
import UploadPodcastScreen from './screens/UploadPodcastScreen';
import ValidationScreen from './screens/ValidationScreen';
import TranscriptionScreen from './screens/TranscriptionScreen';
import CircleComponent from './screens/CircleComponent';
import RegisterScreen from './screens/RegisterScreen';
import ResultScreen from './screens/ResultScreen';
import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import BlueUserScreen from './screens/BlueUserScreen';
import BlueArtistScreen from './screens/BlueArtistScreen';
import PresentationScreen from './screens/PresentationScreen';
import ProfileUserScreen from './screens/ProfileUserScreen';
import ProfileArtistScreen from './screens/ProfileArtistScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Podcast" component={PodcastScreen} />
        <Stack.Screen name="Upload" component={UploadPodcastScreen} />
        <Stack.Screen name="Validation" component={ValidationScreen} />
        <Stack.Screen name="Transcription" component={TranscriptionScreen} />
        <Stack.Screen name="Circle" component={CircleComponent} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="BlueUser" component={BlueUserScreen} />
        <Stack.Screen name="BlueArtist" component={BlueArtistScreen} />
        <Stack.Screen name="Presentation" component={PresentationScreen} />
        <Stack.Screen name="ProfileUser" component={ProfileUserScreen} />
        <Stack.Screen name="ProfileArtist" component={ProfileArtistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'dodgerblue',
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
