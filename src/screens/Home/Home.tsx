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
import {NavigationStackProp} from 'react-navigation-stack';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../styles/Colors';
import GlobalStyle from '../../styles/GlobalStyles';
import Icon from '../../constants/Icons';
import UsersApi from '../../components/Users/UsersHook';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {Type} from '../../styles/Font';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/auth';
import {setSuccess} from '../../store/auth/action';

export interface NavProps {
  navigate: any;
  navigation: NavigationStackProp<any, any>;
}
const Home: React.FC<NavProps> = (props) => {
  const [{data, isLoading}] = UsersApi();

  const {navigation} = props;
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <View style={{backgroundColor: Colors.home}}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Nearby</Text>
          <>
            {data.map((uid) => (
              <TouchableOpacity
                key={uid.id}
                onPress={() => navigation.navigate('Profile', uid)}
                style={styles.profilePosition}>
                <Image source={{uri: uid.photo}} style={styles.profileImage} />
              </TouchableOpacity>
            ))}
          </>
        </View>
        <View style={styles.adressTitle}>
          <Icon name="map" size={17} />
          <Text style={styles.adress}>South green st</Text>
        </View>

        <>
          {/* {isError && <Text>Opps.. something went wrong</Text>} */}
          {isLoading ? (
            <Text>loading..</Text>
          ) : (
            <FlatList
              contentContainerStyle={styles.listPadding}
              data={data}
              renderItem={({item}) => (
                <Item
                  time={item.time}
                  name={item.name}
                  title={item.title}
                  photo={item.photo}
                  transport={item.transport}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </>
      </View>
    </SafeAreaView>
  );
};
export const Item = ({time, name, title, photo, transport}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <View style={styles.listItems}>
        <TouchableOpacity
          style={styles.profileImageWrapper}
          onPress={() => {
            navigation.navigate('Profile', name);
          }}>
          <Image style={styles.profileImage} source={{uri: photo}} />
        </TouchableOpacity>
        <View style={styles.activeIndicator} />
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userTitle}>{title}</Text>
        <Text style={styles.userTime}>{time} ago</Text>
      </View>
      {/*      open messagescreen with uid */}
      <TouchableOpacity
        style={styles.listIcons}
        onPress={() => {
          navigation.navigate('Message');
        }}>
        <Icon name="chat" size={26} />
      </TouchableOpacity>
      <View style={styles.listIcon}>
        <Icon name={transport} size={26} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    paddingHorizontal: 19,
    height: 75,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.dark,
    fontFamily: Type.title,
  },
  adressTitle: {
    paddingHorizontal: 16,
    paddingBottom: 5,
    flexDirection: 'row',
  },
  adress: {
    fontSize: 14,
    color: Colors.primary,
    textTransform: 'uppercase',
    paddingLeft: 3,
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
  },
  profilePosition: {
    position: 'absolute',
    right: 17,
  },

  profileImageWrapper: {
    position: 'absolute',
    margin: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.ligther,
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
  listPadding: {
    paddingBottom: 250,
  },

  listItems: {
    paddingLeft: 70,
    justifyContent: 'center',
  },
  listIcons: {
    right: 10,
    top: 4,
    position: 'absolute',
  },
  listIconPadding: {
    paddingBottom: 20,
  },
  listIcon: {
    right: 10,
    bottom: 2,
    position: 'absolute',
  },
  activeIndicator: {
    backgroundColor: '#60cd52',
    position: 'absolute',
    left: 45,
    top: 40,
    height: 12,
    width: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
