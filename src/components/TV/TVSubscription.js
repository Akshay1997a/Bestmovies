import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import BaseModal from './BaseModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import AppImages from '../../assets';
import strings from '../../helper/strings';
import StreamModal from './StreamModal';
import primary_regular_font from '../../helper/fonts';
const isAndroid = () => {
  return Platform.OS == 'android';
};
const DATA = [
  {id: 0, name: 'Rating'},
  {id: 1, name: 'Match'},
  {id: 2, name: "Friend's Like"},
  {id: 3, name: 'Popularity'},
];
const items = [
  {
    id: 1,
    name: 'Netflix',
    image: AppImages.netflix,
    selected: false,
  },
  {id: 2, name: 'Amzon prime video', image: AppImages.amazon},
  {id: 3, name: 'Netflix', image: AppImages.netflix, selected: false},
  {id: 4, name: 'Netflix', image: AppImages.netflix, selected: false},
  {id: 5, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 6, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {
    id: 7,
    name: 'Netflix',
    image: AppImages.netflix,
    selected: false,
  },
  {id: 8, name: 'Amzon prime video', image: AppImages.amazon, selected: false},
  {id: 9, name: 'Netflix', image: AppImages.netflix, selected: false},
  {id: 10, name: 'Netflix', image: AppImages.netflix, selected: false},
  {id: 11, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 12, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {
    id: 13,
    name: 'Netflix',
    image: AppImages.netflix,
    selected: false,
  },
  {id: 14, name: 'Amzon prime video', image: AppImages.amazon, selected: false},
  {id: 15, name: 'HBO', image: AppImages.hbo, selected: false},
  {id: 16, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {id: 17, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 18, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {
    id: 18,
    name: 'Netflix',
    image: AppImages.netflix,
    selected: false,
  },
  {id: 19, name: 'Amzon prime video', image: AppImages.amazon, selected: false},
  {id: 20, name: 'HBO', image: AppImages.hbo, selected: false},
  {id: 21, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 22, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 23, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {id: 24, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {id: 25, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {id: 26, name: 'HBO', image: AppImages.hbo, selected: false},
  {id: 27, name: 'Netflix', image: AppImages.netflix, selected: false},
  {id: 28, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 29, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {id: 30, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {id: 31, name: 'Netflix', image: AppImages.netflix, selected: false},
  {id: 32, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 33, name: 'Disney+', image: AppImages.disnep, selected: false},
  {id: 34, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  {id: 35, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
];

// const styles = StyleSheet.create({
//     backWrap:{
//         paddingHorizontal: StyleConfig.resWidth(8),
//         paddingVertical: StyleConfig.resHeight(4),
//         margin: 4,
//         marginLeft:10,
//     },
//     focusBackWrap:{
//         backgroundColor: colors.tomatoRedLight,
//         paddingHorizontal: StyleConfig.resWidth(8),
//         paddingVertical: StyleConfig.resHeight(4),
//         margin: 4,
//         borderRadius:10,
//         marginLeft:10

//     }
// })

const TVSubscriptionRender = (props) => {
  // console.log('props',props);

  const [selected, setSelected] = useState(-1);
  const [data, setData] = useState(DATA);

  const [focus, setFocus] = useState(false);
  const onFocus = useCallback(() => {
    console.log('onFocus');
    setFocus(true);
    //   onFocusedItem(item)
  });
  const onPressClick = (val) => {
    props.action(val);
  };

  const onBlur = useCallback(() => {
    console.log('onBlur');

    setFocus(false);
  }, []);
  // useEffect(() => {

  //     async function fetchData() {
  //         fetch('https://60cde54091cc8e00178dc16b.mockapi.io/generes')
  //         .then(res => res.json())
  //         .then(resJson => {
  //             setData(resJson)
  //         }).catch(e => console.log(e));
  //     }

  //     fetchData();
  //   }, [])
  return (
    <ScrollView
    // showsVerticalScrollIndicator={true}
    >
      <View
        style={{
          flexDirection: 'row',
          borderColor: 'red',
          marginBottom: isAndroid() ? 0 : 10,
        }}>
        {/* <Icon  type="fontawesome" name={"play-circle"} style={{fontSize:80, color:colors.white}} /> */}

        {/* {
            props.item.map((obj, ind)=>( */}

        <Pressable
          onBlur={() => setFocus(false)}
          onPress={() => onPressClick(props.item)}
          onFocus={() => {
            props?.onFocus(), setFocus(props.item.id);
          }}
          style={
            props.item.id == focus
              ? {borderRadius: 10, backgroundColor: colors.tomatoRed}
              : {}
          }>
          <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
            {props.item.selected ? (
              <Image
                style={{
                  height: 40,
                  position: 'absolute',
                  left: 70,
                  top: 40,
                  width: 40,
                }}
                source={AppImages.check_red}
              />
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('To be implemented')}>
            <View
              style={
                isAndroid()
                  ? {flexDirection: 'row', alignItems: 'center'}
                  : {
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }
              }>
              <Image style={styles.watchImage} source={props.item.image} />
              <Text
                style={
                  focus == props.item.id
                    ? styles.focusText
                    : props.item.selected
                    ? styles.selectedText
                    : styles.text
                }>
                {props.item.name}
              </Text>
            </View>

            {/* <Text style={styles.watchText}>/month</Text> */}
          </TouchableOpacity>
        </Pressable>

        {/* // ))
            // } */}
      </View>
    </ScrollView>
  );
};

const TVSubscription = (props) => {
  const onPressClick = (index) => {
    props.action(index);
  };

  return (
    <FlatList
      hasTVPreferredFocus={true}
      numColumns={5}
      data={props.items}
      renderItem={({item, index}) => {
        return (
          <TVSubscriptionRender
            item={item}
            type="movie"
            onFocus={props?.onFocus}
            action={() => onPressClick(index)}
          />
        );
      }}
    />
  );
};

export default TVSubscription;
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  itemWrapperSelected: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    // marginHorizontal: 18,
    backgroundColor: colors.tomatoRed,
    borderRadius: 30,
    minWidth: 60,
    alignItems: 'center',
  },
  itemWrapper: {
    //   borderWidth:1,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    // marginHorizontal:18,
    minWidth: 60,
    alignItems: 'center',
  },
  watchImage: {
    // borderWidth:1,
    width: isAndroid() ? 60 : StyleConfig.resWidth(95),
    height: isAndroid()
      ? StyleConfig.resHeight(120 / 2)
      : StyleConfig.resHeight(60),
    borderRadius: isAndroid() ? 5 : 10,
    marginLeft: 10,
    marginVertical: isAndroid() ? 5 : 5,
    // paddingTop:40
  },
  focusText: {
    // borderWidth:1,

    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 14 : StyleConfig.resHeight(24),
    fontWeight: '400',
    // borderWidth:1,
    // marginTop:4,
    color: colors.white,
    // textAlign:"center",
    marginLeft: 10,
    width: isAndroid() ? 100 : 150,

    // width: isAndroid()?100 : 100,
  },
  text: {
    // borderWidth:1,
    // height: isAndroid()? 35:80,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 14 : StyleConfig.resHeight(26),
    fontWeight: '400',
    // borderWidth:1,
    // marginTop:isAndroid()? 10:10,
    color: '#999999',

    marginLeft: 10,
    width: isAndroid() ? 100 : 150,

  },

  selectedText: {
    borderWidth: 1,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid()
      ? StyleConfig.resHeight(26)
      : StyleConfig.resHeight(26),
    fontWeight: '700',
    // borderWidth:1,
    // marginTop:4,
    color: colors.tomatoRed,
    // textAlign:"center",
    marginLeft: 10,
    width: isAndroid() ? 100 : 150,
  },
});
