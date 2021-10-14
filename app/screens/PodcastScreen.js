import React, {useEffect, useRef, useState} from 'react';
import {useRecoilState} from 'recoil';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import firebase from '../firebase/config';
import Carousel from 'react-native-anchor-carousel';

const IconPlay = require('../assets/play.png');
const image = require('../assets/graphy1.png');
const icon = require('../assets/icon.png');

const INITIAL_INDEX = 0;

// RECOIL
import {selectedPodcast} from '../recoil/selectedPodcast';

// COMPONENT
export default function App({navigation}) {
  const [podcasts, setPodcasts] = useState([]);
  const [podcast, setPodcast] = useRecoilState(selectedPodcast);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const storageRef = firebase.storage.ref();
    const audiosRef = storageRef.child('audios');
    audiosRef
      .listAll()
      .then(res => {
        let arrAudios = [];
        res.items.forEach(item => {
          let audioRef = storageRef.child(item.path);
          audioRef.getDownloadURL().then(res => {
            arrAudios.push({title: item.name.slice(0, -4), url: res});
            setPodcasts(arrAudios);
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(podcast);
  }, []);

  const handleSelect = podcast => {
    setPodcast(podcast);
    navigation.navigate('Validation');
  };

  function renderItem({item, index}) {
    const {uri, title, url} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        {
          <ImageBackground
            source={{uri: uri}}
            style={styles.imageBackground}></ImageBackground>
        }
        <View style={styles.conteinerCircle}>
          <View style={styles.shadow}>
            <View style={styles.circleBig}>
              <View style={styles.circleSmall}>
                <TouchableOpacity
                  style={styles.playBtn}
                  onPress={() => handleSelect({title: title, url: url})}>
                  <Image source={IconPlay} style={styles.play}></Image>
                  <Text>Tap to play</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <>
      <View style={styles.vcApp}>
        <Text style={styles.vc}>VC </Text>
        <Text>App</Text>
        <Image source={icon} style={styles.topIcon} />
      </View>
      <View style={styles.title}>
        <Text>Reproducir Captcha</Text>
      </View>
      {/* ---------------MAP---------------- */}
      <View style={styles.container}>
        <Carousel
          style={styles.carousel}
          data={podcasts}
          renderItem={renderItem}
          onScrollEnd={handleCarouselScrollEnd}
          ref={carouselRef}
        />
      </View>
      {/* ---------------FOOTER---------------- */}
      <Image source={image} style={styles.image}></Image>
    </>
  );
}

const styles = StyleSheet.create({
  playBtn: {
    alignItems: 'center',
  },
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
  title: {
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteinerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  shadow: {
    width: 210,
    height: 210,
    backgroundColor: '#BCE3FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 125,
  },
  circleBig: {
    width: 190,
    height: 190,
    backgroundColor: '#27A2FC',
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 136,
    height: 136,
    backgroundColor: '#ffff',
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 44,
    height: 44,
  },
  image: {
    position: 'relative',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {},
  item: {},
  imageBackground: {},
  lowerContainer: {},
  titleText: {
    marginTop: 30,
  },
  contentText: {},
});
