/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import HeaderModal from '../../../components/HeaderModal';
import SearchBar from '../../../components/SearchBar';
import {updateLanguages} from '../../../redux/FilterModule/FilterActions';
import {Button} from '../../Country/renderMobile';
import _ from 'lodash';

const DATA = _.uniqBy(
  [
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
  ],
  'languages',
).map((i, index) => {
  return {...i, id: index};
});

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

class RenderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
      searchString: '',
      selectedLanguages: [],
      filteredLanguages: [],
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
    this.selectUnselectLanguage = this.selectUnselectLanguage.bind(this);
  }

  onSearchHandler(str) {
    let arr = DATA.filter((i) => i.languages.match(new RegExp(str, 'i')));
    this.setState({filteredLanguages: arr, searchString: str});
  }

  onClearSearch() {
    this.setState({filteredLanguages: [], searchString: ''});
  }

  selectUnselectLanguage(name) {
    const {selectedLanguages, updateLanguage} = this.props;
    if (selectedLanguages.includes(name)) {
      let newLanguageList = selectedLanguages.filter((val) => val !== name);
      updateLanguage(newLanguageList);
    } else {
      updateLanguage([name]);
    }
    console.log(selectedLanguages, name);
  }

  render() {
    const {searchString, filteredLanguages} = this.state;
    const {selectedLanguages, updateLanguage} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <HeaderModal title={'Original language'} {...this.props} />
        <View style={{padding: 10}}>
          <SearchBar
            placeholder="Enter language"
            value={searchString}
            onChangeText={(text) => this.onSearchHandler(text)}
            onClear={this.onClearSearch}
          />
          <View>
            <Button
              title="Any"
              isActive={selectedLanguages.length === 0}
              onPress={() => updateLanguage([])}
            />
            <Button
              title="Your language (English)"
              isActive={
                selectedLanguages.findIndex((i) => i === 'English') >= 0
              }
              onPress={(val) => this.selectUnselectLanguage('English')}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
              (({highlighted}) => (
                <View style={[highlighted && {marginLeft: 0}]} />
              ))
            }
            data={filteredLanguages.length > 0 ? filteredLanguages : DATA}
            renderItem={({item, index}) => (
              <Button
                key={item.id}
                title={item.languages}
                isActive={selectedLanguages.includes(item.languages)}
                onPress={() => this.selectUnselectLanguage(item.languages)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedLanguages: state.filterConfig.languages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLanguage: (data) => dispatch(updateLanguages(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderMobile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
