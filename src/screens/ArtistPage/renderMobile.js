import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CardView from '../Movies/CardView';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function RenderMobile(props) {
  const goBack = () => {
    const {goBack} = props.navigation;
    goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBut} onPress={goBack}>
          <FontAwesome5Icon name="arrow-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.HeadTitle}>Top 1 of 91,287 directors</Text>
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 10}}>
        <View style={styles.artistImageContainer}>
          <Image
            source={require('../../../assets/Actors/Actor1.jpg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={styles.col}>
          <Text style={styles.artistName}>Clint Eastwood</Text>
          <Text style={styles.artistDesc}>
            Actor & Director. Born in USA, in 1947.
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.Title}>Director ratings</Text>
          <View style={styles.row}>
            <View style={[styles.col, styles.bordered, {flex: 1}]}>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.Text}>Awards rating:</Text>
                <Text style={styles.Text}>9.0</Text>
              </View>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.Text}>Movies rating:</Text>
                <Text style={styles.Text}>8.2</Text>
              </View>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.Text}>Nº of movies:</Text>
                <Text style={styles.Text}>231</Text>
              </View>
            </View>
            <View style={[styles.col, styles.alignCenter]}>
              <Text style={styles.RankTitle}>Top</Text>
              <View style={styles.RankContainer}>
                <Text style={styles.RankCount}>27</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Won 2 Oscars including best script</Text>
            <Text>Won 3 Golden Globes including best director</Text>
            <Text>Nominated to 2 Sundance awards inc. best director</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.Title}>Actor ratings</Text>
          <View style={styles.row}>
            <View style={[styles.col, styles.bordered, {flex: 1}]}>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.Text}>Awards rating:</Text>
                <Text style={styles.Text}>9.0</Text>
              </View>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.Text}>Movies rating:</Text>
                <Text style={styles.Text}>8.2</Text>
              </View>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style={styles.Text}>Nº of movies:</Text>
                <Text style={styles.Text}>231</Text>
              </View>
            </View>
            <View style={[styles.col, styles.alignCenter]}>
              <Text style={styles.RankTitle}>Top</Text>
              <View style={styles.RankContainer}>
                <Text style={styles.RankCount}>27</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Won 2 Oscars including best script</Text>
            <Text>Won 3 Golden Globes including best director</Text>
            <Text>Nominated to 2 Sundance awards inc. best director</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={styles.Title}>Best titles as director</Text>
            <View style={[styles.row, styles.alignCenter]}>
              <TouchableOpacity>
                <FontAwesome5Icon name="filter" size={18} />
              </TouchableOpacity>
              <Text style={[styles.Text, styles.M10]}>Filter</Text>
            </View>
          </View>
          <Text style={styles.TitleSecondary}>#1 of 87 filtered results</Text>
          <Text />
          <CardView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },
  artistImageContainer: {
    width: '100%',
    height: 474,
    borderRadius: 20,
    overflow: 'hidden',
  },
  HeadTitle: {
    position: 'absolute',
    color: '#333333',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
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
    padding: 10,
  },
  row: {
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
    fontSize: 16,
    fontStyle: 'normal',
    marginVertical: 10,
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
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
});
