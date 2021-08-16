import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Menu from '../Menu';
import Icons from 'react-native-vector-icons/Feather';
import CardView from '../Movies/CardView';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../../../asset/poster4.jpg'),
  },
  {
    id: '2',
    name: 'Second Item',
    image: require('../../../asset/poster1.jpg'),
  },
  {
    id: '3',
    name: 'Third Item',
    image: require('../../../asset/poster2.jpg'),
  },
  {
    id: '4',
    name: 'Third Item',
    image: require('../../../asset/poster3.jpg'),
  },
  {
    id: '5',
    name: 'Third Item',
    image: require('../../../asset/poster4.jpg'),
  },
  {
    id: '6',
    name: 'Third Item',
    image: require('../../../asset/poster5.jpg'),
  },
];

export class Shorts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      modalVisible: false,
    };
  }
  rendeDirector = (data) => (
    <TouchableOpacity style={styles.directorContainer}>
      <Image style={styles.directorImage} source={data.image} />
      <View style={{flexWrap: 'wrap'}}>
        <Text numberOfLines={1} style={styles.directorName}>
          {data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  renderSimilarItem = (data) => {
    <View style={{borderRadius: 12, width: 150, margin: 10}}>
      <TouchableOpacity style={{zIndex: 100, elevation: 5}}>
        <Icon
          name="bookmark"
          size={40}
          color="#232323"
          style={{position: 'absolute', top: -10, left: 100}}
        />
      </TouchableOpacity>
      <Image
        source={data.image}
        style={{
          width: 150,
          height: 200,
          resizeMode: 'cover',
          borderRadius: 12,
          marginBottom: 10,
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textFont}>Lynn O’Leeum</Text>
        <Text style={styles.textFont}>Percy Kewshun</Text>
        <Text numberOfLines={1} style={styles.textFont}>
          Bridget Theriveaquai
        </Text>
        <Text numberOfLines={1} style={styles.textFont}>
          Bridget Theriveaquai
        </Text>
      </View>
    </View>;
  };

  moviewPoster = (data) => (
    <View style={styles.moviewPosterContainer}>
      <View style={styles.posterImageContainer}>
        <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
          <Icon
            name="bookmark"
            size={40}
            color="#232323"
            style={{position: 'absolute', top: -10, right: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
          <Icons
            name="play-circle"
            size={40}
            color="white"
            style={{position: 'absolute', top: 200, left: window / 2 - 30}}
          />
        </TouchableOpacity>
        <Image style={styles.posterImage} source={data.image} />
        <View
          style={{
            position: 'absolute',
            top: screen / 2.5,
            marginLeft: window / 6,
          }}>
          <Text
            allowFontScaling={true}
            style={{fontSize: 50, color: 'white', fontWeight: '700'}}>
            {data.name}
          </Text>
        </View>
      </View>
      <View style={styles.posterDescContainer}>
        <View style={{flex: 5}}>
          <Text style={styles.textFont}>Parasite</Text>
          <Text style={[styles.textSecondary, styles.italic]}>
            Parasite(Original title)
          </Text>
          <Text style={styles.textSecondary}>Dram ,Romantic</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: '100%',
                borderWidth: 1,
                padding: 2,
                marginRight: 2,
              }}>
              <Text>16+</Text>
            </View>
            <Text style={styles.textSecondary}>France - </Text>
            <Text style={styles.textSecondary}>2018 -</Text>
            <Text style={styles.textSecondary}>2h 34m -</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textSecondary}>2.90$ - 88% match -29</Text>
            <TouchableOpacity>
              <Icon name="heart-outlined" size={20} color="#232323" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
          }}>
          <Icon
            name="reply"
            size={25}
            color="#232323"
            style={{transform: [{rotateY: '180deg'}]}}
          />
          <View
            style={{
              backgroundColor: 'black',
              height: 30,
              width: 50,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
              9.1
            </Text>
          </View>
          <Text style={{fontWeight: '700', fontSize: 20, marginLeft: 17}}>
            Best
          </Text>
        </View>
      </View>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1,  backgroundColor: "#fff"}}>
        <View style={{flex: 1}}>
          <Modal visible={this.state.modalVisible} transparent={true}>
            <View
              style={{
                backgroundColor: '#f7f7f5',
                height: 250,
                width: 200,
                top: 150,
                left: window / 4,
                borderRadius: 10,
                padding: 10,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: '700', padding: 5}}>
                Sort By
              </Text>
              <TouchableOpacity>
                <Text style={styles.modalText}>Rating</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.modalText}>Match</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.modalText}>Friends'Like</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.modalText}>Popular</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({modalVisible: false})}>
                <Text>Close Model</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        {/* <Menu/> */}
        <ScrollView
          automaticallyAdjustContentInsets={true}
          bounces={true}
          contentContainerStyle={{padding: 10}}>
          <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, marginTop: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flex: 3}}>
                  <Text style={styles.resultText}>
                    Top 1 of 91287 Movies
                  </Text>
                </View>
                <TouchableOpacity
                  style={{alignItems: 'flex-end', flexDirection: 'row'}}
                  onPress={() => {
                    this.setState({modalVisible: true});
                  }}>
                  <Icon name="triangle-down" size={20} color="#232323" />
                  <Text style={styles.resultText}>Rating</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={DATA}
                  renderItem={({item}) => this.moviewPoster(item)}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View style={{height: window / 2, marginTop: 25}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textFont}>Director </Text>
                  <Text style={styles.textFont}>Cast</Text>
                </View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={DATA}
                  renderItem={({item}) => this.rendeDirector(item)}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View>
                <Text style={styles.textFont}>Lorem Ipsum</Text>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Text>
              </View>
              {/* For the Rating */}
              <View style={{marginTop: 25}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textFont}>Rating</Text>
                  <Text style={styles.textSecondary}>Overall: 9.1</Text>
                </View>
                <View style={{borderWidth: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1, padding: 6, borderRightWidth: 1}}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Awards</Text>
                        <Text style={styles.textSecondary}>9.3</Text>
                      </View>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Critics</Text>
                        <Text style={styles.textSecondary}>9.5</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{flex: 1, padding: 6}}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Audience</Text>
                        <Text style={styles.textSecondary}>9.0</Text>
                      </View>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.textSecondary}>Box-Office</Text>
                        <Text style={styles.textSecondary}>8.1</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.textSecondary}>
                  Won 2 oscars including best director
                </Text>
                <Text style={styles.textSecondary}>
                  Won 2 oscars including best director
                </Text>
              </View>
              {/* For the watch now flatlist */}
              <View style={{height: window / 2, marginTop: 25}}>
                <Text style={styles.textFont}>Watch now</Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={DATA}
                  renderItem={({item}) => this.rendeDirector(item)}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View style={{marginTop: 25}}>
                <Text style={styles.textFont}>Images</Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../../../asset/poster4.jpg')}
                    style={{
                      width: window - 20,
                      height: 300,
                      resizeMode: 'cover',
                      marginBottom: 10,
                    }}
                  />
                  <Image
                    source={require('../../../asset/poster4.jpg')}
                    style={{
                      width: window - 20,
                      height: 300,
                      resizeMode: 'cover',
                      marginBottom: 10,
                    }}
                  />
                  <Image
                    source={require('../../../asset/poster4.jpg')}
                    style={{
                      width: window - 20,
                      height: 300,
                      resizeMode: 'cover',
                      marginBottom: 10,
                    }}
                  />
                  <Image
                    source={require('../../../asset/poster4.jpg')}
                    style={{
                      width: window - 20,
                      height: 300,
                      resizeMode: 'cover',
                      marginBottom: 10,
                    }}
                  />
                </View>
              </View>
              <View style={{marginBottom: 60, marginTop: 20}}>
                <Text style={styles.textFont}>Similer title</Text>
                <View style={{flex: 1}}>
                  <CardView />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

export default Shorts;
const styles = StyleSheet.create({
  textFont: {
    color: '#333333',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  seprater: {
    backgroundColor: 'red',
    height: 1,
  },
  modalText: {
    fontSize: 18,
    padding: 10,
  },
  shadow: {
    borderColor: 'red',
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  textSecondary: {
    color: '#333333',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400',
  },
  italic: {
    fontStyle: 'italic',
  },
  moviewPosterContainer: {
    flex: 1,
    paddingRight: 15,
    justifyContent: 'center',
  },
  posterImageContainer: {justifyContent: 'center', marginVertical: 5},
  posterImage: {height: 450, width: window - 20, borderRadius: 12},
  posterDescContainer: {flexDirection: 'row', padding: 5},
  directorContainer: {
    width: window / 4,
    height: window / 2.9,
    backgroundColor: '#fff',
    padding: 5,
    marginRight: 15,
    elevation: 5,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  directorImage: {
    height: '80%',
    width: window / 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  directorName: {
    color: '#333333',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  resultText: {
    color: "#333333",
    fontFamily: "'LEMON MILK Pro FTR',Arial",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500"
  }
});
