import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const users = [
  {
    name: 'Amina Aden',
    email: 'aden@gmail.com',
    title: 'Heading to In and out',
    photo: 'https://images.unsplash.com/photo-1573748348952-91cc89c83979',
    transport: 'car',
  },
  {
    name: 'Jay Myles',
    email: 'myles@gmail.com',
    title: 'Im later going to Whole foods',
    photo: 'https://images.unsplash.com/photo-1518882570151-157128e78fa1?',
    transport: 'bike',
  },
  {
    name: 'Amber Williams',
    email: 'amber@gmail.com',
    title: 'Heading to Target',
    photo: 'https://source.unsplash.com/user/auttgood/',
    transport: 'car',
  },
  {
    name: 'Ida Niskanen',
    email: 'iida.niskanen@gmail.com',
    title: 'Going out to Ikea',
    photo: 'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380',
    transport: 'bus',
  },
  {
    name: 'Ali Mohammed',
    email: 'mohammed@gmail.com',
    title: 'Going to the beach',
    photo: 'https://images.unsplash.com/photo-1578220390767-b706eac7c36b',
    transport: 'walk',
  },
  {
    name: 'Sang Wang',
    email: 'wang@gmail.com',
    title: 'Heading to In and out',
    photo: 'https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?',
    transport: 'car',
  },
  {
    name: 'Annie Lim',
    email: 'lim@gmail.com',
    title: 'Off to San fran',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    transport: 'car',
  },
];

function Item({item}) {
  return (
    <View style={styles.item}>
      <Image source={{uri: item.photo}} style={styles.userImage} />
      <View style={{paddingLeft: 70}}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userTitle}>{item.title}</Text>
      </View>
      <TouchableOpacity
        style={{
          right: 10,
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <Icon
          name="message-outline"
          size={25}
          color="black"
          style={{paddingBottom: 20}}
        />
        <Icon name={item.transport} size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Pick up</Text>
          <Text style={styles.secondTitle}>Nearby area</Text>
        </View>
        <View style={{marginTop: 25}}>
          <Text style={styles.itemTitle}>Today</Text>
          <FlatList
            data={users}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
  },
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
  itemTitle: {
    fontSize: 14,
    paddingLeft: 20,
    fontWeight: '700',
    color: Colors.black,
  },
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
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
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'black',
    right: 15,
    position: 'absolute',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'pink',
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

export default Feed;
