import React from 'react';
import {FlatList, Image, Text, View, ScrollView} from 'react-native';
import Header from '../../global/components/Header/Header.component';
import {useNavigation, useRoute} from '@react-navigation/native';
import ComicCard from '../../global/components/ComicCard/comicCard.component';
import styles from './HeroDetail.styles';
import {HeroDetailRouteProp} from './HeroDetail.types';

const HeroDetailScreen = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute<HeroDetailRouteProp>();
  const {item} = params;

  const onBack = () => goBack();

  return (
    <View style={styles.container}>
      <Header title={'Character details'} onBack={onBack} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.name}>{item?.name}</Text>
        <Image source={{uri: item?.imageURL}} style={styles.image} />
        <Text style={styles.description}>
          {item?.description || 'No description provided'}
        </Text>

        <View>
          <Text style={styles.comicsTitle}>{'Comics'}</Text>
          <FlatList
            data={item?.comics}
            horizontal
            contentContainerStyle={styles.comicsContainer}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={<Text style={styles.emptyText}>None</Text>}
            renderItem={({item: comic}) => <ComicCard name={comic?.name} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HeroDetailScreen;
