import React from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';

import * as Styles from '../assets/styles';

const Container = Styles.viewStyles.HaderView;
const HeadText = Styles.textStyles.HeadText;

// platform
const PdTop = Platform.select({
  ios: 30,
  android: 40
});
const PlusTop = Platform.select({
  ios: 20,
  android: 30
});
const platFamily = Platform.select({
  ios: 'HiraMinProN-W3',
  android: 'serif'
})

const commonHeader = (props) => {
  return (
    <Container style={{paddingTop: PdTop, paddingBottom:10}}>
      <HeadText style={{fontFamily: platFamily}}>Plash</HeadText>
      <TouchableOpacity 
        onPress={() => {console.log('object');}}
        style={{position:'absolute',right:30,top:PlusTop}}
      >
        <Text style={{fontSize:30}}>+</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default commonHeader;
