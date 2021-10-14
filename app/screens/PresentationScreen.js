import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
} from 'react-native';
import { useRecoilValue } from 'recoil';
import {userLogged} from '../recoil/userLogged';

const image = require('../assets/vc.png');
const p5 = require('../assets/p5logo.png');
const itesa = require('../assets/itesalogo.png');


export default function PresentationScreen({ navigation }) {
  const user = useRecoilValue(userLogged)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos</Text>
      <Image source={p5} style={styles.p5}></Image>
      <Image source={itesa} style={styles.itesa}></Image>
      <Image
        source={image}
        style={styles.image}></Image>
      <TouchableOpacity style={styles.sesion} onPress={() => navigation.navigate(user.uid?'Podcast':'Register')}>
          <Text style={styles.text}>Empezar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    position:'absolute',
    width: '73%',
    height: '12%',
    borderRadius: 10,
    top:'20%',
    left:'15%'
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#27A2FC',
    marginTop: '8%',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  p5: {
    position:'absolute',
    width: '23%',
    height: '12%',
    borderRadius: 10,
    top:'50%',
    left:'20%'
  },
  itesa: {
    position:'absolute',
    width: '23%',
    height: '12%',
    borderRadius: 10,
    top:'50%',
    right:'20%'
  },
  sesion: {
    alignItems: 'center',
    top: "65%",
    borderColor: 'black',
    borderWidth: 1,
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#27A2FC',
    left:'30%'
  },
});
