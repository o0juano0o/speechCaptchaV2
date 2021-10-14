import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
const image = require('../assets/graphy1.png');

export default function profileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      {/* ----------------MENU------------------------ */}
      <TouchableOpacity
        onPress={() => navigation.navigate('BlueUser')}
        style={styles.menu}>
        <Image source={menu} />
      </TouchableOpacity>
      {/* -------------------------------------------- */}
      <View style={styles.container1}>
        <Text style={styles.title}>Tus datos</Text>
        <Text style={styles.text}>UserName:</Text>
        <Text style={styles.text}>Email:</Text>
        <Text style={styles.text}>Podcasts subidos:</Text>
      </View>
      <View style={styles.container2}>
        <Image source={image} style={styles.image}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    position: 'absolute',
    width: 60,
    height: 20,
    left: '5%',
    top: '2%',
  },
  menu: {
    position: 'absolute',
    right: '5%',
    top: '2%',
  },
  container1: {
    backgroundColor: 'white',
    marginTop: '-105%',
    height: '20%',
    width: '80%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '5%',
    fontWeight: 'bold',
    color: '#5b5d68',
  },
  text: {
    fontSize: 20,
    marginBottom: '5%',
    color: '#5b5d68',
  },
  container2: {
    marginBottom: '-105%',
    height: '60%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    position: 'relative',
    left: '16%',
    marginBottom: '-130%',
  },
});
