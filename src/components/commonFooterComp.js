import React from 'react';
import {Platform, Text, TouchableOpacity, Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import * as Styles from '../assets/styles';

const Container = Styles.viewStyles.FooterTouch;
const FooterText = Styles.textStyles.FooterText;

// platform
const PdTop = Platform.select({
  ios: 30,
  android: 40
});

const {height, width} = Dimensions.get('window');

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
      <Container>
        <FooterText>+</FooterText>
      </Container>
    </SafeAreaView>
  )
}

export default commonFooter;
