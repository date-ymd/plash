import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import * as Styles from '../assets/styles';

const Container = Styles.viewStyles.HaderView;
const HeadText = Styles.textStyles.HeadText;

// platform
const PdTop = Platform.select({
  ios: 30,
  android: 40
});
const HeaderTop = Platform.select({
  ios: 40,
  android: 50
});
const PdBottom = Platform.select({
  ios: 5,
  android: 10
});
const PlusTop = Platform.select({
  ios: 0,
  android: 2
});
const platFamily = Platform.select({
  ios: 'HiraMinProN-W3',
  android: 'serif'
})

const commonHeader = (props) => {
  // return (
  //   <Container style={{paddingTop: PdTop, paddingBottom:PdBottom}}>
  //     <HeadText style={{fontFamily: platFamily}}>Plash</HeadText>
  //     <TouchableOpacity
  //       onPress={() => {console.log('object');}}
  //       style={{position:'absolute',right:30,top:PlusTop}}
  //     >
  //       <Text style={{fontSize:30}}>+</Text>
  //     </TouchableOpacity>
  //   </Container>
  // )
  return (
    <View style={{backgroundColor:'#e0f0f0'}}>
      <SafeAreaView forceInset={{top:'always'}} style={{height:HeaderTop}}>
        <Container style={{paddingTop:10}}>
          <HeadText style={{fontFamily: platFamily}}>Plash</HeadText>
        </Container>
      </SafeAreaView>
    </View>
  )
}

export default commonHeader;
