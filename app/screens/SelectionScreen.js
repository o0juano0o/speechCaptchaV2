import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {StyleSheet, Text, View, Button} from 'react-native';

import firebase from '../firebase/config';
import {userLogged} from '../recoil/userLogged';

import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

const songs = [
  {
    id: 1,
    url: 'https://firebasestorage.googleapis.com/v0/b/speechcaptcha-6fec5.appspot.com/o/audios%2Ftest2.wav?alt=media&token=5b3cc87d-cdd4-4965-9a66-42126a9fb8c8',
    title: 'prueba2',
  },
  {
    id: 2,
    url: 'https://firebasestorage.googleapis.com/v0/b/speechcaptcha-6fec5.appspot.com/o/audios%2Ftest2.wav?alt=media&token=5b3cc87d-cdd4-4965-9a66-42126a9fb8c8',
    title: 'prueba2.0',
  },
];

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.add(songs);
};

const togglePlayback = async playbackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack !== null) {
    if (playbackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }

  await TrackPlayer.add(songs);
};

export default function SelectionScreen({navigation}) {
  const [user, setUser] = useRecoilState(userLogged);
  const playbackState = usePlaybackState();

  useEffect(() => {
    setupPlayer();
  }, []);

  const listAudios = () => {
    const storageRef = firebase.storage.ref();
    const audiosRef = storageRef.child('audios');
    audiosRef
      .listAll()
      .then(res => {
        res.items.forEach(item => {
          console.log(item.path);
          let audioRef = storageRef.child(item.path);
          audioRef.getDownloadURL().then(res => {
            console.log(res);
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSalir = () => {
    firebase.auth
      .signOut()
      .then(() => {
        setUser({});
        console.log('User signed out!');
      })
      .catch(error => console.log('error de cerrar sesion'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}></Button>
      <Button
        title="Go to PodcastScreen"
        onPress={() => navigation.navigate('Podcast')}></Button>
      <Button
        title="Go to UploadScreen"
        onPress={() => navigation.navigate('Upload')}></Button>
      <Button
        title="Go to Validation"
        onPress={() => navigation.navigate('Validation')}></Button>
      {/* <Button
        title="Go to CircleComponent"
        onPress={() => navigation.navigate('Circle')}></Button> */}
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}></Button>
      <Button
        title="Go to BlueUser"
        onPress={() => navigation.navigate('BlueUser')}></Button>
      <Button
        title="Go to BlueArtist"
        onPress={() => navigation.navigate('BlueArtist')}></Button>
      <Button
        title="Go to Presentation"
        onPress={() => navigation.navigate('Presentation')}></Button>
      <Button
        title="TOTAL POINTS"
        onPress={() => navigation.navigate('TotalPoints')}></Button>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}></Button>
      <Button title="Cerrar sesion" onPress={() => handleSalir()}></Button>
      <Button
        title="repro"
        onPress={() => togglePlayback(playbackState)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
