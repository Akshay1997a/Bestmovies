import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useSelector,
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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getProvidersList
} from "../../network/requests.ts";
import { State } from 'react-native-gesture-handler';
import { logOnConsole } from '../../helper/globalFunctions';
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
  {id: 3, name: 'Netflix', image: AppImages.netflix, selected: true},
  {id: 4, name: 'Netflix', image: AppImages.netflix, selected: true},
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
  // {
  //   id: 18,
  //   name: 'Netflix',
  //   image: AppImages.netflix,
  //   selected: false,
  // },
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

  const [selected, setSelected] = useState(false);
  const [data, setData] = useState(DATA);
  const [isFocus, setIsFocus] = useState(false);

  const [focus, setFocus] = useState(false);
  const onFocus = useCallback(() => {
    console.log('onFocus----->>>>>>');
    setFocus(true);
    //   onFocusedItem(item)
  });
  const onPressClick = (val) => {
    props.action(val);
    setSelected(true);
  };

  const onBlur = useCallback(() => {
    console.log('onBlur');

    setFocus(false);
  }, []);

  
  return (
    // <ScrollView
    // // showsVerticalScrollIndicator={true}
    // >
    <Pressable
      onBlur={() => setFocus(false)}
      onPress={() => onPressClick(props.item)}
      onFocus={() => {
        setFocus(true);
        // onFocus(true);
        setFocus(props.item.id);
      }}>
      <View style={focus ? styles.itemWrapperSelected : styles.itemWrapper}>
        {/* <Icon  type="fontawesome" name={"play-circle"} style={{fontSize:80, color:colors.white}} /> */}

        {/* {
            props.item.map((obj, ind)=>( */}

        <TouchableOpacity
          style={{
            zIndex: isAndroid()
              ? StyleConfig.resWidth(10)
              : StyleConfig.resWidth(100),
            // elevation: 2,
          }}>
          {props.item.selected ? (
            <Image
            resizeMode="contain"
              style={{
                height: StyleConfig.resHeight(40),
                position: 'absolute',
                alignSelf:'flex-end',
                // left: StyleConfig.resWidth(10),
                top: StyleConfig.resHeight(38),
                width: StyleConfig.resWidth(66),
              }}
              source={AppImages.check_red}
            />
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={
              isAndroid()
                ? {flexDirection: 'row', justifyContent: 'center'}
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

        {/* // ))
            // } */}
      </View>
    </Pressable>

    // </ScrollView>
  );
};

const TVSubscription = (props) => {
  const onPressClick = (index) => {
    props.action(index);
    logOnConsole('data',index);
  };
   ///const data = useSelector(state => state.state)
  const [item,setItem] = useState([]);

  useEffect(() => {
    //logOnConsole('call streem modal');
    console.log('call streem modal');
    props.getProvidersList((res) => {
    // console.log('provider respone', res.data.providers);
     setItem(res.data);
   });
  }, []);
  
  //console.log("hello item providers",item.providers);
  return (
    <FlatList
      hasTVPreferredFocus={true}
      numColumns={5}
      data={item.providers}
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
//const mapStateToProps = state => ({providerData:state.providerData});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProvidersList,
    },
    dispatch,
  );
};

export default connect(null,mapDispatchToProps) (TVSubscription);
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal:10,
    width: StyleConfig.resWidth(270),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: colors.tomatoRed,
    marginRight: StyleConfig.resWidth(26),
    // paddingVertical: StyleConfig.resWidth(5),
    // flexDirection: 'row',
    // borderColor: 'red',
    // marginBottom: isAndroid() ? 0 : 10,
  },
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  itemWrapperSelected: {
    // justifyContent: 'center',
    // paddingHorizontal: StyleConfig.resWidth(30),
    // paddingVertical: StyleConfig.resWidth(6),
    // marginLeft: 20,
    // backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resHeight(10),
    // // minWidth:  StyleConfig.resWidth(60),
    // alignItems: 'center',
    borderWidth:1,
    borderColor:'red',
    width: StyleConfig.resWidth(230),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: colors.tomatoRed,
    marginRight: StyleConfig.resWidth(26),
    // paddingVertical: StyleConfig.resWidth(5),
  },
  itemWrapper: {
    // borderWidth:1,
    // justifyContent: 'center',
    // paddingHorizontal: StyleConfig.resWidth(12),
    // paddingVertical: StyleConfig.resWidth(6),
    // marginHorizontal: 18,
    // // minWidth: StyleConfig.resWidth(60),
    // alignItems: 'center',
    // borderRadius: StyleConfig.resHeight(10),
    width: StyleConfig.resWidth(230),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // backgroundColor:colors.tomatoRed,
    marginRight: StyleConfig.resWidth(26),
    // marginVertical: StyleConfig.resWidth(5),
  },
  watchImage: {
    paddingVertical: StyleConfig.resWidth(2),
    width: StyleConfig.resWidth(95),
    height: StyleConfig.resWidth(63),
    borderRadius: StyleConfig.resWidth(8),
    overflow:'hidden',
    marginLeft: StyleConfig.resWidth(6),
    marginVertical: StyleConfig.resWidth(6),
    // paddingTop:40
  },
  focusText: {
    alignSelf: 'center',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resWidth(24),
    lineHeight:StyleConfig.resHeight(28),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    color: colors.white,
    marginLeft: StyleConfig.resWidth(10),
    // width: isAndroid() ? StyleConfig.resWidth(100) : StyleConfig(150),

    width: StyleConfig.resWidth(120),
  },
  text: {
    alignSelf: 'center',
    // borderWidth:1,
    // height: isAndroid()? 35:80,
    // borderWidth:1,
    // borderColor:'red',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resWidth(24),
    lineHeight:StyleConfig.resHeight(28),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    // borderWidth:1,
    // marginTop:isAndroid()? 10:10,
    color: '#999999',
    width: StyleConfig.resWidth(120),
    marginLeft: StyleConfig.resWidth(10),
  },

  selectedText: {
    alignSelf: 'center',

    // borderWidth: 1,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resHeight(24),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    // borderWidth:1,
    // marginTop:4,
    color: colors.tomatoRed,
    // textAlign:"center",
    marginLeft: StyleConfig.resWidth(10),
    width: StyleConfig.resWidth(120),
  },
});
