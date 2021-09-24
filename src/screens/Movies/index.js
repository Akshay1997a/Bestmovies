import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {INCREASE_COUNTER, DECREASE_COUNTER} from '../../redux/const';
import {SET_COUNTER, SET_CURR_FOCUS} from '../../redux/const';
import RenderTV from './renderTV';
import RenderMobile from './renderMobile';
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import MoviesJSON from '../../components/TV/movies.json';
//import firebase from '../../helper/firebase';
// import crashlytics from '@react-native-firebase/crashlytics';

const {width} = Dimensions.get('window');
class Movies extends React.Component {
  state = {
    posts: [],
    modalVisible: false,
  };

  render() {
    console.log('StyleConfig.isTV- ', StyleConfig.isTV);
    return StyleConfig.isTV ? (
      <RenderTV {...this.props} />
    ) : (
      <RenderMobile {...this.props} />
    );
  }
}

export default connect(null, null)(Movies);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tile: {
    flexBasis: width * 0.2,
    height: width * 0.15,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  highlight: {
    borderColor: '#1d3557',
    borderRadius: 20,
    borderColor: 'green',
  },
  highlightFocused: {
    borderWidth: 5,
    borderColor: 'orange',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
