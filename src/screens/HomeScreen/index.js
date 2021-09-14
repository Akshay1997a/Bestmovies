import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import RenderTV from './renderTV';
import RenderMobile from './renderMobile';
import colors from 'src/helper/colors';
import StyleConfig from 'src/helper/StyleConfig';
//import firebase from '../../helper/firebase';
// import crashlytics from '@react-native-firebase/crashlytics';
const {width} = Dimensions.get('window');
class HomeScreen extends React.Component {
  state = {
    posts: [],
    modalVisible: false,
  };

  async componentDidMount() {
    fetch('https://www.reddit.com/r/pic/top.json?t=year')
      .then((response) => response.json())
      .then((json) => {
        const posts = json.data.children.map((child) => child.data);
        this.setState({posts});
      });
    //crashlytics().log('crashlytics log.');
    console.log('=================================');
    console.log('StyleConfig.isTV', StyleConfig.isTV);
    console.log('StyleConfig.isIos', StyleConfig.isIos);
    console.log('StyleConfig.isAndroid', StyleConfig.isAndroid);
    console.log('StyleConfig.isAppleTV', StyleConfig.isAppleTV);
    console.log('=================================');
  }

  render() {
    return StyleConfig.isTV ? (
      <RenderTV
        posts={this.state.posts}
        modalVisible={this.state.modalVisible}
        selectedImage={this.state.selectedImage}
        {...this.props}
      />
    ) : (
      <RenderMobile {...this.props} />
    );
  }
}

export default HomeScreen;

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
