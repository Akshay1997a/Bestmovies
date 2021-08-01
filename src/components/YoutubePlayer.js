import React, {useState, useCallback, useEffect} from 'react';
import {View, Button, Dimensions, StyleSheet} from 'react-native';
import YoutubePlayerLib from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation';

const {width, height} = Dimensions.get('window');
const RATIO = 16 / 9;

export default function YoutubePlayer(props) {
  console.log(props);
  const [playing, setPlaying] = useState(false);
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

  const onFullScreen = (flag) => {
    if (flag) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  };

  useEffect(() => {
    return () => {
      setPlaying(false);
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayerLib
        width={width}
        height={width / RATIO}
        play={playing}
        videoId={'794y-JtA008'}
        webViewProps={{
          scrollEnabled: false,
        }}
        onReady={onReady}
        onFullScreenChange={onFullScreen}
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
