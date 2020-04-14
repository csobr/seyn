import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default function Profile({route, navigation}) {
  const {name, photo, title} = route.params;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Image
              style={styles.headerBackground}
              source={require('../../assets/header.jpg')}
            />
            <View style={styles.headerDetails}>
              <Image source={{uri: photo}} style={styles.userImage} />
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userTitle}>{title}</Text>

              <Button
                style={styles.customBtn}
                color={Colors.black}
                title="Edit Profile"
                onPress={() => ''}
              />
            </View>
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
    height: 200,
    alignItems: 'center',
  },
  headerBackground: {
    height: 100,
  },
  headerDetails: {
    position: 'absolute',
    marginTop: 50,
    height: 170,
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
    fontWeight: '300',
  },
  customBtn: {
    alignSelf: 'flex-end',
    fontSize: 13,
    color: Colors.black,
    fontWeight: '300',
  },
});
