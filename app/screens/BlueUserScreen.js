import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

export default function profileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.vc}>VC</Text> App
      </Text>
      <Image source={menu} style={styles.menu} />
      <View style={styles.container1}>
        <TouchableOpacity>
          <Text style={styles.desafios}>Desafíos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileUser')}>
          <Text style={styles.perfil}>Mi perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
    left: '5%',
    top: '1%',
    color: 'white',
    fontSize: 20,
  },
  vc: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    right: '5%',
    top: '1%',
    backgroundColor: '#27A2FC',
    tintColor:'white'
  },
  container1: {
    backgroundColor: '#27A2FC',
    marginTop: '-25%',
    height: '50%',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  desafios: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '4%',
    color: 'white',
  },
  perfil: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  sesion: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: '70%',
    color: 'white',
  },
});
