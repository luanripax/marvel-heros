import React from 'react';
import {Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import styles from './comicCard.styles';
import svgList from '../../../assets/svg/svg.index';
import {ComicCardProps} from './comicCard.types';

const ComicCard = ({name}: ComicCardProps) => {
  return (
    <View style={styles.comicBookContainer}>
      <View style={styles.comicCover}>
        <SvgXml testID="logo" xml={svgList.comics} width={40} height={60} />
        <Text style={styles.title} ellipsizeMode="tail">
          {name}
        </Text>
      </View>
    </View>
  );
};

export default ComicCard;
