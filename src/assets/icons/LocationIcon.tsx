import Svg, {Path} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function LocationIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9.25 11h5.5"
      />
      <Path
        stroke={color}
        strokeWidth="1.5"
        d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
      />
    </Svg>
  );
}
