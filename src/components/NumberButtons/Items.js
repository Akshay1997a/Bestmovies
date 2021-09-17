// React Modules
import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';

// Styles
import styles from './styles';

export default class NumberButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: '',
    };
  }

  // This is for optimization
  // Component should render only once
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  // This will call the bound function from its parent component
  // to handle button press action/event
  _handleOnPress = (value, index) => {
    console.log('value', value);
    console.log('index', index);
    this.setState({click: index});
    requestAnimationFrame(() => {
      this.props.onBtnPress(value);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          key={index}
          onPress={() => this._handleOnPress(col, index)}>
          <View
            style={
              index === this.state.click
                ? styles.contButton
                : styles.contButtonClick
            }>
            <Text style={styles.txtDefault}>{col}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
