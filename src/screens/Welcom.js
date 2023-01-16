import React from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
/* COMPONENTS */

/** COMMON */
import Helpers from '~/utils/helpers';
import Services from '~/services';
import COtp from '~/components/COtp';
import { Button, Container, Content, Image, Text } from 'native-base';
import { ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Assets, Devices } from '~/config';
import CImage from '~/components/CImage';

class Welcom extends React.Component {
  constructor(props) {
  
    super(props);
    
  }
  
    _onPressSignIn = () => {
        this.props.navigation.navigate("SignIn");
        
      }
      
  /* RENDER */
  render() {
    // console.log(this.props.navigation)
    return (
      
     
        <ImageBackground  source={Assets.back} resizeMode="cover" style={{flex:1,   alignItems:'center', justifyContent:'center', alignContent:'center', paddingLeft:'5%', paddingRight:'5%'}}>
            
                <CImage source={Assets.big}  resizeMode={'contain'} style={{width:Devices.sW(100), height:Devices.sH(20), marginBottom:Devices.sH(10)}} />
                <Button onPress={this._onPressSignIn} style={{width:Devices.sW('90%'), justifyContent:'center', backgroundColor:'#fff', borderRadius:8, marginBottom:15, marginTop:15, paddingVertical:25,}}><Text style={{fontSize:Devices.fS(16), color:'#A93A75', textTransform:'capitalize', fontWeight:'700'}}>Login</Text></Button>
                <Button onPress={() => this.props.navigation.navigate('SignUp')} style={{width:Devices.sW('90%'), justifyContent:'center', backgroundColor:'#fff', borderRadius:8,}}><Text style={{fontSize:Devices.fS(16), paddingVertical:20, color:'#A93A75', textTransform:'capitalize', fontWeight:'700'}}>Sign Up</Text></Button>
            
        </ImageBackground>
     
    )
  }
}

export default Welcom;