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
  getWishlistKey: async (params = {}) => {
    let newUrl = Routes.wishlist.getWishlistKey;
    
    // try {
      
      const token = await Helpers.getDataStorage(Keys.AS_DATA_JWT);
      const user = await Helpers.getDataStorage(Keys.AS_DATA_USER);
      let _user = JSON.parse(user)
      const response = await fetch(Configs.hostApi+'/'+Configs.wpAPIPrefix+newUrl+_user.id, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then(response => response.json());
      return response;

    // } catch (error) {
    //   return null;
    // }
  },
  
  getProductForWishlistByKey: async (shareKey) => {
    // try {
      
      const token = await Helpers.getDataStorage(Keys.AS_DATA_JWT);
      const response = await fetch(Configs.hostApi+'/'+Configs.wpAPIPrefix+`/wc/v3/wishlist/${shareKey}/get_products`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then(response => response.json());
      return response;

    // } catch (error) {
    //   return null;
    // }
  },
  removeProductFromWishlist: async (item) => {
    // try {
      let newUrl = Routes.wishlist.removeProductByItemId;
      
      const token = await Helpers.getDataStorage(Keys.AS_DATA_JWT);
      const response = await fetch(Configs.hostApi+'/'+Configs.wpAPIPrefix + newUrl + item.item_id, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then(response => response.json());
      return response;

    // } catch (error) {
    //   return null;
    // }
  },
}