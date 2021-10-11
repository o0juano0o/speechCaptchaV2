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
/* import SelectPodcast from "./SelectPodcast"; */

const icon = require('../assets/icon.png');

const Register = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.vcApp}>
        <Text style={styles.vc}>VC </Text>
        <Text>App</Text>
        <Image source={icon} style={styles.topIcon} />
      </View>
      {/* --------------------FORMULARIO-------------------------- */}
      <View style={styles.caja}>
        <View style={styles.title}>
          <Text style={styles.text}>Ingresá tus datos</Text>
        </View>
        <View style={styles.cajaInputs}>
          <Text style={{color: 'grey'}}>Email</Text>
          <TextInput /* value={text} */ placeholder="Email" />
        </View>
        <View style={styles.cajaInputs}>
          <Text style={{color: 'grey'}}>Contraseña</Text>
          <TextInput
            /* value={text} */ placeholder="Contraseña"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.cajaInputs}>
          <Text style={{color: 'grey'}}>Repetir contraseña</Text>
          <TextInput
            /* value={text} */ placeholder="Repetir contraseña"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.touchText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ------------------------------------------------------------- */}
    </View>
  );
};

const styles = StyleSheet.create({
  topIcon: {marginLeft: 220},
  vc: {
    color: '#21A1FC',
  },
  vcApp: {
    position: 'absolute',
    padding: 40,
    flex: 1,
    flexDirection: 'row',
  },
  conteiner: {
    flex: 1,
    backgroundColor: 'white',
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
  caja: {flex: 1, backgroundColor: '#F5FBFF', marginTop: 250},
  cajaInputs: {flex: 1, marginLeft: 40, marginRight: 40},
});

export default Register;
