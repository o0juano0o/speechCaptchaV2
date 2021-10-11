import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const image = require('../assets/graphy1.png');
const pauseIcon = require('../assets/pause.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
const aceptar = require('../assets/aceptar.png');
const cancelar = require('../assets/cancelar.png');

export default function ValidationScreen({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Image source={menu} style={styles.menu} />
        <View style={styles.shadow}>
          <View style={styles.circleBig}>
            <View style={styles.circleSmall}>
              <Image source={pauseIcon} style={styles.pause}></Image>
            </View>
          </View>
        </View>
        <Text style={styles.reproduciendo}>Reproduciendoooo</Text>
        <Text style={styles.traduccion}>Hoy comí una manzana de desayuno</Text>
        <Text style={styles.coincide}>Coincide cada palabra?</Text>
        <View style={styles.buttons}>
          <TouchableOpacity title="NO">
            <Image source={cancelar} style={styles.btn} />
          </TouchableOpacity>
          <TouchableOpacity title="NO">
            <Image source={aceptar} style={styles.btn} />
          </TouchableOpacity>
        </View>
        <Image source={image} style={styles.image}></Image>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  reproduciendo: {
    color: '#21a1fc',
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.65,
    marginBottom: 35,
  },
  traduccion: {
    color: '#5b5d68',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 70,
  },
  coincide: {
    color: '#5b5d68',
    opacity: 0.8,
    fontSize: 23,
  },
  image: {
    position: 'relative',
    top: '4%',
    left: '10%',
  },
  buttons: {
    position: 'absolute',
    top: '77%',
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
  },
  logo: {
    position: 'absolute',
    width: 60,
    height: 20,
    left: 10,
    top: 15,
  },
  menu: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  btn: {
    width: 100,
    height: 100,
  },
  //REPRODUCIENDO
  shadow: {
    marginTop: '20%',
    width: 140,
    height: 140,
    backgroundColor: '#BCE3FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 105,
  },
  circleBig: {
    width: 120,
    height: 120,
    backgroundColor: '#27A2FC',
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 90,
    height: 90,
    backgroundColor: '#ffff',
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pause: {
    width: 44,
    height: 44,
  },
});
