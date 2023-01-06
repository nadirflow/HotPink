import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-fontawesome-pro';
import CImage from '~/components/CImage';
import { Assets, Devices } from '~/config';
import { Colors } from '~/utils/colors';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text><Button style={{backgroundColor:'transparent', shadowOpacity:0, borderWidth:0, borderColor:'transparent', shadowColor:'transparent', }}><Icon
              name={"chevron-left"}
              size={Devices.fS(25)} 
              color={Colors.WHITE_COLOR}
              type={"regular"} /></Button></Text>
        <Text><CImage source={Assets.log} resizeMode={'contain'}  style={{width:Devices.sW(20), height:Devices.sH(7)}}/></Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;