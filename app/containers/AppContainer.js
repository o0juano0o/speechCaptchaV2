import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useRecoilState} from 'recoil';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PodcastScreen from '../screens/PodcastScreen';
import SelectionScreen from '../screens/SelectionScreen';
import UploadPodcastScreen from '../screens/UploadPodcastScreen';
import ValidationScreen from '../screens/ValidationScreen';
import TranscriptionScreen from '../screens/TranscriptionScreen';
import CircleComponent from '../screens/CircleComponent';
import RegisterScreen from '../screens/RegisterScreen';
import ResultScreen from '../screens/ResultScreen';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home';
import BlueUserScreen from '../screens/BlueUserScreen';
import BlueArtistScreen from '../screens/BlueArtistScreen';
import PresentationScreen from '../screens/PresentationScreen';
import ProfileUserScreen from '../screens/ProfileUserScreen';
import ProfileArtistScreen from '../screens/ProfileArtistScreen';
import TotalPoints from '../screens/TotalPoints';

import firebase from '../firebase/config';
import {userLogged} from '../recoil/userLogged';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useRecoilState(userLogged);

  useEffect(() => {
    const current = firebase.auth.currentUser;
    if (current !== null) {
      const {uid} = firebase.auth.currentUser;
      setUser({uid: uid});
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
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
        <Stack.Screen name="TotalPoints" component={TotalPoints} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
