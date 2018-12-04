import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import Modal from 'react-native-modalbox';
import faker from 'faker';

// facke
import fackes from '../util/facker';

// actions
import * as actions from '../actions/homeAction';

// Component
import SmallContent from '../components/smallContentComponent';
import CommonHeader from '../components/commonHeaderComp';
import { Collection } from 'immutable';

class homeContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(faker.address.latitude(), 'faker');
  }

  componentWillMount() {
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate() {

  }
  componentDidUpdate() {

  }
  componentWillMount() {

  }

  render() {
    return (
      <View style={{flex:1}}>
        <CommonHeader />
        <View 
          // isOpen={this.props.homeProps.isModal}
          // onClosed={() => {this.props.actions.toggleModal(false)}}
          // position={"top"}
          style={{height:'45%'}}
          // backdrop={false}
        >
        <View style={{backgroundColor: 'white'}}>
          <Image source={this.props.homeProps.showImage} style={{width:null,height:'100%'}} />
        </View>
      </View>
   
        <MapView
          style={{flex:1}}
          initialRegion={{
            latitude: 35.72033066,
            longitude: 139.75192454,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {fackes.mappingDatas.map((marker, i) => (
            <MapView.Marker 
              key={i}
              coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
              onPress={() => {
                this.props.actions.toggleModal(true, marker);
              }}
            />
          ))}
        </MapView>
        {/**
          <ScrollView horizontal={true} style={{position:'absolute',bottom:0}}>
            {
            fackes.mappingDatas.map((col,i) => (
              <View key={i}>
                <Image source={col.img} style={{width:300,height:250}} />
              </View>
              ))
            }
          </ScrollView>
         */}


      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeProps: state.homeReducer
   }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

homeContainer.propTypes = {
  page: PropTypes.string.isRequired
}
homeContainer.defaultProps = {
  page: 'home'
}

export default connect(mapStateToProps, mapDispatchToProps)(homeContainer);
