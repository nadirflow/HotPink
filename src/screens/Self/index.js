import React, {useState} from 'react';
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
import { useNavigation } from '@react-navigation/native';
const persons = [
  {
    id: '1',
    name: 'Earnest Green',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '2',
    name: 'Winston Orn',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '3',
    name: 'Carlton Collins',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '4',
    name: 'Malcolm Labadie',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '5',
    name: 'Michelle Dare',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '6',
    name: 'Carlton Zieme',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '7',
    name: 'Malcolm Labadie',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '8',
    name: 'Michelle Dare',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '9',
    name: 'Carlton Zieme',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '10',
    name: 'Malcolm Labadie',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '11',
    name: 'Michelle Dare',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  {
    id: '12',
    name: 'Carlton Zieme',
    image: 'https://images.pexels.com/photos/14778924/pexels-photo-14778924.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
  },
  
];
// const ItemDivider = () => {
//   return (
//     <View style={{backgroundColor:'#fff', paddingHorizontal:10, paddingVertical:10, borderRadius:5, flexDirection:'row' }}>
//       <View style={{width:'20%'}}>
//         <Image source={Assets.audio} resizeMode="contain" />
//       </View>
//       <View style={{width:'75%', paddingHorizontal:15,}}>
//           <Text style={{fontSize:Devices.fS(16), fontWeight:'700', color: '#C63A66'}}>A Candle Visualization</Text>
//           <Text style={{fontSize:Devices.fS(10), fontWeight:'400', color: '#000'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
//           <TouchableOpacity style={{backgroundColor:'#D53A5F', borderRadius:1, alignSelf:'flex-start', paddingHorizontal:5, paddingVertical:3, marginTop:5,}} onPress={() => this._onPressAudio}>
//             <Text style={{fontSize:Devices.fS(8), fontWeight:'400', color: '#fff'}}>Listen Now</Text>
//           </TouchableOpacity>
//       </View>
//     </View>
//   );
// }



class Self extends React.Component {
  
  constructor(props) {
  
    super(props);
    
  }
  _onPressAudio = () => {
    console.log('----------------------------------');
    console.log('----------------------------------');
    console.log('----------------------------------');
    console.log(this.props);
    console.log('----------------------------------');
    console.log('----------------------------------');
    console.log('----------------------------------');
     this.props.navgation.navigate('AudioPlayer');
    
  }
  
  _onRenderSeparatorItem = () => (
    <View style={{backgroundColor:'#fff', paddingHorizontal:10, paddingVertical:10, borderRadius:5, flexDirection:'row' }}>
      <View style={{width:'20%'}}>
        <Image source={Assets.audio} resizeMode="contain" />
      </View>
      <View style={{width:'75%', paddingHorizontal:15,}}>
          <Text style={{fontSize:Devices.fS(16), fontWeight:'700', color: '#C63A66'}}>A Candle Visualization</Text>
          <Text style={{fontSize:Devices.fS(10), fontWeight:'400', color: '#000'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
          <TouchableOpacity style={{backgroundColor:'#D53A5F', borderRadius:1, alignSelf:'flex-start', paddingHorizontal:5, paddingVertical:3, marginTop:5,}} onPress={() => this.props.navigation.navigate('AudioPlayer')}>
            <Text style={{fontSize:Devices.fS(8), fontWeight:'400', color: '#fff'}}>Listen Now</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
  render() {
    
    return (
      <>
        <ImageBackground source={Assets.back} resizeMode="cover" style={{flex:1,    paddingLeft:'5%', paddingRight:'5%'}}>
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
        iconLeft_1={'heart'}
        iconRight_1={'shopping-cart'}
        iconRight_2={'search'}
       
      />
          
            <View style={{paddingVertical:15, flex:1}}>
              <Text style={{fontSize: Devices.fS(24), color:'#fff', fontWeight:'700'}}>Self</Text>
              <Text style={{fontSize: Devices.fS(12), color:'#fff', fontWeight:'400'}}>Private Psychotherapy Practice </Text>
              <View style={{justifyContent:'space-between'}}>
                <FlatList
                  data={persons}
                  columnWrapperStyle={{  flex: 1,justifyContent: "space-between", marginTop:20,}}
                    numColumns={3}
                    ItemSeparatorComponent={this._onRenderSeparatorItem}
                    renderItem={(item) => { 
                      
                      return(
                      <TouchableOpacity style={{backgroundColor:'#fff', borderRadius:5, padding:5, marginBottom:20, width:Devices.sW("25%") } } onPress={() => this.props.navigation.navigate('ArticleSelf')}>
                        <Image source={{uri: item.item.image}} style={{width:'100%', height:80, }} />
                        <Text style={{fontSize:14, color:'#C73A66', fontWeight:'700', textAlign:'center'}}>{item.item.name}</Text>
                      </TouchableOpacity>
                      );

                    }
                  }
                  // renderItem={({ item }) => this.renderItem(item)}
                  keyExtractor={(item) => item.id}
                  
                />
              </View>
            </View>
          
        </ImageBackground>
      </>
    );
  };
};


export default Self;
