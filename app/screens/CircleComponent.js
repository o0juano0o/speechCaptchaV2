import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const IconPlay = require('../assets/play.png');

export default function PodcastScreen({navigation}) {
  return (
    <View style={styles.conteiner}>
      <View style={styles.shadow}>
        <View style={styles.circleBig}>
          <View style={styles.circleSmall}>
            <Image source={IconPlay} style={styles.play}></Image>
            <Text style={styles.text}>Tap to play</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    color: '#5B5D68',
    opacity: 0.8,
    marginTop: 10,
    fontSize: 10,
  },
});
