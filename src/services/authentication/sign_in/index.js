/**
 ** Name:
 ** Author:
 ** CreateAt:
 ** Description:
**/
/* LIBRARY */
import WooCommerceAPI from '../../WooCommerceAPI';
/** COMMON */
import Routes from '~/services/routes';
import { Configs } from '~/config';

export default {
  jwt: async (params) => {
    try {
      let options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      };

      let results = await fetch(Configs.hostApi + Routes.auth.jwt, options);
      results = results.json();
      return results;
    } catch (error) {
      return null;
    }
  },
  signIn: async (params = {}) => {
    const WooCommerce = new WooCommerceAPI({
      url: Configs.hostApi,
      consumerKey: Configs.cosumerKey,
      consumerSecret: Configs.consumerSecret,
      wpAPI: true,
      version: Configs.versionApiForLogin,
      queryStringAuth: true,
      wpAPIPrefix: Configs.wpAPIPrefixForLogin,
      email : params.email
    });

    try {
      let newURL = Routes.auth.signIn;
      let results = await WooCommerce.get(newURL , {'email' : params.email});
      // console.log('5====================================');
      // console.log(results);
      // console.log('5====================================');
      if(results && results.customers && results.customers[0]){
        let resultTemp = {
          customer: results.customers[0]
        };
        return resultTemp;
      }
      return {errors: true};
    } catch (error) {
      return null;
    }
  }
}