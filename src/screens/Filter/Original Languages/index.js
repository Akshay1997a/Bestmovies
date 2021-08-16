import React, { Component } from 'react'
import { Text, View,Dimensions,SafeAreaView,FlatList,TouchableOpacity } from 'react-native'


const DATA =[{
    "id": 1,
    "languages": "Tsonga"
  }, {
    "id": 2,
    "languages": "Catalan"
  }, {
    "id": 3,
    "languages": "Azeri"
  }, {
    "id": 4,
    "languages": "English"
  }, {
    "id": 5,
    "languages": "Korean"
  }, {
    "id": 6,
    "languages": "English"
  }, {
    "id": 7,
    "languages": "Haitian Creole"
  }, {
    "id": 8,
    "languages": "Indonesian"
  }, {
    "id": 9,
    "languages": "Romanian"
  }, {
    "id": 10,
    "languages": "Kurdish"
  }, {
    "id": 11,
    "languages": "Dari"
  }, {
    "id": 12,
    "languages": "Hungarian"
  }, {
    "id": 13,
    "languages": "Oriya"
  }, {
    "id": 14,
    "languages": "Romanian"
  }, {
    "id": 15,
    "languages": "Romanian"
  }, {
    "id": 16,
    "languages": "Fijian"
  }, {
    "id": 17,
    "languages": "Khmer"
  }, {
    "id": 18,
    "languages": "Maltese"
  }, {
    "id": 19,
    "languages": "New Zealand Sign Language"
  }, {
    "id": 20,
    "languages": "Azeri"
  }, {
    "id": 21,
    "languages": "Dzongkha"
  }, {
    "id": 22,
    "languages": "Tsonga"
  }, {
    "id": 23,
    "languages": "German"
  }, {
    "id": 24,
    "languages": "Nepali"
  }, {
    "id": 25,
    "languages": "New Zealand Sign Language"
  }, {
    "id": 26,
    "languages": "Swahili"
  }, {
    "id": 27,
    "languages": "Swedish"
  }, {
    "id": 28,
    "languages": "West Frisian"
  }, {
    "id": 29,
    "languages": "Tsonga"
  }, {
    "id": 30,
    "languages": "Gujarati"
  }, {
    "id": 31,
    "languages": "Lithuanian"
  }, {
    "id": 32,
    "languages": "Danish"
  }, {
    "id": 33,
    "languages": "Tetum"
  }, {
    "id": 34,
    "languages": "Yiddish"
  }, {
    "id": 35,
    "languages": "Hungarian"
  }, {
    "id": 36,
    "languages": "Punjabi"
  }, {
    "id": 37,
    "languages": "Nepali"
  }, {
    "id": 38,
    "languages": "Montenegrin"
  }, {
    "id": 39,
    "languages": "Bosnian"
  }, {
    "id": 40,
    "languages": "Kazakh"
  }, {
    "id": 41,
    "languages": "Armenian"
  }, {
    "id": 42,
    "languages": "Pashto"
  }, {
    "id": 43,
    "languages": "Tsonga"
  }, {
    "id": 44,
    "languages": "Malay"
  }, {
    "id": 45,
    "languages": "Malagasy"
  }, {
    "id": 46,
    "languages": "Japanese"
  }, {
    "id": 47,
    "languages": "Zulu"
  }, {
    "id": 48,
    "languages": "Belarusian"
  }, {
    "id": 49,
    "languages": "Albanian"
  }, {
    "id": 50,
    "languages": "Italian"
  }, {
    "id": 51,
    "languages": "Latvian"
  }, {
    "id": 52,
    "languages": "Telugu"
  }, {
    "id": 53,
    "languages": "Irish Gaelic"
  }, {
    "id": 54,
    "languages": "Papiamento"
  }, {
    "id": 55,
    "languages": "Swati"
  }, {
    "id": 56,
    "languages": "Haitian Creole"
  }, {
    "id": 57,
    "languages": "Tajik"
  }, {
    "id": 58,
    "languages": "Korean"
  }, {
    "id": 59,
    "languages": "Danish"
  }, {
    "id": 60,
    "languages": "Kashmiri"
  }, {
    "id": 61,
    "languages": "Assamese"
  }, {
    "id": 62,
    "languages": "Swati"
  }, {
    "id": 63,
    "languages": "Catalan"
  }, {
    "id": 64,
    "languages": "Marathi"
  }, {
    "id": 65,
    "languages": "German"
  }, {
    "id": 66,
    "languages": "Macedonian"
  }, {
    "id": 67,
    "languages": "Polish"
  }, {
    "id": 68,
    "languages": "Tamil"
  }, {
    "id": 69,
    "languages": "Bislama"
  }, {
    "id": 70,
    "languages": "Bulgarian"
  }, {
    "id": 71,
    "languages": "Hebrew"
  }, {
    "id": 72,
    "languages": "Sotho"
  }, {
    "id": 73,
    "languages": "Fijian"
  }, {
    "id": 74,
    "languages": "English"
  }, {
    "id": 75,
    "languages": "Kyrgyz"
  }, {
    "id": 76,
    "languages": "Hungarian"
  }, {
    "id": 77,
    "languages": "Somali"
  }, {
    "id": 78,
    "languages": "Czech"
  }, {
    "id": 79,
    "languages": "Tetum"
  }, {
    "id": 80,
    "languages": "Tsonga"
  }, {
    "id": 81,
    "languages": "Malay"
  }, {
    "id": 82,
    "languages": "Malayalam"
  }, {
    "id": 83,
    "languages": "Kurdish"
  }, {
    "id": 84,
    "languages": "Hebrew"
  }, {
    "id": 85,
    "languages": "Maltese"
  }, {
    "id": 86,
    "languages": "Aymara"
  }, {
    "id": 87,
    "languages": "Chinese"
  }, {
    "id": 88,
    "languages": "Maltese"
  }, {
    "id": 89,
    "languages": "Greek"
  }, {
    "id": 90,
    "languages": "Tajik"
  }, {
    "id": 91,
    "languages": "Romanian"
  }, {
    "id": 92,
    "languages": "Irish Gaelic"
  }, {
    "id": 93,
    "languages": "Georgian"
  }, {
    "id": 94,
    "languages": "Dhivehi"
  }, {
    "id": 95,
    "languages": "Punjabi"
  }, {
    "id": 96,
    "languages": "Malayalam"
  }, {
    "id": 97,
    "languages": "Tswana"
  }, {
    "id": 98,
    "languages": "Croatian"
  }, {
    "id": 99,
    "languages": "Portuguese"
  }, {
    "id": 100,
    "languages": "Zulu"
  }];


const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Languages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
            window,
            screen,
        }
    }
    renderItemComponent = (data) =>(
        <TouchableOpacity style={{borderRadius:25,padding:10}} keyExtractor={data.id} >
        <View style={{flexDirection:'row'}}>
            <View style={{flex:5}}>
                <Text style={{fontSize:15,fontWeight:'700'}}>{data.languages}</Text>
            </View>
        </View>
      </TouchableOpacity>

    );
        
   
   render() {
      return (
        <SafeAreaView>
                <FlatList 
                margin={15}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                      <View
                        style={[
                          style.separator,
                          highlighted && { marginLeft: 0 }
                        ]}
                      />
                    ))
                  }
                data={DATA}
                renderItem={({item}) => this.renderItemComponent(item)}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>)
    }
}

export default Languages


