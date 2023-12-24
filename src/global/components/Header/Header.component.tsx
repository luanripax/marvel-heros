import React from 'react';
import {Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import svgList from '../../../assets/svg/svg.index';
import {HeaderProps} from './Header.types';
import styles from './Header.styles';

const Header = ({title, onBack, marvelLogo}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {marvelLogo && (
        <SvgXml testID="logo" xml={svgList.comics} width={80} height={30} />
      )}
      {onBack && (
        <SvgXml
          testID="arrow"
          xml={svgList.arrowLeft}
          onPress={onBack}
          width={30}
          height={30}
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default Header;
