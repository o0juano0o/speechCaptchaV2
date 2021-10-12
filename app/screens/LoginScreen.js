import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const icon = require('../assets/icon.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={menu} style={styles.menu} />
      <Text style={styles.titulo}>Bienvenido de vuelta!</Text>
      <View style={styles.caja}>
        <View style={styles.title}>
          <Text style={styles.text}>Ingresá tus datos</Text>
        </View>
        <View style={styles.cajaInputs}>
          <Text style={{color: 'grey'}}>Email</Text>
          <TextInput style={styles.input} />
          <Text style={{color: 'grey'}}>Contraseña</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate('Podcast')}>
            <Text style={styles.touchText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 25,
    marginTop: '20%',
    marginBottom: '20%',
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 6,
  },
  title: {
    flex: 1,
    marginTop: '10%',
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
  touchText: {
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    margin: 5,
    marginBottom: 40,
    width: '60%',
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
  caja: {
    flex: 1,
    backgroundColor: '#EBF7FF',
    marginTop: '30%',
    alignItems: 'center',
  },
  cajaInputs: {
    flex: 1,
    width: '80%',
    marginBottom: '30%',
  },
});

export default Login;