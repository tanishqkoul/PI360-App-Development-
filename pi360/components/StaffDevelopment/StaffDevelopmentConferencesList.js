import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentConferencesList = () => {
  const [conferencesList, setConferencesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_conference_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setConferencesList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development conferences list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={conferencesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.conferenceItem}>
              <Text style={styles.conferenceTitle}>{item.title}</Text>
              <Text style={styles.conferenceDate}>Date: {item.date}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  conferenceItem: {
    marginBottom: 16,
  },
  conferenceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conferenceDate: {
    fontSize: 16,
  },
});

export default StaffDevelopmentConferencesList;
