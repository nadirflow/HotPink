import React, {useState} from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
/* COMPONENTS */

/** COMMON */
import Helpers from '~/utils/helpers';
import Services from '~/services';
import COtp from '~/components/COtp';
import { Button, Container, Content, } from 'native-base';
import { ImageBackground, ScrollView, View,  Image, Text, TouchableHighlight, TouchableOpacity, FlatList, } from 'react-native';
import { Assets, Devices } from '~/config';
import CImage from '~/components/CImage';

import CHeader from '~/components/CHeader';
import { cStyles } from '~/utils/styles';
import Icon from 'react-native-fontawesome-pro';


class ArticleSelf extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ImageBackground source={Assets.back} resizeMode="cover" style={{flex:1,    }}>
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
        iconLeft_1={'heart'}
        iconRight_1={'shopping-cart'}
        iconRight_2={'search'}
       
      />
          
            <View style={{paddingVertical:15, flex:1}}>
                <Text>Audio</Text>
            </View>
          
        </ImageBackground>
      </>
    );
  };
};

export default ArticleSelf;