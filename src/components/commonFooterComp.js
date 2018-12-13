import React from 'react';
import {StyleSheet} from 'react-native';

import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';

// icons
import { Ionicons } from '@expo/vector-icons';

const commonFooter = (props) => {
  return (
    <ActionButton buttonColor="rgb(242,98,132)">

      <ActionButton.Item buttonColor='#3498db' title="Add" onPress={() => {Actions.createPin()}}>
        <Ionicons name="md-pin" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor='#1abc9c' title="Connect" onPress={() => {}}>
        <Ionicons name="md-git-pull-request" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  )
}

export default commonFooter;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 25,
    height: 25,
    color: 'white',
  },
});
