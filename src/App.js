import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {
  Router,
  Scene,
  Tabs,
  Stack,
  Modal,
  Actions,
 } from 'react-native-router-flux';
import { createStore, runsaga } from './store/createStore';

// container
import HomeContainer from './containers/homeContainer';
// import RegistContainer from './containers/registContainer';

const store = createStore();
runsaga();

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Provider store={store}>
          <Router
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
            tintColor='white'
          >
            <Scene key="root">
              <Scene
                key="home"
                // title="Top"
                component={HomeContainer}
              />
              {/**
                <Scene
                  key="regist"
                  // title="adsf"
                  component={RegistContainer}
                />
               */}
            </Scene>
          </Router>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff',
    display: 'none',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#000",
  }
});
