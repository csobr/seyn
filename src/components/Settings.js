import React from 'react';
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

const Settings = ({route, navigation}) => {
  const {name, email, photo} = route.params;
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView style={GlobalStyle.scrollView}>
        <View style={GlobalStyle.body}>
          <Image source={{uri: photo}} style={GlobalStyle.userImage} />
          <Text> Name: </Text>
          <TextInput textContentType="name" value={name} />
          <Text>Username:</Text>
          <TextInput textContextType="username" value={'blank'} />
          <Text>Email:</Text>
          <TextInput textContentType="emailAddress" value={email} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Settings;
