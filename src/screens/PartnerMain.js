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


class PartnerMain extends React.Component {
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
        
        onPressLeft_1={() => this.props.navigation.goBack()}
        
      />
        <ImageBackground source={Assets.back} resizeMode="cover" style={{flex:1,    }}>
        
          
            <View style={{paddingVertical:15, flex:1}}>
                <ScrollView style={{   paddingHorizontal:Devices.sW(3), paddingTop:Devices.sH(3)}} contentContainerStyle={{flexGrow:1}}>
                    <Text style={{fontSize: Devices.fS(24), color:'#fff', fontWeight:'700'}}>Sex With Your Partner</Text>
                    <Text style={{fontSize: Devices.fS(12), color:'#fff', fontWeight:'400'}}>Private Psychotherapy Practice </Text>
                    <View style={{flex:1,    }}>
                        
                        
                        <View style={{flexDirection:'row', alignContent:'space-between', justifyContent:'space-between', marginTop:Devices.sH(3)}}>
                            <View style={{width:Devices.sW('44%')}}>
                                <TouchableOpacity >  
                                <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.sp1} resizeMode="cover" style={{alignItems:'baseline',marginBottom:Devices.sH(2), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'flex-end', height:Devices.sH(22), borderRadius:10,}}>
                                    <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center' }}>Emotional Intimacy</Text>
                                </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity>  
                                <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.sp2} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(2), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(25), borderRadius:10,}}>
                                    <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Heart Problems and Sex</Text>
                                </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:Devices.sW('44%')}}>
                                <TouchableOpacity>  
                                <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.sp3} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(2), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(28), borderRadius:10,}}>
                                    <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Sexual Performance Problems</Text>
                                </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity>  
                                <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.sp4} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(2), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(19), borderRadius:10,}}>
                                    <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Condom Use 101</Text>
                                </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <TouchableOpacity>  
                                <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.sp5} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(2), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(19), borderRadius:10,}}>
                                    <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Sex Drive And The Importance Of Sleep</Text>
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

export default PartnerMain;