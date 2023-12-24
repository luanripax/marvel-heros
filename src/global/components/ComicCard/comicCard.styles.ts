import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const styles = StyleSheet.create({
  comicBookContainer: {
    width: 150,
    height: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderTopWidth: 2,
    borderColor: '#cdcdcd3a',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  comicCover: {
    flex: 1,
    backgroundColor: theme.pallete.background,
    padding: 8,
    alignItems: 'center',
  },
  comicSpine: {
    width: 5,
    backgroundColor: '#171717',
  },
  comicPages: {
    flex: 2,
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderColor: '#ccc',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;
