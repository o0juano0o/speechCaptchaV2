import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import firebase from '../firebase/config';
import {useRecoilState} from 'recoil';
import {userLogged} from '../recoil/userLogged';
import {newScore} from '../recoil/newScore';

const image = require('../assets/graphy1.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

export default function ResultScreen({navigation}) {
  const [user, setUser] = useRecoilState(userLogged);
  const [score, setScore] = useRecoilState(newScore);

  useEffect(() => {
    const current = firebase.auth.currentUser;
    if (current !== null) {
      const {uid} = firebase.auth.currentUser;
      firestore()
        .collection('users')
        .doc(uid)
        .get()
        .then(userInfo => {
          setUser({
            uid: uid,
            username: userInfo._data.username,
            email: userInfo._data.email,
            isArtist: userInfo._data.isArtist,
            score: userInfo._data.score,
          });
        });
    }
    console.log('APPCONTAINER', user);
  }, [score]);
  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        {/* ----------------MENU------------------------ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('BlueUser')}
          style={styles.menu}>
          <Image source={menu} />
        </TouchableOpacity>
        {/* -------------------------------------------- */}
        <Text style={styles.titulo}>Felicitaciones!</Text>
        <View style={styles.shadow}>
          <View style={styles.circleBig}>
            <View style={styles.circleSmall}>
              <Text style={styles.points}>{score}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sumaste}>Sumaste</Text>
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
  sumaste: {
    color: '#21a1fc',
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.65,
    marginBottom: '10%',
  },
  points: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#2ec4b6',
    right: '2%',
  },
  titulo: {
    color: '#5b5d68',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 35,
    marginTop: '20%',
    marginBottom: '20%',
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
  image: {
    position: 'relative',
    left: '10%',
    top: '3%',
  },
  //REPRODUCIENDO
  shadow: {
    marginTop: '7%',
    marginBottom: '3%',
    width: 190,
    height: 190,
    backgroundColor: '#BDEFEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 105,
  },
  circleBig: {
    width: 170,
    height: 170,
    backgroundColor: '#2ec4b6',
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
  pause: {
    width: 40,
    height: 40,
  },
});
