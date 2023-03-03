import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
/* COMPONENTS */

/** COMMON */
import Helpers from '~/utils/helpers';
import Services from '~/services';
import COtp from '~/components/COtp';
import { Button, Container, Content, } from 'native-base';
import { ImageBackground, ScrollView, View,  Image, Text, TouchableHighlight, TouchableOpacity, FlatList, } from 'react-native';
import { Assets, Devices, Configs, Keys } from '~/config';
import CImage from '~/components/CImage';

import CHeader from '~/components/CHeader';
import { cStyles } from '~/utils/styles';
import Icon from 'react-native-fontawesome-pro';
import axios from 'axios';
import CLoadingPlaceholder from '~/components/CLoadingPlaceholder';
import DOMPurify from 'dompurify';
import WebView from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { Base64 } from 'js-base64';
import HTML from 'react-native-render-html';
import { layoutWidth } from '~/utils/layout_width';


class AboutScreen extends React.Component {
  
  
  
  
  // componentDidUpdate(){
  //   console.log('ArticleSelfcomponentDidUpdate');
  // }
  render() {
    
      return(
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
                        <Text style={[cStyles.txt_title_header, { color: '#fff', }]}>About Us</Text>
                    </View>
                </View>
                }
                iconLeft_1={'chevron-left'}
                iconRight_1={'none'}
                
                onPressLeft_1={() => this.props.navigation.goBack()}
            />
            
              <View style={{backgroundColor: '#fff', borderTopRightRadius:25, borderTopLeftRadius:25, marginTop:Devices.sH(3), flex:1,  paddingVertical:Devices.sH(5)}}>
                  <Text style={[cStyles.txt_title_header, {fontSize:Devices.fS(22), color: '#C63A66', textAlign:'center'}]}>Introduction</Text>
                  <ScrollView style={{flex:1, paddingHorizontal:Devices.sW(5),}}>
                    <Text style={[{fontSize:Devices.fS(16), color: '#000', lineHeight:24, marginTop:10, textAlign:'justify' }]}>I am well aware that the subject of sex and sensuality can be quite sensitive to talk about. I remember my first class for the Sex Therapist Qualification. The professor asked us to brainstorm words for different parts of a woman’s body, while she wrote our comments on the board. At first, I was somewhat embarrassed, being in a class of 20, both men and women professionals that I didn’t know from Adam. However, I am now aware that becoming more connected to your sensual and erotic nature can not only build sexual self-confidence, it can also provide you with pleasure, freedom from fear, shame and guilt, negative beliefs and other psychological factors that may inhibit sexual response and impair sexual relationships. Sexual health is intricately bound to both physical and mental health. Hot Pink is written with passion and a must read for women who want to become more attuned to their sexuality, by ridding themselves of false beliefs, performance anxiety, and body image issues. This book will also provide you with a better understanding of the importance of emotional intimacy, which can lead to passionate sex.</Text>
                  </ScrollView>
              </View>
            
        </ImageBackground>
      
    );
  };
}


const mapStateToProps = state => {
  return {
    // cart: state.cart.carts,
    // cartKey: state.cart.cartKey,
  }
}

export default connect(mapStateToProps, null)(AboutScreen);
