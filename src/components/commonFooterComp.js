import React from 'react';
import {Platform, View, LayoutAnimation, Dimensions, TouchableHighlight, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import * as Styles from '../assets/styles';

const FooterTouch = Styles.viewStyles.FooterTouch;
const FooterText = Styles.textStyles.FooterText;
const RegistBtnTxt = Styles.textStyles.RegistBtnTxt;
const TouchWhite = Styles.tochableStyles.TouchWhite;

// platform
const PdTop = Platform.select({
  ios: 30,
  android: 40
});

const {height, width} = Dimensions.get('window');

function layoutChange(props) {
  LayoutAnimation.spring();
  props.action('open', width - 50, 200);
  // console.log(props, 'props');
}

function registBtn(props) {
  console.log(props, 'footer');
  // if (props.footerState === 'close') {
    return (
      <View>
        <View style={props.plusStyle}>
          <FooterText>+</FooterText>
        </View>
        <TouchWhite
        style={props.btnStyle}
        onPress={() => {console.log('object');}}
      >
        <RegistBtnTxt>asdf</RegistBtnTxt>
      </TouchWhite>
      <TouchWhite
        style={props.btnStyle}
        onPress={() => {console.log('object');}}
      >
        <RegistBtnTxt>asdf</RegistBtnTxt>
      </TouchWhite>
      </View>
    );
  // } else {
  //   return (
  //     <View>
  //       <TouchWhite
  //         style={props.btnStyle}
  //         onPress={() => {console.log('object');}}
  //       >
  //         <RegistBtnTxt>asdf</RegistBtnTxt>
  //       </TouchWhite>
  //       <TouchWhite
  //         style={{width:width - 100}}
  //         onPress={() => {console.log('object');}}
  //       >
  //         <RegistBtnTxt>asdf</RegistBtnTxt>
  //       </TouchWhite>
  //     </View>
  //   );
  // }
}

const commonFooter = (props) => {
  return (
    <SafeAreaView 
      forceInset={{bottom:'always'}} 
      style={{
        position:'absolute', 
        bottom:10,
        backgroundColor: 'rgba(0,0,0,0)',
        alignSelf: 'center',
      }}
    >
      <FooterTouch
        style={props.footerStyle}
        onPress={() => {layoutChange(props)}}
      >
        {registBtn(props)}
      </FooterTouch>
    </SafeAreaView>
  )
}

export default commonFooter;
