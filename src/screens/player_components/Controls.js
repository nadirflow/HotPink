import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-fontawesome-pro';

const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Icon name='random' color='#fff' size={24} type="solid" />
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={onBack}>
      <Icon name='step-backward' color='#fff' size={24}  type="solid"/>
    </TouchableOpacity>
    <View style={{width: 20}} />
    {!paused ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <Icon name='pause' color='#DD3B5B' size={24}  type="solid"/>
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Icon name='play' color='#DD3B5B' size={24}  type="solid"/>
        </View>
      </TouchableOpacity>
    }
    <View style={{width: 20}} />
    <TouchableOpacity onPress={onForward}
      disabled={forwardDisabled}>
      <Icon name='step-forward' color='#fff' size={24} type="solid"/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Icon name='repeat' color='#fff' size={24} />
    </TouchableOpacity>
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderRadius:70,
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})