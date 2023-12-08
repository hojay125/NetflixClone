import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Image} from 'react-native';

import {AppIcons} from '../Helper/Images';
import {Colors} from '../Helper/constants';

export const Splash = props => {
  const [Splash, setSplash] = useState(true);

  const getdetails = () => {
    setSplash(false);
    props.navigation.navigate('Username');
  };

  useEffect(() => {
    setTimeout(() => getdetails(), 1000);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.appBlack,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={AppIcons.bigNetflix} style={{width: 207, height: 55}} />
    </SafeAreaView>
  );
};

export default Splash;
