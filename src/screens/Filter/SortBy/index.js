import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderModal from '../../../components/HeaderModal';
import {updateSortByAction} from '../../../redux/FilterModule/FilterActions';
import {SORT_BY_FILTER} from '../../../redux/FilterModule/FilterTypes';

const {height} = Dimensions.get('screen');

export default function SoryBy(props) {
  const {sortBy} = useSelector((state) => state.filterConfig);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <HeaderModal title="Sort By" {...props} />
      <View style={{padding: 10}}>
        {Object.entries(SORT_BY_FILTER).map((value, index) => (
          <Button
            key={index.toString()}
            title={value[1]}
            isActive={sortBy === SORT_BY_FILTER[value[0]]}
            onPress={() => dispatch(updateSortByAction(value[1]))}
          />
        ))}
      </View>
    </View>
  );
}

const Button = ({title, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.butContainer, isActive && styles.butActive]}
    onPress={onPress}>
    <Text style={[styles.butTitle, isActive && styles.butActiveText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#fff',
    marginTop: 'auto',
  },
  butContainer: {
    padding: 10,
    borderRadius: 15,
  },
  butActive: {
    backgroundColor: '#FF4D01',
  },
  butActiveText: {
    color: '#fff',
    fontWeight: '700',
  },
  butTitle: {
    color: '#000000',
    fontFamily: 'VAG Rounded Next Regular',
    fontSize: 20,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
});
