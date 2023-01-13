/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Text, Image } from 'react-native';
import {
  Container, Left, Body, Right, Button
} from 'native-base';
import Icon from 'react-native-fontawesome-pro';
import Rate, { AndroidMarket } from 'react-native-rate';
import { Colors } from '~/utils/colors';
/* COMPONENTS */
import CHeader from "~/components/CHeader";
import CText from '~/components/CText';
import CViewRow from "~/components/CViewRow";
/* COMMON */
import { cStyles } from '~/utils/styles';
import { Devices, Configs, Assets } from '~/config';
import { layoutWidth } from '~/utils/layout_width';

class UnlockSubscription extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  /* FUNCTIONS */
  _onPressBack = () => {
    this.props.navigation.goBack();
  }


  /* RENDER */
  render() {
    return (
    <SafeAreaView style={{flex:1}}>
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
              {/* <CImage
                style={{width:90, height:40}}
                source={Assets.log}
                resizeMode={'contain'}
              /> */}
            </View>
          </View>
        }
        iconLeft_1={'times'}
       
        
        onPressLeft_1={() => this.props.navigation.goBack()}
        
      />
      <ImageBackground   source={Assets.back} resizeMode="cover" style={{flex:1,  paddingLeft:'8%', paddingRight:'8%', justifyContent:'center', alignItems:'center'}}>
        <Image source={Assets.hot} />
        <View style={{marginVertical:30, justifyContent:'space-between', alignItems:'center', alignContent:'center',}}>
          <Text style={{ fontSize:Devices.fS(16), color:'#fff', marginBottom:20,  }}><Icon name='check-circle' style={{marginRight:10,}} color='#fff' size={16} type="solid"  /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
          <Text style={{ fontSize:Devices.fS(16), color:'#fff', marginBottom:20, }}><Icon name='check-circle' style={{marginRight:10,}} color='#fff' size={16} type="solid" /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
          <Text style={{ fontSize:Devices.fS(16), color:'#fff', marginBottom:20, }}><Icon name='check-circle' style={{marginRight:10,}} color='#fff' size={16} type="solid"  /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
          <Text style={{ fontSize:Devices.fS(16), color:'#fff', marginBottom:20, }}><Icon name='check-circle' style={{marginRight:10,}} color='#fff' size={16} type="solid"  /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
          <Text style={{ fontSize:Devices.fS(16), color:'#fff', marginBottom:20, }}><Icon name='check-circle' style={{marginRight:10,}} color='#fff' size={16} type="solid"  /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
        </View>
        <Text style={{textAlign:'center', fontSize:Devices.fS(14), color:'#fff'}}>Try 7 Days For Free</Text>
        <TouchableOpacity style={{backgroundColor:'#fff', width:'100%', paddingVertical:Devices.sH(1.5), borderRadius:15, marginVertical:5,}}><Text style={{textAlign:'center', fontSize:18, fontWeight:'700', color: '#A93A75'}}>CONTINUE</Text></TouchableOpacity>
        <Text style={{textAlign:'center', fontSize:Devices.fS(14), color:'#fff'}}>$10.00 per month after FREE 7-day trial</Text>
        <Text style={{textAlign:'center', fontSize:Devices.fS(14), color:'#fff', marginTop:15}}>Subscription Terms: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.</Text>
      </ImageBackground>
    </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, null)(UnlockSubscription);