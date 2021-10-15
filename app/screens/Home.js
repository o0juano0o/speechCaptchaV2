import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Link } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import {isArtist} from '../recoil/isArtist';

const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

const Home = ({ navigation }) => {
  const [artist, setArtist] = useRecoilState(isArtist)
  const [user, setUser] = useRecoilState(userLogged);


  const handleClick = (bool) => {
    setArtist(bool)
    navigation.navigate('Register')
  }

  const handleClick1 = () => {
    user.isArtist?navigation.navigate('BlueArtist'):navigation.navigate('BlueUser')
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      {/* ----------------MENU------------------------ */}
      <TouchableOpacity
        onPress={() => handleClick1()}
        style={styles.menu}>
        <Image source={menu} />
      </TouchableOpacity>
      {/* -------------------------------------------- */}
      <Text style={styles.titulo}>Creá tu cuenta</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => handleClick(true)}>
          <Text style={styles.text1}>REGISTRATE COMO ARTISTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => handleClick(false) }>
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
    left: '5%',
    top: '2%',
  },
  menu: {
    position: 'absolute',
    right: '5%',
    top: '2%',
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
