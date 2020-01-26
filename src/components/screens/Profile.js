import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';

export default function Profile({route, navigation}) {
  const {name, photo, title} = route.params;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Image source={{uri: photo}} style={styles.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userTitle}>{title}</Text>
          </View>
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
    height: 150,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
  userName: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '700',
  },
  userTitle: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '500',
  },
});
