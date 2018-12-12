import React, { Component } from 'react';
import { 
  View, 
  LayoutAnimation,
  NativeModules,
  Platform,
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import faker from 'faker';

// facke
import fackes from '../util/facker';

// actions
import * as actions from '../actions/createPinAction';

// Component
import CommonHeader from '../components/commonHeaderComp';

// styles
import * as Styles from '../assets/styles';
const TouchClose = Styles.tochableStyles.TouchClose;

class createPinContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() { }
  componentDidMount() { }
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


  render() {
    console.log(this.props.homeProps, 'props');
    return (
      <View style={{flex:1}}>
        <CommonHeader />

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
