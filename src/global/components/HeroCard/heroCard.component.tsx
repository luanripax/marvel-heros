import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './heroCard.styles';
import {HeroCardProps} from './heroCard.types';

const HeroCard = ({item, handleDetails}: HeroCardProps) => (
  <TouchableOpacity
    testID="container"
    activeOpacity={0.8}
    style={styles.container}
    onPress={() => handleDetails(item)}>
    <Image testID="image" source={{uri: item?.imageURL}} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{item?.name}</Text>
      <View style={styles.comicsContainer}>
        <Text style={styles.comicsLabel}>Comics:</Text>
        <Text testID="comicLength" style={styles.comicsAmount}>
          {item?.comics?.length}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default HeroCard;
