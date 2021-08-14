import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SearchBar from '../../../components/SearchBar';
import {COUNTRIES_LIST} from '../../../config/CountriesList';
import HeaderModal from '../../../components/HeaderModal';

const window = Dimensions.get('window').width;
const screen = Dimensions.get('window').height;

export class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      window,
      screen,
    };
  }
  renderItemComponent = (data, index) => (
    <TouchableOpacity
      style={{borderRadius: 25, padding: 10}}
      keyExtractor={index}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 5}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>{data.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
        <HeaderModal title="Countries of origin" {...this.props} />
        <SearchBar placeholder="Enter country" />
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[ highlighted && {marginLeft: 0}]} />
            ))
          }
          data={COUNTRIES_LIST}
          renderItem={({item, index}) => (
            <Button title={item.name} isActive={index === 0} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Country;

const Button = ({title, isActive, onPress}) => (
  <TouchableOpacity style={[styles.butContainer, isActive && styles.butActive]}>
    <Text style={[styles.butTitle, isActive && styles.butActiveText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  butContainer: {
    padding: 10,
    borderRadius: 15,
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
    fontFamily: "'VAG Rounded Next',Arial",
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
