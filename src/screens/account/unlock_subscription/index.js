/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Text, Image,BackHandler } from 'react-native'; 
import {
  Container, Left, Body, Right, Button
} from 'native-base';
import Icon from 'react-native-fontawesome-pro';
import Rate, { AndroidMarket } from 'react-native-rate';
import { Colors } from '~/utils/colors';
import Helpers from '~/utils/helpers';
/* COMPONENTS */
import CHeader from "~/components/CHeader";
import Services from '~/services';
import CText from '~/components/CText';
import CViewRow from "~/components/CViewRow";
/* COMMON */
import { cStyles } from '~/utils/styles';
import { Devices, Keys, Configs, Assets } from '~/config';
import { layoutWidth } from '~/utils/layout_width';
import ApiWoo from '~/services/apiWoo';
import * as userActions from '~/redux/actions/user';
import * as cartActions from '~/redux/actions/cart';
import cart from '~/redux/reducers/cart';

class UnlockSubscription extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    console.log('UnlockSubscription====================================');
    console.log(this.props.cartKey);
    // clear Cart First
    this.props.cartActions.removeAllCart();
    Helpers.removeKeyStorage(Keys.AS_DATA_CART);
    console.log('UnlockSubscription====================================');
  }
 
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    
    this.props.cartActions.removeAllCart();
    this.props.navigation.goBack(null);
    
        // let asCartKey =  Helpers.getDataStorage(Keys.AS_DATA_CART_KEY)
        // console.log('remove key on back press: ',asCartKey); 
      return true;
  }
  /* FUNCTIONS */
  // _onPressBack = async () => {
    
  //   // clear Cart First
  //   this.props.cartActions.removeAllCart();
    
  //   this.props.navigation.goBack();

    
  // }


  /* RENDER */
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CHeader

          style={{ backgroundColor: '#E83B55', color: '#fff' }}
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
        <ImageBackground source={Assets.back} resizeMode="cover" style={{ flex: 1, paddingLeft: '8%', paddingRight: '8%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={Assets.hot} />
          <View style={{ marginVertical: 30, justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', }}>
            <Text style={{ fontSize: Devices.fS(16), color: '#fff', marginBottom: 20, }}><Icon name='check-circle' style={{ marginRight: 10, }} color='#fff' size={16} type="solid" /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
            <Text style={{ fontSize: Devices.fS(16), color: '#fff', marginBottom: 20, }}><Icon name='check-circle' style={{ marginRight: 10, }} color='#fff' size={16} type="solid" /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
            <Text style={{ fontSize: Devices.fS(16), color: '#fff', marginBottom: 20, }}><Icon name='check-circle' style={{ marginRight: 10, }} color='#fff' size={16} type="solid" /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
            <Text style={{ fontSize: Devices.fS(16), color: '#fff', marginBottom: 20, }}><Icon name='check-circle' style={{ marginRight: 10, }} color='#fff' size={16} type="solid" /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
            <Text style={{ fontSize: Devices.fS(16), color: '#fff', marginBottom: 20, }}><Icon name='check-circle' style={{ marginRight: 10, }} color='#fff' size={16} type="solid" /> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
          </View>
          <Text style={{ textAlign: 'center', fontSize: Devices.fS(14), color: '#fff' }}>Try 7 Days For Free</Text>
          <TouchableOpacity onPress={() => this._invokeProductToCart()} style={{ backgroundColor: '#fff', width: '100%', paddingVertical: Devices.sH(1.5), borderRadius: 15, marginVertical: 5, }}><Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', color: '#A93A75' }}>CONTINUE</Text></TouchableOpacity>
          <Text style={{ textAlign: 'center', fontSize: Devices.fS(14), color: '#fff' }}>$10.00 per month after FREE 7-day trial</Text>
          <Text style={{ textAlign: 'center', fontSize: Devices.fS(14), color: '#fff', marginTop: 15 }}>Subscription Terms: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</Text>
        </ImageBackground>
      </SafeAreaView>
    )
  }
  _invokeProductToCart = () => {
    this.setState({ _loadmore: false, _loadForList: true }, () => {
      let params = {
        page: 1,
        category: Configs.subscribeCat,
        per_page: 10
      };
      this._addProductToCart(params, Keys.REFRESH);
    });
  }
  _addProductToCart = async (params, TYPE) => {

    // Clear Cart for Checkout Subscription
    let cartRes = await Services.Cart.clearCart();
    // Helpers.getDataStorage(keys.AS_)
    let res1 = await Services.Service.listProducts(params);
    let item = Helpers.prepareItemCart(res1[0].id, 0,null, {}, 1, true);
    let _params = {
        cartKey:  null,
        data: item
    }
    let res2 = await Services.Cart._addtoCart(_params);
    console.log('res2 ',res2);
    if (res2 && res2.cart_key) {
      _params.cartKey = res2.cart_key;
      await this.props.cartActions.updateCartKey(res2.cart_key)
    }
    
    let url = '/products/110';
    let results = await ApiWoo.get(url);
    let _product = results;
    let originPrice = 0,
      salePrice = 0;
    if (_product.on_sale && _product.sale_price !== '') {
        originPrice = Number(_product.regular_price);
    } else {
        originPrice = Number(_product.price);
    }

    if (_product.on_sale && _product.sale_price !== '') {
        salePrice = Number(_product.sale_price);
    }

    let selected = {
        id: _product.id,
        name: _product.name,
        short_description: _product.short_description,
        description: _product.description,
        images: _product.images ? _product.images : Assets.image_failed,
        categories: _product.categories,
        average_rating: _product.average_rating,
        rating_count: _product.rating_count,
        related_ids: _product.related_ids,
        sku: _product.sku,
        price: _product.price,
        originPrice,
        salePrice,
        variation: null,
        numberOfProduct: 1,
        sold_individually: _product.sold_individually || false,
        shipping_class: _product.shipping_class,
        shipping_class_id: _product.shipping_class_id,
    };
    // THen Add 
    this.props.cartActions.addItemCart(selected);
    // console.log('_params: ',_params);
    this.setState({ cartKey: _params.cartKey});

    let _isAdd = true;

    this.setState(
        {
            _variationSelected: null,
            _serviceSelected: null,
            _variations: null,
            _isAdd,
            _loadingBtnWebview: false
        },
        () => {
            /** Update data cart to async storage */
            Helpers.setDataStorage(
                Keys.AS_DATA_CART,
                JSON.stringify(this.props.cart),
            );
            
        },
    );
    
    this.props.navigation.navigate('Cart');
  }
}


const mapStateToProps = state => {
  return {
    cart: state.cart.carts,
    cartKey: state.cart.cartKey,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      userActions: bindActionCreators(userActions, dispatch),
      cartActions: bindActionCreators(cartActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnlockSubscription);