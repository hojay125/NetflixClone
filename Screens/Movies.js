import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';

import {AppIcons} from '../Helper/Images';
import {Colors, RH, RW} from '../Helper/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export const Movies = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
      }}>
      <ScrollView>
        <ImageBackground
          source={AppIcons.Movies}
          style={{width: RW(100), height: RH(50)}}>
          <View
            style={{
              paddingHorizontal: '5%',
              paddingVertical: 1,
              marginTop: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image source={AppIcons.N} style={{height: 55, width: 50}} />
            <Pressable onPress={() => navigation.navigate('TVshows')}>
              <Text style={{color: Colors.appWhite, fontSize: 15}}>
                TV Shows
              </Text>
            </Pressable>
            <Pressable>
              <Text style={{color: Colors.appWhite, fontSize: 15}}>
                My List
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
        <Text
          style={{
            color: Colors.appWhite,
            fontSize: 12,
            alignSelf: 'center',
            fontWeight: '700',
          }}>
          🂮 #2 in Nigeria Today
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: RW(20),
            marginTop: 10,
          }}>
          <Pressable
            style={{
              alignItems: 'center',
            }}>
            <AntDesign name="plus" size={15} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 13}}>My List</Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: Colors.appGrayBlack,
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 8,
              borderRadius: 5,
            }}>
            <Entypo name="controller-play" size={25} color={Colors.appBlack} />
            <Text
              style={{color: Colors.appBlack, fontSize: 13, fontWeight: '700'}}>
              Play
            </Text>
          </Pressable>
          <Pressable
            style={{
              alignItems: 'center',
            }}>
            <AntDesign name="infocirlceo" size={15} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 13}}>Info</Text>
          </Pressable>
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '800',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Previews
        </Text>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.preview1}
                style={{width: 102, height: 102, borderRadius: 50}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.preview2}
                style={{width: 102, height: 102, borderRadius: 50}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.preview3}
                style={{width: 102, height: 102, borderRadius: 50}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.preview4}
                style={{width: 102, height: 102, borderRadius: 50}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.preview5}
                style={{width: 102, height: 102, borderRadius: 50}}
              />
            </Pressable>
          </ScrollView>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Continue Watching for Emenalo
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.continue1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.continue2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.continue3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.continue4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Popular on Netflix
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.popular1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.popular2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.popular3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.popular4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.popular5}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Trending Now
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.trending1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.trending2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.trending3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.trending4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.trending5}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Top 10 in Nigeria Today
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image source={AppIcons.top1} style={{width: 102, height: 160}} />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image source={AppIcons.top2} style={{width: 102, height: 160}} />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image source={AppIcons.top3} style={{width: 102, height: 160}} />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image source={AppIcons.top4} style={{width: 102, height: 160}} />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image source={AppIcons.top5} style={{width: 102, height: 160}} />
            </Pressable>
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          My List
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.mylist1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.mylist2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.mylist3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.mylist4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.mylist5}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          African Movies
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.africa1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.africa2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.africa3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.africa4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.africa5}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Nollywood Movies & TV
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.nollywood1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.nollywood2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.nollywood3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.nollywood4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.nollywood5}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Netflix Originals
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.netflix1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.netflix2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.netflix3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.netflix4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.nollywood5}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.appWhite,
            marginTop: 20,
          }}>
          Watch It Again
        </Text>

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Pressable>
              <Image
                source={AppIcons.watch1}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.watch2}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.watch3}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.watch4}
                style={{width: 102, height: 160}}
              />
            </Pressable>
            <Pressable style={{marginLeft: 8}}>
              <Image
                source={AppIcons.watch5}
                style={{width: 102, height: 160}}
              />
            </Pressable>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movies;
