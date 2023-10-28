import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentWorkshopsList = () => {
  const [workshopsList, setWorkshopsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_workshops_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setWorkshopsList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development workshops list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={workshopsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.workshopItem}>
              <Text style={styles.workshopTitle}>{item.title}</Text>
              <Text style={styles.workshopDate}>Date: {item.date}</Text>
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
  workshopItem: {
    marginBottom: 16,
  },
  workshopTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workshopDate: {
    fontSize: 16,
  },
});

export default StaffDevelopmentWorkshopsList;
