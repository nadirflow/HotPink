/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, FlatList } from 'react-native';
import {
  Container, Left, Body, Right, Button
} from 'native-base';
import Icon from 'react-native-fontawesome-pro';
import Rate, { AndroidMarket } from 'react-native-rate';
import { Colors } from '~/utils/colors';
/* COMPONENTS */
import CHeader from "~/components/CHeader";
import CText from '~/components/CText';
import CViewRow from "~/components/CViewRow";
/* COMMON */
import { cStyles } from '~/utils/styles';
import { Devices, Configs } from '~/config';
import { layoutWidth } from '~/utils/layout_width';

class UnlockSubscription extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  /* FUNCTIONS */
  _onPressBack = () => {
    this.props.navigation.goBack();
  }


  /* RENDER */
  render() {
    return (
      <Container>
        <Button block bordered
          style={[{ borderColor: Colors.PRIMARY_COLOR },
          Configs.supportRTL ? cStyles.ml_5 : cStyles.mr_5]} >
          <CText style={[ { color: Colors.PRIMARY_COLOR }]} i18nKey={'unlock_subscription_continue'} />
        </Button>
      </Container >
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, null)(UnlockSubscription);