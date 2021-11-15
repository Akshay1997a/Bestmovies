/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import {
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {Text} from '../../components/EnhanchedComponents';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderModal from '../../components/HeaderModal';
import {runTimeTranslations} from '../../i18n';
import {getTranslateFile} from '../../network/requests';
import i18n from 'i18next';
import Loader from '../../components/Loader';
import primary_regular_font from '../../helper/fonts';
import {fontScale, heightScale, widthScale} from '../../helper/ResponsiveFonts';

// import {Button} from '../Country';

const DATA = [
  {
    id: 1,
    languages: 'Tsonga',
  },
  {
    id: 2,
    languages: 'Catalan',
  },
  {
    id: 3,
    languages: 'Azeri',
  },
  {
    id: 4,
    languages: 'English',
  },
  {
    id: 5,
    languages: 'Korean',
  },
  {
    id: 6,
    languages: 'English',
  },
  {
    id: 7,
    languages: 'Haitian Creole',
  },
  {
    id: 8,
    languages: 'Indonesian',
  },
  {
    id: 9,
    languages: 'Romanian',
  },
  {
    id: 10,
    languages: 'Kurdish',
  },
  {
    id: 11,
    languages: 'Dari',
  },
  {
    id: 12,
    languages: 'Hungarian',
  },
  {
    id: 13,
    languages: 'Oriya',
  },
  {
    id: 14,
    languages: 'Romanian',
  },
  {
    id: 15,
    languages: 'Romanian',
  },
  {
    id: 16,
    languages: 'Fijian',
  },
  {
    id: 17,
    languages: 'Khmer',
  },
  {
    id: 18,
    languages: 'Maltese',
  },
  {
    id: 19,
    languages: 'New Zealand Sign Language',
  },
  {
    id: 20,
    languages: 'Azeri',
  },
  {
    id: 21,
    languages: 'Dzongkha',
  },
  {
    id: 22,
    languages: 'Tsonga',
  },
  {
    id: 23,
    languages: 'German',
  },
  {
    id: 24,
    languages: 'Nepali',
  },
  {
    id: 25,
    languages: 'New Zealand Sign Language',
  },
  {
    id: 26,
    languages: 'Swahili',
  },
  {
    id: 27,
    languages: 'Swedish',
  },
  {
    id: 28,
    languages: 'West Frisian',
  },
  {
    id: 29,
    languages: 'Tsonga',
  },
  {
    id: 30,
    languages: 'Gujarati',
  },
  {
    id: 31,
    languages: 'Lithuanian',
  },
  {
    id: 32,
    languages: 'Danish',
  },
  {
    id: 33,
    languages: 'Tetum',
  },
  {
    id: 34,
    languages: 'Yiddish',
  },
  {
    id: 35,
    languages: 'Hungarian',
  },
  {
    id: 36,
    languages: 'Punjabi',
  },
  {
    id: 37,
    languages: 'Nepali',
  },
  {
    id: 38,
    languages: 'Montenegrin',
  },
  {
    id: 39,
    languages: 'Bosnian',
  },
  {
    id: 40,
    languages: 'Kazakh',
  },
  {
    id: 41,
    languages: 'Armenian',
  },
  {
    id: 42,
    languages: 'Pashto',
  },
  {
    id: 43,
    languages: 'Tsonga',
  },
  {
    id: 44,
    languages: 'Malay',
  },
  {
    id: 45,
    languages: 'Malagasy',
  },
  {
    id: 46,
    languages: 'Japanese',
  },
  {
    id: 47,
    languages: 'Zulu',
  },
  {
    id: 48,
    languages: 'Belarusian',
  },
  {
    id: 49,
    languages: 'Albanian',
  },
  {
    id: 50,
    languages: 'Italian',
  },
  {
    id: 51,
    languages: 'Latvian',
  },
  {
    id: 52,
    languages: 'Telugu',
  },
  {
    id: 53,
    languages: 'Irish Gaelic',
  },
  {
    id: 54,
    languages: 'Papiamento',
  },
  {
    id: 55,
    languages: 'Swati',
  },
  {
    id: 56,
    languages: 'Haitian Creole',
  },
  {
    id: 57,
    languages: 'Tajik',
  },
  {
    id: 58,
    languages: 'Korean',
  },
  {
    id: 59,
    languages: 'Danish',
  },
  {
    id: 60,
    languages: 'Kashmiri',
  },
  {
    id: 61,
    languages: 'Assamese',
  },
  {
    id: 62,
    languages: 'Swati',
  },
  {
    id: 63,
    languages: 'Catalan',
  },
  {
    id: 64,
    languages: 'Marathi',
  },
  {
    id: 65,
    languages: 'German',
  },
  {
    id: 66,
    languages: 'Macedonian',
  },
  {
    id: 67,
    languages: 'Polish',
  },
  {
    id: 68,
    languages: 'Tamil',
  },
  {
    id: 69,
    languages: 'Bislama',
  },
  {
    id: 70,
    languages: 'Bulgarian',
  },
  {
    id: 71,
    languages: 'Hebrew',
  },
  {
    id: 72,
    languages: 'Sotho',
  },
  {
    id: 73,
    languages: 'Fijian',
  },
  {
    id: 74,
    languages: 'English',
  },
  {
    id: 75,
    languages: 'Kyrgyz',
  },
  {
    id: 76,
    languages: 'Hungarian',
  },
  {
    id: 77,
    languages: 'Somali',
  },
  {
    id: 78,
    languages: 'Czech',
  },
  {
    id: 79,
    languages: 'Tetum',
  },
  {
    id: 80,
    languages: 'Tsonga',
  },
  {
    id: 81,
    languages: 'Malay',
  },
  {
    id: 82,
    languages: 'Malayalam',
  },
  {
    id: 83,
    languages: 'Kurdish',
  },
  {
    id: 84,
    languages: 'Hebrew',
  },
  {
    id: 85,
    languages: 'Maltese',
  },
  {
    id: 86,
    languages: 'Aymara',
  },
  {
    id: 87,
    languages: 'Chinese',
  },
  {
    id: 88,
    languages: 'Maltese',
  },
  {
    id: 89,
    languages: 'Greek',
  },
  {
    id: 90,
    languages: 'Tajik',
  },
  {
    id: 91,
    languages: 'Romanian',
  },
  {
    id: 92,
    languages: 'Irish Gaelic',
  },
  {
    id: 93,
    languages: 'Georgian',
  },
  {
    id: 94,
    languages: 'Dhivehi',
  },
  {
    id: 95,
    languages: 'Punjabi',
  },
  {
    id: 96,
    languages: 'Malayalam',
  },
  {
    id: 97,
    languages: 'Tswana',
  },
  {
    id: 98,
    languages: 'Croatian',
  },
  {
    id: 99,
    languages: 'Portuguese',
  },
  {
    id: 100,
    languages: 'Zulu',
  },
];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class RenderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
      seletedLanguage: i18n.language,
    };
  }

  handleLanguage = (code) => {
    this.props.i18n.changeLanguage(code);
    // this.setState({
    //   seletedLanguage: code,
    // });
    this.changeLanguage(code);
  };

  changeLanguage = (code) => {
    this.props.getTranslateFile(
      (res) => {
        console.log('Response from translate api', res);
        runTimeTranslations(res, res?.language);
      },
      (err) => {
        console.log('Error from translate file', err);
      },
    );
  };

  render() {
    let {t} = this.props;
    return (
      <View style={styles.container}>
        {/* <Loader /> */}
        <HeaderModal title={t('texts.id_31')} {...this.props} />
        <View style={{marginTop: 0, paddingHorizontal: widthScale(10)}}>
          <Button
            key={'yutuy'}
            title={'English'}
            isActive={i18n.language == 'en'}
            onPress={() => {
              this.handleLanguage('en');
            }}
          />
          <Button
            key={'asbbschbs'}
            title={'Spanish'}
            isActive={i18n.language == 'es'}
            onPress={() => {
              this.handleLanguage('es');
            }}
          />
        </View>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[highlighted && {marginLeft: 0}]} />
            ))
          }
          data={DATA}
          renderItem={({item, index}) => (
            <Button
              key={item.id}
              title={item.languages}
              isActive={false}
              onPress={() => {}}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingHorizontal: widthScale(10),
          }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTranslateFile,
      // getLanguageList,
    },
    dispatch,
  );
};

export default withTranslation()(
  connect(null, mapDispatchToProps)(RenderMobile),
);

export const Button = ({title, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.butContainer, isActive && styles.butActive]}
    onPress={() => onPress(title)}>
    <Text style={[styles.butTitle, isActive && styles.butActiveText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  butContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    height: heightScale(40),
    paddingLeft: 9,
    paddingRight: 11,
  },
  butActive: {
    backgroundColor: '#FF4D01',
  },
  butActiveText: {
    color: '#fff',
    fontWeight: '700',
  },
  butTitle: {
    color: '#000000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(20),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
