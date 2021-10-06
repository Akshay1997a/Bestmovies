import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import BaseModal from './BaseModal';
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
  backWrap: {
    paddingHorizontal: isAndroid() ? 0 : StyleConfig.resWidth(8),
    paddingVertical: isAndroid() ? 0 : StyleConfig.resHeight(4),
    margin: isAndroid() ? 0 : 4,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRed,
    paddingHorizontal: isAndroid() ? 0 : StyleConfig.resWidth(8),
    paddingVertical: isAndroid() ? 0 : StyleConfig.resHeight(4),
    margin: isAndroid() ? 0 : 4,
    borderRadius: 10,
  },
});

const TVReleaseModal = (props) => {
  const {t} = useTranslation();

  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(DATA);
  const onPressClick = (val) => {
    val.selected = true;
    console.log('onPressClick TVAgesModal***', val);
    props.action(props.keySort);
    // props.visible = true;

    //   props.onclose();
    setSelected(val);
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
        {data.map((item, index) => {
          return (
            <Pressable
              onPress={() => onPressClick(item)}
              onFocus={() => setFocus(item.id)}
              style={item.id == focus ? styles.focusBackWrap : styles.backWrap}>
              <Text
                numberOfLines={1}
                style={{
                  maxWidth: WIDTH * 0.25,
                  fontFamily: primary_regular_font.primary_regular_font,
                  fontSize: isAndroid() ? 15 : 30,
                  fontWeight: '400',
                  color:
                    item.id == focus
                      ? colors.white
                      : item.selected
                      ? colors.tomatoRed
                      : colors.black,
                }}>
                {t(item.name)}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </CommonFilterTvModal>
    //     </View>
    // </BaseModal>
  );
};

export default TVReleaseModal;
