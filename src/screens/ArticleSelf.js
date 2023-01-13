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
        iconRight_1={'none'}
        
         onPressLeft_1={() => this.props.navigation.goBack()}
        
      />
        <ImageBackground source={Assets.back} resizeMode="cover" style={{flex:1,    }}>
        
          
            <View style={{paddingVertical:Devices.sH(5), flex:1, paddingHorizontal:Devices.sW(5)}}>
              <ScrollView>
                <View style={{flexDirection:'row', }}>
                  <Image source={{uri: 'https://images.pexels.com/photos/4684249/pexels-photo-4684249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} resizeMode="cover" style={{width:120, height:120, marginRight:(5),}} />
                  <View>
                  <Text style={{fontSize:Devices.fS(24), fontWeight:'700', color:'#fff'}}>Anorgasmia</Text>
                  <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff', flexWrap:'wrap', overflow:'visible'}} numberOfLines={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, </Text>
                  </View>
                </View>
                <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, id sodales risus gravida. Curabitur nisi eros, vulputate ut pulvinar ac, fermentum sagittis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam velit tellus, fringilla vitae libero quis, faucibus venenatis sem. Donec dapibus nulla ex, eu egestas metus consequat eget. Phasellus sit amet lectus eget arcu dapibus porttitor. Cras tempor vulputate massa vulputate facilisis. Vivamus a massa tristique, tristique sem in, lobortis lacus. Donec quis porta ipsum. 
                  Aliquam a justo tempus, volutpat velit id, euismod dui. Integer feugiat diam velit, in viverra risus laoreet vitae. Integer nec commodo quam. Donec mauris augue, cursus et vulputate nec, scelerisque eget lorem. Nunc euismod, enim et interdum dignissim, lectus massa pharetra ligula, vitae auctor libero orci at nulla. Aliquam id tellus fermentum, molestie erat quis, bibendum orci. Nulla facilisi.</Text>
                  <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, id sodales risus gravida. Curabitur nisi eros, vulputate ut pulvinar ac, fermentum sagittis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam velit tellus, fringilla vitae libero quis, faucibus venenatis sem. Donec dapibus nulla ex, eu egestas metus consequat eget. Phasellus sit amet lectus eget arcu dapibus porttitor. Cras tempor vulputate massa vulputate facilisis. Vivamus a massa tristique, tristique sem in, lobortis lacus. Donec quis porta ipsum. 
                  Aliquam a justo tempus, volutpat velit id, euismod dui. Integer feugiat diam velit, in viverra risus laoreet vitae. Integer nec commodo quam. </Text>
                  <View style={{justifyContent:'center', alignItems:'center', marginTop:10,}}>
                    <TouchableOpacity style={{backgroundColor:'#fff', paddingHorizontal:10, paddingVertical:7, borderRadius:5,}} onPress={() => {if (true){this.props.navigation.navigate("UnlockSubscription");  
                             return;
                         }
                     }}>
                        <Text style={{color:'#610C47'}}>Buy Subscription</Text>
                    </TouchableOpacity>
                  </View>
              </ScrollView>
            </View>
          
        </ImageBackground>
      </>
    );
  };
};

export default ArticleSelf;