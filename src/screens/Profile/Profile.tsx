import * as React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import {NavProps} from '../Home/Home';
import {RouteProp} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import GlobalStyle from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
type Params = {
  Profile: {name: string; title: string; transport: string; photo?: string};
};
type ProfileRouteProp = RouteProp<Params, 'Profile'>;

type Props = {
  route: ProfileRouteProp;
  navigation: NavProps;
};
const Profile = ({route, navigation}: Props) => {
  const {name, title, transport, photo} = route.params;
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <View style={GlobalStyle.body}>
        <View style={styles.header}>
          <View style={styles.headerDetails}>
            <Image source={{uri: photo}} style={GlobalStyle.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userTitle}>{title}</Text>
            <Icon name={transport} size={20} />
            <View style={styles.customBtn}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Settings', route.params)}
                style={styles.customBtn}>
                <Text>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  header: {
    height: 200,
    alignItems: 'center',
  },
  headerDetails: {
    position: 'absolute',
    marginTop: 50,
    height: 170,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 18,
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
    color: Colors.white,
    backgroundColor: Colors.secondary,
    fontWeight: '300',
    height: 25,
    width: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 6,
  },
});
