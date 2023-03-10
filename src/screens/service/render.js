/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import { Container, Item, Input, } from 'native-base';
import Icon from 'react-native-fontawesome-pro';
import { TabView } from 'react-native-tab-view';
import firebase from 'react-native-firebase';
/* COMPONENTS */
import CHeader from "~/components/CHeader";
import CLoading from '~/components/CLoading';
import { SkypeIndicator } from "~/components/CIndicator";
import CLoadingPlaceholder from '~/components/CLoadingPlaceholder';
/** COMMON */
import { Languages, Devices, Configs, Assets } from '~/config';
import { cStyles } from '~/utils/styles';
import { Colors } from '~/utils/colors';
/* STYLES */
import styles from './style';
import { ImageBackground } from 'react-native';



const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

const RenderLazyTab = () => <SkypeIndicator color={Colors.PRIMARY_COLOR} />

export const ViewService = ({
  state = null,
  props = null,
  settings = {
  },
  onFunction = {
    onPressCart: () => { },
    onRenderScene: () => { },
    onRenderTabbar: () => { },
    onChangeTabIndex: () => { },
    onPressBack: () => { },
    onFocusSearch: () => { },
    onPressRefine: () => { },
  }
}) => {
  return (
    <Container>
      <CHeader
        style={{backgroundColor:'#E83B55'}}
        props={props}
        searchBar={true}
        rounded={true}
        titleComponent={
          !Configs.supportRTL ?
            <Item style={[cStyles.p_20, cStyles.mr_20, {backgroundColor:'#E83B55'}]}>
              <Icon name={'search'} size={Devices.fS(20)} color={Colors.WHITE_COLOR} type={"regular"} />
              <Input style={[styles.txt_search, cStyles.pl_20, {backgroundColor:'transparent'}]}
                placeholder={Languages[props.language].txt_home_search_bar}
                placeholderTextColor={Colors.WHITE_COLOR}
                selectionColor={Colors.WHITE_COLOR}
                clearTextOnFocus={true}
                onFocus={onFunction.onFocusSearch} />
            </Item>
            :
            <Item style={[cStyles.p_20, cStyles.ml_15]}>
              <Input style={[styles.txt_search, cStyles.pr_20, { textAlign: "right" }]}
                placeholder={Languages[props.language].txt_home_search_bar}
                placeholderTextColor={Colors.WHITE_COLOR}
                selectionColor={Colors.WHITE_COLOR}
                clearTextOnFocus={true}
                onFocus={onFunction.onFocusSearch} />
              <Icon name={'search'} size={Devices.fS(20)} color={Colors.WHITE_COLOR} type={"regular"} />
            </Item>
        }
        iconRight_1={"shopping-cart"}
        iconRight_2={"sliders-v"}
        onPressRight_1={onFunction.onPressCart}
        onPressRight_2={onFunction.onPressRefine}
      />

      {!state._loading ?
        <>
        
          <ImageBackground  source={Assets.back} resizeMode="cover" style={{flex:1,  }} >
          <TabView
            
            initialLayout={styles.con_tab}
            navigationState={state}
            renderScene={onFunction.onRenderScene}
            renderTabBar={onFunction.onRenderTabbar}
            onIndexChange={onFunction.onChangeTabIndex}
            lazy={true}
            lazyPreloadDistance={0}
            renderLazyPlaceholder={RenderLazyTab}
            tabBarPosition={'top'}
            removeClippedSubviews={Devices.OS === 'android'}
            swipeEnabled={false}
          />
          </ImageBackground>
        </>
      :
      <CLoadingPlaceholder />
      }

      {/* <CLoading visible={state._loading} /> */}
    </Container>
  )
}

