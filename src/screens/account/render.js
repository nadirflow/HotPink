/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import { View, TouchableOpacity, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import {
  Container, Content, Left, Body, Right, Button, Footer
} from 'native-base';
import Icon from 'react-native-fontawesome-pro';
import VersionCheck from 'react-native-version-check';
/* COMPONENTS */
import CHeader from "~/components/CHeader";
import CText from '~/components/CText';
import CImage from "~/components/CImage";
import CViewRow from "~/components/CViewRow";
/* COMMON */
import { cStyles } from '~/utils/styles';
import { Colors } from '~/utils/colors';
import { Configs, Devices, Assets } from '~/config';
import { layoutWidth } from '~/utils/layout_width';
let ScreenHeight = Dimensions.get("window").height;
/* STYLES */
import styles from './style';

const INIT_ROW_1 = [
  {
    icon: 'user',
    title: "my_account",
    routeName: 'Profile',
    needLogin: true
  },
  {
    icon: 'calendar-star',
    title: "appointment",
    routeName: 'Appointment',
    needLogin: true
  },
  {
    icon: 'bookmark',
    title: "bookmark",
    routeName: 'Bookmark',
    needLogin: false
  },
  // {
  //   icon: 'bell',
  //   title: "notification",
  //   routeName: 'Notification'
  // }
]
const INIT_ROW_2 = [
  {
    icon: 'user-friends',
    title: "invite_friends",
    routeName: 'Share',
    needLogin: false
  },
  {
    icon: 'info-circle',
    title: "help_info",
    routeName: 'HelpInfo',
    needLogin: false
  },
  {
    icon: 'phone-alt',
    title: "phone",
    routeName: "Phone",
    needLogin: false
  },
  {
    icon: 'sign-out-alt',
    title: "sign_out",
    routeName: 'SignOut',
    needLogin: true
  }
]


export const ViewAccount = ({
  props = null,
  onFunction = {
    onPressCart: () => { },
    onPressProfile: () => { },
    onPressRow: () => { },
    onPressSignOut: () => { },
    onPressSocial: () => { }
  }
}) => {
  let newFullName = "", avatar_url = Configs.avatarUrlDefault;
  if (props.user) {
    newFullName = props.user.first_name + " " + props.user.last_name;
    avatar_url = props.user.avatar_url;
  }

  return (
    <ImageBackground  source={Assets.back} resizeMode="cover" style={{flex:1}}>
    <Container style={{backgroundColor:'transparent'}}>
      <CHeader
       style={{background:'#000'}}
        props={props}
        title={"account"}
        iconLeft_1={"none"}
        iconRight_1={(props. user && props.user.role === Configs.USER_ROLE.STORE_MANAGER) ? "none" : "shopping-cart"}
        onPressRight_1={onFunction.onPressCart}
      />
      
      <View style={{backgroundColor:'#fff',  borderTopRightRadius:30, borderTopLeftRadius:30, paddingTop:20, marginTop:30,  }}>
        {props.user &&
          <CViewRow style={{ marginHorizontal: Devices.pH(layoutWidth.width) }}
            leftComp={
              <CImage style={styles.img_avatar}
                source={{ uri: avatar_url }}
                resizeMode={"contain"} />
            }
            rightComp={
              <View style={[cStyles.row_align_center, Configs.supportRTL && cStyles.pr_10]}>
                <CText style={[styles.txt_avatar, {color:'#C73A66'}]} i18nKey={"hello"} />
                <CText style={[styles.txt_name_avatar, {color:'#C73A66'} ]}>{newFullName}</CText>
              </View>
            }
          />
        }

        {!props.user &&
          <View style={[cStyles.column_align_center, { paddingHorizontal: Devices.pH(layoutWidth.width) }]}>
            <CText style={[styles.txt_title, {color:'#C73A66'}]} i18nKey={"hello_guest_signin"} />
            <CText style={[styles.txt_title, {color:'#C73A66'}]} i18nKey={"hello_guest_signin_2"} />

            <CViewRow style={cStyles.pv_10}
              leftComp={
                <Button block bordered
                  style={[styles.con_btn_sign_up,
                  { borderColor: '#C73A66', backgroundColor:'transparent' },
                  Configs.supportRTL ? cStyles.ml_5 : cStyles.mr_5]}
                  onPress={() => onFunction.onPressProfile("SignUp")} >
                  <CText style={[styles.txt_btn_sign_up, { color: '#C73A66' }]} i18nKey={'create_account'} />
                </Button>
              }

              rightComp={
                <Button block
                  style={[styles.con_btn_sign_in,
                  { backgroundColor: '#C73A66' },
                  Configs.supportRTL ? cStyles.mr_5 : cStyles.ml_5]}
                  onPress={() => onFunction.onPressProfile("SignIn")} >
                  <CText style={[styles.txt_btn_sign_in, {color: '#fff'}]} i18nKey={'sign_in'} />
                </Button>
              }
            />
          </View>
        }

        <FlatList contentContainerStyle={[styles.con_list, { marginHorizontal: Devices.pH(layoutWidth.width) }]}
          data={INIT_ROW_1}
          renderItem={({ item }) => {
            if (item.needLogin) {
              if (props.user) {
                return (
                  <TouchableOpacity onPress={() => onFunction.onPressRow(item)}>
                    <CViewRow style={cStyles.pv_15} between
                      leftComp={
                        <CViewRow
                          leftComp={
                            <Icon name={item.icon}
                              color={'#C73A66'}
                              size={cStyles.ic_left_detail.size}
                              type={cStyles.ic_left_detail.type} />
                          }
                          rightComp={
                            <View style={styles.con_content_center_row}>
                              <CText style={[styles.txt_row,
                              Configs.supportRTL ? cStyles.pr_20 : cStyles.pl_20, {color: '#E83B55'}]} i18nKey={item.title} />
                            </View>
                          }
                        />
                      }
                      rightComp={
                        <Right style={[Configs.supportRTL ? cStyles.column_align_start : cStyles.column_align_end]}>
                          <Icon name={Configs.supportRTL ? "angle-left" : cStyles.ic_right_detail.name}
                            color={cStyles.ic_right_detail.color}
                            size={cStyles.ic_right_detail.size}
                            type={cStyles.ic_right_detail.type} />
                        </Right>
                      }
                    />
                  </TouchableOpacity>
                )
              }
              return null;
            }

            return (
              <TouchableOpacity onPress={() => onFunction.onPressRow(item)}>
                <CViewRow style={cStyles.pv_15} between
                  leftComp={
                    <CViewRow
                      leftComp={
                        <Icon name={item.icon}
                        color={'#C73A66'}
                          size={cStyles.ic_left_detail.size}
                          type={cStyles.ic_left_detail.type} />
                      }
                      rightComp={
                        <View style={[
                          styles.con_content_center_row
                        ]}>
                          <CText style={[styles.txt_row,
                              Configs.supportRTL ? cStyles.pr_20 : cStyles.pl_20, {color: '#E83B55'}]} i18nKey={item.title} />
                        </View>
                      }
                    />
                  }
                  rightComp={
                    <Right style={[Configs.supportRTL ? cStyles.column_align_start : cStyles.column_align_end]}>
                      <Icon name={Configs.supportRTL ? "angle-left" : cStyles.ic_right_detail.name}
                        color={'#C73A66'}
                        size={cStyles.ic_right_detail.size}
                        type={cStyles.ic_right_detail.type} />
                    </Right>
                  }
                />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => props.user && <View style={styles.con_separator_option} />}
          ListHeaderComponent={<CText style={[cStyles.txt_title_group, {color: '#E83B55'}]} i18nKey={"information"} />}
        />


        <FlatList contentContainerStyle={[styles.con_list, { marginHorizontal: Devices.pH(layoutWidth.width) }]}
          data={INIT_ROW_2}
          renderItem={({ item }) => {
            if (item.needLogin) {
              if (props.user) {
                return (
                  <TouchableOpacity onPress={() =>
                    item.routeName === "SignOut" ? onFunction.onPressSignOut() : onFunction.onPressRow(item)
                  }>
                    <CViewRow style={cStyles.pv_15} between
                      leftComp={
                        <CViewRow
                          leftComp={
                            <Icon name={item.icon}
                              color={cStyles.ic_left_detail.color}
                              size={cStyles.ic_left_detail.size}
                              type={cStyles.ic_left_detail.type} />
                          }
                          rightComp={
                            <View style={[
                              styles.con_content_center_row
                            ]}>
                              <CText style={[styles.txt_row,
                              Configs.supportRTL ? cStyles.pr_20 : cStyles.pl_20]} i18nKey={item.title} />
                            </View>
                          }
                        />
                      }
                      rightComp={
                        item.routeName !== "SignOut" ?
                          <Right style={[
                            Configs.supportRTL ? cStyles.column_align_start : cStyles.column_align_end
                          ]}>
                            <Icon name={Configs.supportRTL ? "angle-left" : cStyles.ic_right_detail.name}
                              color={cStyles.ic_right_detail.color}
                              size={cStyles.ic_right_detail.size}
                              type={cStyles.ic_right_detail.type} />
                          </Right>
                          : <View />
                      }
                    />
                  </TouchableOpacity>
                )
              }
              return null;
            }

            return (
              <TouchableOpacity onPress={() => onFunction.onPressRow(item)}>
                <CViewRow style={cStyles.pv_15} between
                  leftComp={
                    <CViewRow
                      leftComp={
                        <Icon name={item.icon}
                        color={'#C73A66'}
                          size={cStyles.ic_left_detail.size}
                          type={cStyles.ic_left_detail.type} />
                      }
                      rightComp={
                        <View style={[
                          styles.con_content_center_row
                        ]}>
                          <CText style={[styles.txt_row,
                              Configs.supportRTL ? cStyles.pr_20 : cStyles.pl_20, {color: '#E83B55'}]} i18nKey={item.title} />
                        </View>
                      }
                    />
                  }
                  rightComp={
                    item.routeName === "Phone" ?
                      <CText style={[cStyles.txt_body_meta_item, {color: '#E83B55'}]}>
                        {props.settingApp.general.contact}
                      </CText>
                      :
                      <Right style={[Configs.supportRTL ? cStyles.column_align_start : cStyles.column_align_end]}>
                        <Icon name={Configs.supportRTL ? "angle-left" : cStyles.ic_right_detail.name}
                           color={'#C73A66'}
                          size={cStyles.ic_right_detail.size}
                          type={cStyles.ic_right_detail.type} />
                      </Right>
                  }
                />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.con_separator_option} />}
          ListHeaderComponent={<CText style={[cStyles.txt_title_group, cStyles.pt_10, {color: '#E83B55'}]} i18nKey={"settings"} />}
        />

        <View style={[styles.con_bottom_socials,
        { paddingHorizontal: Devices.pH(layoutWidth.width) },
        Configs.supportRTL && cStyles.row_justify_end]}>
          <TouchableOpacity
            style={[styles.con_icon_social, {
              backgroundColor: Colors.FACEBOOK_COLOR
            }, !Configs.supportRTL ? cStyles.mr_10 : cStyles.ml_10]}
            onPress={() => onFunction.onPressSocial("fb")}>
            <Icon name={"facebook-f"} color={Colors.WHITE_COLOR} size={Devices.fS(18)} type={"brands"} />
          </TouchableOpacity> 

          <TouchableOpacity style={[styles.con_icon_social, {
            backgroundColor: Colors.TWITTER_COLOR
          }, !Configs.supportRTL ? cStyles.mr_10 : cStyles.ml_10]} onPress={() => onFunction.onPressSocial("fb")}>
            <Icon name={"twitter"} color={Colors.WHITE_COLOR} size={Devices.fS(18)} type={"brands"} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.con_icon_social, !Configs.supportRTL ? cStyles.mr_10 : cStyles.ml_10]} onPress={() => onFunction.onPressSocial("fb")}>
            <Image style={styles.con_icon_social} source={Assets.icon_instagram} resizeMode={"contain"} />
          </TouchableOpacity>
        </View>
      </View>
      
      <Footer style={styles.con_footer}>
        <CText style={[styles.txt_footer, {color: '#E83B55'}]}>	&#169;{" " +
          "Hot Pink" + " v" + VersionCheck.getCurrentVersion()}
        </CText>
      </Footer>
      
    </Container >
    </ImageBackground>
  )
}