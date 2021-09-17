import React from 'react';
import Svg, {Line, Path} from 'react-native-svg';

const DashedLine = (props) => (
  <Svg
    baseProfile="full"
    xmlns="http://www.w3.org/2000/svg"
    className="svgContainer"
    style={{
      width: 160,
      height: '100%',
    }}>
    <Path
      d="M0 22h200"
      stroke="#fff"
      fill="#fff"
      strokeWidth="9px"
      strokeDasharray="15 5"
      strokeDashoffset={2}
    />
  </Svg>
);

export default DashedLine;
