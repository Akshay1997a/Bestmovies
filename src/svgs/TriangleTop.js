import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SVGTriangleTop(props) {
  return (
    <Svg
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: 13,
        height: 28,
      }}
      rotation={180}
      {...props}>
      <G clipPath="url(#clip-s-Triangle_309108)">
        <Path d="M0 0l13 28H0z" transform="rotate(0deg)" fill="#4183e2" />
      </G>
      <Defs>
        <ClipPath id="clip-s-Triangle_309108">
          <Path d="M0 0l13 28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SVGTriangleTop;
