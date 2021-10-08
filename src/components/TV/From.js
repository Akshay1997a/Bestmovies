// React Modules
import {
  View,
  Image,
  Text,
  Pressable,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import primary_regular_font from '../../helper/fonts';
import React, {useState, useCallback} from 'react';
import AppImages from '../../assets';
const isAndroid = () => {
  return Platform.OS == 'android';
};
const TVKeyboard = ({...props}) => {
  // console.log('ite',props);
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
    props.onBtnPress(value[index]);
    requestAnimationFrame(() => {});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginTop: 15}}>
        <Text style={styles.year}>Year</Text>
      </TouchableOpacity>

      <View hasTVPreferredFocus={true}>
        {props.buttons.map((item, index) => {
          return (
            <View>
              <View
                key={`key${index}`}
                style={{
                  flexDirection: 'row',
                  //   borderWidth: 1,
                  justifyContent: 'center',
                }}>
                {item.map((subItem, subIndex) => {
                  return (
                    <Pressable
                      key={`subInd${subIndex}`}
                      style={({focused}) =>
                        focused
                          ? styles.pressableFocused
                          : subItem == AppImages.back_bk && focused
                          ? styles.back_bk
                          : styles.pressable
                      }
                      onPress={() => _handleOnPress(item, subIndex)}>
                      {typeof subItem === 'string' && (
                        <Text style={styles.txtDefault}>{subItem}</Text>
                      )}
                      {typeof subItem === 'number' &&
                        subItem == AppImages.back_bk && (
                          <View>
                            <Image
                              source={subItem}
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
                      {typeof subItem === 'number' &&
                        subItem == AppImages.next_bk && (
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
                              source={subItem}
                            />
                          </View>
                        )}

                      {typeof subItem === 'number' &&
                        subItem == AppImages.space && (
                          <View style={styles.symbolButton}>
                            <Image
                              style={{
                                width: StyleConfig.resWidth(60),
                                height: StyleConfig.resHeight(20),
                              }}
                              source={subItem}
                            />
                          </View>
                        )}
                      {subItem == AppImages.delete && (
                        <View style={styles.symbolButton}>
                          <Image
                            style={{
                              width: StyleConfig.resWidth(40),
                              height: StyleConfig.resHeight(30),
                            }}
                            source={subItem}
                          />
                        </View>
                      )}
                      {typeof subItem === 'number' &&
                        subItem == AppImages.delete_all && (
                          <View style={styles.symbolButton}>
                            <Image
                              style={{
                                width: StyleConfig.resWidth(30),
                                height: StyleConfig.resHeight(40),
                              }}
                              source={subItem}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    // flex: 1,
    // borderWidth: 1,
  },

  txtDefault: {
    //   borderWidth:3,/
    color: colors.black,
    fontFamily: primary_regular_font.primary_regular_font,
    // fontSize: isAndroid() ? 18 : 34,
    // fontWeight: 'bold',
  },

  contRow: {
    flex: 1,
    flexDirection: 'row',
  },
  pressableFocused: {
    // padding: isAndroid() ? 12 : 20,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: colors.tomatoRed,
  },
  pressable: {
    borderWidth: 3,
    padding: isAndroid() ? 10 : 20,
    borderRadius: 10,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
  },

  year: {
    color: '#868686',
    alignContent: 'center',
    // width: 150,
    paddingVertical: isAndroid() ? 10 : 20,
    paddingHorizontal: 70,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#e5e5e5',
  },
  contButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
  },
  symbolButton: {
    // borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:10
  },
  back_bk: {
    // borderWidth:1,

    // marginRight:100,
    // padding: isAndroid()? 10: 30,
    // borderRadius:10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    borderColor: 'white',
    // backgroundColor: colors.black
  },
  deleteButton: {
    width: 30,
    height: 30,
    // borderWidth:1,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    // borderColor: 'white',
    // backgroundColor: '#e5e5e5',
    // padding:17
  },
  deleteAllButton: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
    // padding: 32,
  },
  spaceButton: {
    // height:30,
    // flex: 1,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#e5e5e5',
    // padding: 40,
  },
  contButtonClick: {
    width: StyleConfig.resWidth(10),
    height: StyleConfig.resHeight(20),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#ecf0f1',
    backgroundColor: 'red',
  },
});

export default TVKeyboard;
