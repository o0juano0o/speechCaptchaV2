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

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const image = require('../assets/graphy1.png');
const pauseIcon = require('../assets/pause.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

export default function TranscriptionScreen({navigation}) {
  const [value, setValue] = React.useState('');

  const handleChange = text => {
    setValue(text);
    console.log('valueee', value);
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        {/* ----------------MENU------------------------ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('BlueUser')}
          style={styles.menu}>
          <Image source={menu} />
        </TouchableOpacity>
        {/* -------------------------------------------- */}

        <Text style={styles.titulo}>Presta atención al sonido</Text>
        <View style={styles.shadow}>
          <View style={styles.circleBig}>
            <View style={styles.circleSmall}>
              <Image source={pauseIcon} style={styles.pause}></Image>
            </View>
          </View>
        </View>
        <Text style={styles.escuchaste}>Qué escuchaste?</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={10}
          onChangeText={text => handleChange(text)}
          placeholder="Escribe aquí lo que escuchaste"
        />
        <TouchableOpacity
          style={styles.enviar}
          onPress={() => navigation.navigate('Result')}>
          <Text style={styles.enviarText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    justifyContent: 'center',
    alignItems: 'center',
    /* backgroundColor: 'white', */
  },
  input: {
    backgroundColor: '#eee',
    width: '90%',
    height: '34%',
    borderRadius: 20,
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    marginBottom: '4%',
  },
  enviar: {
    width: '60%',
    height: '8%',
    padding: 5,
    borderRadius: 25,
    backgroundColor: '#27A2FC',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0%',
  },
  enviarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  escuchaste: {
    color: '#21a1fc',
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.65,
    marginBottom: '10%',
  },
  titulo: {
    color: '#5b5d68',
    opacity: 0.8,
    fontSize: 23,
    marginTop: '15%',
    fontWeight: 'bold',
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
  //REPRODUCIENDO
  shadow: {
    marginTop: '20%',
    marginBottom: '3%',
    width: 150,
    height: 150,
    backgroundColor: '#BCE3FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 105,
  },
  circleBig: {
    width: 130,
    height: 130,
    backgroundColor: '#27A2FC',
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 100,
    height: 100,
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
