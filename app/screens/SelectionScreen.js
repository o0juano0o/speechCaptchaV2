import React from 'react';
import {useRecoilState} from 'recoil';
import {StyleSheet, Text, View, Button} from 'react-native';

import firebase from '../firebase/config';
import {userLogged} from '../recoil/userLogged';

export default function SelectionScreen({navigation}) {
  const [user, setUser] = useRecoilState(userLogged);

  const handleSalir = () => {
    firebase.auth
      .signOut()
      .then(() => {
        setUser({});
        console.log('User signed out!');
      })
      .catch(error => console.log('error de cerrar sesion'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}></Button>
      <Button
        title="Go to PodcastScreen"
        onPress={() => navigation.navigate('Podcast')}></Button>
      <Button
        title="Go to UploadScreen"
        onPress={() => navigation.navigate('Upload')}></Button>
      <Button
        title="Go to Validation"
        onPress={() => navigation.navigate('Validation')}></Button>
      {/* <Button
        title="Go to CircleComponent"
        onPress={() => navigation.navigate('Circle')}></Button> */}
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}></Button>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}></Button>
      <Button
        title="Go to Presentation"
        onPress={() => navigation.navigate('Presentation')}></Button>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}></Button>
      <Button title="Cerrar sesion" onPress={() => handleSalir()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
