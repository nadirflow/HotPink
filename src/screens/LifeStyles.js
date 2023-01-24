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
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import CLoadingPlaceholder from '~/components/CLoadingPlaceholder';

class LifeStyles extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    loading: true,
  }
  
  componentDidMount() {
    fetch('https://webtestview.com/hotpink/wp-json/wp/v2/posts?categories=56&order=asc')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }
  
  render() {
    // const {loading } = this.state;
    // if(loading){
    //   return(
    //   <Text>Loading......</Text>
    //   );
    // }
    if (this.state.loading) {
      return(
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
        <CLoadingPlaceholder />
        </>
      )
    }
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
                
            <View style={{paddingVertical:15, flex:1}}>
                <ScrollView style={{   paddingHorizontal:Devices.sW(3), paddingTop:Devices.sH(3), width:Devices.sW('100%'),}} contentContainerStyle={{flexGrow:1}}>
                    <Text style={{fontSize: Devices.fS(24), color:'#fff', fontWeight:'700'}}>Life Styles</Text>
                    <Text style={{fontSize: Devices.fS(12), color:'#fff', fontWeight:'400'}}>Private Psychotherapy Practice </Text>
                    <View style={{flex:1,  justifyContent:'center',  }}>
                    <View  style={{flexDirection:'row',flexWrap: 'wrap', alignContent:'space-between', justifyContent:'space-between', marginTop:Devices.sH(2), }}>
                    {
                            
                      this.state.data.map((item, index) => {
                        if ((index + 1) % 3 !== 0) {
                          return(
                                  <View style={{width: Devices.sW('44%')}}>
                                      <TouchableOpacity onPress={() => this.props.navigation.navigate('ArticleSelf',{postId: item.id})}>  
                                      <ImageBackground imageStyle={{ borderRadius: 10}} source={{uri: item.featured_media.sizes['woocommerce_thumbnail']}} resizeMode="cover" style={{alignItems:'baseline',marginBottom:Devices.sH(2), justifyContent:'flex-end', alignContent:'flex-end', height:Devices.sH(26), borderRadius:10,}}>
                                        <LinearGradient colors={['rgba(209, 58, 97, 0)',  'rgba(99, 5, 69, 0.8)' ]} style={{alignItems:'center', justifyContent:'flex-end', borderRadius:10, alignContent:'flex-end', paddingVertical:10, flex:1, width:'100%'}} >
                                          <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center' }}>{item.title.rendered}</Text>
                                        </LinearGradient>
                                      </ImageBackground>
                                      </TouchableOpacity>
                                      
                                  </View>
                              )
                                }else{
                                  return(
                                    
                                      <TouchableOpacity onPress={() => this.props.navigation.navigate('ArticleSelf',{postId: item.id})} style={{width:Devices.sW(93.5)}}>  
                                          <ImageBackground imageStyle={{ borderRadius: 10}} source={{uri: item.featured_media.sizes['woocommerce_thumbnail']}} resizeMode="cover" style={{alignItems:'center', justifyContent:'center', alignContent:'center', marginBottom:Devices.sH(2),  paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(23),  borderRadius:10,}}>
                                              <View style={{backgroundColor:'rgba(119, 12, 85, 0.8)', height:'100%', justifyContent:'center', alignContent:'center', alignItems:'center', borderRadius:10, width:'100%',}}>
                                                  <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>{item.title.rendered}</Text>
                                                  <Text style={{fontSize:Devices.fS(16), fontWeight:'200', color: '#fff', textAlign:'center',}}>{item.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '')} </Text>
                                                  <Button onPress={() => this.props.navigation.navigate('ArticleSelf',{postId: item.id})} style={{ backgroundColor:'#fff', textAlign:'center', alignSelf:'center', paddingVertical:1, paddingHorizontal:15, height:25, marginTop:5,}}><Text style={{fontSize:Devices.fS(14), color: '#610C47', fontWeight:'600'}}>Read Now</Text></Button>
                                              </View>
                                          </ImageBackground>
                                      </TouchableOpacity>
                                    
                                )
                                }
                        
                            
                        
                        })
                      } 
                      </View>  
                        
                        
                    </View>
                </ScrollView>
            </View>
          
        </ImageBackground>
      </>
    );
  };
};

export default LifeStyles;