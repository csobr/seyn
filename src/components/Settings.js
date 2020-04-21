import React from 'react';
import GlobalStyle from '../GlobalStyles';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const Settings = ({route, navigation}) => {
  const {photo} = route.params;
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView style={GlobalStyle.scrollView}>
        <View style={GlobalStyle.body}>
          <Image source={{uri: photo}} style={GlobalStyle.userImage} />
          <Text>Username</Text>
          <Text>Email</Text>
          <Text>Password</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Settings;
