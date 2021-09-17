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
const styles = StyleSheet.create({
  backWrap: {
    paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(4),
    margin: 4,
  },
  focusBackWrap: {
    backgroundColor: colors.tomatoRedLight,
    paddingHorizontal: StyleConfig.resWidth(8),
    paddingVertical: StyleConfig.resHeight(4),
    margin: 4,
    borderRadius: 10,
  },
});

const isAndroid = () => {
  return Platform.OS == 'android';
};
const TVReleaseModal = (props) => {
  const {t} = useTranslation();
  const [selected, setSelected] = useState(-1);
  const [focus, setFocus] = useState(-1);
  const [data, setData] = useState(DATA);

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
      title={strings.release}>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <Pressable
              onPress={props.onclose}
              onFocus={() => setFocus(item.id)}
              style={
                item.id == focus
                  ? {
                      borderRadius: 20,
                      marginHorizontal: 10,
                      backgroundColor: colors.light_orange,
                    }
                  : {marginHorizontal: 10}
              }>
              <Text
                style={{
                  fontFamily: primary_regular_font.primary_regular_font,
                  fontSize: isAndroid() ? 15 : 30,
                  fontWeight: '400',
                  color: item.id == focus ? colors.white : colors.black,
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
