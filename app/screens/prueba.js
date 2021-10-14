import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
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

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import firebase from '../firebase/config';

const icon = require('../assets/icon.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

// RECOIL
import {userLogged} from '../recoil/userLogged';

const Login = ({navigation}) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useRecoilState(userLogged);

  const handleChangeText = (name, value) => {
    setInput({...input, [name]: value});
  };

  const handleLoggin = () => {
    const {email, password} = input;
    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const {uid} = firebase.auth.currentUser;
        setUser({uid: uid});
        Alert.alert('User logged in successfully');
        navigation.navigate('Podcast');
      })
      .catch(error => {
        Alert.alert('No se pudo iniciar sesion');
      });
    setInput({
      email: '',
      password: '',
    });
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        {/* <Image source={menu} style={styles.menu} /> */}
        {/* ----------------MENU------------------------ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('BlueUser')}
          style={styles.menu}>
          <Image source={menu} />
        </TouchableOpacity>
        {/* -------------------------------------------- */}
        <Text style={styles.titulo}>Bienvenido de vuelta!</Text>
        <View style={styles.caja}>
          <View style={styles.title}>
            <Text style={styles.text}>Ingresá tus datos</Text>
          </View>
          <View style={styles.cajaInputs}>
            <Text style={{color: 'grey'}}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChangeText('email', value)}
              value={input.email}
            />
            <Text style={{color: 'grey'}}>Contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={value => handleChangeText('password', value)}
              value={input.password}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => handleLoggin()}>
              <Text style={styles.touchText}>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => console.log(user)}>
              <Text style={styles.touchText}>ver estado</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};