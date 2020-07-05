import React from 'react';
import {Text, StyleSheet} from 'react-native';

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
  error: {
    color: 'red',
    fontSize: 11,
  },
});
export default ErrorMessage;
