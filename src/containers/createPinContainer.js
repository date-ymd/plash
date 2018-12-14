import React, { Component } from 'react';
import {
  View,
  LayoutAnimation,
  NativeModules,
  Platform,
  TouchableHighlight
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { MapView, Location, Permissions } from 'expo';
import faker from 'faker';

// facke
import fackes from '../util/facker';

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
    this.props.actions.setMyLocation(location);
  }


  render() {
    console.log(this.props.homeProps, 'props');
    return (
      <View style={{flex:1}}>
        <CommonHeader />
        {(() => {

          if (this.props.pinProps.lat && this.props.pinProps.lng) {
            console.log(this.props.pinProps, 'pin');
            return (
              <View>
              <FormTitle
              title='Place'
            />
              <MapView
                initialRegion={{
                  latitude: this.props.pinProps.lat,
                  longitude: this.props.pinProps.lng,
                  latitudeDelta: 0.005057962974127861,
                  longitudeDelta: 0.008830392610292392
                }}
                style={{height:300}}
                showsUserLocation={true}
                followUserLoacation={true}
                scrollEnabled={false}
                zoomEnabled={false}
              >
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

        <FormTitle
          title='Picture'
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
