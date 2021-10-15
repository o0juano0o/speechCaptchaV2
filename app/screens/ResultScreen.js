import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const image = require('../assets/graphy1.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
import {useRecoilState} from 'recoil';
import {isArtist} from '../recoil/isArtist';

export default function ResultScreen({ navigation }) {
  
  const [artist, setArtist] = useRecoilState(isArtist)

  const handleClick = () => {
    artist?navigation.navigate('BlueArtist'):navigation.navigate('BlueUser')
  }

  return (
    <>
      <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      {/* ----------------MENU------------------------ */}
      <TouchableOpacity
        onPress={() => handleClick()}
        style={styles.menu}>
        <Image source={menu} />
      </TouchableOpacity>
      {/* -------------------------------------------- */}
        <Text style={styles.titulo}>Felicitaciones!</Text>
        <View style={styles.shadow}>
          <View style={styles.circleBig}>
            <View style={styles.circleSmall}>
              <Text style={styles.points}>
                {Math.floor(Math.random() * (62 - 17)) + 17}
              </Text>
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
    right:'2%'
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
