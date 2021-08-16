import React from 'react';
import {
  StyleSheet,
  Dimensions,
  } from 'react-native';
import { connect } from 'react-redux';
import {INCREASE_COUNTER, DECREASE_COUNTER} from '../../redux/const'
import { SET_COUNTER, SET_CURR_FOCUS } from '../../redux/const';
import RenderTV from './renderTV'
import RenderMobile from './renderMobile'
import colors from '../../helper/colors';
import StyleConfig from '../../helper/StyleConfig';
import MoviesJSON from '../../components/TV/movies.json'
//import firebase from '../../helper/firebase';
// import crashlytics from '@react-native-firebase/crashlytics';

const {width} = Dimensions.get('window')
class HomeScreen extends React.Component {
state = {
  posts: [],
  modalVisible:false
};

async componentDidMount() {
  this.props.reduxSetCurrFocus(2)
  // fetch(MoviesJSON,{
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  // })
  //   .then(response => response.json())
  //   .then(json => {
      const posts = MoviesJSON.data.children.map(child => child.data);
      this.setState({posts});
    // });
    // crashlytics().log('crashlytics log.');
    // crashlytics().log('crash on componentDidMount.');
    // crashlytics().crash()
    
}

render() {
  console.log("StyleConfig.isTV- ", StyleConfig.isTV)
  return (
    StyleConfig.isTV ? 
      <RenderTV
        posts={this.state.posts}
        modalVisible ={this.state.modalVisible}
        selectedImage={this.state.selectedImage}
        {...this.props}
        />
      :
      <RenderMobile 
        {...this.props}
      />
  );
}
}


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    console.log('State:', state);
    // Redux Store --> Component
    return {
      counter: state.counter.counter,
    };
  };
  // Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
  const mapDispatchToProps = (dispatch) => {
    // Action
    return {
      reduxSetCurrFocus: (value) => dispatch({
        type: SET_CURR_FOCUS,
        value: value,
      }),
      // Decrease Counter
      reduxSetCounter: (value) => dispatch({
        type: SET_COUNTER,
        value: value,
      }),
        // Increase Counter
      reduxIncreaseCounter: () => dispatch({
        type: INCREASE_COUNTER,
        value: 1,
      }),
      // Decrease Counter
      reduxDecreaseCounter: () => dispatch({
        type: DECREASE_COUNTER,
        value: 1,
      }),
    };
  };
  // Exports
  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tile: {
    flexBasis: width*0.2,
    height: width*0.15,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  highlight:{
    borderColor: '#1d3557',
    borderRadius: 20,
    borderColor: 'green',
  },
  highlightFocused:{
    borderWidth:5,
    borderColor: 'orange',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  
  });