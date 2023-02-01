/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { Container, Card } from 'native-base';
import Icon from 'react-native-fontawesome-pro';
import firebase from 'react-native-firebase';
/* COMPONENTS */
import CHeader from "~/components/CHeader";
import CText from '~/components/CText';
import CLoading from '~/components/CLoading';
import CImage from '~/components/CImage';
import CViewRow from "~/components/CViewRow";
import CLoadingPlaceholder from '~/components/CLoadingPlaceholder';
/* COMMON */
import { cStyles } from '~/utils/styles';
import { Colors } from '~/utils/colors';
import { Configs, Devices, Assets, Keys } from '~/config';
import { layoutWidth } from '~/utils/layout_width';
/* STYLES */
import styles from './style';
import Services from '~/services';
import helpers from '~/utils/helpers';
import axios from 'axios';
import { Buffer } from 'buffer';
import { Image } from 'react-native';


const RenderCategory = (index, item, onPress) => {
  

  let source = Assets.image_failed;
  if (typeof(item.thumbnail) !== 'undefined' && item.thumbnail.length) {
    source = { uri: item.thumbnail.sizes.thumbnail };
    
  }

  return (
    <TouchableOpacity onPress={() => onPress(item)} activeOpacity={1} >
      <Card style={styles.con_row_item}>
        <CViewRow between
          leftComp={
            <CViewRow style={{ flex: .9 }}
              leftComp={<CImage style={styles.img_item} source={source} />}
              rightComp={
                <CText style={[styles.txt_title_item, Configs.supportRTL && cStyles.pr_10]} numberOfLines={3}>
                  {Configs.html5Entities.decode(item.name)}
                </CText>
              }
            />
          }
          rightComp={
            <CViewRow start={Configs.supportRTL} style={[!Configs.supportRTL && cStyles.row_justify_end]}
              leftComp={
                <View style={styles.con_count_product}>
                  <CText style={styles.txt_count_product}>{item.count}</CText>
                </View>
              }
              rightComp={
                <Icon name={Configs.supportRTL ? "angle-left" : "angle-right"}
                  size={cStyles.ic_left_detail.size}
                  color={cStyles.ic_left_detail.color}
                  type={cStyles.ic_left_detail.type} />
              }
            />
          }
        />
      </Card>
    </TouchableOpacity>
  )
}

const _onRenderEmpty = () => {
  return (
    <View style={[cStyles.column_align_center, { marginTop: Devices.sW('40%') }]}>
      <Icon name={'comment-alt-exclamation'} color={Colors.BORDER_COLOR} size={Devices.fS(50)} type={'light'} />
      <CText style={cStyles.txt_no_data_1} i18nKey={'empty_list'} />
    </View>
  )
}

