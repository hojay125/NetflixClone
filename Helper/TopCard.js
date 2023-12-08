import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';

import {AppIcons} from '../Helper/Images';
import {Colors, RH, RW} from '../Helper/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export const TopCard = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.appDeepGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        marginTop: props.marginTop || null,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={props.icon} style={{height: RH(9), width: RW(40)}} />
        <Text style={{color: Colors.appWhite, fontSize: 13, marginLeft: 15}}>
          {props.text}
        </Text>
      </View>
      <AntDesign name="playcircleo" size={20} color={Colors.appWhite} />
    </View>
  );
};

export default TopCard;
