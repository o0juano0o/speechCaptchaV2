import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import firebase from '../firebase/config';

const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

export default function profileScreen({ navigation }) {
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
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.menu} onPress={() => navigation.goBack()}>
        <Text style={styles.menu}>X</Text>
      </TouchableOpacity>
     
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
          <Text style={styles.desafios}>Mis podcasts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileArtist')}>
          <Text style={styles.perfil}>Mi perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSalir()}>
          <Text style={styles.sesion}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27A2FC',
  },
  logo: {
    position: 'absolute',
    width: 60,
    height: 20,
    left: '5%',
    top: '2%',
    tintColor:'white'
  },
  menu: {
    color: 'white',
    position: 'absolute',
    right: '5%',
    top: '2%',
    fontSize: 20,
  },
  container1: {
    backgroundColor: '#27A2FC',
    marginTop: '-25%',
    height: '50%',
    width: '80%',
  },
  desafios: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '4%',
    color: 'white',
    fontWeight: 'bold',
  },
  perfil: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  sesion: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: '70%',
    color: 'white',
    fontWeight: 'bold',
  },
});
