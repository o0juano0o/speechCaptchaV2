import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useRecoilState} from 'recoil';
import { userLogged } from '../recoil/userLogged';
import {isArtist} from '../recoil/isArtist';

const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
const image = require('../assets/graphy1.png');

export default function profileScreen({navigation}) {
  const [user, setUser] = useRecoilState(userLogged);
  const [artist, setArtist] = useRecoilState(isArtist)
  
  const handleClick = () => {
    user.isArtist?navigation.navigate('BlueArtist'):navigation.navigate('BlueUser')
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      {/* ----------------MENU------------------------ */}
      <TouchableOpacity
        onPress={() => handleClick()}
        style={styles.menu}>
        <Image source={menu} />
      </TouchableOpacity>
      {/* -------------------------------------------- */}
      <View style={styles.container1}>
        <Text style={styles.title}>Tus datos</Text>
        <Text style={styles.text}>User name: {user.username}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Tus puntos acumulados</Text>
        <View style={styles.shadow}>
          <View style={styles.circleBig}>
            <View style={styles.circleSmall}>
              <Text style={styles.points}>{user.score}</Text>
            </View>
          </View>
        </View>
        <Image source={image} style={styles.image}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  container1: {
    backgroundColor: 'white',
    marginTop: '-105%',
    height: '20%',
    width: '80%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '5%',
    fontWeight: 'bold',
    color: '#5b5d68',
  },
  text: {
    fontSize: 20,
    marginBottom: '5%',
    color: '#5b5d68',
  },
  container2: {
    backgroundColor: 'white',
    marginBottom: '-105%',
    height: '60%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    marginTop: '5%',
    width: '63%',
    height: '45%',
    backgroundColor: '#BCE3FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 125,
  },
  circleBig: {
    width: '90%',
    height: '90%',
    backgroundColor: '#27A2FC',
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: '70%',
    height: '70%',
    backgroundColor: '#ffff',
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#27A2FC',
  },
  image: {
    position: 'relative',
    left: '16%',
    marginBottom: '-47%',
  },
});
