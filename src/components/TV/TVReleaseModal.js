import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import TVAgesModal from './TVAgesModal';
import FromModal from './FromModal';

import colors from 'src/helper/colors';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets';
import strings from '../../helper/strings';
import CommonFilterTvModal from './CommonFilterTvModal';
import primary_regular_font from '../../helper/fonts';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';

const DATA = [
  {id: 0, name: 'New'},
  {id: 1, name: 'This year'},
  {id: 2, name: 'texts.id_122'},
  {id: 3, name: 'Last 3 years'},
  {id: 4, name: 'texts.id_123'},
  {id: 5, name: 'texts.id_124'},
  {id: 6, name: 'texts.id_125'},
  {id: 7, name: 'texts.id_126'},
  {id: 8, name: 'All time'},
];

const isAndroid = () => {
  return Platform.OS == 'android';
};
const styles = StyleSheet.create({
  whiteStyle: {
    paddingStart: StyleConfig.resWidth(20),
    maxWidth: WIDTH * StyleConfig.resWidth(0.22),
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? StyleConfig.resWidth(30) : StyleConfig.resWidth(30),
    fontWeight: '400',
    color: colors.white,
  },
  blackStyle: {
    paddingStart: StyleConfig.resWidth(20),
    maxWidth: WIDTH * StyleConfig.resWidth(0.22),
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? StyleConfig.resWidth(30) : StyleConfig.resWidth(30),
    fontWeight: '400',
    color: colors.black,
  },
  tomatoStyle: {
    paddingStart: StyleConfig.resWidth(20),
    maxWidth: WIDTH * StyleConfig.resWidth(0.22),
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: isAndroid() ? StyleConfig.resWidth(30) : StyleConfig.resWidth(30),
    fontWeight: '400',
    color: colors.tomatoRed,
  },
  deleteAllButton: {
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: StyleConfig.resWidth(20),
    alignSelf: 'center',
    backgroundColor: colors.gray,
    paddingHorizontal: StyleConfig.resWidth(100),
    paddingVertical: StyleConfig.resWidth(10),
    borderRadius: StyleConfig.resWidth(10),
  },
  backWrap: {
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(0)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    margin: isAndroid() ? StyleConfig.resWidth(0) : StyleConfig.resWidth(4),
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resWidth(8),
    paddingVertical: isAndroid()
      ? StyleConfig.resWidth(2)
      : StyleConfig.resHeight(4),
    margin: isAndroid() ? StyleConfig.resWidth(0) : StyleConfig.resWidth(4),
    borderRadius: StyleConfig.resWidth(10),
  },
});

const TVReleaseModal = (props) => {
  const {t} = useTranslation();
  const AGES = 1;
  const [selected, setSelected] = useState(-1);
  const [showSelected, setShowSelected] = useState(false);

  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(DATA);
  const onPressClick = (val) => {
    val.selected = true;
    props.action(props.keySort);
    setSelected(val.id);
  };
  const onBlur = useCallback(() => {
    // console.log('onBlur  CommonFilterTvModal called***', focus);
    setFocus(-1);
  }, []);
  const onPressClickFrom = (val) => {
    console.log('onPressClick dadadadaa***KKKK', val);
    setShowSelected(true);
  };
  const oncloseModal = (val) => {
    // console.log("home-",props);
    // console.log("state-",state);
    setShowSelected(false);
    // onSideBarFocus(val);
  };

  return (
    // <BaseModal visible={props.visible} oncloseModal={props.oncloseModal} >
    //     <View style={{width: 350, minHeight: 300, backgroundColor: 'white'}}>
    //         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
    //             <Pressable onPress={props.onclose} style={({ pressed, hovered, focused }) => focused ? styles.focusBackWrap : styles.backWrap }>
    //                 <Image style={{ width: StyleConfig.resWidth(20),
    //                     height: StyleConfig.resHeight(20),}} source={AppImages.icBackArrow} />
    //             </Pressable>
    //             <Text style={{fontSize:26, fontWeight:'700', textAlign:'center'}}>{strings.release}</Text>
    //             <View style={{width: StyleConfig.resWidth(36), margin:4}} />
    //         </View>
    <CommonFilterTvModal
      visible={props?.visible}
      oncloseModal={props.oncloseModal}
      onclose={props?.onclose}
      title={t('texts.id_114')}
      titleId={'release_year'}>
      <ScrollView>
        <View style={{margin: StyleConfig.resWidth(15)}}>
          <View>
            {data.map((item, index) => {
              return (
                <Pressable
                  onBlur={onBlur}
                  onPress={() => onPressClick(item)}
                  onFocus={() => setFocus(item.id)}
                  style={
                    item.id == focus ? styles.focusBackWrap : styles.backWrap
                  }>
                  <Text
                    numberOfLines={1}
                    style={
                      item.id == focus
                        ? styles.whiteStyle
                        : item.id == selected
                        ? styles.tomatoStyle
                        : styles.blackStyle
                    }>
                    {t(item.name)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => onPressClickFrom('item')}
              style={{flex: 0.5, alignItems: 'center'}}>
              <Text style={styles.deleteAllButton}>From</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onPressClickFrom('item')}
              style={{flex: 0.5}}>
              <Text style={styles.deleteAllButton}>To</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FromModal
        action={onPressClick}
        keySort={1}
        visible={showSelected == true}
        oncloseModal={() => oncloseModal(AGES)}
        onclose={() => oncloseModal(AGES)}
      />
    </CommonFilterTvModal>
    //     </View>
    // </BaseModal>
  );
};

export default TVReleaseModal;
