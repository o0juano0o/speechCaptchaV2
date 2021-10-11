import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
//import SelectPodcast from './SelectPodcast';
const icon = require('../assets/icon.png');
const Home = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.vcApp}>
        <Text style={styles.vc}>VC </Text>
        <Text>App</Text>
        <Image source={icon} style={styles.topIcon} />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Creá tu cuenta</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.touchText}>REGISTRATE COMO ARTISTA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.touch1}>
          <Text style={styles.touchText1}>REGISTRATE COMO VOICER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkBack}>
        <Text>Iniciá sesion</Text>
        <Text style={styles.link}> acá</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topIcon: {marginLeft: 220},
  vc: {
    color: '#21A1FC',
  },
  vcApp: {
    position: 'absolute',
    padding: 40,
    flex: 1,
    flexDirection: 'row',
  },
  conteiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'gray',
    fontWeight: 'bold',
  },
  touch: {
    backgroundColor: '#21A1FC',
    borderRadius: 20,
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  touchText: {color: '#fff', textAlign: 'center'},
  touch1: {
    backgroundColor: '#BCE3FD',
    borderRadius: 20,
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  touchText1: {color: '#000000', textAlign: 'center'},
  button: {
    margin: 5,
    justifyContent: 'center',
  },
  linkBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default Home;
