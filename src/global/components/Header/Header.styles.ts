import {StyleSheet} from 'react-native';

import {theme} from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.pallete.primary,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
