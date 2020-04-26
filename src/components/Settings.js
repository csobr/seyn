import React, {useState, useEffect} from 'react';
import GlobalStyle from '../GlobalStyles';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Settings = ({route}) => {
  const {name, title, photo} = route.params;
  const [userName, setName] = useState(name);

  const handleChange = newName => {
    setName(newName);

    const setData = async () => {
      try {
        await AsyncStorage.setItem('name', JSON.stringify(userName));
      } catch (error) {
        console.log('Error saving data');
      }
    };
    setData();
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        setName(JSON.parse(value));
      }
    } catch (error) {
      console.log('Error fetching data');
    }
  };

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
          <TextInput textContextType="username" value={'blank'} />
          <Text>Status:</Text>
          <TextInput value={title} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Settings;
