import React from 'react';
import {View, Text} from 'react-native';

import * as Styles from '../assets/styles';

const ContainerWrap = Styles.viewStyles.ContainerWrap;


const smallContent = (props) => {
  return (
    <ContainerWrap>
      {renderList()}
    </ContainerWrap>
  )
}

function renderList() {
  return (
    <View><Text>asdf</Text></View>
  );
}

export default smallContent;
