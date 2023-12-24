import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
    gap: 16,
  },
  image: {width: 100, height: 100, borderRadius: 5},
  infoContainer: {flex: 1, gap: 4},
  name: {fontSize: 20, color: 'white', fontWeight: '500'},
  comicsContainer: {flexDirection: 'row', gap: 8},
  comicsLabel: {fontSize: 16, color: 'gray'},
  comicsAmount: {fontSize: 16, color: 'white'},
});

export default styles;
