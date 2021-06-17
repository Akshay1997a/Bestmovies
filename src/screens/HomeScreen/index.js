import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Modal,
  Image,
  Dimensions
  } from 'react-native';
  import { connect } from 'react-redux';
  import {INCREASE_COUNTER, DECREASE_COUNTER} from 'src/redux/const'
import { SET_COUNTER } from '../../redux/const';
import colors from 'src/helper/colors'
const {width} = Dimensions.get('window')
class HomeScreen extends React.Component {
state = {
  posts: [],
  modalVisible:false,
};

componentDidMount() {
  fetch('https://www.reddit.com/r/pic/top.json?t=year')
    .then(response => response.json())
    .then(json => {
      const posts = json.data.children.map(child => child.data);
      this.setState({posts});
    });
}

render() {
  return (<>
  <View style={{flexDirection:'row'}}>
  <TouchableHighlight onPress={()=> this.props.navigation.navigate("MyListScreen")}>
    <Text>HomeScreen </Text>
  </TouchableHighlight>

  <TouchableHighlight onPress={()=> this.props.reduxDecreaseCounter()} >
      <Text> - </Text>
  </TouchableHighlight>

    <Text>{this.props.counter}</Text>

  <TouchableHighlight onPress={()=> this.props.reduxIncreaseCounter()} >
      <Text> + </Text>
  </TouchableHighlight>

  <TouchableHighlight onPress={()=> this.props.reduxSetCounter(0)} >
      <Text> Reset </Text>
  </TouchableHighlight>


  </View>
  <ScrollView contentContainerStyle={styles.container}>
{this.state.posts.map(post => (
  <View style={styles.tile} key={post.id}>
    <TouchableHighlight
      style={styles.highlight}
      underlayColor='#a8dadc'
      // We use onPress to open Modal and to set selected image url to state
      onPress={() => this.setState({ modalVisible: true, selectedImage: post.url })}
    >
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={{ uri: post.thumbnail }}
        imageStyle={styles.background}
      />
    </TouchableHighlight>
    <Text style={styles.title}>{post.title}</Text>
  </View>
))}
<Modal
  animationType={'fade'}
  transparent={true}
  visible={this.state.modalVisible}
  onRequestClose={() => this.setState({ modalVisible: false })}
>
  <TouchableHighlight activeOpacity={1} onPress={() => this.setState({ modalVisible: false })}>
    <Image
      source={{ uri: this.state.selectedImage }}
      style={{ width: '100%', height: '100%' }}
    />
  </TouchableHighlight>
</Modal>
</ScrollView>
</>

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
  background: {
    borderColor: '#1d3557',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  });