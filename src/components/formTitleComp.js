import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import * as Styles from '../assets/styles';

const Container = Styles.viewStyles.HaderView;
const HeadText = Styles.textStyles.HeadText;


const commonHeader = (props) => {
  return (
    <View style={{backgroundColor: 'white', padding: 10, borderBottomColor: '#ccc', borderBottomWidth:1}}>
      <View>
        <Text style={{fontSize: 20, textAlign:'center', fontWeight: 'bold'}}>{props.title}</Text> 
      </View>
    </View>
  )
}

export default commonHeader;
