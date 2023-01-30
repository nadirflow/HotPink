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
import { Assets, Devices } from '~/config';
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
const customerId = 1;
const endpoint = `https://webtestview.com/hotpink/wp-json/wc/v3/customers/${customerId}/wishlist`;


class ArticleSelf extends React.Component {
  
  constructor(props) {
    super(props);
  }
  state = {
    post: {},
    loading: true,
    wishlists: [],
    error: null,
  };

 





  componentDidMount() {

    const { postId } = this.props.route.params;
    const { audioId } = this.props.route.params;
    console.log('////////////////////');
    console.log(audioId);
    axios
      .get(`https://webtestview.com/hotpink/wp-json/wp/v2/posts/${postId}`)
      .then((response) => {
        this.setState({ post: response.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    const { post } = this.state;
   
    console.log(':::::::::::::::');
   console.log(post.featured_media)
    const postTitle = post.title;
    const image = post.featured_media;
    console.log(post.content);
    // const sanitizedHTML = DOMPurify.sanitize(post.content.rendered);
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
            <View style={{paddingVertical:Devices.sH(5), flex:1, paddingHorizontal:Devices.sW(5)}}>
              <ScrollView>
                {/* <View style={{flexDirection:'row', }}>
                  <Image source={{uri: 'https://images.pexels.com/photos/4684249/pexels-photo-4684249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} resizeMode="cover" style={{width:120, height:120, marginRight:(5),}} />
                  <View>
                  <Text style={{fontSize:Devices.fS(24), fontWeight:'700', color:'#fff'}}>Anorgasmia</Text>
                  <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff', flexWrap:'wrap', overflow:'visible'}} numberOfLines={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, Curabitur et accumsan turpis. Donec efficitur ipsum quis orci tincidunt, </Text>
                  </View>
                </View> */}
                <Text style={{fontSize:Devices.fS(24), marginBottom:10, fontWeight:'700', color:'#fff'}}>{postTitle && postTitle.rendered ? postTitle.rendered : ''}</Text>
                 {Assets.image_failed && image ?
                  <Image source={{uri: image.sizes['woocommerce_thumbnail']}} style={{width:'100%', height:250, resizeMode: 'contain',  }} /> 
                 :
                 <Image source={Assets.image_failed} style={{width:'100%', height:80, }} />  
                } 
                {/* {
                  post.content && post.content.rendered ?
                // <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color:'#fff', marginTop:Devices.sH(5)}} dangerouslySetInnerHTML={post.content.rendered} />
                <AutoHeightWebView
                      
                      originWhitelist={['*']}
                      source={{ html: post.content.rendered }}
                      style={{paddingHorizontal:Devices.sW(0), width:Devices.width, marginTop:Devices.sH(5)}}
                      scalesPageToFit={true}
                      viewportContent={'width=device-width, user-scalable=no'}
                      customStyle={" *{font-szie:14px; color:#fff; padding-right:11.5px;} li{font-szie:12px; color:#fff; margin-bottom:10px;} ul, ol{padding:0, }"}
                      
                  />
                : <Text>No content available</Text>
                } */}
                <Text style={{fontSize:Devices.fS(14), fontWeight:'400', color:'#fff', marginTop:Devices.sH(5)}}>{post.excerpt && post.excerpt.rendered ? post.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '') : ''}</Text>
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


const mapStateToProps = state => {
  return {
    // cart: state.cart.carts,
    // cartKey: state.cart.cartKey,
  }
}

export default connect(mapStateToProps, null)(ArticleSelf);
