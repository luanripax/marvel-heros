import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import svgList from '../../../assets/svg/svg.index';
import styles from './Loading.styles';

const Loading = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{rotate: rotationInterpolate}],
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        pointerEvents="none"
        style={[styles.content, animatedStyle]}>
        <SvgXml xml={svgList.ironMan} width={30} height={30} />
      </Animated.View>
    </View>
  );
};

export default Loading;
