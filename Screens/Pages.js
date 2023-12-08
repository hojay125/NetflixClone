import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';

import {AppIcons} from '../Helper/Images';
import {Colors, RW, RH} from '../Helper/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Home from './Home';
import Search from './Search';
import Coming from './Coming';
import Downloads from './Downloads';
import Menu from './Menu';

export const Pages = props => {
  const [active, setActive] = useState('Home');
  return (
    <View
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
      }}>
      <View
        style={{
          width: RW(100),
          height: RH(90),
        }}>
        {active == 'Home' ? <Home /> : null}
        {active == 'Search' ? <Search /> : null}
        {active == 'Coming' ? <Coming /> : null}
        {active == 'Downloads' ? <Downloads /> : null}
        {active == 'Menu' ? <Menu /> : null}
      </View>
      <KeyboardAvoidingView
        style={{
          backgroundColor: '#121212',
          width: RW(100),
          height: RH(10),
          flexDirection: 'row',

          justifyContent: 'space-between',
        }}>
        {active == 'Home' ? (
          <Pressable
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Ionicons name="home-outline" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Home
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Home')}
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Ionicons name="home-outline" size={25} color={Colors.appGray} />
            <Text style={{color: Colors.appGray, fontSize: 8, marginTop: 3}}>
              Home
            </Text>
          </Pressable>
        )}

        {active == 'Search' ? (
          <Pressable
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Feather name="search" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Search
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Search')}
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Feather name="search" size={25} color={Colors.appGray} />
            <Text style={{color: Colors.appGray, fontSize: 8, marginTop: 3}}>
              Search
            </Text>
          </Pressable>
        )}
        {active == 'Coming' ? (
          <Pressable
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="play-box-multiple-outline"
              size={25}
              color={Colors.appWhite}
            />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Coming soon
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Coming')}
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="play-box-multiple-outline"
              size={25}
              color={Colors.appGray}
            />
            <Text style={{color: Colors.appGray, fontSize: 8, marginTop: 3}}>
              Coming soon
            </Text>
          </Pressable>
        )}
        {active == 'Downloads' ? (
          <Pressable
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Octicons name="download" size={25} color={Colors.appWhite} />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Downloads
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Downloads')}
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Octicons name="download" size={25} color={Colors.appGray} />
            <Text style={{color: Colors.appGray, fontSize: 8, marginTop: 3}}>
              Downloads
            </Text>
          </Pressable>
        )}
        {active == 'Menu' ? (
          <Pressable
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Ionicons
              name="reorder-four-outline"
              size={25}
              color={Colors.appWhite}
            />
            <Text style={{color: Colors.appWhite, fontSize: 8, marginTop: 3}}>
              Menu
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setActive('Menu')}
            style={{
              paddingTop: '3%',
              width: '20%',
              alignItems: 'center',
            }}>
            <Ionicons
              name="reorder-four-outline"
              size={25}
              color={Colors.appGray}
            />
            <Text style={{color: Colors.appGray, fontSize: 8, marginTop: 3}}>
              Menu
            </Text>
          </Pressable>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Pages;
