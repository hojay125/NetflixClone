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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, RH, RW} from '../Helper/constants';
export const Downloads = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
      }}>
      <View style={{paddingHorizontal: RW(3), marginTop: '5%'}}>
        <Text
          style={{
            color: Colors.appWhite,
            fontSize: 14,
            marginLeft: 20,
          }}>
          Smart Downloads
        </Text>
        <Text
          style={{
            color: Colors.appWhite,
            fontSize: 16,
            marginTop: 30,
            fontWeight: '700',
          }}>
          Introducing Downloads For You
        </Text>
        <Text style={{color: Colors.appWhite, fontSize: 11, marginTop: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui,
          vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan
          quis. Massa, id ut ipsum aliquam enim non posuere pulvinar diam.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: Colors.appDeepGray,
          height: 150,
          width: 150,
          borderRadius: 100,
          marginTop: 30,
          alignSelf: 'center',
        }}></View>
      <Pressable
        style={{
          backgroundColor: Colors.appBlue,
          height: 40,
          width: RW(100),
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}>
        <Text style={{color: Colors.appWhite, fontSize: 14}}>SETUP</Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: Colors.appDeepGray,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          marginTop: 40,
          alignSelf: 'center',
          paddingHorizontal: 10,
        }}>
        <Text style={{color: Colors.appWhite, fontSize: 15, fontWeight: '700'}}>
          Find Something to Download
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Downloads;
