import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
import CommonFilterTvModal from './CommonFilterTvModal';
import BaseModal from './BaseModal';
import TVButton from './TVButton';
import ToggleSwitch from 'toggle-switch-react-native';
import TVSubscription from '../TV/TVSubscription';
import TVYourCountryModal from '../../components/TV/TVYourCountriModal';
import TVToggleButton from '../../components/TV/TVToggleButton';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import AppImages from '../../assets';
import strings from '../../helper/strings';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {HEIGHT, logOnConsole, WIDTH} from '../../helper/globalFunctions';
// import ToggleSwitch from "toggle-switch-react-native";
const isAndroid = () => {
  return Platform.OS == 'android';
};

const DATA = [
  {id: 0, name: 'Quality'},
  {id: 1, name: 'Match'},
  {id: 2, name: "Friend's Like"},
  {id: 3, name: 'Popularity'},
];
let [
  NONE,
  SEARCH,
  MY_LIST,
  MOVIES,
  TV_SHOW,
  SHORTS,
  DIRECTOR,
  ACTOR,
  PROFILE,
  MENU,
] = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const styles = StyleSheet.create({
  backImage: {
    height: StyleConfig.resWidth(30),
    width: StyleConfig.resWidth(20),
    marginTop: StyleConfig.resWidth(10),
  },
  heading: {
    // maxWidth: 250,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resWidth(34),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  tvToggle1: {
    // maxWidth: 500,
    marginLeft: StyleConfig.resWidth(30),
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 15 : 30,
    fontWeight: '400',
    color: colors.black,
    borderColor:'red',
    borderWidth:1,
  },
  tvToggle: {
    // borderWidth:1,
    alignItems:'center',
    // borderColor:'red',
    // borderWidth:1,
    // justifyContent:'center',
    // padding: isAndroid() ? 2 : 20,
    flexDirection: 'row',
  },
  download: {
    // maxWidth: 400,
    // marginEnd: isAndroid() ? 20 : 60,
    color: colors.black,
    marginLeft: StyleConfig.resWidth(20),
    fontSize: StyleConfig.resWidth(30),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  tvPlatform: {
    // marginStart: isAndroid() ? 20 : 60,
    fontSize: StyleConfig.resWidth(30),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  sbscriptionText: {
    fontSize: StyleConfig.resWidth(30),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  imageStyle: {
    // marginLeft:10,

    maxWidth: 500,
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? 15 : 30,
    fontWeight: '400',
    color: colors.black,
  },
  notfocusbackWrap: {
    // paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(10),
    // margin: 4,
    // marginLeft:10,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(8),
    // margin: 4,
    borderRadius: StyleConfig.resWidth(30),

    // marginLeft:10,
  },
  focustoggle: {
    backgroundColor: colors.tomatoRed,
    padding: StyleConfig.resWidth(10),
    // paddingVertical: StyleConfig.resWidth(8),
    // height: isAndroid() ? 40 : 90,

    // margin: 4,
    borderRadius: StyleConfig.resWidth(30),
  },
  focusButton: {
    backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resWidth(30),

    // height: isAndroid() ? 40 : 90,
    // borderWidth: 1,
    // marginRight:20,
    // paddingRight: 15,
    width: '32%',
    // height: 100,
    // alignItems:'center'
    alignItems: 'center',
    justifyContent: 'center',
  },
  notfocusButton: {
    backgroundColor: colors.lightGrey,
    borderRadius: StyleConfig.resWidth(10),
    height: isAndroid() ? StyleConfig.resHeight(80) : 90,
    // borderWidth: 1,
    // marginRight:20,
    // paddingRight: 15,
    width: '32%',
    // height: 100,
    // alignItems:'center'
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: StyleConfig.resWidth(34),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    color: colors.black,
  },
  focusCodeText: {
    fontSize: StyleConfig.resWidth(34),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    color: colors.white,
  },
  countryText: {
    fontSize: StyleConfig.resWidth(34),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.black,
  },
  focusTextCountry: {
    fontSize: StyleConfig.resWidth(34),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.white,
  },
  selectedText: {
    fontSize: isAndroid() ? 16 : 32,
    fontWeight: '700',
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_regular_font,
  },
  itemWrapperSelected: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 18,
    backgroundColor: colors.tomatoRed,
    borderRadius: 30,
    minWidth: 60,
    alignItems: 'center',
  },
  itemWrapper: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    // paddingVertical: 6,
    marginHorizontal: 18,
    minWidth: 60,
    alignItems: 'center',
  },
});
const items = [
  {
    id: 1,
    name: 'Netflix',
    image: AppImages.netflix,
    selected: false,
  },
  // {id: 2, name: 'Amzon prime video', image: AppImages.amazon},
  // {id: 3, name: 'Netflix', image: AppImages.netflix, selected: false},
  // {id: 4, name: 'Netflix', image: AppImages.netflix, selected: false},
  // {id: 5, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 6, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {
  //   id: 7,
  //   name: 'Netflix',
  //   image: AppImages.netflix,
  //   selected: false,
  // },
  // {id: 8, name: 'Amzon prime video', image: AppImages.amazon, selected: false},
  // {id: 9, name: 'Netflix', image: AppImages.netflix, selected: false},
  // {id: 10, name: 'Netflix', image: AppImages.netflix, selected: false},
  // {id: 11, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 12, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {
  //   id: 13,
  //   name: 'Netflix',
  //   image: AppImages.netflix,
  //   selected: false,
  // },
  // {id: 14, name: 'Amzon prime video', image: AppImages.amazon, selected: false},
  // {id: 15, name: 'HBO', image: AppImages.hbo, selected: false},
  // {id: 16, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {id: 17, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 18, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {
  //   id: 18,
  //   name: 'Netflix',
  //   image: AppImages.netflix,
  //   selected: false,
  // },
  // {id: 19, name: 'Amzon prime video', image: AppImages.amazon, selected: false},
  // {id: 20, name: 'HBO', image: AppImages.hbo, selected: false},
  // {id: 21, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 22, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 23, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {id: 24, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {id: 25, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {id: 26, name: 'HBO', image: AppImages.hbo, selected: false},
  // {id: 27, name: 'Netflix', image: AppImages.netflix, selected: false},
  // {id: 28, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 29, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {id: 30, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {id: 31, name: 'Netflix', image: AppImages.netflix, selected: false},
  // {id: 32, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 33, name: 'Disney+', image: AppImages.disnep, selected: false},
  // {id: 34, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
  // {id: 35, name: 'Apple TV+', image: AppImages.appleTv, selected: false},
];

const StreamModal = forwardRef(({onChangeSelected, ...props}, ref) => {
  const {t} = useTranslation();
  const [selected, setSelected] = useState(-1);
  const [country, setCountry] = useState('US');
  const [data, setData] = useState(items);
  const [updatedData, setUpdatedData] = useState();
  const [free, setFreeToggle] = useState(false);
  const [rent, setRentToggle] = useState(false);
  const [web, setWebToggle] = useState(false);

  const [focus, setFocus] = useState(false);
  const [showSelected, setShowSelected] = useState(false);
  const [focusHeader, setFocusHeader] = useState(false);
  const onFocus = useCallback(() => {
    console.log('onFocus');
    setFocus(true);
    setFocusHeader(false);
    //   onFocusedItem(item)
  });

  const onFocusButton = useCallback((val) => {
    console.log('onFocus', val);
    setSelected(val);
    setFocusHeader(true);
    //   onFocusedItem(item)
  });

  const onPressClick = (val) => {
    console.log('onPressClick StreamModal***', val);
    setCountry(val.code);
  };
  const saveProvides = (val) => {
    alert('successfull');
    console.log('saveProvides StreamModal***', val);
    // setCountry(val.code)
  };
  const myProviders = () => {
    // setData(updatedData);
    alert('A');
    console.log('myProviders StreamModal***');
  };
  const setAnyData = () => {
    setData(items);
  };
  const onClick = (index) => {
    let tempData = [...data];
    console.log('index hereee', index, tempData[index]);
    tempData[index].selected = !tempData[index].selected;
    setData(tempData);
    // setUpdatedData(val);
    setSelected(-1);

    // setCountry(val.code)
  };

  const onBlur = useCallback(() => {
    console.log('onBlur');
    // setSelected(false);
    setFocus(false);
  }, []);
  const onTileViewFocus = () => {
    setShowSelected(true);

    // sidebar.current.setResetFocus()
  };
  const oncloseModal = (val) => {
    console.log('val', val);
    setShowSelected(false);
  };
 
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

  const isSubscriptionSelected = () => {
    let selected = false;
    data.map((item, index) => {
      if (item.selected) {
        // alert('A');
        selected = true;
      } else {
      }
    });
    return selected;
  };

  console.log('showSelected', isSubscriptionSelected());
  return (
    // <CommonFilterTvModal
    //   visible={props?.visible}
    //   oncloseModal={props.oncloseModal}
    //   onclose={props?.onclose}
    //   title={t('texts.id_137')}
    //   titleId={'country_of_origin'}>
    <BaseModal visible={props.visible} oncloseModal={props.oncloseModal}>
      {/* <ScrollView style={{margin: StyleConfig.resWidth(15)}}> */}
      <View
        style={
          isAndroid()
            ? {
                backgroundColor: 'white',
                height: HEIGHT - StyleConfig.resHeight(50),
                width: WIDTH - StyleConfig.resWidth(550),
                // marginTop: StyleConfig.resHeight(10),
                borderRadius: StyleConfig.resHeight(20),
              }
            : {
               // width: 1400,
              //  borderColor:'red',
              //  borderWidth:1,
                height: HEIGHT - StyleConfig.resHeight(50),
                width: WIDTH - StyleConfig.resWidth(550),
                backgroundColor: 'white',
                borderRadius: 30,
              }
        }>
        <View
          style={{
            marginHorizontal: isAndroid() ? StyleConfig.resHeight(50) : 50,
            marginTop: isAndroid() ? StyleConfig.resHeight(30) : 50,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              onFocus={() => setFocusHeader(false)}
              onPress={props.onclose}
              style={({pressed, hovered, focused}) =>
                focused ? styles.focusBackWrap : styles.backWrap
              }>
              {/* //  style={{ marginTop:20, height:30,width:30}} > */}
              <Image source={AppImages.back_bk} style={styles.backImage} />
            </Pressable>

            <View style={{flex: 0.8, marginStart: StyleConfig.resWidth(30)}}>
              <Text numberOfLines={1} style={styles.heading}>
                {t('texts.id_144')}
              </Text>
            </View>
            <View style={{flex: 0.3}}>
              <Pressable
                onFocus={onFocus}
                onBlur={onBlur}
                onPress={() => onTileViewFocus()}
                style={focus ? styles.itemWrapperSelected : styles.itemWrapper}
                hasTVPreferredFocus={true}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={[
                      focus ? styles.focusTextCountry : styles.countryText,
                      {maxWidth: 200},
                    ]}>
                    {t('texts.id_28')}:{'  '}
                  </Text>
                  <Image
                    source={AppImages.flag}
                    style={{
                      height: isAndroid() ? StyleConfig.resHeight(25) : 30,
                      width: isAndroid() ? StyleConfig.resHeight(35) : 50,
                      // marginTop: isAndroid() ? 5 : 10,
                    }}
                  />
                  <Text style={focus ? styles.focusCodeText : styles.text}>
                    {' '}
                    {country}{' '}
                  </Text>
                </View>
              </Pressable>
            </View>

            {/* <View style={{width: StyleConfig.resWidth(36), margin:4}} /> */}
          </View>

          <View
            style={{
              // borderWidth:1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: StyleConfig.resHeight(20),
            }}>
            {/* <Pressable
              focusable={!isSubscriptionSelected()}
              onFocus={() => {
                !isSubscriptionSelected() && onFocusButton(1);
              }}
              onPress={() => setAnyData()}
              style={
                focusHeader && selected === 1
                  ? styles.focusButton
                  : styles.notfocusButton
              }> */}
            <TVButton
              styles={focus ? styles.focusButton : styles.notfocusButton}
              textColor={isSubscriptionSelected() ? '#999999' : 'black'}
              text={t('texts.id_172')}
              bgColor={colors.tomatoRed}
            />
            {/* </Pressable> */}

            {/* <Pressable
              onFocus={() => onFocusButton(2)}
              onPress={() => myProviders()}
              style={
                focusHeader && selected === 2
                  ? styles.focusButton
                  : styles.notfocusButton
              }> */}
            <TVButton
              styles={focus ? styles.focusButton : styles.notfocusButton}
              textColor={isSubscriptionSelected() ? '#999999' : 'black'}
              text={t('texts.id_147')}
              bgColor={colors.lightGrey}
            />
            {/* </Pressable> */}

            {/* <Pressable
              focusable={isSubscriptionSelected()}
              onFocus={() => {
                console.log('updated lengthttt', updatedData?.length);
                isSubscriptionSelected() && onFocusButton(3);
              }}
              onPress={() => saveProvides(1)}
              //  onBlur={onBlur}
              style={
                focusHeader && selected === 3
                  ? styles.focusButton
                  : styles.notfocusButton
              }> */}
            <TVButton
              styles={focus ? styles.focusButton : styles.notfocusButton}
              textColor={isSubscriptionSelected() ? 'black' : '#999999'}
              selected={selected}
              text={t('texts.id_148')}
              bgColor={colors.lightGrey}
            />
            {/* </Pressable> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // borderWidth: 1,
              paddingVertical: StyleConfig.resHeight(10),
            }}>
            <View>
              <Text numberOfLines={1} style={styles.sbscriptionText}>
                {t('texts.id_156')}: 3
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.tvPlatform}>TV platform:</Text>
              <Text numberOfLines={1} style={styles.download}>
                {' '}
                Amazon fire TV, Google TV
                {/* {t('texts.id_25')} */}
              </Text>
            </View>
          </View>

          {/* <View> */}
          <ScrollView
            // horizontal
            style={{height:isAndroid()? StyleConfig.resHeight(HEIGHT + 20):StyleConfig.resHeight(HEIGHT*0.51),}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              // scrollEnabled={true}
              hasTVPreferredFocus={true}
              // numColumns={5}
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TVSubscription
                    item={item}
                    type="movie"
                    // onFocus={props?.onFocus}
                    action={() => onPressClick(index)}
                  />
                );
              }}
            />
            {/* )} */}
          </ScrollView>
          {/* </View> */}

          <View style={styles.tvToggle}>
            <Pressable
              style={({pressed, hovered, focused}) =>
                focused ? styles.focustoggle : styles.notfocusbackWrap
              }>
              {isAndroid() ? (
                <ToggleSwitch
                  onColor={colors.tomatoRed}
                  isOn={free}
                  onToggle={() => setFreeToggle(!free)}
                />
              ) : (
                <TVToggleButton
                  size="small"
                  offColor="red"
                  onColor={colors.tomatoRed}
                  isOn={false}
                  onToggle={onTileViewFocus}
                />
              )}
            </Pressable>
            <Text numberOfLines={1} style={styles.download}>
              {t('texts.id_150')}
            </Text>
          </View>
          <View style={styles.tvToggle}>
            <Pressable
              style={({pressed, hovered, focused}) =>
                focused ? styles.focustoggle : styles.notfocusbackWrap
              }>
              {isAndroid() ? (
                <ToggleSwitch
                  onColor={colors.tomatoRed}
                  isOn={rent}
                  onToggle={() => setRentToggle(!rent)}
                />
              ) : (
                <TVToggleButton
                  size="small"
                  offColor="red"
                  onColor={colors.tomatoRed}
                  isOn={false}
                  onToggle={onTileViewFocus}
                />
              )}
            </Pressable>
            <Text numberOfLines={1} style={styles.download}>
              {t('texts.id_152')}
            </Text>
          </View>
          <View style={styles.tvToggle}>

            <Pressable
              onPress={props.onclose}
              style={({pressed, hovered, focused}) =>
                focused ? styles.focustoggle : styles.notfocusbackWrap
              }>
              {isAndroid() ? (
                <ToggleSwitch
                  onColor={colors.tomatoRed}
                  isOn={web}
                  onToggle={() => setWebToggle(!web)}
                />
              ) : (
                <TVToggleButton
                  size="small"
                  offColor="red"
                  onColor={colors.tomatoRed}
                  isOn={false}
                  onToggle={onTileViewFocus}
                />
              )}
            </Pressable>
            {/* <ToggleSwitch size="small" disabled isOn={true}  /> */}
            <Text numberOfLines={1} style={styles.download}>

              {t('texts.id_154')}
            </Text>
          </View>
        </View>
      </View>
      <TVYourCountryModal
        action={onPressClick}
        visible={showSelected == true}
        oncloseModal={() => oncloseModal(false)}
        onclose={() => oncloseModal()}
      />
      {/* </ScrollView> */}
      {/* // </CommonFilterTvModal> */}
    </BaseModal>
  );
});

export default StreamModal;
