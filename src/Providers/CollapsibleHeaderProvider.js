import React, {useContext} from 'react';
import {Animated} from 'react-native';

export const AnimationContext = React.createContext();

export function useAnimationProvider() {
  return useContext(AnimationContext);
}

export function AnimationProvider({children}) {
  const anim = React.useRef(new Animated.Value(0)).current;
  return (
    <AnimationContext.Provider value={anim}>
      {children}
    </AnimationContext.Provider>
  );
}
