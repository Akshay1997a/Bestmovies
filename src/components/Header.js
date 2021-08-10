import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome5';
import FA5 from 'react-native-vector-icons/FontAwesome5';

export default function Header(props) {
  const {navigate} = props.navigation;

  return (
    <View style={{backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          justifyContent: 'space-between',
          alignItems: 'center',
          // height: 70,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigate('Menu')}>
          <Image
            source={require('../../assets/Icons/BMicon.png')}
            style={{width: 150, height: 60, resizeMode: 'center'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Filter')}>
          <Image
            source={require('../../assets/Icons/filter_ic.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Search')}>
          <Icon name="ios-search" size={25} color="#232323" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <User name="user" size={25} color="#232323" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('MenusList')}>
          <Icons name="dots-three-vertical" size={25} color="#232323" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
