/**
 ** Name: 
 ** Author: 
 ** CreateAt: 
 ** Description: 
**/
/* LIBRARY */
import React from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
/* COMPONENTS */
import { ViewSignUp } from './render';
/** COMMON */
import Helpers from '~/utils/helpers';
import Services from '~/services';
import COtp from '~/components/COtp';

class Welcome extends React.Component {
  
 


  

  
 
  
  _onPressSignUp = () => {
    this.props.navigation.navigate("SignUp");
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  }

  
  _onPressSignIn = () => {
    this.props.navigation.navigate("SignIn");
  }

  

  /* RENDER */
  render() {
    return (
      <>
        <ViewSignUp
          state={this.state}
          props={this.props}
          inputs={this._inputs}
          onFunction={{
            
            onPressSignUp: this._onPressSignUp,
            onPressBack: this._onPressBack,
            
            onPressSignIn: this._onPressSignIn,
            
          }}
        />
        <COtp
          visible={this.state._modalVisible}
          onVerify={this._onVerification}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.language
  }
}

export default connect(mapStateToProps, null)(Welcome);