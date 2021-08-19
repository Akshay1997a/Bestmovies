import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, Pressable, StyleSheet, Image, Text} from 'react-native';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import {useHeaderHeight} from '@react-navigation/stack';
import AppImages from 'src/assets';
import strings from '../../helper/strings';
import primary_regular_font from '../../helper/fonts';

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
  const headerHeight = useHeaderHeight();
  const [focus, setFocus] = useState(NONE);
  const onFocus = useCallback((val) => {
    setFocus(val);
  });

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
        source={AppImages.BestMoviesBanner}
        resizeMode={'center'}
        style={styles.bannerIcon}
      />
      <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
        <View style={{flex: 1}} />
        <Pressable
          onFocus={() => onFocus(SEARCH)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == SEARCH ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Image
            style={
              focus == SEARCH
                ? styles.headerIconFocus
                : selected == SEARCH
                ? styles.headerIconSelected
                : styles.headerIcon
            }
            source={AppImages.icSearch}
          />
        </Pressable>
        <Pressable
          onFocus={() => onFocus(MY_LIST)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == MY_LIST ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              focus == MY_LIST
                ? styles.focusText
                : selected == MY_LIST
                ? styles.selectedText
                : styles.text
            }>
            {strings.my_lists}
          </Text>
        </Pressable>
        <Pressable
          onFocus={() => onFocus(MOVIES)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == MOVIES ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              focus == MOVIES
                ? styles.focusText
                : selected == MOVIES
                ? styles.selectedText
                : styles.text
            }>
            {strings.movies_text}
          </Text>
        </Pressable>

        <Pressable
          onFocus={() => onFocus(TV_SHOW)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == TV_SHOW ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              focus == TV_SHOW
                ? styles.focusText
                : selected == TV_SHOW
                ? styles.selectedText
                : styles.text
            }>
            {strings.tv_shows}
          </Text>
        </Pressable>

        <Pressable
          onFocus={() => onFocus(SHORTS)}
          onPress={() => onLocalChangeSelected()}
          onPress={() => alert('Test')}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == SHORTS ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              focus == SHORTS
                ? styles.focusText
                : selected == SHORTS
                ? styles.selectedText
                : styles.text
            }>
            {strings.shorts}
          </Text>
        </Pressable>

        <Pressable
          onFocus={() => onFocus(DIRECTOR)}
          onPress={() => onLocalChangeSelected()}
          onPress={() => alert('Test')}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == DIRECTOR ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              focus == DIRECTOR
                ? styles.focusText
                : selected == DIRECTOR
                ? styles.selectedText
                : styles.text
            }>
            {strings.directors}
          </Text>
        </Pressable>

        <Pressable
          onFocus={() => onFocus(ACTOR)}
          onPress={() => onLocalChangeSelected()}
          onPress={() => alert('Test')}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == ACTOR ? styles.itemWrapperSelected : styles.itemWrapper
          }>
          <Text
            style={
              focus == ACTOR
                ? styles.focusText
                : selected == ACTOR
                ? styles.selectedText
                : styles.text
            }>
            {strings.actors}
          </Text>
        </Pressable>

        <View style={{flex: 2}} />

        <Pressable
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
        </Pressable>

        <Pressable
          onFocus={() => onFocus(MENU)}
          onPress={() => onLocalChangeSelected()}
          tvParallaxProperties={{magnification: 1.1}}
          style={
            focus == MENU ? styles.itemWrapperSelected : styles.itemWrapper
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginVertical:5
  },
  bannerIcon: {
    width: 210,
    height: 210/2,
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
    paddingVertical: 6,
    marginHorizontal:18,
    minWidth: 60,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily:primary_regular_font.primary_regular_font,
    fontWeight: '400',

  },
  focusText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
  },
  selectedText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.tomatoRed,
    fontFamily:primary_regular_font.primary_regular_font

  },
  headerIcon: {
    width: StyleConfig.resWidth(40),
    height: StyleConfig.resHeight(40),
    tintColor: colors.black,
  },
  headerIconSelected: {
    width: StyleConfig.resWidth(40),
    height: StyleConfig.resHeight(40),
    tintColor: colors.tomatoRed,
  },
  headerIconFocus: {
    width: StyleConfig.resWidth(40),
    height: StyleConfig.resHeight(40),
    tintColor: colors.white,
  },
});
