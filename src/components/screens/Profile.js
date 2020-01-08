import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
  },
});

export default Profile;
