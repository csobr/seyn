import {StyleSheet} from 'react-native';
import Colors from '../src/constants/Colors';

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    fontFamily: 'HelveticaNeue',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.white,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
});
