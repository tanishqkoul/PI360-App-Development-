import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentSeminarsList = () => {
  const [seminarsList, setSeminarsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_seminars_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setSeminarsList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development seminars list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={seminarsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.seminarItem}>
              <Text style={styles.seminarTitle}>{item.title}</Text>
              <Text style={styles.seminarDate}>Date: {item.date}</Text>
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
  seminarItem: {
    marginBottom: 16,
  },
  seminarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seminarDate: {
    fontSize: 16,
  },
});

export default StaffDevelopmentSeminarsList;
