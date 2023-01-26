import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Assets, Devices } from '~/config';

const AlbumArt = ({
  url,
  onPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={Assets.album}
      />
    </TouchableOpacity>
  </View>
);

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop:Devices.sH(15),
    alignItems:'center',
    alignSelf:'center',
    paddingBottom:Devices.sH(5),
  },
  image: {
    width: 200,
    height: 150,
    textAlign:'center',
  },
})