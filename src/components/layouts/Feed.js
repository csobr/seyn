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
const users = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Floyd Warren',
    title: 'Going to IKEA on Friday',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Calvin Flores',
    title: 'Going to IKEA on Friday',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557m1e29d72',
    name: 'Lily Jones',
    title: 'Going to IKEA on Friday',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
];
function Item({id, name, image, title, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[styles.item, {backgroundColor: selected ? '#6e3b6e' : '#fff'}]}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.imageList} source={image} />
    </TouchableOpacity>
  );
}
const Feed = () => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Pick up</Text>
          <Text style={styles.secondTitle}>Nearby area</Text>
          <Image style={styles.profile} />
        </View>
        <View style={{marginTop: 25}}>
          <Text style={styles.itemTitle}>Today</Text>
          <FlatList
            data={users}
            renderItem={({item}) => (
              <Item
                id={item.id}
                name={item.name}
                title={item.title}
                image={{source: item.avatar_url && {uri: item.avatar_url}}}
                subtitle={item.subtitle}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
              />
            )}
            keyExtractor={item => item.id}
            extraData={selected}
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
  engine: {
    position: 'absolute',
    right: 0,
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
  imageList: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'pink',
    position: 'absolute',
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    alignSelf: 'center',
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
