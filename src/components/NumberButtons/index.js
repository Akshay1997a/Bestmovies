// React Modules
import React, {useState, useCallback} from 'react';

import {View, Image, Text, Pressable, Platform} from 'react-native';
import StyleConfig from '../../helper/StyleConfig';
import AppImages from '../../assets';
import styles from './styles';
import colors from '../../helper/colors';
import {useTranslation} from 'react-i18next';
import {WIDTH} from '../../helper/globalFunctions';
const isAndroid = () => {
  return Platform.OS == 'android';
};
const TVKeyboard = ({...props}) => {
  // console.log('ite',props);
  const {t} = useTranslation();
  const [focus, setFocus] = useState(false);
  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);
  const _handleOnPress = (value, index) => {
    console.log('value', value);
    console.log('subIndex', index);
    props.onBtnPress(value);
    requestAnimationFrame(() => {});
  };
  return (
    <View style={styles.container}>
      <View hasTVPreferredFocus={true}>
        {props.buttons.map((item, index) => {
          console.log('ji', item);
          return (
            <View>
              <View key={`key${index}`} style={{flexDirection: 'row'}}>
                {item.map((subItem, subIndex) => {
                  return (
                    <Pressable
                      key={`subInd${subIndex}`}
                      onFocus={() => setFocus(subItem.id)}
                      onPress={() => _handleOnPress(subItem.value, index)}
                      style={
                        focus == subItem.id
                          ? styles.pressableFocused
                          : subItem.value == AppImages.space
                          ? styles.pressableSpace
                          : styles.pressable
                      }>
                      {typeof subItem.value === 'string' && (
                        <Text
                          style={
                            focus == subItem.id
                              ? styles.txtDefaultFocus
                              : styles.txtDefault
                          }>
                          {subItem.value}
                        </Text>
                      )}
                      {typeof subItem.value === 'number' &&
                        subItem.value == AppImages.back_bk && (
                          <View>
                            <Image
                              source={subItem.value}
                              style={{
                                width: isAndroid()
                                  ? StyleConfig.resWidth(20)
                                  : 20,
                                height: isAndroid()
                                  ? StyleConfig.resHeight(30)
                                  : 30,
                              }}
                            />
                          </View>
                        )}
                      {typeof subItem.value === 'number' &&
                        subItem.value == AppImages.next_bk && (
                          <View style={styles.symbolButton}>
                            <Image
                              style={{
                                width: isAndroid()
                                  ? StyleConfig.resWidth(20)
                                  : 20,
                                height: isAndroid()
                                  ? StyleConfig.resHeight(30)
                                  : 30,
                              }}
                              source={subItem.value}
                            />
                          </View>
                        )}

                      {typeof subItem.value === 'number' &&
                        subItem.value == AppImages.space && (
                          <View style={styles.symbolButton}>
                            <Image
                              style={{
                                width: StyleConfig.resWidth(60),
                                height: StyleConfig.resHeight(20),
                              }}
                              source={subItem.value}
                            />
                          </View>
                        )}
                      {subItem.value == AppImages.delete && (
                        <View style={styles.symbolButton}>
                          <Image
                            style={{
                              width: StyleConfig.resWidth(40),
                              height: StyleConfig.resHeight(30),
                            }}
                            source={subItem.value}
                          />
                        </View>
                      )}
                      {typeof subItem.value === 'number' &&
                        subItem.value == AppImages.delete_all && (
                          <View style={styles.symbolButton}>
                            <Image
                              style={{
                                width: StyleConfig.resWidth(30),
                                height: StyleConfig.resHeight(40),
                              }}
                              source={subItem.value}
                            />
                          </View>
                        )}
                    </Pressable>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
      <Text numberOfLines={1} style={styles.results}>
        {' '}
        {`12 ${t('texts.id_91')}`}
      </Text>
    </View>
  );
};
export default TVKeyboard;
