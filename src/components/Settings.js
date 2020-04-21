import React from 'react';
import GlobalStyle from '../GlobalStyles';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView style={GlobalStyle.scrollView}>
        <View style={GlobalStyle.body}>
          <Text>Edit</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Settings;
