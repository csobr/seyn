import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import GlobalStyle from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserApi from '../../components/User/UsersHook';
import {CurrentUser} from '../../components/User/UserContext';

const Home = ({navigation: {navigate}}) => {
  const [{users}] = UserApi();
  const user = useContext(CurrentUser);

  return (
    <SafeAreaView styles={GlobalStyle.container}>
      <View style={GlobalStyle.body}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Pick up</Text>
          <Text style={styles.secondTitle}>Nearby</Text>
          {users.map(uid => {
            return (
              <TouchableOpacity
                key={uid.id}
                onPress={() => navigate('Profile', uid)}
                style={{
                  position: 'absolute',
                  right: 15,
                  backgroundColor: Colors.white,
                }}>
                <Image source={{uri: uid.photo}} style={styles.profile} />
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.dateTitle}>Today</Text>

        <FlatList
          contentContainerStyle={{paddingBottom: 250}}
          data={users}
          renderItem={({item}) => (
            // Add uid
            <TouchableOpacity
              onPress={() => {
                navigate('Profile', item.id);
              }}>
              <Item
                id={item.id}
                time={item.time}
                name={item.name}
                title={item.title}
                image={item.photo}
                transport={item.transport}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export const Item = ({id, time, name, title, image, transport}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <View style={{paddingLeft: 70, justifyContent: 'center'}}>
        <Image source={{uri: image}} style={styles.userImage} />
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userTitle}>{title}</Text>
        <Text style={styles.userTime}>{time} ago</Text>
      </View>
      {/*      open messagescreen with uid */}
      <TouchableOpacity
        style={{
          right: 10,
          top: 4,
          position: 'absolute',
        }}
        onPress={() => {
          navigation.navigate('Message');
        }}>
        <Icon
          name="message-outline"
          size={25}
          color="black"
          style={{paddingBottom: 20}}
        />
      </TouchableOpacity>
      <Icon
        name={transport}
        size={25}
        color="black"
        style={{
          right: 10,
          bottom: 2,
          position: 'absolute',
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    paddingHorizontal: 24,
    height: 65,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.dark,
  },
  secondTitle: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.dark,
  },
  dateTitle: {
    fontSize: 14,
    paddingLeft: 20,
    paddingBottom: 8,
    fontWeight: '700',
    color: Colors.dark,
    marginTop: 15,
  },
  item: {
    justifyContent: 'center',
    fontSize: 12,
    height: 80,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    color: Colors.dark,
    backgroundColor: Colors.white,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: '#000',
    shadowOffset: {height: 1, width: 1},
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.primary,
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
    color: Colors.dark,
    fontWeight: '700',
  },
  userTitle: {
    fontSize: 12,
    color: Colors.dark,

    marginTop: 3,
  },
  userTime: {
    fontSize: 10,
    fontWeight: '200',
    color: Colors.dark,
    marginTop: 3,
  },
  message: {
    fontSize: 12,
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});
