import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Colors from '../../styles/Colors';
import GlobalStyle from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({route, navigation}) => {
  const {name, photo, title, transport} = route.params;

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={GlobalStyle.scrollView}>
        <View style={GlobalStyle.body}>
          <View style={styles.header}>
            <Image
              style={styles.headerBackground}
              source={require('../../assets/header.jpg')}
            />
            <View style={styles.headerDetails}>
              <Image source={{uri: photo}} style={GlobalStyle.userImage} />
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userTitle}>{title}</Text>
              <Icon name={transport} size={20} />
              <View style={styles.customBtn}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Settings', route.params)}
                  styles={styles.customBtn}>
                  <Text>Edit profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;

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
    fontSize: 11,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: Colors.black,
    backgroundColor: Colors.white,
    fontWeight: '300',
    height: 25,
    width: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.ligther,
    borderRadius: 6,
  },
});
