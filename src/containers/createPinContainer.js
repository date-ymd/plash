import React, { Component } from 'react';
import {
  View,
  LayoutAnimation,
  NativeModules,
  Platform,
  TouchableHighlight,
  Image
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { MapView, Location, Permissions } from 'expo';
import faker from 'faker';

// facke
import fackes from '../util/facker';

// file
import file from '../util/file';

// actions
import * as actions from '../actions/createPinAction';

// Component
import CommonHeader from '../components/commonHeaderComp';
import FormTitle from '../components/formTitleComp';

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

    // console.log(JSON.stringify(location).longitude);
    // this.setState({ locationResult: JSON.stringify(location) });
    this.props.actions.setMyLocation(location.coords);
  }


  render() {
    console.log(this.props.homeProps, 'props');
    return (
      <View style={{flex:1}}>
        <CommonHeader
          text="check"
          style={{flex:1}}
        />
        {(() => {
console.log(this.state);
          if (this.props.pinProps.lat && this.props.pinProps.lng) {
            console.log(this.props.pinProps, 'pin');
            return (
              <View style={{flex:1}}>
                <View
                style={{
                  // width:50,
                  // flex: 1,
                  // alignSelf: 'stretch',
                  // width: undefined,
                  // height: undefined
                  // width:30,
                  // height:80,
                  // flex:1,
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'center',
                  // bottom: 5
                  // position:'absolute',
                  // top:'46%',
                  // left:'50%',
                  // right:0,
                  // bottom:0
                  // zIndex:2
                }}
                >
                  <Image source={file.marker.main}
                    style={{
                      // flex: 1,
                      // alignSelf: 'stretch',
                      // width: undefined,
                      // height: undefined
                      width:20,
                      height:32,
                      // flex:1,
                      // flexDirection:'row',
                      // alignItems:'center',
                      // justifyContent:'center',
                      // resizeMode: 'cover'
                    }}
                  />
                </View>
                <MapView
                  initialRegion={{
                    // this.state
                    latitude: this.props.pinProps.lat,
                    longitude: this.props.pinProps.lng,
                    latitudeDelta: 0.005057962974127861,
                    longitudeDelta: 0.008830392610292392
                  }}
                  style={{height:'100%'}}
                  showsUserLocation={true}
                  // followUserLoacation={true}
                  // scrollEnabled={false}
                  // zoomEnabled={false}
                  onRegionChange={((maps) => {
                    // console.log(maps,'maps');
                    // this.setState('region', maps);
                    this.props.actions.setMyLocation(maps);
                  })}
                >
                {/**
                */}
                <MapView.Marker
                coordinate={{
                  latitude: this.props.pinProps.lat,
                  longitude: this.props.pinProps.lng
                }}
                />

                </MapView>
              </View>
            )
          }
        })()}
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
