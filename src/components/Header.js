/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Animated,
  Text,
  ScrollView,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  Dimensions,
  Easing,
  StatusBar as RNStatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA from 'react-native-vector-icons/FontAwesome';
import {useAnimationProvider} from '../Providers/CollapsibleHeaderProvider';
import {SearchTitle} from './SearchBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {FilterInitialState} from '../redux/FilterModule/FilterReducer';
import StatusBar from './StatusBar';
import {heightScale, widthScale} from '../helper/ResponsiveFonts';
// import { SafeAreaView } from 'react-native-safe-area-context';
import primary_regular_fonts from '../helper/fonts';
import {WIDTH} from '../helper/globalFunctions';

export const HEADER_HEIGHT = 40;
export const TAB_BAR_HEIGHT = 40;
export const STATUS_BAR_HEIGHT = RNStatusBar.currentHeight;
export const TOTAL_HEADER_HEIGHT =
  HEADER_HEIGHT + TAB_BAR_HEIGHT + STATUS_BAR_HEIGHT;
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('screen');
export const HEADER_TYPE = {
  DEFAULT: 'DEFAULT',
  SEARCH_BAR: 'SEARCH_BAR',
};

export default function Header(props) {
  const inset = useSafeAreaInsets();
  const {navigate, goBack} = props.navigation;
  const {translateY, reset} = useCollapsibleHeader();
  const {isTabBarVisible, headerType} = props;

  useEffect(() => {
    const {navigation} = props;
    navigation.addListener('state', (e) => {
      reset();
    });
  }, []);

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <Animated.View
        style={[
          styles.headerContainer,
          {paddingTop: inset.top, transform: [{translateY: translateY}]},
        ]}>
        {headerType === undefined || headerType === HEADER_TYPE.DEFAULT ? (
          <DefaultHeader navigate={(name) => navigate(name)} />
        ) : (
          <SearchHeader onPress={goBack} />
        )}
        {isTabBarVisible && <TopBar {...props} />}
      </Animated.View>
    </>
  );
}

const DefaultHeader = ({navigate}) => {
  const filterConfig = useSelector((state) => state.filterConfig);
  const [isFilterApplied, setFilterApplied] = useState(false);

  const checkFilter = () => {
    if (JSON.stringify(FilterInitialState) !== JSON.stringify(filterConfig)) {
      setFilterApplied(true);
    } else {
      setFilterApplied(false);
    }
  };

  useEffect(() => {
    checkFilter();
  }, [filterConfig]);

  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: HEADER_HEIGHT,
        paddingHorizontal: 20,
        paddingTop: 5,
      }}>
      <TouchableOpacity
        onPress={() => navigate('Menu')}
        style={{
          position: 'absolute',
          bottom: heightScale(-7),
          left: widthScale(16),
        }}>
        <Image
          source={require('../../assets/Icons/BMicon.png')}
          style={{
            width: widthScale(130),
            height: heightScale(83),
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View style={{width: widthScale(110)}} />
      <View style={{height: 50}} />
      <TouchableOpacity onPress={() => navigate('Filter')}>
        <View style={{position: 'relative'}}>
          <Image
            source={require('../../assets/Icons/filter_ic.png')}
            style={{width: 25, height: 25}}
          />
          {isFilterApplied && <View style={styles.circleDot} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Search')}>
        <Icon name="ios-search" size={25} color="#232323" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <FA name="user" size={25} color="#232323" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('MenusList')}>
        <Icons name="dots-three-vertical" size={25} color="#232323" />
      </TouchableOpacity>
    </View>
  );
};

const SearchHeader = ({onPress}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: HEADER_HEIGHT,
      paddingHorizontal: 10,
    }}>
    <TouchableOpacity style={{marginRight: 10}} onPress={onPress}>
      <FA5 name="chevron-left" size={25} color="#232323" />
    </TouchableOpacity>
    <SearchTitle placeholder="Title" />
  </View>
);

