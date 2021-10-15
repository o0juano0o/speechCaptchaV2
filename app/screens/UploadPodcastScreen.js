import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import {useRecoilState} from 'recoil';
import {getTranscription} from '../utils/transcription';
import {userLogged} from '../recoil/userLogged';
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
const image = require('../assets/graphy1.png');
const descarga = require('../assets/cloud-computing.png');

const Upload = ({navigation}) => {
  const [podcasts, setPodcasts] = React.useState([]);
  const [user, setUser] = useRecoilState(userLogged);

  useEffect(() => {
    const arr = [];
    if (user.uid) {
      //cambiar por if is artist
      firestore()
        .collection('podcasts')
        .where('artistId', '==', user.uid)
        .get()
        .then(podcasts => {
          console.log(podcasts);
          podcasts.forEach(doc => {
            //console.log(doc.id, '=>', doc.data());
            return arr.push(doc.data());
          });
          setPodcasts(arr);
        });
      console.log(user);
      console.log(podcasts);
    }
  }, [user]);

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
      {/* ----------------MENU------------------------ */}
      <TouchableOpacity
        onPress={() => navigation.navigate('BlueUser')}
        style={styles.menu}>
        <Image source={menu} />
      </TouchableOpacity>
      {/* -------------------------------------------- */}
      <Text style={styles.title}>Mis podcasts</Text>
      {podcasts?.map(podcast => {
        return (
          <View style={styles.podcast} key={podcast.url}>
            <Text style={styles.text}>{podcast.tittle}</Text>
            <Text style={styles.text1}>Voicers: {podcast.voicers}</Text>
            <Image source={descarga} style={styles.descarga} />
          </View>
        );
      })}

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          try {
            const audio = await pickDocument();
            const audioPath = (await RNFetchBlob.fs.stat(audio.uri)).path;
            const audioFile = await RNFS.readFile(audio.uri, 'base64');
            const audioStorage = await storage().ref(`audios/${audio.name}`);
            const podcastsCollection = await firestore().collection('podcasts');
            await audioStorage.putFile(audioPath);
            const audioUrl = await audioStorage.getDownloadURL();
            const transcription = await getTranscription(audioFile);
            podcastsCollection.add({
              artistId: user.uid,
              tittle: audio.name,
              transcription: transcription,
              url: audioUrl,
              voicers: 0,
            });
          } catch (error) {
            console.log(error);
          }
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
    fontSize: 30,
    top: '10%',
    color: '#5b5d68',
    fontWeight: 'bold',
    marginBottom: '25%',
    textAlign: 'center',
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
