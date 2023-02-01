/**
 ** Name:
 ** Author:
 ** CreateAt:
 ** Description:
**/
/* LIBRARY */
import moment from 'moment';
import { Keys, Configs} from '~/config';
import Routes from '~/services/routes';
import Helpers from '~/utils/helpers';

export default {
  hasSubscription: async () => {
    // For Testing
    if(Configs.debugSubscription) return Configs.debugHasSubscription;

    let user = await Helpers.getDataStorage(Keys.AS_DATA_USER);
    if(user){
      let month_start =  moment().startOf('month').format('YYYY-MM-DD') + 'T00:00:00';
      let orders = await fetch(Configs.hostApi + '/' + Configs.wpAPIPrefix + Routes.user.subsription +'?consumer_key=' + Configs.cosumerKey + '&consumer_secret=' + Configs.consumerSecret + '&customer='+ JSON.parse(user).id  +'&product=' + Configs.subscribeProduct + '&after=' + month_start )
      .then(response => response.json());
      if(orders.length){
        return true
      }
      return false;
    }
  }
}