function TopBar(props) {
  console.log('Top Bar', props);
  const {navigate} = props.navigation;
  const {routes, index} = props.state;
  const {indicatorStyle} = props;
  const indicatorAnim = React.useRef(new Animated.Value(0)).current;
  const indicatorSpan = props.scrollEnabled ? 4 : routes.length;

  const navigateTo = (routeIndex) => {
    navigate(routes[routeIndex].name);
    // Animated.timing(indicatorAnim, {
    //   toValue: (SCREEN_WIDTH / indicatorSpan - 20) * routeIndex + 20,
    //   duration: 200,
    //   // easing: Easing.ease,
    //   useNativeDriver: true,
    // }).start();
  };

  // useEffect(() => {
  //   Animated.timing(indicatorAnim, {
  //     toValue: (SCREEN_WIDTH / indicatorSpan - 20) * index + 20,
  //     duration: 200,
  //     // easing: Easing.ease,
  //     useNativeDriver: true,
  //   }).start();
  // }, [index]);

  return (
    <ScrollView
      horizontal={true}
      scrollEnabled={props.scrollEnabled}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        {paddingHorizontal: 10},
        styles.TopBarScrollContainer,
        (props.scrollEnabled === undefined || !props.scrollEnabled) && {
          width: '100%',
        },
        props.style,
      ]}>
      {routes.map((item, ind) => (
        <TabButton
          key={item.key}
          title={item.name}
          index={ind}
          onPress={() => navigateTo(ind)}
          {...props}
        />
      ))}
      {/* <Animated.View
        style={[
          indicatorStyle,
          styles.indicatorStyle,
          {width: SCREEN_WIDTH / indicatorSpan - 20},
          {transform: [{translateX: indicatorAnim}]},
        ]}
      /> */}
    </ScrollView>
  );
}

function TabButton({title, index, onPress, ...rest}) {
  const {state, activeTintColor, inactiveTintColor} = rest;
  console.log(rest);
  return (
    <TouchableNativeFeedback key={state.routes[index].key} onPress={onPress}>
      <View
        style={[
          styles.TabButStyle,
          rest.scrollEnabled && {width: SCREEN_WIDTH / 4},
          state.index === index && styles.TabButActive,
        ]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.TabButTextStyle,
            rest.labelStyle,
            state.index === index
              ? {
                  color: activeTintColor,
                  fontFamily: primary_regular_fonts.primary_bold_font,
                }
              : {color: inactiveTintColor},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export function useCollapsibleHeader() {
  const scrollY = useAnimationProvider();
  const diffClamp = Animated.diffClamp(scrollY, 0, TOTAL_HEADER_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, TOTAL_HEADER_HEIGHT - 5],
    outputRange: [0, -TOTAL_HEADER_HEIGHT - 5],
  });
  console.log('SwcrollY', scrollY);

  const reset = () => {
    Animated.timing(scrollY, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const onScrollY = (e) =>
    Animated.event(
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

  return {translateY, onScrollY, reset};
}

export function useCollapsibleHeaderHOC(WrappedComponent) {
  return (props) => {
    const {onScrollY, reset} = useCollapsibleHeader();
    const scrollContext = useAnimationProvider();

    return (
      <WrappedComponent
        {...props}
        onScrollY={onScrollY}
        scrollContext={scrollContext}
        reset={reset}
      />
    );
  };
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    // overflow: 'hidden',
    zIndex: 2,
    ...(Platform.OS === 'android'
      ? {
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 5,
        }
      : {
          shadowOpacity: 0.2,
          shadowOffset: {width: 1, height: 2},
          shadowColor: '#000',
        }),
  },
  TopBarScrollContainer: {
    height: TAB_BAR_HEIGHT,
  },
  TabButStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  TabButActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff3300',
  },
  TabButTextStyle: {
    // width: '80%',
  },
  indicatorStyle: {
    position: 'absolute',
    bottom: 0,
    height: 2,
  },
  circleDot: {
    position: 'absolute',
    top: 0,
    left: 20,
    width: 10,
    height: 10,
    backgroundColor: '#ff3300',
    borderRadius: 100,
    overflow: 'hidden',
  },
});
