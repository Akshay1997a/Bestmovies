import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SVGTriangleBottom(props) {
  return (
    <Svg
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: 13,
        height: 28,
      }}
      {...props}>
      <G clipPath="url(#clip-s-Triangle_299173)">
        <Path d="M13 0v28H0z" transform="rotate(0deg)" fill="#4183e2" />
      </G>
      <Defs>
        <ClipPath id="clip-s-Triangle_299173">
          <Path d="M13 0v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SVGTriangleBottom;
