import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  View,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHeroes} from '../../store/heroes/heroes.actions';
import {AppDispatch, RootState} from '../../store/store.index';
import {useNavigation} from '@react-navigation/native';
import Header from '../../global/components/Header/Header.component';
import {reset} from '../../store/heroes/heroes.slice';
import HeroCard from '../../global/components/HeroCard/heroCard.component';
import styles from './Home.styles';
import Loading from '../../global/components/Loading/Loading.component';
import {HomeScreenNavigationProp} from './Home.types';
import {HeroDTOProps} from '../../services/heroAPI.types';

const Separator = () => <View style={styles.separator} />;

const HomeScreen = () => {
  const [page, setPage] = useState(0);
  const [refreshing] = useState(false);
  const {heroList, totalResults, error} = useSelector(
    (state: RootState) => state.heroes,
  );
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  const hasNextPage = useMemo(() => {
    if (!totalResults) {
      return true;
    } else {
      return heroList?.length < totalResults;
    }
  }, [totalResults, heroList]);

  useEffect(() => {
    hasNextPage && dispatch(fetchHeroes(page));
  }, [page]);

  const handleRefresh = useCallback(() => {
    dispatch(reset());
    setPage(0);
    page === 0 && dispatch(fetchHeroes(0));
  }, [page]);

  const handleEndReached = () => {
    if (heroList?.length && hasNextPage) {
      setPage(prev => prev + 1);
    }
  };

  const handleDetails = (item: HeroDTOProps) => {
    navigate('HeroDetail', {item});
  };

  const renderItem = ({item}: {item: HeroDTOProps}) => (
    <HeroCard item={item} handleDetails={handleDetails} />
  );

  const handleTryAgain = () => {
    hasNextPage && dispatch(fetchHeroes(page));
  };

  const loadingFooter = useMemo(
    () => (hasNextPage ? <Loading /> : null),
    [hasNextPage],
  );

  return (
    <View style={styles.container}>
      <Header title={'Characters'} marvelLogo />

      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>
            An error occurred, please try again
          </Text>
          <TouchableOpacity style={styles.errorButton} onPress={handleTryAgain}>
            <Text style={styles.errorButtonLabel}>Try again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={heroList}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          ListFooterComponent={loadingFooter}
          onEndReachedThreshold={0.3}
          ItemSeparatorComponent={Separator}
          style={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;
