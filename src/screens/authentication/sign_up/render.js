/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import {
  View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ImageBackground
} from 'react-native';
import {
  Form, Item, Input, Label, Button, Spinner, Container,
  Content,
  Text
} from "native-base";
import Icon from 'react-native-fontawesome-pro';
import { useColorScheme } from 'react-native-appearance';
import CountryPicker, {
  Flag,
  DARK_THEME,
  DEFAULT_THEME
} from 'react-native-country-picker-modal';
/* COMPONENTS */
import CItemInput from "~/components/CItemInput";
import CViewRow from "~/components/CViewRow";
import CText from '~/components/CText';
/* COMMON */
import { Colors } from '~/utils/colors';
import { cStyles } from '~/utils/styles';
import { Assets, Configs, Devices, Languages } from '~/config';
/* STYLES */
import styles from './style';
import TopBar from '~/screens/TopBar';


const inputFields = {
  username: "username",
  firstname: "firstname",
  lastname: "lastname",
  email: "email",
  phone: "phone",
  password: "password",
  confirmpassword: "confirmpassword"
}

export const ViewSignUp = ({
  state = null,
  props = null,
  inputs = {},
  onFunction = {
    onFocusNextField: () => { },
    onPressSignUp: () => { },
    onPressBack: () => { },
    onSendOtp: () => { },
    onTogglePicker: () => { },
    onSelectCountry: () => { },
    onPressSignIn: () => { },
    onChangeText: () => { }
  }
}) => {
  let colorScheme = useColorScheme();

  return (
    
    <ImageBackground source={Assets.back} resizeMode='cover' style={{flex:1,   }}>
      <TopBar></TopBar>
        <Content style={cStyles.flex_full} contentContainerStyle={[cStyles.ph_20, styles.con_header]}>
          <Form >
            
            <Text style={{color:'#fff', fontSize:Devices.fS(22), fontWeight:'700', marginBottom:20,}}>Sign Up</Text>
            
              {/** FIRST NAME INPUT */}
              
                <Input style={{ backgroundColor:'#B3FFFFFF', borderRadius:6, paddingHorizontal:15, marginBottom:15,}}
                  getRef={ref => inputs[inputFields.firstname] = ref}
                  disabled={state._loading}
                  removeClippedSubviews={Devices.OS === 'android'}
                  placeholderTextColor={'#A93A75'}
                  value={state._valueFirstName}
                  blurOnSubmit={false}
                  placeholder={'First Name'}
                  autoFocus={true}
                  returnKeyType={'next'}
                  selectionColor={Colors.BLACK_COLOR}
                  onChangeText={value => onFunction.onChangeText(value, "firstname")}
                  onSubmitEditing={() => inputs[inputFields.lastname]._root.focus()}
                />
              

              {/** LAST NAME INPUT */}
              
                <Input style={{ backgroundColor:'#B3FFFFFF', borderRadius:6, paddingHorizontal:15, marginBottom:15,}}
                  getRef={ref => inputs[inputFields.lastname] = ref}
                  disabled={state._loading}
                  removeClippedSubviews={Devices.OS === 'android'}
                  placeholderTextColor={'#A93A75'}
                  placeholder={'Last Name'}
                  value={state._valueLastName}
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                  selectionColor={Colors.BLACK_COLOR}
                  onChangeText={value => onFunction.onChangeText(value, "lastname")}
                  onSubmitEditing={() => inputs[inputFields.username]._root.focus()}
                />
             
           

            {/** USER NAME INPUT */}
            
              <Input style={{ backgroundColor:'#B3FFFFFF', borderRadius:6, paddingHorizontal:15, marginBottom:15,}}
                getRef={ref => inputs[inputFields.username] = ref}
                disabled={state._loading}
                placeholderTextColor={'#A93A75'}
                placeholder={'Username'}
                removeClippedSubviews={Devices.OS === 'android'}
                
                value={state._valueUserName}
                blurOnSubmit={false}
                returnKeyType={'next'}
                selectionColor={Colors.BLACK_COLOR}
                onChangeText={value => onFunction.onChangeText(value, "username")}
                onSubmitEditing={() => inputs[inputFields.email]._root.focus()}
              />
            
            {state._errorUserName !== "" && <CText style={styles.txt_error} i18nKey={state._errorUserName} />}

            {/** EMAIL INPUT */}
            
              <Input style={{ backgroundColor:'#B3FFFFFF', borderRadius:6, paddingHorizontal:15, marginBottom:15,}}
                keyboardType={'email-address'}
                getRef={ref => inputs[inputFields.email] = ref}
                disabled={state._loading}
                removeClippedSubviews={Devices.OS === 'android'}
                value={state._valueEmail}
                blurOnSubmit={false}
                returnKeyType={'next'}
                placeholderTextColor={'#A93A75'}
                placeholder={'Email'}
                selectionColor={Colors.BLACK_COLOR}
                onChangeText={value => onFunction.onChangeText(value, "email")}
                onSubmitEditing={() => inputs[inputFields.phone]._root.focus()}
              />
            
            {state._errorEmail !== "" && <CText style={styles.txt_error} i18nKey={state._errorEmail} />}

            {/** PHONE INPUT */}
            <CItemInput style={{ backgroundColor:'#B3FFFFFF', borderRadius:6, paddingHorizontal:15, marginBottom:15,}}
              leftComp={
                <TouchableOpacity onPress={onFunction.onTogglePicker}>
                  <CViewRow style={[cStyles.row_align_center, Configs.supportRTL && { marginRight: -15 }]}
                    leftComp={
                      <View>
                        <Flag countryCode={state._flag} flagSize={Devices.fS(25)} withFlagButton={true} />
                      </View>
                    }
                    rightComp={
                      <View style={cStyles.row_align_center}>
                        <CText style={[styles.txt_input, { marginLeft: 0, color:'#A93A75',}]}>{state._callingCode}</CText>
                        <Icon containerStyle={{ marginTop: -10 }} name={"sort-down"} color={'#A93A75'} size={Devices.fS(20)} type={"solid"} />
                      </View>
                    }
                  />
                </TouchableOpacity>
              }
              rightComp={
                <Input 
                  keyboardType={"phone-pad"}
                  ref={ref => inputs[inputFields.phone] = ref}
                  disabled={state._loading}
                  removeClippedSubviews={Devices.OS === 'android'}
                  value={state._valuePhone}
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                  placeholder={Languages[props.language].phone_number}
                  placeholderTextColor={'#A93A75'}
                  selectionColor={Colors.BLACK_COLOR}
                  onChangeText={value => onFunction.onChangeText(value, "phone")}
                  onSubmitEditing={() => inputs[inputFields.password]._root.focus()} />
              }
            />

            {/** PASSWORD INPUT */}
           
              <Input style={{ backgroundColor:'#B3FFFFFF', borderRadius:6, paddingHorizontal:15, marginBottom:15,}}
                secureTextEntry
                getRef={ref => inputs[inputFields.password] = ref}
                disabled={state._loading}
                removeClippedSubviews={Devices.OS === 'android'}
                placeholderTextColor={'#A93A75'}
                placeholder={'Password'}
                value={state._valuePassword}
                blurOnSubmit={false}
                returnKeyType={'next'}
                selectionColor={Colors.BLACK_COLOR}
                onChangeText={value => onFunction.onChangeText(value, "password")}
                onSubmitEditing={() => inputs[inputFields.confirmpassword]._root.focus()}
              />
            
            {state._errorPassword !== "" && <CText style={styles.txt_error} i18nKey={state._errorPassword} />}

            {/** CONFIRM PASSWORD INPUT */}
            
              <Input style={{ backgroundColor:'#B3FFFFFF', borderRadius:6, paddingHorizontal:15, marginBottom:15,}}
                secureTextEntry
                getRef={ref => inputs[inputFields.confirmpassword] = ref}
                disabled={state._loading}
                removeClippedSubviews={Devices.OS === 'android'}
                placeholderTextColor={'#A93A75'}
                placeholder={'Confirm Passowrd'}
                value={state._valueConfirmPassword}
                blurOnSubmit={false}
                returnKeyType={'done'}
                selectionColor={Colors.BLACK_COLOR}
                onChangeText={value => onFunction.onChangeText(value, "confirmpassword")}
                onSubmitEditing={onFunction.onPressSignUp}
              />
            
            {state._errorConfirmPassword !== "" && <CText style={styles.txt_error} i18nKey={state._errorConfirmPassword} />}

            {state._successFetch !== "" &&
              <View style={styles.con_fetch_status}>
                <Icon name={'check-circle'} color={Colors.GREEN_COLOR} size={Devices.fS(20)} type={'solid'} />
                <CText style={styles.txt_fetch_success} i18nKey={state._successFetch} />
              </View>
            }

            {state._errorFetch !== "" &&
              <View style={styles.con_fetch_status}>
                <Icon name={'times-circle'} color={Colors.RED_COLOR} size={Devices.fS(20)} type={'solid'} />
                <CText style={styles.txt_fetch_failed} numberOfLines={3}>{state._errorFetch}</CText>
              </View>
            }

            <Button style={[styles.con_btn, { backgroundColor: Colors.WHITE_COLOR, borderRadius:6, color:'#A93A75', }]}
              iconLeft_1 block
              disabled={state._loading}
              onPress={onFunction.onPressSignUp}>
              {state._loading && <Spinner style={styles.spi_loading} color={'#A93A75'} size={'small'} />}
              <CText style={[styles.txt_btn, {color:'#A93A75', fontWeight:'700', fontSize:Devices.fS(14)}]} i18nKey={'sign_up'} />
            </Button>

            {/* <TouchableWithoutFeedback onPress={onFunction.onPressSignIn}>
              <View style={[cStyles.row_align_center, cStyles.row_justify_center]}>
                <CText style={styles.txt_already_account} i18nKey={"already_have_account"} />
                <CText> </CText>
                <CText style={styles.txt_sign_in} i18nKey={"sign_in"} />
              </View>
            </TouchableWithoutFeedback> */}
          </Form>
        </Content>

        <CountryPicker
          containerButtonStyle={{ opacity: 0 }}
          withFilter
          withFlag
          withCountryNameButton
          withAlphaFilter
          withCallingCode
          withFlagButton
          theme={colorScheme === "dark" ? DARK_THEME : DEFAULT_THEME}
          modalProps={{
            visible: state._visible
          }}
          onSelect={(country) => onFunction.onSelectCountry(country)}
          onClose={onFunction.onTogglePicker}
        />
  </ImageBackground>
  )
}