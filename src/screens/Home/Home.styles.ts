import {StyleSheet} from 'react-native';
import {theme} from '../../global/theme/theme';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.pallete.background},
  separator: {
    backgroundColor: '#cdcdcd3a',
    width: '90%',
    alignSelf: 'center',
    height: 1,
    marginVertical: 20,
  },
  footerContainer: {
    marginVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 16,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  errorMessage: {
    color: 'white',
    fontSize: 16,
  },
  errorButton: {
    backgroundColor: theme.pallete.secondary,
    padding: 16,
    borderRadius: 50,
  },
  errorButtonLabel: {color: 'white', fontWeight: 'bold'},
});

export default styles;
