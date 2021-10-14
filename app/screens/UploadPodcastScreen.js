import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import * as firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import {getTranscription} from '../utils/transcription';
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
const image = require('../assets/graphy1.png');
const descarga = require('../assets/cloud-computing.png');
const Upload = () => {
  const [result, setResult] = React.useState([]);

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      return res[0];
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={menu} style={styles.menu} />
      <Text style={styles.title}>Mis podcasts</Text>

      <View style={styles.podcast}>
        <Text style={styles.text}>Titulo de podcast</Text>
        <Text style={styles.text1}>93 voicers</Text>
        <Image source={descarga} style={styles.descarga} />
      </View>
      <View style={styles.podcast}>
        <Text style={styles.text}>Titulo de podcast</Text>
        <Text style={styles.text1}>86 voicers</Text>
        <Image source={descarga} style={styles.descarga} />
      </View>
      <View style={styles.podcast}>
        <Text style={styles.text}>Titulo de podcast</Text>
        <Text style={styles.text1}>73 voicers</Text>
        <Image source={descarga} style={styles.descarga} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const audio = await pickDocument();
          //console.log('este audio', audio.uri);

          const reference = storage().ref(`audios/${audio.name}`);

          RNFetchBlob.fs
            .stat(audio.uri)
            .then(async stats => {
              console.log(stats.path);
              reference
                .putFile(stats.path)
                .then(res => console.log(res))
                .catch(err => console.log(err));

              const exportedFileContent = await RNFS.readFile(
                audio.uri,
                'base64',
              );
              const transcription = await getTranscription(exportedFileContent);
            })
            .catch(err => {});

          // const exportedFileContent = await RNFS.readFile(audio.uri, 'base64');
          // getTranscription(exportedFileContent);
        }}>
        <Text style={styles.text2}>Crear nuevo podcast</Text>
      </TouchableOpacity>
      <Image source={image} style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'relative',
    fontSize: 25,
    width: '45%',
    top: '10%',
    opacity: 0.8,
    color: 'gray',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: '25%',
  },
  text: {
    top: '-15%',
    fontSize: 20,
    color: '#5b5d68',
    fontWeight: 'bold',
    left: '3%',
  },
  button: {
    position: 'relative',
    display: 'flex',
    top: '3%',
    width: '50%',
    height: '6%',
    justifyContent: 'center',
    marginBottom: '6%',
    backgroundColor: '#27a2fc',
    borderRadius: 20,
  },
  image: {
    position: 'relative',
    left: '10%',
    top: '2%',
  },
  logo: {
    position: 'absolute',
    width: '15%',
    height: '3.2%',
    left: '2%',
    top: '2%',
  },
  menu: {
    position: 'absolute',
    right: '2%',
    top: '2%',
  },
  podcast: {
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#E1DBDA',
    borderRadius: 15,
    height: '12%',
    width: '85%',
    margin: '3%',
  },
  descarga: {
    position: 'absolute',
    right: '7%',
    top: '29%',
  },
  text1: {
    fontSize: 15,
    color: '#5b5d68',
    fontWeight: 'bold',
    left: '3%',
    marginBottom: '-3%',
  },
  text2: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Upload;
