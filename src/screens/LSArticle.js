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


class LSArticle extends React.Component {
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
                <View >
                  <Image source={{uri: 'https://images.pexels.com/photos/4684249/pexels-photo-4684249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} resizeMode="cover" style={{width:'100%', height:200, marginBottom:(5), borderRadius:5,}} />
                  <Text style={{fontSize:Devices.fS(24), fontWeight:'700', color:'#fff'}}>PORN-GOOD/BAD</Text>
                  <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff', flexWrap:'wrap', overflow:'visible'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt,</Text>
                  <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff', flexWrap:'wrap', overflow:'visible'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt,</Text>
                  <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff', flexWrap:'wrap', overflow:'visible'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, </Text>
                  <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff', flexWrap:'wrap', overflow:'visible'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, </Text>
                  <View style={{justifyContent:'center', alignItems:'center', marginTop:10,}}>
                    <TouchableOpacity style={{backgroundColor:'#fff', paddingHorizontal:10, paddingVertical:7, borderRadius:5,}} onPress={() => {if (true){this.props.navigation.navigate("UnlockSubscription");  
                             return;
                         }
                     }}>
                        <Text style={{color:'#610C47'}}>Buy Subscription</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
               
                
            
          
        </ImageBackground>
      </>
    );
  };
};

export default LSArticle;