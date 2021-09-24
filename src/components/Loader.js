import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

export const LoaderIndicator = () => (
  <View style={[styles.container, styles.horizontal]}>
    <View
      style={{
        width: '80%',
        height: 70,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 25,
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
        }}>
        <ActivityIndicator
          size="large"
          style={{width: 30, height: 30}}
          color={'red'}
        />
      </View>
    </View>
  </View>
);

const Loader = () => {
  const loading = useSelector((state) => state?.UI?.isLoading);
  return (
    <React.Fragment>{loading ? <LoaderIndicator /> : null}</React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
