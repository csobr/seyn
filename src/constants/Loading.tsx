import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" color={Colors.primary} />
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
