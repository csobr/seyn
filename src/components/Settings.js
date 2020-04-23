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

const Settings = ({route}) => {
  const {name, title, photo} = route.params;
  const [userName, setName] = useState(name);

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView style={GlobalStyle.scrollView}>
        <View style={GlobalStyle.body}>
          <Image source={{uri: photo}} style={GlobalStyle.userImage} />
          <Text> Name: </Text>
          <TextInput
            textContentType="name"
            defaultValue={userName}
            onChangeText={text => setName(text)}
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
