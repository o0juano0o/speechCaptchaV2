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
const logo = require('../assets/vcapp.png');
const menu = require('../assets/menu.png');

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
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      {/* ----------------MENU------------------------ */}
      <TouchableOpacity
        onPress={() => navigation.navigate('BlueUser')}
        style={styles.menu}>
        <Image source={menu} />
      </TouchableOpacity>
      {/* -------------------------------------------- */}
      <Text style={styles.title}>Reproducir Captcha</Text>
      {/* ---------------MAP---------------- */}
      <View style={styles.container1}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    position: 'absolute',
    left: '5%',
    top: '2%',
    width: 60,
    height: 20,
  },
  vc: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27A2FC',
  },
  menu: {
    position: 'absolute',
    right: '5%',
    top: '2%',
  },
  playBtn: {
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    color: '#5b5d68',
    fontWeight: 'bold',
    fontSize: 30,
    top: '15%',
  },
  conteinerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    width: '60%',
    height: '60%',
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
    width: '75%',
    height: '75%',
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
    bottom: '23%',
    left: '13%',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '9%',
  },
  carousel: {},
  item: {},
  imageBackground: {},
  lowerContainer: {},
  titleText: {
    marginTop: '10%',
  },
  contentText: {},
});
