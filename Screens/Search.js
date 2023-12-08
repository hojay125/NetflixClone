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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopCard from '../Helper/TopCard';

export const Search = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
      }}>
      <View
        style={{
          paddingHorizontal: '5%',
          paddingVertical: 10,
          backgroundColor: Colors.appDeepGray,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '5%',
        }}>
        <Feather name="search" size={15} color={Colors.appGrayBlack} />
        <View style={{width: RW(70)}}>
          <TextInput
            style={{color: Colors.appGrayBlack}}
            placeholderTextColor={Colors.appGrayBlack}
            placeholder="Search for a show, movie, genre, e.t.c."
          />
        </View>
        <MaterialCommunityIcons
          name="microphone"
          size={20}
          color={Colors.appGrayBlack}
        />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          color: Colors.appWhite,
          marginTop: 20,
          marginLeft: '3%',
        }}>
        Top Searches
      </Text>

      <ScrollView style={{marginTop: 15}}>
        <TopCard text={'Citation'} icon={AppIcons.topcard1} />
        <TopCard text={'Oloture'} icon={AppIcons.topcard2} marginTop={5} />
        <TopCard text={'The Setup'} icon={AppIcons.topcard3} marginTop={5} />
        <TopCard text={'Breaking Bad'} icon={AppIcons.topcard4} marginTop={5} />
        <TopCard text={'Ozark'} icon={AppIcons.topcard5} marginTop={5} />
        <TopCard text={'The Governor'} icon={AppIcons.topcard6} marginTop={5} />
        <TopCard
          text={'Your Excellency'}
          icon={AppIcons.topcard7}
          marginTop={5}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
