import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SVGTriangleTop(props) {
  return (
    <Svg
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__svgContainer"
      style={{
        width: 13,
        height: 28,
        transform: [{rotateY: '180deg'}, {rotateX: '180deg'}],
      }}
      {...props}>
      <G clipPath="url(#prefix__clip-s-Triangle_304115)">
        <Path
          className="prefix__pie prefix__triangle prefix__shape prefix__firer prefix__commentable prefix__non-processed"
          d="M0 0l13 28H0z"
          fill="#4183e2"
        />
      </G>
      <Defs>
        <ClipPath
          id="prefix__clip-s-Triangle_304115"
          className="prefix__clipPath">
          <Path d="M0 0l13 28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SVGTriangleTop;
