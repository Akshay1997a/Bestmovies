import * as React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Svg, {G, Ellipse, Defs, ClipPath} from 'react-native-svg';
import _ from 'lodash';
import primary_font, { isAndroid } from '../helper/fonts';
import StyleConfig from '../helper/StyleConfig';
import colors from '../helper/colors';

function EllipseComponent({size, ...props}) {
  const md = () => (
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
          fill={props.color}
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

  const lg = () => (
    <Svg
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      className="svgContainer"
      style={{
        width: props.width,
        height: props.height,
      }}
      {...props}>
      <G clipPath="url(#clip-s-Ellipse_2385328)">
        <Ellipse
          className="pie ellipse shape firer commentable non-processed"
          cx={20}
          cy={16}
          rx={30}
          ry={16}
          // transform="rotate(0deg)"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip-s-Ellipse_2385328" className="clipPath">
          <Ellipse cx={30} cy={16} rx={30} ry={16} />
        </ClipPath>
      </Defs>
    </Svg>
  );

  if (size === 'md') {
    return md();
  } else if (size === 'lg') {
    return lg();
  }
}

function RatingComponent({
  rating,
  color,
  //textStyle,
  size = 'md',
  width = 38,
  height = 22,
}) {
  if (size === 'lg') {
    width =82;
    height = 36;
  }
  return (
    <View style={styles.container}>
      {isAndroid()?
        <EllipseComponent
        width={width}
        height={height}
        size={size}
        color={color}
      />:
      <Svg style={{height:36,width:82,}}>
  <Ellipse
    cx="42"
    cy="18"
    rx="40"
    ry="18"
    fill={color}
  />
</Svg>

      }
      <Text style={[styles.ratingText,]}>{rating}</Text>
    </View>
  );
}

export default RatingComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  ratingText: {
    // alignContent:'center',
    // justifyContent:'center',
    textAlign:'center',
    // alignSelf:'center',
    color: colors.white,
    position: 'absolute',
    fontFamily: primary_font.primary_bold_font,
    fontSize: StyleConfig.resHeight(24),
    lineHeight:StyleConfig.resHeight(30),
    fontWeight:'700',
    // ...(Platform.OS === 'ios' && {
    //   fontWeight: '700',
    // }),
  },
});
