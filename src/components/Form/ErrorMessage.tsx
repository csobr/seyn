import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

interface Props extends HTMLElement {
  error: string;
  visible: boolean;
}
const ErrorMessage: React.FC<Props> = ({error, visible}) => {
  if (!error || visible) {
    return null;
  }
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  container: {},
  error: {
    width: '70%',
    textAlign: 'center',
    color: Colors.red,
    fontSize: 12,
    paddingBottom: 10,
  },
});
export default ErrorMessage;
