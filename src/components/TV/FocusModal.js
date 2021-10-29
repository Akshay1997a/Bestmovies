import React, {Component, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TVEventHandler,
  findNodeHandle,
  Button,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isFocus: false};
  }

  disableTVEventHandler() {
    if (this.evtHandler) {
      this.evtHandler.disable();
      delete this.evtHandler;
    }
  }
  enableTVEventHandler = () => {
    console.log('enableTVEventHandler');

    this.tvEventHandler = new TVEventHandler();
    console.log('tvEventHandler', this.tvEventHandler);

    this.tvEventHandler.enable(this, (cmp, {eventType, eventKeyAction}) => {
      console.log('eventType', eventType);
      // eventKeyAction is an integer value representing button press(key down) and release(key up). "key up" is 1, "key down" is 0.
    });
  };

  handleTVRemoteEvent = (cmp, event) => {
    const {eventType, tag} = event;
    console.log('tag', tag);
    console.log('eventType', eventType);

    if (tag !== this.nodeHandle) {
      return;
    }
    if (eventType === 'left') {
      if (this.props.onLeft !== undefined) {
        this.props.onLeft();
      }
    }

    if (eventType === 'right' && event.eventKeyAction === 1) {
      if (this.props.onRight !== undefined) {
        this.props.onRight();
      }
    }

    if (eventType === 'focus') {
      this.setState({isFocus: true});

      if (this.props.focus !== undefined) {
        this.props.focus();
      }
    }
    if (eventType === 'select') {
      if (this.props.onTouch !== undefined) {
        this.props.onTouch();
      }
    }

    if (eventType === 'blur') {
      this.setState({isFocus: false});
    }
  };

  componentDidMount = () => {
    this.nodeHandle = findNodeHandle(this.myRef);
    this.enableTVEventHandler();
  };

  componentWillUnmount() {
    this.disableTVEventHandler();
  }
  render() {
    const {children, hide, ...props} = this.props;
    var {isFocus} = this.state;
    console.debug('focusing, isFocus', isFocus);
    return (
      <TouchableHighlight
        touchableHandleActivePressIn
        hasTVPreferredFocus={true}
        ref={this.myRef}
        style={{backgroundColor: isFocus ? 'blue' : 'red'}}
        onPressIn={() => this.setState({isFocus: true})}
        onPressOut={() => this.setState({isFocus: true})}>
        <View>
          <Text>TEsting</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
