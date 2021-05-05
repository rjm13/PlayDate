import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import UpcomingDates from '../components/UpcomingDates';

const HomeScreen = () => {

  const handleSearch = () => {

  }

  return (

    <View style={styles.container}>

      <View style={styles.inputfield}>
        <TextInput 
          placeholder='Search'
          placeholderTextColor='#65737B'
          style={styles.textInputTitle}
          maxLength={30}
          onChangeText={handleSearch}
        />
      </View>

      <View style={{margin: 20}}>
        <Text style={styles.title}>
          Upcoming PlayDates
        </Text>
        <UpcomingDates />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffa5'
  },
  textInputTitle: {
    color: '#000',
    fontWeight: 'normal',
  },    
  inputfield: {
    width: '90%',
    height: 45,
    backgroundColor: '#E8E9EA',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 100,
},
  title: {
    color: '#363636',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
