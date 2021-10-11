import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PodcastScreen from './screens/PodcastScreen';
import SelectionScreen from './screens/SelectionScreen';
import UploadPodcastScreen from './screens/UploadPodcastScreen';
import ValidationScreen from './screens/ValidationScreen';
import CircleComponent from './screens/CircleComponent';
import RegisterScreen from './screens/RegisterScreen';
import Home from './screens/Logeo';

const App = () => {
  const handleClick = () => {
    functions()
      .httpsCallable('getUsers')()
      .then(response => {
        console.log(response.data[0].data.name);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Podcast" component={PodcastScreen} />
        <Stack.Screen name="Upload" component={UploadPodcastScreen} />
        <Stack.Screen name="Validation" component={ValidationScreen} />
        <Stack.Screen name="Circle" component={CircleComponent} />
        <Stack.Screen name="Register" component={RegisterScreen} />
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
