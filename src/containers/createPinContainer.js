import React, { Component } from 'react';
import {
  View,
  LayoutAnimation,
  NativeModules,
  Platform,
  TouchableOpacity,
  Image
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { MapView, Location, Permissions } from 'expo';
import faker from 'faker';

// icons
import { Ionicons } from '@expo/vector-icons';

// facke
import fackes from '../util/facker';

// file
import file from '../util/file';

// actions
import * as actions from '../actions/createPinAction';

// Component
import CommonHeader from '../components/commonHeaderComp';
import FooterBtn from '../components/footerBtnComp';

// styles
import * as Styles from '../assets/styles';
const TouchClose = Styles.tochableStyles.TouchClose;

class createPinContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() { }
  componentDidMount() {
    this._getLoacationAsync();
  }
  componentWillReceiveProps(nextProps) { }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate() { }
  componentDidUpdate() { }
  componentWillMount() { }

  layoutChange(type) {
    LayoutAnimation.spring();
    this.props.actions.changeLayout(type);
  }
  layoutChangeFooter(type) { }

  _getLoacationAsync = async() => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    this.props.actions.setMyLocation(location.coords);
  }


  render() {
    console.log(this.props.homeProps, 'props');
    return (
      <View style={{flex:1}}>
        <CommonHeader
          text="Location"
          style={{flex:1}}
        />
        {(() => {
          if (this.props.pinProps.lat && this.props.pinProps.lng) {
            console.log(this.props.pinProps, 'pin');
            return (
              <View style={{flex:1}}>
                <View
                style={{
                  alignSelf: 'center',
                  position:'absolute',
                  top:'44%',
                  zIndex:2
                }}
                >
                  <Image source={file.marker.main}
                    style={{
                      width:20,
                      height:32,
                    }}
                  />
                </View>
                <MapView
                  initialRegion={{
                    latitude: this.props.pinProps.lat,
                    longitude: this.props.pinProps.lng,
                    latitudeDelta: 0.005057962974127861,
                    longitudeDelta: 0.008830392610292392
                  }}
                  style={{height:'100%'}}
                  showsUserLocation={true}
                  onRegionChange={((maps) => {
                    this.props.actions.setMyLocation(maps);
                  })}
                >
                {/**
                  <MapView.Marker
                  coordinate={{
                    latitude: this.props.pinProps.lat,
                    longitude: this.props.pinProps.lng
                  }}
                  />
                */}

                </MapView>
              </View>
            )
          }
        })()}
        <FooterBtn
          action={Actions.createPhoto}
          isNext={true}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    pinProps: state.createPinReducer
   }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

createPinContainer.propTypes = {
  page: PropTypes.string.isRequired
}
createPinContainer.defaultProps = {
  page: 'createPin'
}

export default connect(mapStateToProps, mapDispatchToProps)(createPinContainer);
