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
import {validateEmail, validatePassword} from '../utils/validations';
import {isArtist} from '../recoil/isArtist';

// ASSETS
const icon = require('../assets/icon.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

// RECOIL
import {userLogged} from '../recoil/userLogged';

const Register = ({navigation}) => {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
  });
  const [user, setUser] = useRecoilState(userLogged);
  const [artist, setArtist] = useRecoilState(isArtist);

  const handleChangeText = (name, value) => {
    setInput({...input, [name]: value});
  };

  const handleRegister = () => {
    const {username, email, password} = input;
    if (username && email && password) {
      firebase.auth
        .createUserWithEmailAndPassword(email, password)
        .then(cred => {
          return firebase.db
            .collection('users')
            .doc(cred.user.uid)
            .set({
              email: email,
              username: username,
              score: 0,
              isArtist: artist,
            })
            .then(cred => {
              Alert.alert('Usuario registrado exitosamente');
              const {email, uid} = firebase.auth.currentUser;
              setUser({email: email, uid: uid});
              artist === true
                ? navigation.navigate('Upload')
                : navigation.navigate('Podcast');
            });
        })
        .catch(error => {
          Alert.alert('Registro incorrecto');
          console.log('Register error =====>', error);
        });
      setInput({
        email: '',
        username: '',
        password: '',
        password2: '',
      });
    } else {
      Alert.alert('Por favor rellene los campos');
    }
  };

  const handleClick = () => {
    artist?navigation.navigate('BlueArtist'):navigation.navigate('BlueUser')
  }

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        {/* <Image source={menu} style={styles.menu} /> */}
        {/* ----------------MENU------------------------ */}
        <TouchableOpacity
          onPress={() => handleClick()}
          style={styles.menu}>
          <Image source={menu} />
        </TouchableOpacity>
        {/* -------------------------------------------- */}
        {/* --------------------FORMULARIO-------------------------- */}
        <View style={styles.caja}>
          <View style={styles.title}>
            <Text style={styles.text}>Ingres?? tus datos</Text>
          </View>
          <View style={styles.cajaInputs}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChangeText('email', value)}
              value={input.email}
              // onBlur={() => onBlurValidateEmail(input.email)}
            />
          </View>
          <View style={styles.cajaInputs}>
            <Text style={styles.inputTitle}>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChangeText('username', value)}
              value={input.username}
            />
          </View>
          <View style={styles.cajaInputs}>
            <Text style={styles.inputTitle}>Contrase??a</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={value => handleChangeText('password', value)}
              value={input.password}
              // onBlur={e => {
              //   onBlurValidatePassword(input.password);
              // }}
            />
          </View>
          <View style={styles.cajaInputs}>
            <Text style={styles.inputTitle}>Repetir contrase??a</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={value => handleChangeText('password2', value)}
              value={input.password2}
              // onBlur={e => {
              //   onBlurValidatePassword2(input.password2);
              // }}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.touch}
              onPress={
                () => handleRegister() /* navigation.navigate('Login') */
              }>
              <Text style={styles.touchText}>Continuar</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.touch} onPress={() => handleIn()}>
          <Text style={styles.touchText}>recoil</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 5,
    borderRadius: 6,
    marginBottom: 11,
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
  caja: {
    flex: 1,
    backgroundColor: '#EBF7FF',
    marginTop: 233,
  },
  cajaInputs: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
  },
});

export default Register;
