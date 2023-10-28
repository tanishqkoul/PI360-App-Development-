import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://pi360.net/site/api/api_login_user.php?institute_id=mietjammu',
        {
          username1: username,
          password1: password,
        }
      );

      if (response.data.success) {
        // Login was successful, you can navigate to another screen
        Alert.alert('Login Successful', 'You are now logged in.');
      } else {
        Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Login Failed', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default LoginScreen;
