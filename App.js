/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, Appearance, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { configureFontAwesomePro } from "react-native-fontawesome-pro";
import { Provider } from 'react-redux';
/* COMPONENTS */
import RootNavigator from '~/navigatior/RootNavigator';
import CConnection from '~/components/CConnection';
/** REDUX */
import store from '~/redux/store';
/** COMMON */
import { Assets, Devices } from '~/config';
import { cStyles } from '~/utils/styles';
import { Colors, DarkColors, } from '~/utils/colors';
import ThemeProvider from './src/utils/theme/ThemeProvider';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    configureFontAwesomePro("light");
  }

  /** RENDER */
  render() {
    const colorScheme = Appearance.getColorScheme();
    const themeColor =
      colorScheme !== 'light' ? DarkColors : Colors;
    const barStyle = colorScheme !== 'light' ? 'light-content' : 'dark-content';

    return (
      <NavigationContainer>
        <Provider store={store}>
          <ThemeProvider theme={themeColor}>
            <ImageBackground  source={Assets.back} resizeMode="cover" style={{flex:1}}>
              <View style={[cStyles.container, {backgroundColor:'#000'}]}>
                {Devices.OS === 'android' &&
                  <StatusBar barStyle={barStyle} backgroundColor={'#E33B58'} />
                }
                
                  <RootNavigator />
                  <CConnection />
              
              </View>
            </ImageBackground>
          </ThemeProvider>
        </Provider>
      </NavigationContainer>
    )
  }
}

export default App;
