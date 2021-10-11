import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
const IconPlay = require('../assets/play.png');
const image = require('../assets/graphy1.png');
const icon = require('../assets/icon.png');
import Carousel from 'react-native-anchor-carousel';

const INITIAL_INDEX = 0;
export default function App() {
  const podcast = [
    {id: 1, title: 'Manaos de uva nuestro secreto'},
    {id: 2, title: 'Khabib historial de peleas'},
    {id: 3, title: 'Charla con infante de la segunda guerra mundial'},
  ];
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
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
                <Image source={IconPlay} style={styles.play}></Image>
                <Text>Tap to play</Text>
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
          data={podcast}
          renderItem={renderItem}
          /*           itemWidth={300}
          inActiveOpacity={0.3}
          containerWidth={450} */
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
    /* flex: 1, */
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
    /*  position: "relative", marginLeft: 40  */
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    /* backgroundColor: "#141518", */
    /*      aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20, */
  },
  item: {
    /*  borderWidth: 2, */
    /*  backgroundColor: "white", */
    /*     flex: 1,
    borderRadius: 5,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center", */
    /* elevation: 3, */
  },
  imageBackground: {
    /* flex: 2, */
    /* backgroundColor: "#EBEBEB", */
    /*    borderWidth: 5,
    borderColor: "white", */
  },
  lowerContainer: {
    /*     flex: 1,
    margin: 10, */
  },
  titleText: {
    marginTop: 30,
    /* fontWeight: "bold", */
    /*  fontSize: 18, */
  },
  contentText: {
    /*     marginTop: 10,
    fontSize: 12, */
  },
});
