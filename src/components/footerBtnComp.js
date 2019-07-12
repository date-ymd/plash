import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

// icons
import { Ionicons } from '@expo/vector-icons';

const FooterBtn = (props) => {
  return (
    <View
      style={{
        position:'absolute',
        // right:30,
        bottom:50,
        flexDirection:'row',
        width: '100%'
      }}
    >
      <View style={{flex:1}}>
        <TouchableOpacity
          onPress={() => {Actions.pop()}}
          style={{
            backgroundColor:'rgba(255,255,255,0.8)',
            height:50,
            borderRadius: 50,
            paddingTop:10,
            width:'90%',
            alignSelf:'center'
          }}
        >
          <Ionicons name="md-arrow-round-back"
            style={{fontSize:30,alignSelf:'center',color:'#08a5a5'}}
          />
        </TouchableOpacity>
      </View>
      {(() => {
        if (props.isNext) {
          return (
            <View style={{flex:1}}>
              <TouchableOpacity
                onPress={() => {props.action()}}
                style={{
                  backgroundColor:'rgba(255,255,255,0.8)',
                  width:'90%',
                  height:50,
                  borderRadius: 50,
                  paddingTop:10,
                  alignSelf:'center',
                }}
              >
                <Ionicons name="md-arrow-round-forward"
                  style={{fontSize:30,alignSelf:'center',color:'#08a5a5'}}
                />
              </TouchableOpacity>
            </View>
          )
        }
      })()}
    </View>
  );
}


export default FooterBtn;
