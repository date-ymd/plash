import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
  Text,
  CameraRoll,
  Dimensions
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { SMS, Permissions } from 'expo';

// icons
import { Ionicons } from '@expo/vector-icons';

// file
import file from '../util/file';

// actions
import * as actions from '../actions/createPhotoAction';

// Component
import CommonHeader from '../components/commonHeaderComp';
import FooterBtn from '../components/footerBtnComp';
import Loading from '../components/loadingComp';

// styles
import * as Styles from '../assets/styles';
const TouchClose = Styles.tochableStyles.TouchClose;

// Dimensions
let {width} = Dimensions.get('window');
// width = width - 25;

class createPhotoContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    state = {
      hasCameraRollPermission: null,
      photo: null
    };

  }

  componentWillMount() {

  }

  componentDidMount() {
    // this._pickImage();
    let svThis = this;
    CameraRoll.getPhotos({first:25})
      .then(function(obj) {
        console.log(obj, 'cameraroll');
        svThis.storeImage(obj.edges, svThis)
      });
  }
  componentWillReceiveProps(nextProps) { }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate() { }
  componentDidUpdate() { }
  componentWillMount() {
  }

  storeImage(edges, svThis) {
    const images = edges.map((asset) => {
      return asset.node.image;
    });

    // console.log(images, 'images');
    svThis.props.actions.getCameraRoll(images);
  }

  sendSms = async() => {
    try {
      const {status} = await Permissions.askAsync(Permissions.SMS);
      console.log(status, 'status');

      if (status === 'granted') {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
          const { result } = await SMS.sendSMSAsync('08063185946', 'send sms');
          console.log(result, 'sms');
        }
      }
    } catch(err) {
      console.log(err, 'err');
    }
  }

  // _pickImage = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

  //   if (status !== 'granted') return Actions.pop();


  //   let result = await ImagePicker.launchImageLibraryAsync({
  //       allowsEditing: true,
  //       aspect: [16, 9]
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //       this.setState({photo: result.uri});
  //   }
  // }

  imageRender() {
    return (
      this.props.photoProps.images.map((e, i) =>
        <TouchableOpacity
          key={i}
          onPress={() => {this.sendSms()}}
        >
          <Image style={styles.image} source={{uri: e.uri}} />
        </TouchableOpacity>
      )
    )
  }

  render() {
    return (
      <View style={{flex:1}}>
        <CommonHeader
          text="Photograph"
          style={{flex:1}}
        />

        {(() => {
          if (this.props.photoProps.images) {
            return (
              <View>
                <ScrollView>
                  <View style={styles.imageGrid}>
                    {this.imageRender()}
                  </View>
                </ScrollView>

              </View>
            )
          } else {
            return (<Loading />);
          }
        })()}
        <FooterBtn
          action={Actions.home}
          isNext={false}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    photoProps: state.createPhotoReducer
   }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

createPhotoContainer.propTypes = {
  page: PropTypes.string.isRequired
}
createPhotoContainer.defaultProps = {
  page: 'createPin'
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    justifyContent: 'flex-start',
    marginBottom: 150,
    alignSelf: 'center',
    // alignItems: 'center',
    // width: width
  },
  image: {
    width: width/3,
    height: width/3,
    // margin: 5,
    borderColor: 'white',
    borderWidth: 1
  },
  imageSel: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  check: {
    height: 20,
    width: 20,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(createPhotoContainer);
