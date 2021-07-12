import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome5';
import Movies from '../Movies';
import TVShow from '../TVShow';
import Directors from '../Directors';
import Actors from '../Actors';
import Shorts from '../Shorts';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 'Moviesf',
    };
  }
  renderContaint = () => {
    const {selectedMenu} = this.state;
    switch (selectedMenu) {
      case 'Moviesf':
        return <Movies />;
      case 'TvShow':
        return <TVShow />;
      case 'Shorts':
        return <Shorts />;
      case 'Director':
        return <Directors />;
      case 'Actors':
        return <Actors />;
      default:
        return <Movies />;
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
        {/* <StatusBar hidden={true}/> */}
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Filter')}>
            <Icon name="ios-settings" size={25} color="#232323" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Search')}>
            <Icon name="ios-search" size={25} color="#232323" />
          </TouchableOpacity>
          <View />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Menu')}>
            <Text style={styles.bestMoviesBanner}>BestMovies</Text>
          </TouchableOpacity>
          <View />
          <TouchableOpacity>
            <User name="user" size={25} color="#232323" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons name="dots-three-vertical" size={25} color="#232323" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => this.setState({selectedMenu: 'MoviesF'})}>
            <Text style={{color: 'red', fontSize: 15, fontWeight: '700'}}>
              Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedMenu: 'TvShow'})}
            style={styles.menuItem}>
            <Text style={styles.menuFont}>TV shows</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedMenu: 'Shorts'})}
            style={styles.menuItem}>
            <Text style={styles.menuFont}>Shorts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedMenu: 'Director'})}
            style={styles.menuItem}>
            <Text style={styles.menuFont}>Directors</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({selectedMenu: 'Actors'})}
            style={styles.menuItem}>
            <Text style={styles.menuFont}>Actors</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{flex: 1}}>{this.renderContaint()}</SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default Menu;
const styles = StyleSheet.create({
  menuFont: {
    fontSize: 15,
    fontWeight: '700',
  },
  bestMoviesBanner: {
    fontWeight: '700',
    fontSize: 20,
  },
  menuItem: {
    padding: 2,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,

    // backgroundColor:'#FC5404',
  },
});
