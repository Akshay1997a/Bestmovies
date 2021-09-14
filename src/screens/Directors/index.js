import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
  Animated,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  TOTAL_HEADER_HEIGHT,
  useCollapsibleHeaderHOC,
} from '../../components/Header';
import {FILTER_TYPES} from '../Movies';

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../../../assets/Directors/D1.jpg'),
  },
  {
    id: '2',
    name: 'Second Item',
    image: require('../../../assets/Directors/D2.jpg'),
  },
  {
    id: '3',
    name: 'Third Item',
    image: require('../../../assets/Directors/D4.jpg'),
  },
  {
    id: '4',
    name: 'Third Item',
    image: require('../../../assets/Directors/D5.jpg'),
  },
  {
    id: '5',
    name: 'Third Item',
    image: require('../../../assets/Directors/D6.jpg'),
  },
  {
    id: '6',
    name: 'Third Item',
    image: require('../../../assets/Directors/D7.jpg'),
  },
  {
    id: '7',
    name: 'Third Item',
    image: require('../../../assets/Directors/D8.jpg'),
  },
  {
    id: '8',
    name: 'Third Item',
    image: require('../../../assets/Directors/D9.jpg'),
  },
];

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
      modalVisible: false,
      selectedFilter: FILTER_TYPES.FILTER_BY_RATING,
    };

    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  onFilterSelect(type) {
    this.setState({selectedFilter: type});
  }

  renderItemComponent = (data) => (
    <TouchableNativeFeedback>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: '#fff',
          width: window / 2 - 20,
          elevation: 5,
        }}>
        <TouchableOpacity style={{zIndex: 100, elevation: 2}}>
          <Icon
            name="bookmark"
            size={40}
            color="green"
            style={{position: 'absolute', top: -10, right: 10}}
          />
        </TouchableOpacity>
        <Image
          source={data.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            marginBottom: 10,
          }}
        />
        <View style={{padding: 10}}>
          <Text style={styles.textFont}>Martin Scorcecs</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={styles.textSecondary}>Director</Text>
              <Text numberOfLines={1} style={styles.textSecondary}>
                United States
              </Text>
              <Text
                numberOfLines={1}
                style={(styles.textSecondary, {color: '#000'})}>
                Born 1927
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={styles.ratingTitleStyle}>Top</Text>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 30,
                  width: 50,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={(styles.ratingTitleStyle, {color: '#fff'})}>
                  27
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );

  render() {
    const {selectedFilter} = this.state;

    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          animationType="slide">
          <TouchableWithoutFeedback
            onPress={() => this.setState({modalVisible: false})}>
            <View style={[styles.shadowView]} />
          </TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#f7f7f5',
              marginTop: 'auto',
              height: 250,
              borderRadius: 10,
              alignItems: 'center',
              paddingVertical: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: '#FF3300',
                fontWeight: '700',
                padding: 5,
              }}>
              Sort By
            </Text>
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_RATING &&
                  styles.filterSelected,
              ]}
              onPress={() =>
                this.onFilterSelect(FILTER_TYPES.FILTER_BY_RATING)
              }>
              <Text style={styles.modalText}>Rating</Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_MATCH &&
                  styles.filterSelected,
              ]}
              onPress={() => this.onFilterSelect(FILTER_TYPES.FILTER_BY_MATCH)}>
              <Text style={styles.modalText}>Match</Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_FRIENDS_LIKE &&
                  styles.filterSelected,
              ]}
              onPress={() =>
                this.onFilterSelect(FILTER_TYPES.FILTER_BY_FRIENDS_LIKE)
              }>
              <Text style={styles.modalText}>Friends'Like</Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity
              style={[
                styles.filterBut,
                selectedFilter === FILTER_TYPES.FILTER_BY_POPULAR &&
                  styles.filterSelected,
              ]}
              onPress={() =>
                this.onFilterSelect(FILTER_TYPES.FILTER_BY_POPULAR)
              }>
              <Text style={styles.modalText}>Popular</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS === 'android'
              ? () => <View style={{width: 20, height: 20}} />
              : ({highlighted}) => (
                  <View style={[highlighted && {marginLeft: 0}]} />
                )
          }
          ListHeaderComponent={() => (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flex: 3}}>
                <Text style={styles.resultText}>Top 1 of 91287 Movies</Text>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.setState({modalVisible: true});
                }}>
                <Text style={styles.sortbyButText}>Rating</Text>
                <Icon name="chevron-down" size={20} color="#232323" />
              </TouchableOpacity>
            </View>
          )}
          data={DATA}
          renderItem={({item}) => this.renderItemComponent(item)}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            marginTop: 10,
            justifyContent: 'space-between',
          }}
          contentContainerStyle={{
            padding: 10,
            paddingTop: TOTAL_HEADER_HEIGHT,
          }}
        />
      </SafeAreaView>
    );
  }
}

const EnhanchedComponent = useCollapsibleHeaderHOC(Directors);

export default EnhanchedComponent;

const styles = StyleSheet.create({
  textFont: {
    color: '#333333',
    fontFamily: 'Helvetica Neue',
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
    fontFamily: 'Helvetica Neue',
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
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  resultText: {
    color: '#333333',
    fontFamily: 'LEMON MILK Pro FTR',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  sortbyButText: {
    color: '#333333',
    fontFamily: 'LEMON MILK Pro FTR',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  icContainer: {
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 2,
  },
  swipTitle: {
    color: '#FFFFFF',
    fontFamily: 'Helvetica Neue',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    zIndex: 100,
  },
  shadowView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.2,
    backgroundColor: '#000',
  },
  vDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    opacity: 0.2,
  },
  filterBut: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  filterSelected: {
    color: '#fff',
    backgroundColor: '#ff3300',
  },
  filterSelectedText: {
    color: '#fff',
  },
});
