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
import {Colors, RH, RW} from '../Helper/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const Coming = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: '5%'}}>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 5,
            backgroundColor: Colors.appDeepRed,
            borderRadius: 50,
          }}>
          <Ionicons name="notifications" size={15} color={Colors.appWhite} />
        </View>
        <Text
          style={{color: Colors.appWhite, fontWeight: '800', marginLeft: 10}}>
          Notifications
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 5,
            backgroundColor: Colors.appDeepGray,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={AppIcons.topcard2}
              style={{height: 55, width: 120}}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: Colors.appWhite, fontSize: 13}}>
                New Arrival
              </Text>
              <Text
                style={{color: Colors.appWhite, fontSize: 11, marginTop: 4}}>
                El Chapo
              </Text>
              <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 4}}>
                Nov 6
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Image
              source={AppIcons.topcard6}
              style={{height: 55, width: 120}}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: Colors.appWhite, fontSize: 13}}>
                New Arrival
              </Text>
              <Text
                style={{color: Colors.appWhite, fontSize: 11, marginTop: 4}}>
                Peaky Blinders
              </Text>
              <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 4}}>
                Nov 6
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={AppIcons.Rectangle1}
          style={{width: RW(100), height: RH(20), marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            width: RW(35),
            alignSelf: 'flex-end',
            justifyContent: 'space-between',
            paddingRight: '5%',
            marginTop: 15,
          }}>
          <Pressable style={{alignItems: 'center'}}>
            <Ionicons name="notifications" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Remind Me
            </Text>
          </Pressable>
          <Pressable style={{alignItems: 'center'}}>
            <Entypo name="share" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Share
            </Text>
          </Pressable>
        </View>
        <View style={{paddingHorizontal: RW(3)}}>
          <Text style={{color: Colors.appWhite, fontSize: 10, marginTop: 3}}>
            Season 1 Coming December 14
          </Text>
          <Text
            style={{
              color: Colors.appWhite,
              fontSize: 16,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Castle & Castle
          </Text>
          <Text style={{color: Colors.appWhite, fontSize: 10, marginTop: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam
            dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan
            accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar
            diam.
          </Text>
          <Text
            style={{
              color: Colors.appWhite,
              fontSize: 12,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Steamy . Soapy . Slow Burn . Suspenseful . Teen . Mystery
          </Text>
        </View>
        <Image
          source={AppIcons.Rectangle2}
          style={{width: RW(100), height: RH(20), marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            width: RW(35),
            alignSelf: 'flex-end',
            justifyContent: 'space-between',
            paddingRight: '5%',
            marginTop: 15,
          }}>
          <Pressable style={{alignItems: 'center'}}>
            <Ionicons name="notifications" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Remind Me
            </Text>
          </Pressable>
          <Pressable style={{alignItems: 'center'}}>
            <Entypo name="share" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Share
            </Text>
          </Pressable>
        </View>
        <View style={{paddingHorizontal: RW(3)}}>
          <Text style={{color: Colors.appWhite, fontSize: 10, marginTop: 3}}>
            Season 1 Coming December 14
          </Text>
          <Text
            style={{
              color: Colors.appWhite,
              fontSize: 16,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Tiny Pretty Things
          </Text>
          <Text style={{color: Colors.appWhite, fontSize: 10, marginTop: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam
            dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan
            accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar
            diam.
          </Text>
          <Text
            style={{
              color: Colors.appWhite,
              fontSize: 12,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Steamy . Soapy . Slow Burn . Suspenseful . Teen . Mystery
          </Text>
        </View>
        <Image
          source={AppIcons.Rectangle3}
          style={{width: RW(100), height: RH(20), marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            width: RW(35),
            alignSelf: 'flex-end',
            justifyContent: 'space-between',
            paddingRight: '5%',
            marginTop: 15,
          }}>
          <Pressable style={{alignItems: 'center'}}>
            <Ionicons name="notifications" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Remind Me
            </Text>
          </Pressable>
          <Pressable style={{alignItems: 'center'}}>
            <Entypo name="share" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Share
            </Text>
          </Pressable>
        </View>
        <View style={{paddingHorizontal: RW(3)}}>
          <Text style={{color: Colors.appWhite, fontSize: 10, marginTop: 3}}>
            Season 1 Coming December 14
          </Text>
          <Text
            style={{
              color: Colors.appWhite,
              fontSize: 16,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Faster
          </Text>
          <Text style={{color: Colors.appWhite, fontSize: 10, marginTop: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam
            dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan
            accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar
            diam.
          </Text>
          <Text
            style={{
              color: Colors.appWhite,
              fontSize: 12,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Steamy . Soapy . Slow Burn . Suspenseful . Teen . Mystery
          </Text>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Coming;
