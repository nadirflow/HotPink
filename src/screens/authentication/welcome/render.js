/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import {
  View, TouchableWithoutFeedback, Keyboard, TouchableOpacity
} from 'react-native';
import {
  Form, Item, Input, Label, Button, Spinner, Container,
  Content
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
import { Configs, Devices, Languages } from '~/config';
/* STYLES */
// import styles from './style';



export const ViewSignUp = ({
  state = null,
  props = null,
  inputs = {},
  onFunction = {
   
    onPressSignUp: () => { },
    onPressSignIn: () => { },
   
   
   
  }
}) => {
  let colorScheme = useColorScheme();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={cStyles.container_auth}>
        <Content style={cStyles.flex_full} contentContainerStyle={styles.con_header}>
          <Form style={styles.con_form_sign_in}>
            

          

            <Button style={[styles.con_btn, { backgroundColor: Colors.PRIMARY_COLOR }]}
              iconLeft_1 block
              disabled={state._loading}
              onPress={onFunction.onPressSignUp}>
              {state._loading && <Spinner style={styles.spi_loading} color={Colors.WHITE_COLOR} size={'small'} />}
              <CText style={styles.txt_btn} i18nKey={'sign_up'} />
            </Button>

            <TouchableWithoutFeedback onPress={onFunction.onPressSignIn}>
              <View style={[cStyles.row_align_center, cStyles.row_justify_center]}>
                <CText style={styles.txt_already_account} i18nKey={"already_have_account"} />
                <CText> </CText>
                <CText style={styles.txt_sign_in} i18nKey={"sign_in"} />
              </View>
            </TouchableWithoutFeedback>
          </Form>
        </Content>

        
      </Container>
    </TouchableWithoutFeedback>
  )
}