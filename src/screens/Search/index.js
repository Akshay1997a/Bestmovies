import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardView from '../Movies/CardView';

export class Search extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 10}}>
        <KeyboardAvoidingView
          style={{
            backgroundColor: '#eee',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            paddingHorizontal: 20,
            // paddingVertical: 10,
            marginBottom: 5,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 55,
              marginRight: 10,
            }}>
            <Icon name="search" size={20} color="#232323" />
          </TouchableOpacity>
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
            }}
            placeholder="Search title or artist"
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 55,
            }}>
            <Icon name="microphone" size={20} color="#232323" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={{marginBottom: 10, flex: 5.7, backgroundColor: '#fff'}}>
          <View
            style={{flexDirection: 'row', padding: 3, alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: '700', marginLeft: 2}}>
              6 Result
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <CardView />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Search;
