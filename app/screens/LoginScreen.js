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
import firestore from '@react-native-firebase/firestore';

const icon = require('../assets/icon.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

// RECOIL
import {userLogged} from '../recoil/userLogged';
import {isArtist} from '../recoil/isArtist';

const Login = ({navigation}) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useRecoilState(userLogged);
  const [artist, setArtist] = useRecoilState(isArtist);

  const handleChangeText = (name, value) => {
    setInput({...input, [name]: value});
  };

  const handleLoggin = () => {
    const {email, password} = input;

    if (email && password) {
      firebase.auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          firestore()
            .collection('users')
            .doc(res.user.uid)
            .get()
            .then(userInfo => {
              setArtist(userInfo._data.isArtist);
              setUser({
                uid: res.user.uid,
                username: userInfo._data.username,
                email: userInfo._data.email,
                isArtist: userInfo._data.isArtist,
                score: userInfo._data.score,
              });

              Alert.alert('User logged in successfully');
              if (userInfo._data.isArtist) {
                navigation.navigate('Upload');
              } else {
                navigation.navigate('Podcast');
              }
            });
        })
        .catch(error => {
          Alert.alert('No se pudo iniciar sesion');
        });
    } else {
      Alert.alert('Por favor rellene los campos');
    }
  };

  const handleClick = () => {
    user.isArtist
      ? navigation.navigate('BlueArtist')
      : navigation.navigate('BlueUser');
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        {/* <Image source={menu} style={styles.menu} /> */}
        {/* ----------------MENU------------------------ */}
        <TouchableOpacity onPress={() => handleClick()} style={styles.menu}>
          <Image source={menu} />
        </TouchableOpacity>
        {/* -------------------------------------------- */}
        <Text style={styles.titulo}>Bienvenido de vuelta!</Text>
        <View style={styles.caja}>
          <View style={styles.title}>
            <Text style={styles.text}>Ingres?? tus datos</Text>
          </View>
          <View style={styles.cajaInputs}>
            <Text style={{color: 'grey'}}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChangeText('email', value)}
              value={input.email}
            />
            <Text style={{color: 'grey'}}>Contrase??a</Text>
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
            {/* <TouchableOpacity
              style={styles.touch}
              onPress={() => console.log(user)}>
              <Text style={styles.touchText}>ver estado</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
    fontSize: 25,
    marginTop: '20%',
    /*    marginBottom: '20%', */
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
    marginTop: '56.7%',
    alignItems: 'center',
  },
  cajaInputs: {
    flex: 1,
    width: '80%',
    marginTop: '10%',
    marginBottom: '10%',
  },
});

export default Login;
