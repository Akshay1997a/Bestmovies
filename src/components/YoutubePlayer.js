import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Button,
  Dimensions,
  StyleSheet,
  InteractionManager,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayerLib from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation';
import Loader from './Loader';
import HeaderModal from './HeaderModal';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const RATIO = 16 / 9;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function YoutubePlayer(props) {
  console.log(props);
  const [playing, setPlaying] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [width, setWidth] = useState(WIDTH);
  const [height, setHeight] = useState(HEIGHT);
  const {url} = props.route.params;

  const onStateChange = useCallback((state) => {
    console.log(state);
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const onReady = () => {
    setPlaying(true);
  };

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      Orientation.lockToLandscapeLeft();
      Dimensions.addEventListener('change', ({window}) => {
        console.log(window);
        setHeight(window.height);
        setLoaded(true);
      });
    });

    const {navigation} = props;
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      setLoaded(false);
      setPlaying(false);
      Orientation.lockToPortrait();
      setTimeout(() => {
        navigation.dispatch(e.data.action);
      }, 500);
    });

    return () => {
      Dimensions.removeEventListener('change');
      navigation.removeListener('beforeRemove');
    };
  }, []);

  if (!isLoaded) {
    return <Loader containerStyle={{backgroundColor: '#000'}} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* {Platform.OS === 'ios' && (
        <TouchableOpacity>
          <FontAwesome5Icon name="close" />
        </TouchableOpacity>
      )} */}
      <YoutubePlayerLib
        width={height * RATIO}
        height={height}
        play={playing}
        videoId={'794y-JtA008'}
        webViewProps={{
          scrollEnabled: false,
          allowsFullscreenVideo: false,
        }}
        onReady={onReady}
        onChangeState={onStateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
