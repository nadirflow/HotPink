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


class Disclaimer extends React.Component {
  
  
  
  
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
                        <Text style={[cStyles.txt_title_header, { color: '#fff', }]}>Disclaimer</Text>
                    </View>
                </View>
                }
                iconLeft_1={'chevron-left'}
                iconRight_1={'none'}
                
                onPressLeft_1={() => this.props.navigation.goBack()}
            />
            
                <View style={{backgroundColor: '#fff', borderTopRightRadius:25, borderTopLeftRadius:25, marginTop:Devices.sH(3), flex:1,  paddingVertical:Devices.sH(5)}}>
                    <Text style={[cStyles.txt_title_header, {fontSize:Devices.fS(22), color: '#C63A66', textAlign:'center'}]}>Disclaimer</Text>
                    <ScrollView style={{flex:1, paddingHorizontal:Devices.sW(5),}}>
                        <Text style={[{fontSize:Devices.fS(16), color: '#000', lineHeight:24, marginTop:10, textAlign:'justify' }]}>The advice and strategies given contained herein may not be suitable for every situation. Using the educational information in the app does not constitute receiving professional services from any of the parties involved. The author, content creator and developers shall not be liable for damages arising here from. The resources referred to in this app should be considered endorsed and a recommendation, rather than irrefutable fact. Further, app users should note that websites prices and resources, may have been changed, updated or disappeared between the launch of this app and updates.</Text>
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

export default connect(mapStateToProps, null)(Disclaimer);
