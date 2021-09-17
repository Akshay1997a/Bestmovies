import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Header from '../../components/Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Profile(props) {
  const [mode, setMode] = useState('LOGIN');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* <Header {...props} /> */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={[styles.col, styles.alignCenter]}>
            <Text style={styles.HeadTitle}>Free & quick sign up</Text>
            <Text style={styles.headerTitleSecondary}>+ Custom matches</Text>
            <Text style={styles.headerTitleSecondary}>+ Watch lists</Text>
            <Text style={styles.headerTitleSecondary}>
              + Use as TV remote control
            </Text>
            <Text style={styles.headerTitleSecondary}>
              + See friends' ratings, etc.
            </Text>
          </View>
          <View style={[styles.col, styles.alignCenter]}>
            <View
              style={[
                styles.row,
                styles.rect,
                styles.alignCenter,
                styles.justifyContentCenter,
                styles.wrap,
              ]}>
              <FontAwesome5Icon name="facebook-square" size={30} color="#fff" />
              <Text style={[styles.butText, styles.whiteText]}>
                Enter with facebook
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.rect,
                styles.alignCenter,
                styles.justifyContentCenter,
                styles.wrap,
                {backgroundColor: '#cccccc'},
              ]}>
              <FontAwesome5Icon name="facebook-square" size={30} color="#fff" />
              <Text style={[styles.butText]}>Enter with Google</Text>
            </View>
            <View
              style={[
                styles.row,
                styles.rect,
                styles.alignCenter,
                styles.justifyContentCenter,
                styles.wrap,
                {backgroundColor: '#000'},
              ]}>
              <FontAwesome5Icon name="apple" size={30} color="#fff" />
              <Text style={[styles.butText, styles.whiteText]}>
                Enter with Apple
              </Text>
            </View>
            <Text style={styles.TitleSecondary}>
              We do NOT post in your social media nor share your data.
            </Text>
            <Text style={styles.Title}>or...</Text>
          </View>
          <View>
            {/* <View>
            <View style={styles.row}>
              <View style={styles.signupSwitchBut}>
                <TouchableOpacity>
                  <Text style={styles.signupSwitchButText}>Signup</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signupSwitchBut}>
                <TouchableOpacity>
                  <Text style={styles.signupSwitchButText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
            <View style={styles.SignupView}>
              <View style={styles.FormGroup}>
                <Text style={[styles.Text, styles.bold, styles.MB10]}>
                  Email or phone
                </Text>
                <TextInput style={styles.TextInput} placeholder="Email" />
              </View>
              <View style={styles.FormGroup}>
                <Text style={[styles.Text, styles.bold, styles.MB10]}>
                  Password
                </Text>
                <TextInput style={styles.TextInput} placeholder="Password" />
              </View>
              <View style={styles.FormGroup}>
                <Text style={[styles.Text, styles.bold, styles.MB10]}>
                  Confirm Password
                </Text>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Confirm Password"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignContent: 'center',
    // padding: 10,
  },
  header: {
    color: '#000000',
    fontFamily: 'LEMON MILK Pro FTR',
    fontSize: 24,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '500',
    }),
  },
  headerTitleSecondary: {
    color: '#666666',
    fontFamily: 'LEMON MILK Pro FTR',
    fontSize: 16,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  artistImageContainer: {
    width: '100%',
    height: 474,
    borderRadius: 20,
    overflow: 'hidden',
  },
  HeadTitle: {
    color: '#000000',
    fontFamily: 'LEMON MILK Pro FTR',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  whiteText: {
    color: '#fff',
  },
  backBut: {
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  col: {
    flex: 1,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  bordered: {
    borderWidth: 1,
  },
  artistName: {
    color: '#333333',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  artistDesc: {
    color: '#333333',
    fontFamily: 'Arial',
    fontSize: 16,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  Title: {
    color: '#000000',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
    marginVertical: 10,
  },
  Text: {
    color: '#000000',
    fontFamily: 'Arial',
    fontSize: 15,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  RankTitle: {
    color: '#000000',
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  RankContainer: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 1000,
  },
  RankCount: {
    color: '#fff',
    fontSize: 20,
  },
  alignCenter: {alignItems: 'center'},
  justifyContentCenter: {justifyContent: 'center'},
  M10: {
    margin: 10,
  },
  TitleSecondary: {
    color: '#333333',
    fontFamily: 'Helvetica Neue',
    fontSize: 12,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  rect: {
    backgroundColor: '#3867b8',
    borderRadius: 100,
    padding: 15,
    marginBottom: 20,
  },
  butText: {
    color: '#000',
    fontFamily: 'LEMON MILK Pro FTR',
    fontSize: 18,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
    paddingHorizontal: 10,
  },
  wrap: {
    width: '100%',
  },
  FormGroup: {},
  TextInput: {
    backgroundColor: '#fff',
    color: '#999999',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
    marginBottom: 10,
  },
  SignupView: {
    backgroundColor: '#efefef',
    padding: 20,
  },
  MB10: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  signupSwitchBut: {
    flex: 0.8,
    padding: 20,
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
