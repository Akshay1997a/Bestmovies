import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions
  } from 'react-native';
const {width} = Dimensions.get('window')
import HTML from 'react-native-render-html'
const HTML_CONTENT = `<h1>Hello, World!</h1>

<p>You can modify the text in the box to the left any way you like, and
then click the "Show Page" button below the box to display the
result here. Go ahead and do this as often and as long as you like.</p>

<p>You can also use this page to test your Javascript functions and local
style declarations. Everything you do will be handled entirely by your own
browser; nothing you type into the text box will be sent back to the
server.</p>

<p>When you are satisfied with your page, you can select all text in the
textarea and copy it to a new text file, with an extension of
either <b>.htm</b> or <b>.html</b>, depending on your Operating System.
This file can then be moved to your Web server.</p>`
 
class MyListScreen extends React.Component {
state = {
  posts: [],
  modalVisible:false,
};

componentDidMount() {
  fetch('./movies.json')
    .then(response => response.json())
    .then(json => {
      const posts = json.data.children.map(child => child.data);
      console.log('post..>>',posts);
      this.setState({posts});
    });
}

render() {
  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
      <HTML
      source={{ html: HTML_CONTENT }} 
      />
    </View>
  );
}
}

export default MyListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1faee',
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