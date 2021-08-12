import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome5';
import FA5 from 'react-native-vector-icons/FontAwesome5';

export const HEADER_HEIGHT = 60;

export default function Header(props) {
  const navigate = () => {};

  return (
    <Animated.View
      style={[
        {backgroundColor: '#fff', height: HEADER_HEIGHT, overflow: 'hidden'},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          justifyContent: 'space-between',
          alignItems: 'center',
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
    </Animated.View>
  );
}

export function useCollapsableHeader() {
  const [height, setHeight] = useState(HEADER_HEIGHT);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const diffClimp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const translateY = diffClimp.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY,
          },
        },
      },
    ],
    {useNativeDriver: true}, // Add this line
  );

  useEffect(() => {
    scrollY.addListener((val) => setHeight(val.value));
    return () => {
      scrollY.removeAllListeners();
    };
  }, []);

  return {translateY, height, onScroll};
}

export function withCollapsebleHOC(Component) {
  return (props) => {
    const obj = useCollapsableHeader();
    return <Component {...props} {...obj} />;
  };
}
