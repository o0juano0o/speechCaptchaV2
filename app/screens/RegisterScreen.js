import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import firebase from '../firebase/config';
import {validateEmail, validatePassword} from '../utils/validations';

const icon = require('../assets/icon.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

const Register = ({navigation}) => {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
  });

  const handleChangeText = (name, value) => {
    setInput({...input, [name]: value});
  };

  const handlePrueba = () => {
    const {username, email, password} = input;
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        return firebase.db
          .collection('users')
          .doc(cred.user.uid)
          .set({
            email: email,
            usename: username,
            isArtist: false,
          })
          .then(cred => {
            Alert.alert('Usuario registrado exitosamente', cred);
          });
      })
      .catch(error => {
        Alert.alert('Registro incorrecto');
        console.log('error=========>', error);
      });
  };

  const handlePersist = () => {
    const user = firebase.auth.currentUser;
    console.log('user==========>', user.email);
  };
  const handleSalir = () => {
    firebase.auth.signOut().then(() => console.log('User signed out!'));
  };
  const handleIn = () => {
    console.log('inputs====>', input);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={menu} style={styles.menu} />
      {/* --------------------FORMULARIO-------------------------- */}
      <View style={styles.caja}>
        <View style={styles.title}>
          <Text style={styles.text}>Ingresá tus datos</Text>
        </View>
        <View style={styles.cajaInputs}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleChangeText('email', value)}
            // onBlur={() => onBlurValidateEmail(input.email)}
          />
        </View>
        <View style={styles.cajaInputs}>
          <Text style={styles.inputTitle}>Username</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={value => handleChangeText('username', value)}
          />
        </View>
        <View style={styles.cajaInputs}>
          <Text style={styles.inputTitle}>Contraseña</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={value => handleChangeText('password', value)}
            // onBlur={e => {
            //   onBlurValidatePassword(input.password);
            // }}
          />
        </View>
        <View style={styles.cajaInputs}>
          <Text style={styles.inputTitle}>Repetir contraseña</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={value => handleChangeText('password2', value)}
            // onBlur={e => {
            //   onBlurValidatePassword2(input.password2);
            // }}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.touchText}>Continuar</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.touch} onPress={() => handlePrueba()}>
          <Text style={styles.touchText}>Prueba</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => handlePersist()}>
          <Text style={styles.touchText}>handlePersist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => handleSalir()}>
          <Text style={styles.touchText}>salir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={() => handleIn()}>
          <Text style={styles.touchText}>INPUTS</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 5,
    borderRadius: 6,
    marginBottom: 23,
  },
  inputTitle: {
    color: 'grey',
  },
  title: {
    flex: 1,
    marginTop: 25,
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
    marginTop: 25,
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
    marginBottom: 40,
    marginLeft: 55,
    marginRight: 55,
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
  caja: {flex: 1, backgroundColor: '#EBF7FF', marginTop: 220},
  cajaInputs: {flex: 1, marginLeft: 40, marginRight: 40},
});

export default Register;
