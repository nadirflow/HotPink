/**
 ** Name:
 ** Author:
 ** CreateAt:
 ** Description:
**/
/* LIBRARY */
import Routes from '~/services/routes';
import ApiWP from '../apiVD';
import axios from 'axios';
/** COMMON */
import { Configs, Keys } from '~/config';

export default {
  addToCart: async (params = {}) => {
    let newUrl = Routes.cart.addToCart;
    if (params.cartKey) {
      newUrl = `${Routes.cart.addToCart}?cart_key=${params.cartKey}`
    }
    try {
      console.log('====================================');
      console.log(newUrl);
      console.log(params.data);
      let results = await ApiWP.post(newUrl, params.data);
      console.log('addToCart====================================: ',results);
      return results;
    } catch (error) {
      return null;
    }
  },
  _addtoCart: (async (params = {}) => {
    let newUrl = Routes.cart.addToCart;
    if (params.cartKey) {
      newUrl = `${Routes.cart.addToCart}?cart_key=${params.cartKey}`;
    }
    let results = await ApiWP.post(newUrl, params.data);
   return results;
  }),
  getCart: async (params = {}) => {
    let newUrl = `${Routes.cart.get}?cart_key=${params.cartKey}`
    try {
      let results = await ApiWP.get(newUrl);
      return results;
    } catch (error) {
      return null;
    }
  },

  updateQuantity: async (params = {}) => {
    let newUrl = `${Routes.cart.updateQuantity}?cart_key=${params.cartKey}`
    try {
      let results = await ApiWP.post(newUrl, params.data);
      return results;
    } catch (error) {
      return null;
    }
  },

  removeItem: async (params = {}) => {
    let newUrl = `${Routes.cart.removeItem}?cart_key=${params.cartKey}`
    try {
      let results = await ApiWP.post(newUrl, params.data);
      return results;
    } catch (error) {
      return null;
    }
  },

  addCoupon: async (params = {}) => {
    let newUrl = `${Routes.cart.addCoupon}?cart_key=${params.cartKey}`
    let data = new FormData();
    data.append('coupon_code', params.data.coupon_code);
    console.log(data)
    try {
      let results = await ApiWP.post(newUrl, data, true);
      return results;
    } catch (error) {
      return null;
    }
  },

  removeCoupon: async (params = {}) => {
    let newUrl = `${Routes.cart.removeCoupon}?cart_key=${params.cartKey}`
    let data = new FormData();
    data.append('coupon_code', params.data.coupon_code)
    try {
      let results = await ApiWP.post(newUrl, data, true);
      return results;
    } catch (error) {
      return null;
    }
  },
  
  clearCart: async (params = {}) => {
    let newUrl = `${Routes.cart.clearCart}`
    try {
      let results = await ApiWP.get(newUrl);
      return results;
    } catch (error) {
      return null;
    }
  },
}