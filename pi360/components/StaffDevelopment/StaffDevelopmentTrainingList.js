import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentTrainingList = () => {
  const [trainingList, setTrainingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_training_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setTrainingList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development training list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={trainingList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.trainingItem}>
              <Text style={styles.trainingTitle}>{item.title}</Text>
              <Text style={styles.trainingDate}>Date: {item.date}</Text>
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
  trainingItem: {
    marginBottom: 16,
  },
  trainingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  trainingDate: {
    fontSize: 16,
  },
});

export default StaffDevelopmentTrainingList;
