import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LogoutScreen = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'https://pi360.net/site/api/api_logout_user.php?institute_id=mietjammu'
      );

      if (response.data.success) {
        // Logout was successful, you can handle it as needed
        Alert.alert('Logout Successful', 'You have been logged out.');
      } else {
        Alert.alert('Logout Failed', 'Unable to log out. Please try again.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Logout Failed', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutScreen;
