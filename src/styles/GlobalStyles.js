import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.background,
    fontFamily: 'HelveticaNeue',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.background,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
});
