import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  Pressable,
} from 'react-native';

import {AppIcons} from '../Helper/Images';
import {Colors} from '../Helper/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
export const Username = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          height: '8%',
          justifyContent: 'center',
          paddingVertical: '4%',
        }}>
        <Image source={AppIcons.bigNetflix} style={{height: 37, width: 138}} />
      </View>
      <View
        style={{
          paddingHorizontal: '18%',
          flexDirection: 'row',
          marginTop: '45%',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => props.navigation.navigate('Pages')}
          style={{alignItems: 'center'}}>
          <Image
            source={AppIcons.bluecard}
            style={{height: 100, width: 100, borderRadius: 10}}
          />
          <Text style={{marginTop: 7, color: Colors.appWhite}}>Emenalo</Text>
        </Pressable>
        <Pressable style={{alignItems: 'center'}}>
          <Image
            source={AppIcons.yellowcard}
            style={{height: 100, width: 100, borderRadius: 10}}
          />
          <Text style={{marginTop: 7, color: Colors.appWhite}}>Onyeka</Text>
        </Pressable>
      </View>
      <View
        style={{
          paddingHorizontal: '18%',
          flexDirection: 'row',
          marginTop: '6%',
          justifyContent: 'space-between',
        }}>
        <Pressable style={{alignItems: 'center'}}>
          <Image
            source={AppIcons.redcard}
            style={{height: 100, width: 100, borderRadius: 10}}
          />
          <Text style={{marginTop: 7, color: Colors.appWhite}}>Thelma</Text>
        </Pressable>
        <Pressable style={{alignItems: 'center'}}>
          <Image
            source={AppIcons.kidcard}
            style={{height: 100, width: 100, borderRadius: 10}}
          />
          <Text style={{marginTop: 7, color: Colors.appWhite}}>Kids</Text>
        </Pressable>
      </View>
      <View
        style={{
          paddingHorizontal: '24%',
          marginTop: '8%',
          alignItems: 'center',
        }}>
        <Entypo name="circle-with-plus" size={45} color={Colors.appWhite} />
        <Text style={{marginTop: 7, color: Colors.appWhite}}>Add Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Username;
