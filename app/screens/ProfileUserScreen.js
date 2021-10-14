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
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Tus puntos acumulados</Text>
        <View style={styles.shadow}>
          <View style={styles.circleBig}>
            <View style={styles.circleSmall}>
              <Text style={styles.points}>
                {Math.floor(Math.random() * (62 - 17)) + 17}
              </Text>
            </View>
          </View>
        </View>
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
    backgroundColor: 'white',
    marginBottom: '-105%',
    height: '60%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    marginTop: '2%',
    width: 190,
    height: 190,
    backgroundColor: '#BCE3FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 105,
  },
  circleBig: {
    width: 170,
    height: 170,
    backgroundColor: '#27A2FC',
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 130,
    height: 130,
    backgroundColor: '#ffff',
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#27A2FC',
  },
  image: {
    position: 'relative',
    left: '16%',
    marginBottom: '-39%',
    top: '6%',
  },
});
