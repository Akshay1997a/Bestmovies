import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import From from './From';
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
  deleteAllButton: {
    alignSelf: 'center',
    backgroundColor: '#e5e5e5',
    padding: 10,
    borderRadius: 10,
  },
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
  textInput: {
    width: StyleConfig.resWidth(330),
    height:  StyleConfig.resWidth(80),
    color: colors.black,
    backgroundColor: colors.lightGrey,
    // flex: 0.5,
    alignSelf: 'center',
    fontSize: StyleConfig.resWidth(34),
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
});

const FromModal = (props) => {
  const buttons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', AppImages.delete, 'OK'],
  ];
  const oncloseModal = (val) => {
    console.log('val', val);
    // setShowSelected(false);
  };
  //   const onPressClick = (val) => {
  //     console.log('onPressClick StreamModal***', val);
  //     // setCountry(val.code);
  //   };
  function _handleEvent(value) {
    console.debug('value>>>>>', value);
    let data = '';
    if (value == 33) {
      data = text.slice(0, -1);
    } else if (value == 28) {
      //
    } else if (value == 12) {
      data = text == null ? value : text + '\n';
    } else if (value == 13) {
      data = text.slice(0, -1);
    } else if (value == 14) {
      data = null;
    } else {
      data = text == null ? value : text + value;
    }
    onChangeText(data);
  }
  const {t} = useTranslation();
  const [text, onChangeText] = React.useState(null);

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
      title={'From'}
      titleId={'release_year'}>
      <ScrollView>
        <TextInput
          onSelectionChange={(event) =>
            console.log('onSelectionChange', event.nativeEvent.selection)
          }
          
          placeholderTextColor={colors.black}
          placeholder={'Year'} 
          style={styles.textInput}
          onChangeText={onChangeText}
          value={text}
        />
        <From
          //  onFocusedItem={(item)=> setSelectedItem(item)}
          hasTVPreferredFocus={true}
          onBtnPress={_handleEvent}
          buttons={buttons}
          {...props}
        />
      </ScrollView>
    </CommonFilterTvModal>
    //     </View>
    // </BaseModal>
  );
};

export default FromModal;
