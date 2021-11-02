import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, Pressable, StyleSheet, Image, Text, Platform} from 'react-native';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import {useHeaderHeight} from '@react-navigation/stack';
import AppImages from 'src/assets';
import strings from '../../helper/strings';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';

const ICON_SIZE = 24;
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

const TVHeader = forwardRef(({selected, onChangeSelected, ...props}, ref) => {
  const {t} = useTranslation();

  const headerHeight = useHeaderHeight();
  const [focus, setFocus] = useState(NONE);
  // console.log('props TVHeader', props);

  const onFocus = useCallback((val) => {
    props.reduxSetCurrFocus('header');

    setFocus(val);
  });
  const onBlur = useCallback(() => {
    // console.log('onBlur called***');
    setFocus(-1);
    // setIsFocus(false);
  }, []);
  useImperativeHandle(ref, () => ({
    setResetFocus() {
      setFocus(NONE);
    },
  }));

  onLocalChangeSelected = () => {
    if (selected != focus) {
      setFocus(focus);
      onChangeSelected(focus);
    }
  };

  return (
    <View
      style={[
        styles.container,
        // {height: headerHeight == 0 ? StyleConfig.headerHeight + 10 : headerHeight},
      ]}>
      <Image
        source={AppImages.BestMovieLogo}
        resizeMode={'contain'}
        style={styles.bannerIcon}
      />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          marginLeft: isAndroid() ? StyleConfig.resWidth(30) : 100,
        }}>
        {/* <View style={{flex: 1}} /> */}
        <Pressable
          onFocus={() => onFocus(SEARCH)}
          onBlur={() => onBlur()}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={[
            props.focus === 'header' &&  focus == SEARCH
              ? styles.itemWrapperSelectedSearch
              : styles.itemWrapperSeach,
            // {width: WIDTH * 0.1},
          ]}>
          <Image
            style={
              props.focus === 'header' && focus == SEARCH
                ? styles.headerIconFocus
                : selected == SEARCH
                ? styles.headerIconSelected
                : styles.headerIcon
            }
            source={AppImages.icSearch}
          />
        </Pressable>
        {/* <Pressable
          onFocus={() => onFocus(MY_LIST)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            props.focus === 'header' && focus == MY_LIST
              ? styles.itemWrapperSelected
              : styles.itemWrapper

            // focus == MY_LIST ?
            // styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              props.focus === 'header' && focus == MY_LIST
                ? styles.focusText
                : selected == MY_LIST
                ? styles.selectedText
                : styles.text
            }>
            {t('texts.id_15')}
          </Text>
        </Pressable> */}
        <Pressable
          onFocus={() => onFocus(MOVIES)}
          onPress={() => onLocalChangeSelected()}
          // tvParallaxProperties={{magnification: 1.1}}
          style={
            [
              props.focus === 'header' &&  focus == MOVIES ? styles.itemWrapperSelected : styles.itemWrapper,
              {width: WIDTH * 0.1},
            ]
            // styles.itemWrapperSelected :
            // styles.itemWrapper
            // focus == MOVIES ?
            //  styles.itemWrapperSelected
            //  : styles.itemWrapper
          }>
          <Text
            numberOfLines={1}
            style={
              props.focus === 'header' &&  focus == MOVIES
                ? styles.focusText
                : selected == MOVIES
                ? styles.selectedText
                : styles.text
            }>
            {t('texts.id_2')}
          </Text>
        </Pressable>

        <Pressable
          onFocus={() => onFocus(TV_SHOW)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            [
              props.focus === 'header' && focus == TV_SHOW
                ? styles.itemWrapperSelected
                : styles.itemWrapper,

              {width: WIDTH * 0.1},
              ,
            ]
          }>
          <Text
            numberOfLines={1}
            style={
              props.focus === 'header' &&    focus == TV_SHOW
                ? styles.focusTextShow
                : styles.text
            }>
            {t('texts.id_4')}
          </Text>
        </Pressable>

        
        <Pressable
          onFocus={() => onFocus(SHORTS)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            [
              props.focus === 'header' && focus == SHORTS
                ? styles.itemWrapperSelected
                : styles.itemWrapper,

              {width: WIDTH * 0.1},
              ,
            ]
          }>
          <Text
            numberOfLines={1}
            style={
              props.focus === 'header' &&   focus == SHORTS
                ? styles.focusTextShow
                : styles.text
            }>
            {t('texts.id_4')}
          </Text>
        </Pressable>

        {/* <Pressable
          onFocus={() => onFocus(DIRECTOR)}
          onPress={() => onLocalChangeSelected()}
          onPress={() => alert('Test')}
          tvParallaxProperties={{magnification: 1.1}}
          style={[
            props.focus === 'header' && focus == DIRECTOR
              ? styles.itemWrapperSelected
              : styles.itemWrapper,
            {maxWidth: WIDTH * 0.1},
          ]}>
          <Text
            numberOfLines={1}
            style={
              props.focus === 'header' && focus == DIRECTOR
                ? styles.focusText
                : styles.text
              // focus == DIRECTOR
              //   ? styles.focusText
              //   : selected == DIRECTOR
              //   ? styles.selectedText
              //   : styles.text
              // props.focus === 90 ?
              // styles.text :
              // focus == DIRECTOR
              //   ? styles.focusText
              //   : selected == DIRECTOR
              //   ? styles.selectedText
              //   : styles.text
            }>
            {t('texts.id_8')}
          </Text>
        </Pressable>

        <Pressable
          onFocus={() => onFocus(ACTOR)}
          onPress={() => onLocalChangeSelected()}
          onPress={() => alert('Test')}
          tvParallaxProperties={{magnification: 1.1}}
          style={[
            props.focus === 'header' && focus == ACTOR
              ? styles.itemWrapperSelected
              : styles.itemWrapper,
            {maxWidth: WIDTH * 0.1},
          ]}>
          <Text
            numberOfLines={1}
            style={
              props.focus === 'header' && focus == ACTOR
                ? styles.focusText
                : styles.text
            }>
            {t('texts.id_11')}
          </Text>
        </Pressable> */}

        <View style={{flex: 2}} />

        {/* <Pressable
          onFocus={() => onFocus(PROFILE)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == PROFILE ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              focus == PROFILE
                ? styles.focusText
                : selected == PROFILE
                ? styles.selectedText
                : styles.text
            }>
            John
          </Text>
        </Pressable> */}

        <Pressable
         onFocus={() => onFocus(MENU)}
         onPress={() => onLocalChangeSelected()}
         tvParallaxProperties={{magnification: 1.1}}
          // tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == MENU
              ? styles.itemWrapperSelectedMenu
              : styles.itemWrapperMenu
          }>
          <Image
            style={
              focus == MENU
                ? styles.headerIconFocus
                : selected == MENU
                ? styles.headerIconSelected
                : styles.headerIcon
            }
            source={AppImages.icMenu}
          />
        </Pressable>
      </View>
    </View>
  );
});

