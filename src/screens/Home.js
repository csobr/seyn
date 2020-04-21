import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import GlobalStyle from '../GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import user from '../constants/User';

const Item = ({id, name, title, image, transport}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <View style={{paddingLeft: 70, justifyContent: 'center'}}>
          <Image source={{uri: image}} style={styles.userImage} />
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          right: 10,
          top: 4,
          position: 'absolute',
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

export default function Home({navigation}) {
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <View style={GlobalStyle.body}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Pick up</Text>
          <Text style={styles.secondTitle}>West LA</Text>
          {user.map(u => {
            return (
              <TouchableOpacity
                key={u.id}
                onPress={() => navigation.navigate('Profile', u)}
                style={{
                  position: 'absolute',
                  right: 15,
                  backgroundColor: Colors.white,
                }}>
                <Image source={{uri: u.photo}} style={styles.profile} />
              </TouchableOpacity>
            );
          })}
        </View>

        <Text
          style={styles.dateTitle}
          onPress={() => {
            navigation.navigate('Message');
          }}>
          Today
        </Text>
        <FlatList
          contentContainerStyle={{paddingBottom: 150}}
          data={user}
          renderItem={({item}) => (
            <Item
              name={item.name}
              title={item.title}
              image={item.photo}
              transport={item.transport}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    paddingHorizontal: 24,
    height: 65,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
  },
  secondTitle: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.black,
  },
  dateTitle: {
    fontSize: 14,
    paddingLeft: 20,
    paddingBottom: 8,
    fontWeight: '700',
    color: Colors.black,
    marginTop: 15,
  },
  item: {
    justifyContent: 'center',
    fontSize: 12,
    height: 80,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    color: Colors.black,
    backgroundColor: Colors.white,
    shadowOpacity: 0.09,
    shadowRadius: 4,
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
    color: Colors.black,
    fontWeight: '700',
  },
  userTitle: {
    fontSize: 12,
    color: Colors.black,
  },
  message: {
    fontSize: 12,
    color: Colors.black,
  },
  highlight: {
    fontWeight: '700',
  },
});
