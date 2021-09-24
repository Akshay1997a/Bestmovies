import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardView from '../Movies/CardView';
import Loader from '../../components/Loader';
import {HEADER_HEIGHT, TOTAL_HEADER_HEIGHT} from '../../components/Header';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export function RenderMobile() {
  const [isLoaded, setLoaded] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    <Loader />;
  }

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 10,
          paddingTop: TOTAL_HEADER_HEIGHT + insets.top,
        }}>
        <View style={{marginBottom: 10, flex: 5.7, backgroundColor: '#fff'}}>
          <View
            style={{flexDirection: 'row', padding: 3, alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: '700', marginLeft: 2}}>
              Recent searches
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <CardView />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

export default RenderMobile;
