import React, {useState} from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
/* COMPONENTS */

/** COMMON */
import Helpers from '~/utils/helpers';
import Services from '~/services';
import COtp from '~/components/COtp';
import { Button, Container, Content, } from 'native-base';
import { ImageBackground, ScrollView, View,  Image, Text, TouchableHighlight, TouchableOpacity, FlatList, ActivityIndicator, } from 'react-native';
import { Assets, Devices } from '~/config';
import CImage from '~/components/CImage';

import CHeader from '~/components/CHeader';
import { cStyles } from '~/utils/styles';
import Icon from 'react-native-fontawesome-pro';
import WebView from 'react-native-webview';


class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  IndicatorLoadingView() {
    return (
      
      <ActivityIndicator
        color="#E83B55"
        size="large"
        style={{position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0}}
      />
    );
  }
  render() {
    return (
      <>
       <CHeader
        
        style={{backgroundColor:'#E83B55', color:'#fff'}}
        titleComponent={
          <View style={[cStyles.row_justify_center, cStyles.flex_full]}>
            <View
              style={[
                cStyles.column_align_center,
                cStyles.column_justify_center,
                { width: '100%' },
              ]}>
              <CImage
                style={{width:90, height:40}}
                source={Assets.log}
                resizeMode={'contain'}
              />
            </View>
          </View>
        }
        iconLeft_1={'chevron-left'}
        iconRight_1={' '}
        
        onPressLeft_1={() => this.props.navigation.goBack()}
        
      />
        <ImageBackground source={Assets.back} resizeMode="cover" style={{flex:1,    }}>
        
          
            <WebView source={{uri: 'https://tawk.to/chat/63c0d9d1c2f1ac1e202d2f38/1gmkl5nhr'}} renderLoading={this.IndicatorLoadingView} javaScriptEnabled={true}
        domStorageEnabled={true} startInLoadingState={true}/>
          
        </ImageBackground>
      </>
    );
  };
};

export default ChatScreen;