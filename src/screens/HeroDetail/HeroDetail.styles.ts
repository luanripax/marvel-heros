import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../global/theme/theme';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.pallete.background},
  content: {
    paddingHorizontal: 16,
  },
  contentContainer: {gap: 16, paddingVertical: 16},
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
  image: {width: '100%', height: deviceWidth - 32, borderRadius: 5},
  description: {fontSize: 16, color: 'gray'},
  comicsTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    marginBottom: 8,
  },
  comicsContainer: {gap: 12},
  emptyText: {color: 'gray'},
});

export default styles;
