import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';

export default function Profile() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
    fontFamily: 'HelveticaNeue',
  },
  container: {
    flex: 1,
  },
  header: {
    height: 60,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    position: 'absolute',
    margin: 10,
  },
  userName: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '700',
  },
});
