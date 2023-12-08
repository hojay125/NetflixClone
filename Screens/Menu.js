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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Colors, RH, RW} from '../Helper/constants';
export const Menu = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '3%',
            marginTop: '5%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={AppIcons.bluecard} style={{height: 70, width: 70}} />
            <Text style={{color: Colors.appWhite, fontSize: 12, marginTop: 5}}>
              Emenalo
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image
              source={AppIcons.yellowcard}
              style={{height: 60, width: 60}}
            />
            <Text style={{color: Colors.appWhite, fontSize: 12, marginTop: 5}}>
              Onyeka
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image source={AppIcons.redcard} style={{height: 60, width: 60}} />
            <Text style={{color: Colors.appWhite, fontSize: 12, marginTop: 5}}>
              Thelma
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image source={AppIcons.kidcard} style={{height: 60, width: 60}} />
            <Text style={{color: Colors.appWhite, fontSize: 12, marginTop: 5}}>
              Kids
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <View
              style={{
                height: 60,
                width: 60,
                borderWidth: 1,
                borderColor: Colors.appGray,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="plus" size={35} color={Colors.appGray} />
            </View>
          </View>
        </View>
        <View
          style={{marginTop: '5%', flexDirection: 'row', alignSelf: 'center'}}>
          <Entypo name="pencil" size={15} color={Colors.appWhite} />
          <Text style={{color: Colors.appWhite, fontSize: 14, marginLeft: 10}}>
            Manage Profiles
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#1A1A1A',
            paddingHorizontal: '5%',
            paddingVertical: 20,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={20}
              color={Colors.appWhite}
            />
            <Text
              style={{
                color: Colors.appWhite,
                fontSize: 17,
                marginLeft: 10,
                fontWeight: '700',
              }}>
              Tell friends about Netflix.
            </Text>
          </View>
          <Text style={{color: Colors.appWhite, fontSize: 10, marginTop: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam
            dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan
            accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar
            diam.
          </Text>
          <Text style={{color: Colors.appGray, fontSize: 10, marginTop: 10}}>
            Terms & Conditions
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                backgroundColor: Colors.appBlack,
                width: '70%',
              }}></View>
            <Pressable
              style={{
                backgroundColor: Colors.appWhite,
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.appBlack,
                  fontSize: 15,
                  fontWeight: '700',
                  paddingVertical: 10,
                }}>
                Copy Link
              </Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Pressable
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
                borderColor: Colors.appGray,
              }}>
              <Image
                source={AppIcons.whatsapp}
                style={{height: 33, width: 36}}
              />
            </Pressable>
            <Pressable
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
                borderColor: Colors.appGray,
              }}>
              <Image
                source={AppIcons.facebook}
                style={{height: 33, width: 36}}
              />
            </Pressable>
            <Pressable
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
                borderColor: Colors.appGray,
              }}>
              <Image source={AppIcons.email} style={{height: 33, width: 36}} />
            </Pressable>
            <Pressable
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="dots-three-horizontal"
                size={15}
                color={Colors.appWhite}
              />
              <Text style={{color: Colors.appWhite, fontSize: 12}}>More</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: '#1A1A1A',
          }}>
          <FontAwesome name="check" size={30} color={Colors.appWhite} />
          <Text style={{color: Colors.appWhite, fontSize: 14, marginLeft: 10}}>
            My List
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.appWhite, fontSize: 14}}>
            App Settings
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.appWhite, fontSize: 14}}>Account</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.appWhite, fontSize: 14}}>Help</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '5%',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.appWhite, fontSize: 14}}>Sign Out</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
