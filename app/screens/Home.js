import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Link} from '@react-navigation/native';

const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

const Home = ({navigation}) => {
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
      <Text style={styles.titulo}>Creá tu cuenta</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text1}>REGISTRATE COMO ARTISTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text2}>REGISTRATE COMO VOICER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logging}>
        <Text style={styles.loginText}>Iniciá sesion</Text>
        <Link style={styles.link} to={{screen: 'Login'}}>
          acá
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
  titulo: {
    color: '#5b5d68',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginTop: '35%',
    marginBottom: '50%',
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
  },
  btn1: {
    alignItems: 'center',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#21A1FC',
  },
  btn2: {
    alignItems: 'center',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#BCE3FD',
    marginTop: '3%',
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    fontWeight: 'bold',
  },
  logging: {
    marginTop: '35%',
    flex: 1,
    flexDirection: 'row',
  },
  loginText: {
    marginRight: 3,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default Home;
