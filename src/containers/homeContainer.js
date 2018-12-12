import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  LayoutAnimation,
  NativeModules,
  Platform,
  Dimensions
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import faker from 'faker';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// window size
const {height, width} = Dimensions.get('window');

// facke
import fackes from '../util/facker';

// actions
import * as actions from '../actions/homeAction';

// Component
import SmallContent from '../components/smallContentComponent';
import CommonHeader from '../components/commonHeaderComp';
import CommonFooter from '../components/commonFooterComp';

// styles
import * as Styles from '../assets/styles';
const TouchClose = Styles.tochableStyles.TouchClose;

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class homeContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isImageView: false,
      activeSlide: 0,
    }
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
  layoutChangeFooter(type) {
    if (this.props.homeProps.footerState === 'open') {
      LayoutAnimation.easeInEaseOut();
      this.props.actions.changeLayoutFooter(type);
    }
  }

  renderItem(data) {
    let item = data.item;
    return (
      <View 
        style={{backgroundColor: 'white'}}
      >
        <Image source={item} style={{width:null,height:'100%'}} />
      </View>
    )
  }

  markerMapping(data) {
    return (
      fackes.place.map((e,i) => (
        <MapView.Marker
          key={i} 
          coordinate={{latitude:e.latitude, longitude:e.longitude}}
          onPress={() => {
            this.props.actions.toggleModal(true, e);
            this.layoutChange('open');
            this.setState({activeSlide:0});
          }}
        />
      ))
    )
  }

  polyline(data) {
    return (
      fackes.line.map((e,i) => (
        <MapView.Polyline
          key={i}
          coordinates={[e.start, e.end]}
          strokeColor={'#ff69b4'}
          strokeWidth={3}
          onPress={() => {
            this.props.actions.toggleModal(true, e);
            this.layoutChange('open');
            this.setState({activeSlide:0});
          }}
        />
      ))
    )
  }

  render() {
    console.log(this.props.homeProps, 'props');
    return (
      <View style={{flex:1}}>
        <CommonHeader />
        <View 
          style={this.props.homeProps.imgHeight}
        >
          <Carousel
            data={this.props.homeProps.showImage}
            renderItem={this.renderItem}
            itemWidth={width}
            sliderWidth={width}
            onSnapToItem={(index) => this.setState({activeSlide: index})}
            currentIndex={0}
          />
          <Pagination
            dotsLength={this.props.homeProps.showImage.length}
            activeDotIndex={this.state.activeSlide}
            containerStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0)',
              position:'absolute',
              bottom:0
            }}
            dotStyle={{
                width: 7,
                height: 7,
                borderRadius: 5,
                marginRight: -10,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />


          <TouchClose
            onPress={() => {
              this.layoutChange('close');
              this.setState({activeSlide:0});
            }}
          >
            <Text style={ClosePosition}>×</Text>
          </TouchClose>
        </View>
   
        <MapView
          style={this.props.homeProps.mapHeight}
          initialRegion={{
            latitude: 35.72033066,
            longitude: 139.75192454,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={() => {
            this.layoutChangeFooter('close');
          }}
        >
          {this.markerMapping()}
          {this.polyline()}
        </MapView>
        <CommonFooter
          footerStyle={this.props.homeProps.footerStyle}
          action={this.props.actions.changeLayoutFooter}
          footerState={this.props.homeProps.footerState}
          plusStyle={this.props.homeProps.plusStyle}
          btnStyle={this.props.homeProps.btnStyle}
          menuStyle={this.props.homeProps.menuStyle}
          textStyle={this.props.homeProps.textStyle}
          actionText={this.props.actions.changeLayoutText}
        />

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

const ClosePosition = Platform.select({
  ios: {top:-5, left:6, color:'white', fontSize:30, position:'absolute'},
  android: {top:-7, left:7, color:'white', fontSize:30, position:'absolute'}
})

export default connect(mapStateToProps, mapDispatchToProps)(homeContainer);
