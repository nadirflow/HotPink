/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/**
 ** Name:
 ** Author:
 ** CreateAt:
 ** Description:
 **/
/* LIBRARY */
import React from 'react';
import { View, FlatList, TouchableOpacity, RefreshControl, ImageBackground, Text, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import moment from 'moment';
/* COMPONENTS */
import CHeader from '~/components/CHeader';
import CText from '~/components/CText';
import CCarousel from '~/components/CCarousel';
import CImage from '~/components/CImage';
import Horizontal from '~/components/CLayout/Horizontal';
import CLoading from '~/components/CLoading';
import Column from '~/components/CLayout/Column';
import CardView from '~/components/CLayout/CardView';
import CRate from '~/components/CRate';
import CViewRow from '~/components/CViewRow';
import CLoadingPlaceholder from '~/components/CLoadingPlaceholder';
/* COMMON */
import { Colors } from '~/utils/colors';
import { Assets, Configs, Devices, Keys } from '~/config';
import { cStyles } from '~/utils/styles';
import { layoutWidth } from '~/utils/layout_width';
import Currency from '~/utils/currency';
import Helpers from '~/utils/helpers';
/* STYLES */
import styles from './style';
import Icon from 'react-native-fontawesome-pro';

const renderCouponItem = (index, data, dataLength, onPressPostDetail) => {
  let slugDiscountType = Configs.discountType.find(
    (f) => f.id === data.discount_type,
  );
  let dateExpires = moment(data.date_expires, 'YYYY-MM-DDTHH:mmss').format(
    Configs.formatDate,
  );
  let amount = Helpers.formatNumber(
    Number(data.amount),
    data.discount_type === 'percent' ? 0 : 2,
  );
  let symbol = Helpers.symbolCurrency();

  return (
    <TouchableOpacity onPress={() => onPressPostDetail(data)}>
      <View
        style={[
          styles.con_item_coupon,
          !Configs.supportRTL
            ? { marginLeft: Devices.pH(layoutWidth.width) }
            : { marginRight: Devices.pH(layoutWidth.width) },
        ]}>
        <View
          style={[
            styles.con_coupons_item,
            { backgroundColor: Colors.BACKGROUND_PRIMARY_COLOR },
          ]}>
          <CImage style={styles.img_coupon} source={Assets.image_bg_coupons}>
            <View style={styles.con_bg_blur} />
            {
              <View
                style={[
                  styles.con_info_coupon,
                  Configs.supportRTL && cStyles.column_align_end,
                  !Configs.supportRTL && cStyles.pl_10,
                  Configs.supportRTL && cStyles.pr_10,
                ]}>
                <View
                  style={[
                    styles.con_col_info,
                    Configs.supportRTL && cStyles.column_align_end,
                  ]}>
                  <CImage
                    style={styles.img_icon_coupon}
                    source={Assets.icon_coupon}
                    resizeMode={'contain'}
                  />

                  {data.discount_type === Configs.discountType[2].id && (
                    <CText
                      style={[
                        styles.txt_row_right_bottom,
                        { fontSize: cStyles.txt_base_item.fontSize * 1.5 },
                      ]}>
                      {amount + slugDiscountType.slug}
                    </CText>
                  )}

                  {data.discount_type !== Configs.discountType[2].id && (
                    <CText
                      style={[
                        styles.txt_row_right_bottom,
                        { fontSize: cStyles.txt_base_item.fontSize * 1.5 },
                      ]}>
                      {(Configs.currencyPosition === Currency.left
                        ? symbol
                        : '') +
                        amount +
                        (Configs.currencyPosition === Currency.right
                          ? symbol
                          : '')}
                    </CText>
                  )}
                </View>

                <View
                  style={[
                    styles.con_col_info,
                    Configs.supportRTL && cStyles.column_align_end,
                  ]}>
                  <CText
                    style={styles.txt_row_right_top}
                    i18nKey={'date_expired'}
                  />
                  <CText
                    style={[styles.txt_row_right_bottom, { fontWeight: '800' }]}>
                    {dateExpires}
                  </CText>
                </View>
              </View>
            }
          </CImage>
        </View>
        <CText style={styles.txt_item_coupon_content} numberOfLines={2}>
          {data.description}
        </CText>
      </View>
    </TouchableOpacity>
  );
};

const renderHeaderList = (slug, onPress) => {
  return (
    <CViewRow
      style={styles.con_header_group}
      leftComp={
        <View style={styles.con_title_category}>
          <CText style={styles.txt_coupon_title} i18nKey={slug} />
        </View>
      }
      rightComp={
        onPress ? (
          <TouchableOpacity onPress={onPress}>
            <CText style={styles.txt_coupon_show_all} i18nKey={'show_all'} />
          </TouchableOpacity>
        ) : (
          <View />
        )
      }
    />
  );
};

const _onRenderEmpty = () => {
  return (
    <View style={[cStyles.full_center, cStyles.pv_20, { width: Devices.width }]}>
      <CText style={cStyles.txt_no_data} i18nKey={'no_data'} />
    </View>
  );
};

export const ViewHome = ({
  state = null,
  props = null,
  settings = {
    banners: null,
    order: [],
    logo: '',
    appName: '',
  },
  onFunction = {
    onPressCart: () => { },
    onPressCoupon: () => { },
    onPressStickyPost: () => { },
    onFocusSearch: () => { },
    onPressServiceItem: () => { },
    onPressCategory: () => { },
    onPressSeeAllCate: () => { },
    onPressSeeAllVendors: () => { },
    onPressSeeAllViewedProducts: () => { },
    onRefresh: () => { },
    onPressListCoupon: () => { },
    onOpenDrawer: () => { },
    onPressNewsItem: () => { },
    onToggleModalRating: () => { },
    onPressStartRating: () => { },
    onPressAddCart: () => { },
    onPressVendor: () => { }
  },
}) => {

  return (
    <Container>
      <CHeader
        props={props}
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
        iconLeft_1={'bars'}
        iconRight_1={'shopping-cart'}
        iconRight_2={'search'}
        onPressLeft_1={onFunction.onOpenDrawer}
        onPressRight_1={onFunction.onPressCart}
        onPressRight_2={onFunction.onFocusSearch}
      />
      <ImageBackground source={Assets.back} resizeMode="cover" style={{flex:1,}}>
        
          <View style={{flex:1, backgroundColor:'#fff', marginTop:Devices.sH(10), borderTopRightRadius:30, borderTopLeftRadius:30, }}>
            <ScrollView style={{   paddingHorizontal:Devices.sW(5), paddingTop:Devices.sH(3)}} contentContainerStyle={{flexGrow:1}}>
              <Text style={{fontSize:Devices.fS(26), fontWeight:'700', color: '#E63B57'}}>Explore</Text>
              <Text style={{fontSize:Devices.fS(12), fontWeight:'400', color: '#E63B57'}}>Private Psychotherapy Practice </Text>
              <View style={{flexDirection:'row', alignContent:'space-between', justifyContent:'space-between', marginTop:Devices.sH(3)}}>
                <View style={{width:Devices.sW('44%')}}>
                    <TouchableOpacity>  
                      <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.im1} resizeMode="cover" style={{alignItems:'baseline',marginBottom:Devices.sH(1), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'flex-end', height:Devices.sH(25), borderRadius:10,}}>
                        <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', }}>Self</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>  
                      <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.im3} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(1), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(20), borderRadius:10,}}>
                        <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Life Styles</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>  
                      <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.im4} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(1), justifyContent:'center', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(16), borderRadius:10,}}>
                        <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Upcoming Products</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{width:Devices.sW('44%')}}>
                    <TouchableOpacity>  
                      <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.im2} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(1), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(36), borderRadius:10,}}>
                        <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Sex With Your Partner</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>  
                      <ImageBackground imageStyle={{ borderRadius: 10}} source={Assets.im5} resizeMode="cover" style={{alignItems:'center', marginBottom:Devices.sH(1), justifyContent:'flex-end', paddingHorizontal:10, paddingVertical:10, alignContent:'center', height:Devices.sH(25), borderRadius:10,}}>
                        <Icon
                        name='comment-dots'
                        color='#fff'
                        size={20}
                        type="solid"
                        />
                        <Text style={{fontSize:Devices.fS(20), fontWeight:'700', color: '#fff', textAlign:'center',}}>Talk With June</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
       
      </ImageBackground>
      <CRate
        visible={state._rating}
        onRequestClose={onFunction.onToggleModalRating}
        appName={settings.appName}
        onOK={onFunction.onPressStartRating}
      />

      {/* <CLoading visible={state._loading} /> */}
    </Container>
  );
};