export const ViewNews = ({


  
  state = null,
  props = null,
  
  onFunction = {
    onPressCart: () => { },
    onRefresh: () => { },
    onLoadMore: () => { },
    onPressItem: () => { },
  }
}) => {

        
        const [shareKey, setSharekey] = useState(null);
        const [wishlistProductIds, setWishlistProductIds] = useState([]);
        const [products, setProducts] = useState([]);
        useEffect(()=> {
          const initializeShareKey = async () => {
              try {
              let wishlistKey = await  Services.Wishlist.getWishlistKey();
              if(wishlistKey.length && wishlistKey[0]){
                  setSharekey(wishlistKey[0].share_key);
              }
              } catch (error) {
              console.error(error);
              }
          };
          initializeShareKey();
          
          
          
      },[])

      useEffect(() => {
        const initializeShareKey = async () => {
          try {
            let wishlistKey = await Services.Wishlist.getWishlistKey();
            if (wishlistKey.length && wishlistKey[0]) {
              setSharekey(wishlistKey[0].share_key);
            }
          } catch (error) {
            console.error(error);
          }
        };
        initializeShareKey();
      }, []);
      
      useEffect(() => {
        const fetchWishlistProducts = async () => {
          let wishlistProducts = await Services.Wishlist.getProductForWishlistByKey(shareKey);
          let productIds = wishlistProducts.map((product) => product.product_id);
          setWishlistProductIds(productIds);
          console.log(productIds)
        };
        fetchWishlistProducts();
      }, [shareKey]);
      
      useEffect(() => {
        const fetchProductData = async () => {
          // const consumerKey = 'ck_7171b2d0be04df526491b4ad224951f313f0a6a1';
          // const consumerSecret = 'cs_9c0a1003c5c525ed50756412c474d3693008e3b6';
          // const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
          try {
            const response = await axios.get(`https://webtestview.com/hotpink/wp-json/wc/v3/products?consumer_key=ck_7171b2d0be04df526491b4ad224951f313f0a6a1&consumer_secret=cs_9c0a1003c5c525ed50756412c474d3693008e3b6&include=${wishlistProductIds.join(',')}`);
            const productData = response.data;
            setProducts(productData);
            // console.log(productData);
          } catch (error) {
            console.error(error);
          }
        };
        if (wishlistProductIds.length) {
          fetchProductData();
        }
      }, [wishlistProductIds]);
     
      const removeFromWishlist = async (productId) => {
        let wishlistProducts = await Services.Wishlist.getProductForWishlistByKey(shareKey);
        if(wishlistProducts.length){
            let itemFound = wishlistProducts.filter(item => item.product_id === productId);
          
            if(itemFound.length && itemFound[0]){
               await Services.Wishlist.removeProductFromWishlist(itemFound[0])
            } 
        }
      
   };
 
      
  return (
    <Container>
      <CHeader
        props={props}
        style={{backgroundColor:'#E83B55', color:'#fff'}}
        title={"news"}
        iconLeft_1={"none"}
        iconRight_1={"shopping-cart"}
        onPressRight_1={onFunction.onPressCart}
      />

      {/* {!state._loading ?
        <>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: Devices.pH(layoutWidth.width) }}
            data={state._categories}
            renderItem={({ item, index }) => RenderCategory(index, item, onFunction.onPressItem)}
            keyExtractor={(item, index) => index.toString()}
            refreshing={state._refreshing}
            onRefresh={onFunction.onRefresh}
            removeClippedSubviews={Devices.OS === 'android'}
            onEndReachedThreshold={0.5}
            onEndReached={onFunction.onLoadMore}
            ListEmptyComponent={_onRenderEmpty}
          />
        </>
      :
      <CLoadingPlaceholder />
      } */}
      <ImageBackground  source={Assets.back} resizeMode="cover" style={{flex:1}}>
        <View style={{paddingHorizontal:Devices.sW(2)}}>
          {products ?
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <View style={{backgroundColor:'#fff', flexDirection:'row', borderRadius:4, marginBottom:Devices.sH(2), alignContent:'center', alignItems:'center', paddingVertical:Devices.sH(1), paddingHorizontal:Devices.sW(1)}}>
                        <View style={{width:'30%'}}> 
                          <Image source={{uri: item.images[0].src }} style={{width:'100%', height:60}} resizeMode="contain"/>
                        </View>
                        <View style={{width:'65%'}}>  
                          <Text style={{color:'#E83B55', fontWeight:'700', marginBottom:2}}>{item.name}</Text>
                          <Text style={{color:'#E83B55', fontWeight:'400'}}>${item.price}</Text>
                          <TouchableOpacity style={{backgroundColor:'#E83B55', width:'35%', paddingVertical:2, marginTop:5, }} onPress={() => removeFromWishlist(item.id)}>
                              <Text style={{textAlign:'center', color:'#fff'}}>Remove</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            :
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
              <Icon name='star-shooting' color='#fff' size={50} />
              <Text style={{fontSize:Devices.fS(20), color:'#fff', marginTop:5, fontWeight:'700' }}>Nothing to wish for.</Text>
            </View>
          }
        </View>
          {/* <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
              <Icon name='star-shooting' color='#fff' size={50} />
              <Text style={{fontSize:Devices.fS(20), color:'#fff', marginTop:5, fontWeight:'700' }}>Nothing to wish for.</Text>
              
          </View> */}
      </ImageBackground>

      {/* <CLoading visible={state._loading} /> */}
    </Container>
  )
}