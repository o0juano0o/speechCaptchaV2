import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
const image = require('../assets/graphy1.png');

export default function profileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.vc}>VC</Text> App
      </Text>
      <Image source={menu} style={styles.menu} />
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
    left: '5%',
    top: '1%',
    fontSize: 20,
    color: 'black',
  },
  vc: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27A2FC',
  },
  menu: {
    position: 'absolute',
    right: '5%',
    top: '1%',
    backgroundColor: 'white',
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
    color: 'black',
  },
  text: {
    fontSize: 20,
    marginBottom: '5%',
    color: 'black',
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
    marginBottom: '-117%',
  },
});
