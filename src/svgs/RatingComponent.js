import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {G, Ellipse, Defs, ClipPath} from 'react-native-svg';

function EllipseComponent(props) {
  return (
    <Svg
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__svgContainer"
      style={{
        width: props.width,
        height: props.height,
      }}
      {...props}>
      <G clipPath="url(#prefix__clip-s-Ellipse_47821)">
        <Ellipse
          className="prefix__pie prefix__ellipse prefix__shape prefix__firer prefix__commentable prefix__non-processed"
          cx={19}
          cy={11}
          rx={19}
          ry={11}
          fill={'#000'}
        />
      </G>
      <Defs>
        <ClipPath
          id="prefix__clip-s-Ellipse_47821"
          className="prefix__clipPath">
          <Ellipse cx={19} cy={11} rx={19} ry={11} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function RatingComponent({rating, textStyle, width = 38, height = 22}) {
  return (
    <View style={styles.container}>
      <EllipseComponent width={width} height={height} />
      <Text style={[styles.ratingText, textStyle]}>{rating}</Text>
    </View>
  );
}

export default RatingComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: '#fff',
    position: 'absolute',
    fontFamily: 'VGA Rounded Next',
    fontSize: 14,
    fontWeight: '700',
  },
});
