import React, {useState, useEffect} from 'react';
import GlobalStyle from '../../styles/GlobalStyles';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';

const Settings = ({route}) => {
  const {name, title, photo} = route.params;
  const [userName, setName] = useState(name);

  const handleChange = newName => {
    setName(newName);
  useEffect(() => {}, [userName]);

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView style={GlobalStyle.scrollView}>
        <View style={GlobalStyle.body}>
          <Image source={{uri: photo}} style={GlobalStyle.userImage} />
          <Text> Name:</Text>
          <TextInput
            textContentType="name"
            onChangeText={handleChange}
            value={userName}
          />

          <Text>Username:</Text>
          <TextInput value={'blank'} />
          <Text>Status:</Text>
          <TextInput value={title} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default Settings;