export default TVHeader;

const isAndroid = () => {
  return Platform.OS == 'android';
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginBottom: StyleConfig.resHeight(3),
    // marginVertical: 5,
    marginStart: isAndroid()
      ? StyleConfig.resWidth(20)
      : StyleConfig.resWidth(10),
    // marginEnd:100
    // marginRight:10
  },
  bannerIcon: {
    width: StyleConfig.resWidth(210),
    height: StyleConfig.resWidth(160) / 2,
  },
  itemWrapperSelected: {
    // borderWidth: 1,
    justifyContent: 'center',
    // paddingHorizontal: StyleConfig.resWidth(60),
    // paddingVertical: StyleConfig.resHeight(5),
    // marginHorizontal:  StyleConfig.resWidth(5),
    backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resWidth(10),
    // minWidth: StyleConfig.resWidth(160),
    alignItems: 'center',
  },
  itemWrapper: {
    // borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: StyleConfig.resWidth(20),
    // paddingVertical: StyleConfig.resHeight(5),
    marginHorizontal: StyleConfig.resWidth(18),
    // backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resWidth(10),
    // minWidth: StyleConfig.resWidth(100),
    alignItems: 'center',
  },
  itemWrapperMenu: {
    // borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: StyleConfig.resWidth(20),
    // paddingVertical: StyleConfig.resHeight(5),
    // marginHorizontal: StyleConfig.resWidth(18),
    // backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resWidth(10),
    // minWidth: StyleConfig.resWidth(100),
    alignItems: 'center',
  },
  itemWrapperSelectedSearch: {
    // borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: StyleConfig.resWidth(10),
    paddingVertical: StyleConfig.resHeight(10),
    backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resWidth(30),
    minWidth: StyleConfig.resWidth(10),
    // minWidth: StyleConfig.resWidth(160),
    alignItems: 'center',
  },
  itemWrapperSelectedMenu: {
    // borderWidth: 1,
    marginHorizontal: StyleConfig.resWidth(10),
    justifyContent: 'center',
    paddingHorizontal: StyleConfig.resWidth(18),
    paddingVertical: StyleConfig.resHeight(10),
    backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resWidth(10),
    minWidth: StyleConfig.resWidth(10),
    // minWidth: StyleConfig.resWidth(160),
    alignItems: 'center',
  },
  itemWrapperSeach: {
    // borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: StyleConfig.resWidth(20),
    // paddingVertical: StyleConfig.resHeight(5),
    marginHorizontal: StyleConfig.resWidth(18),
    // backgroundColor: colors.tomatoRed,
    borderRadius: StyleConfig.resWidth(10),
    minWidth: StyleConfig.resWidth(100),
    alignItems: 'center',
  },
  text: {
    fontSize: StyleConfig.resWidth(32),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    color: colors.black,
  },
  focusText: {
    paddingVertical: StyleConfig.resHeight(2),
    // paddingHorizontal: StyleConfig.resWidth(45),
    fontSize: StyleConfig.resWidth(32),
    fontFamily: primary_regular_font.primary_bold_font,
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    color: colors.white,
  },
  focusTextShow: {
    paddingVertical: StyleConfig.resHeight(2),
    // paddingHorizontal: StyleConfig.resWidth(30),
    fontSize: StyleConfig.resWidth(32),
    fontFamily: primary_regular_font.primary_bold_font,
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
    color: colors.white,
  },
  selectedText: {
    fontSize: StyleConfig.resWidth(32),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
    color: colors.tomatoRed,
    fontFamily: primary_regular_font.primary_bold_font,
  },
  headerIcon: {
    width: StyleConfig.resWidth(30),
    height: StyleConfig.resHeight(30),
    tintColor: colors.black,
  },
  headerIconSelected: {
    width: StyleConfig.resWidth(30),
    height: StyleConfig.resHeight(30),
    tintColor: colors.tomatoRed,
  },
  headerIconFocus: {
    width: StyleConfig.resWidth(30),

    height: StyleConfig.resHeight(30),
    tintColor: colors.white,
  },
});
