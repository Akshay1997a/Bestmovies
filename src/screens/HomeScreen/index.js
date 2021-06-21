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
  Dimensions,
  Pressable
  } from 'react-native';
  import { connect } from 'react-redux';
  import {INCREASE_COUNTER, DECREASE_COUNTER} from 'src/redux/const'
import { SET_COUNTER } from '../../redux/const';
import colors from 'src/helper/colors'
//import firebase from '../../helper/firebase';
// import crashlytics from '@react-native-firebase/crashlytics';
const {width} = Dimensions.get('window')
const [MY_LIST, MINUS, PLUS, RESET] = [0, 1, 2, 3]
class HomeScreen extends React.Component {
state = {
  posts: [],
  modalVisible:false,
  cursorState:0
};

   _tvEventHandler=undefined

  _enableTVEventHandler() {
    console.log("_enableTVEventHandler...1")
    this._tvEventHandler = new TVEventHandler();
    console.log("_enableTVEventHandler...2")
    this._tvEventHandler.enable(this, function(cmp, evt) {
      console.log("_enableTVEventHandler...3", evt);
      if (evt && evt.eventType === 'right') {
        console.log("RIGHT")
      } else if(evt && evt.eventType === 'up') {
        console.log("UP")
      } else if(evt && evt.eventType === 'left') {
        console.log("LEFT")
      } else if(evt && evt.eventType === 'down') {
        console.log("DOWN")
      }
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  componentWillUnmount() {
    this._disableTVEventHandler();
  }
async componentDidMount() {
  fetch('https://www.reddit.com/r/pic/top.json?t=year')
    .then(response => response.json())
    .then(json => {
      const posts = json.data.children.map(child => child.data);
      this.setState({posts});
    });
    console.log("componentDidMount...1")
    this._enableTVEventHandler();
    console.log("componentDidMount...2")
    //crashlytics().log('crashlytics log.');
   
    
}

render() {
  const {cursorState} = this.state
  console.log({cursorState, MY_LIST: cursorState == MY_LIST, MINUS: cursorState == MINUS, PLUS:cursorState == MY_LIST, RESET:cursorState == RESET})
  return (<>
    
    <View style={{flexDirection:'row', margin:20}}>

      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
          })
        }

        onPress={()=> this.props.navigation.navigate("MyListScreen")}>
        <Text style={{fontSize:24}}>My List </Text>    
      </Pressable>

      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
            overflow:'hidden'
          })
        }

        onPress={()=> this.props.reduxDecreaseCounter()}>
        <Text style={{fontSize:24}}> - </Text>    
      </Pressable>
    
      <Text style={{fontSize:24}}>{this.props.counter}</Text>

      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
          })
        }

        onPress={()=> this.props.reduxIncreaseCounter()}>
        <Text style={{fontSize:24}}> + </Text>    
      </Pressable>
    
      <Pressable
        tvParallaxProperties={{ magnification: 1.1 }}
        style={({pressed, focused}) => 
          ({
            backgroundColor: focused? 'orange': pressed ? 'red' : 'transparent',
          })
        }

        onPress={()=> this.props.reduxSetCounter(0)}>
        <Text style={{fontSize:24}}> reset </Text>    
      </Pressable>
    



    </View>
  <ScrollView contentContainerStyle={styles.container}>
{this.state.posts.map(post => (
  <View style={styles.tile} key={post.id}>
    <Pressable
        tvParallaxProperties={{ magnification: 1.001 }}
        style={({pressed, focused}) => focused ? styles.highlightFocused : styles.highlight}
        onPress={() => this.setState({ modalVisible: true, selectedImage: post.url })}
    >
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={{ uri: post.thumbnail }}
      />
    </Pressable>
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