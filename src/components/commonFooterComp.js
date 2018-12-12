import React from 'react';
import {Platform, View, LayoutAnimation, Dimensions, TouchableHighlight, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import * as Styles from '../assets/styles';
import { Actions } from 'react-native-router-flux';

const FooterTouch = Styles.viewStyles.FooterTouch;
const FooterText = Styles.textStyles.FooterText;
const RegistBtnTxt = Styles.textStyles.RegistBtnTxt;
const TouchWhite = Styles.tochableStyles.TouchWhite;
const FlexVertical = Styles.viewStyles.FlexVertical;

// platform
const PdTop = Platform.select({
  ios: 30,
  android: 40
});

const {height, width} = Dimensions.get('window');

function layoutChange(props, type = 'open') {
  LayoutAnimation.easeInEaseOut();
  props.action(type, width - 50, 200);
}

function layoutChangeClose(props) {
  // LayoutAnimation.spring();
  if (Platform.OS == 'ios') {
    setTimeout(() => props.actionText(), 500);
  } else {
    props.actionText();
  }
}

function registBtn(props) {
    return (
      <View style={[props.menuStyle, {backgroundColor: 'rgba(0,0,0,0.3)', position:'absolute',bottom:90,justifyContent: 'center', alignItems: 'center'}]}>
        <TouchWhite
        style={[props.btnStyle, {marginBottom:20}]}
        onPress={() => {Actions.createPin()}}
      >
        <RegistBtnTxt style={props.textStyle}>Create Pin</RegistBtnTxt>
      </TouchWhite>
      <TouchWhite
        style={[props.btnStyle]}
        onPress={() => {console.log('object');}}
      >
        <RegistBtnTxt style={props.textStyle}>Create Line</RegistBtnTxt>
      </TouchWhite>
      </View>
    );
}

// const commonFooter = (props) => {
//   return (
//     <SafeAreaView 
//       forceInset={{bottom:'always'}} 
//       style={{
//         // position:'absolute', 
//         // bottom:10,
//         backgroundColor: 'rgba(0,0,0,0)',
//         alignSelf: 'center',
//       }}
//     >
//       {registBtn(props)}
//       <FooterTouch
//         style={[props.footerStyle, {position:'absolute', bottom: 10}]}
//         onPress={() => {
//           if (props.footerState == 'close') {
//             layoutChange(props);
//           } else {
//             layoutChange(props, 'close');
//           }
//         }}
//       >
//         <View style={props.plusStyle}>
//           <FooterText>+</FooterText>
//         </View>
//         </FooterTouch>
        
//     </SafeAreaView>
//   )
// }
const commonFooter = (props) => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center'}}
    >
      {registBtn(props)}
      <FooterTouch
        style={[props.footerStyle, {position:'absolute', bottom: 40}]}
        onPress={() => {
          if (props.footerState === 'close') {
            layoutChange(props);
            layoutChangeClose(props);
          } else {
            layoutChange(props, 'close');
          }
        }}
      >
        <View style={props.plusStyle}>
          <FooterText>+</FooterText>
        </View>
      </FooterTouch>
    </View>
  )
}

export default commonFooter;
