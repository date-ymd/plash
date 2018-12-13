import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';

import { DangerZone } from 'expo';
let { Lottie } = DangerZone;


export default class loading extends Component {
  componentDidMount() {
    this.animation.reset();
    this.animation.play();
   }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width:100,height:100}}>
          <Lottie
            ref={animation => {
              this.animation = animation;
              // play(animation);
            }}
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../assets/images/animation/loading.json")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  }
});
