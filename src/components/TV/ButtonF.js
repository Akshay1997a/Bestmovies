import React, { Component, useState } from "react";
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
  Button
} from "react-native";


class ButtonF extends Component { 
  constructor(props) {
    super(props);
    this.state = { isFocus: false };
    this._tvEventHandler = null;
  }

  _enableTVEventHandler() {
    var self = this;
    this._tvEventHandler = new TVEventHandler();

    console.log("enababababaabbabaa")
    this._tvEventHandler.enable(this, function (cmp, evt) {
        console.log("kcubhgjgjgjhgjgjsj"+evt.eventType)
        if (evt && evt.eventType === 'right') {
            console.log('right');
        } else if (evt && evt.eventType === 'up') {
            console.log('up');
        } else if (evt && evt.eventType === 'left') {
            console.log('left');
        } else if (evt && evt.eventType === 'down') {
            console.log('down');
        } else if (evt && evt.eventType === 'select') {
            //self.press();
        }
    });
}

_disableTVEventHandler() {
    if (this._tvEventHandler) {
        this._tvEventHandler.disable();
        delete this._tvEventHandler;
    }
}

componentDidMount() {
    this._enableTVEventHandler();
}

componentWillUnmount() {
    this._disableTVEventHandler();
}
  render() {
       const { children, hide, ...props } = this.props;
       var { isFocus } = this.state;
       console.debug('focusing, isFocus', isFocus);
       return (
         <View hasTVPreferredFocus={true}>  
         <TouchableHighlight 
        //  touchableHandleActivePressIn 
         hasTVPreferredFocus={true} 
         ref={this.myRef} 
         style={{ backgroundColor: isFocus ? 'blue' : 'red' }}
         onPressIn={() => this.setState({isFocus: true})}
         onPressOut={() => this.setState({isFocus: true})}>
             <View>
               <Text>TEsting</Text>
             </View>
         </TouchableHighlight>
         </View>
       )
   }
};

const styles = StyleSheet.create({
});

export default ButtonF;