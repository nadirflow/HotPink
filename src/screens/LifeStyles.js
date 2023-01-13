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


class LifeStyles extends React.Component {
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
        iconRight_1={' '}
        
        // onPressLeft_1={() => this.props.navigation.goBack()}
        
      />
        <ImageBackground source={Assets.back} resizeMode="cover" style={{flex:1,    }}>
        
          
            <View style={{paddingVertical:15, flex:1}}>
                <ScrollView style={{   paddingHorizontal:Devices.sW(3), paddingTop:Devices.sH(3)}} contentContainerStyle={{flexGrow:1}}>
                    <Text style={{fontSize: Devices.fS(24), color:'#fff', fontWeight:'700'}}>Sex With Your Partner</Text>
                    <Text style={{fontSize: Devices.fS(12), color:'#fff', fontWeight:'400'}}>Private Psychotherapy Practice </Text>
                    <View style={{flex:1,  justifyContent:'center',  }}>
                        
                        
                        <View style={{flexDirection:'row', alignContent:'space-between', justifyContent:'space-between', marginTop:Devices.sH(3)}}>
                            <View style={{width:Devices.sW('44%')}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('LSArticle')}>  
                                <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.ls1} resizeMode="cover" style={{alignItems:'baseline',marginBottom:Devices.sH(2), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'flex-end', height:Devices.sH(26), borderRadius:10,}}>
                                    <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center' }}>Married Life</Text>
                                </ImageBackground>
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{width:Devices.sW('44%')}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('LSArticle')}>  
                                    <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.ls2} resizeMode="cover" style={{alignItems:'baseline',marginBottom:Devices.sH(2), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'flex-end', height:Devices.sH(26), borderRadius:10,}}>
                                        <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center' }}>Dating Websites</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LSArticle')}>  
                                <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.ls3} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(2),  paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(23), borderRadius:10,}}>
                                    <View style={{backgroundColor:'rgba(119, 12, 85, 0.8)', height:'100%', justifyContent:'center', borderRadius:10,}}>
                                        <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>PORN-GOOD/BAD</Text>
                                        <Text style={{fontSize:Devices.fS(16), fontWeight:'200', color: '#fff', textAlign:'center',}}>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eiu smod tempor incididunt ut labo. </Text>
                                        <Button style={{ backgroundColor:'#fff', textAlign:'center', alignSelf:'center', paddingVertical:1, paddingHorizontal:15, height:25, marginTop:5,}}><Text style={{fontSize:Devices.fS(14), color: '#610C47', fontWeight:'600'}}>Read Now</Text></Button>
                                    </View>
                                </ImageBackground>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </View>
          
        </ImageBackground>
      </>
    );
  };
};

export default LifeStyles;