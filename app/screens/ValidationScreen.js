import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {isArtist} from '../recoil/isArtist';

const image = require('../assets/graphy1.png');
const pauseIcon = require('../assets/pause.png');
const playIcon = require('../assets/play.png');
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');
const aceptar = require('../assets/aceptar.png');
const cancelar = require('../assets/cancelar.png');

import TrackPlayer, {
  State,
  usePlaybackState,
  Event,
  RepeatMode,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const setupPlayer = async podcast => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.destroy();
  await TrackPlayer.add(podcast);
};

import {selectedPodcast} from '../recoil/selectedPodcast';
import {newScore} from '../recoil/newScore';
import {userLogged} from '../recoil/userLogged';
const playTrack = async (playbackState, podcast) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (playbackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

export default function ValidationScreen({navigation}) {
  const [podcast, setPodcast] = useRecoilState(selectedPodcast);
  const [playing, setPlaying] = useState(false);
  const [transcription, setTrascription] = useState('');
  const [score, setScore] = useRecoilState(newScore);
  const [user, setUser] = useRecoilState(userLogged);
  const playbackState = usePlaybackState();
  const [artist, setArtist] = useRecoilState(isArtist);

  useEffect(() => {
    if (podcast.url) {
      setupPlayer([podcast]);
      setTrascription(podcast.transcription);
    }
  }, [podcast]);

  const handlePlay = () => {
    playTrack(playbackState, [podcast]);
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

  const handleCorrect = () => {
    const points = transcription.length * 2;
    setScore(points);
    console.log('user', user);
    console.log('user score', user.score);
    const newPoints = user.score + points;
    console.log('newpoints', newPoints);
    firestore().collection('users').doc(user.uid).update({score: newPoints});
    // setUser({...user, score: user.score + newScore});
    Alert.alert('Transcripci??n validada.');

    navigation.navigate('Result');
  };
  const handleClick = () => {
    artist
      ? navigation.navigate('BlueArtist')
      : navigation.navigate('BlueUser');
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        {/* <Image source={menu} style={styles.menu} /> */}
        {/* ----------------MENU------------------------ */}
        <TouchableOpacity onPress={() => handleClick()} style={styles.menu}>
          <Image source={menu} />
        </TouchableOpacity>
        {/* -------------------------------------------- */}
        <View style={styles.shadow}>
          <View style={styles.circleBig}>
            <View style={styles.circleSmall}>
              <TouchableOpacity onPress={() => handlePlay()}>
                {playing ? (
                  <Image source={pauseIcon} style={styles.pause}></Image>
                ) : (
                  <Image source={playIcon} style={styles.pause}></Image>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {playing ? (
          <Text style={styles.reproduciendo}>Reproduciendo</Text>
        ) : (
          <Text style={styles.reproduciendo}>Reproducir</Text>
        )}
        <Text style={styles.traduccion}>{transcription}</Text>
        <Text style={styles.coincide}>Coincide cada palabra?</Text>
        <View style={styles.buttons}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <TouchableOpacity
              title="NO"
              onPress={() => navigation.navigate('Transcription')}>
              <Image source={cancelar} style={styles.btn} />
            </TouchableOpacity>
            <TouchableOpacity title="SI" onPress={() => handleCorrect()}>
              <Image source={aceptar} style={styles.btn} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
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
  reproduciendo: {
    color: '#21a1fc',
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.65,
    marginBottom: 35,
  },
  traduccion: {
    color: '#5b5d68',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 70,
  },
  coincide: {
    color: '#5b5d68',
    opacity: 0.8,
    fontSize: 23,
  },
  image: {
    position: 'relative',
    top: '15%',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttons: {
    height: '27%',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    width: 60,
    height: 20,
    left: 10,
    top: 15,
  },
  menu: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  btn: {
    width: 100,
    height: 100,
  },
  //REPRODUCIENDO
  shadow: {
    marginTop: '20%',
    width: 140,
    height: 140,
    backgroundColor: '#BCE3FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 105,
  },
  circleBig: {
    width: 120,
    height: 120,
    backgroundColor: '#27A2FC',
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 90,
    height: 90,
    backgroundColor: '#ffff',
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pause: {
    width: 44,
    height: 44,
  },
});
