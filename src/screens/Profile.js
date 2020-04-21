import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import GlobalStyle from '../GlobalStyles';

export default function Profile({route, navigation}) {
  const {name, photo, title} = route.params;
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={GlobalStyle.scrollView}>
        <View style={GlobalStyle.body}>
          <View style={styles.header}>
            <Image
              style={styles.headerBackground}
              source={require('../assets/header.jpg')}
            />
            <View style={styles.headerDetails}>
              <Image source={{uri: photo}} style={GlobalStyle.userImage} />
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userTitle}>{title}</Text>

              <Button
                style={styles.customBtn}
                color={Colors.black}
                title="Edit Profile"
                onPress={() => navigation.navigate('Settings', route.params)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
