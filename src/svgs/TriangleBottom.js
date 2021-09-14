import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SVGTriangleBottom(props) {
  return (
    <Svg
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__svgContainer"
      style={{
        width: 13,
        height: 28,
      }}
      {...props}>
      <G clipPath="url(#prefix__clip-s-Triangle_297750)">
        <Path
          className="prefix__pie prefix__triangle prefix__shape prefix__firer prefix__commentable prefix__non-processed"
          d="M13 0v28H0z"
          fill="#4183e2"
        />
      </G>
      <Defs>
        <ClipPath
          id="prefix__clip-s-Triangle_297750"
          className="prefix__clipPath">
          <Path d="M13 0v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SVGTriangleBottom;
