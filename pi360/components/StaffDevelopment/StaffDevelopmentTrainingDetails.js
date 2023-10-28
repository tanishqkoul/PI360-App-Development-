import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentTrainingDetails = () => {
  const [trainingDetails, setTrainingDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_training_details.php?institute_id=mietjammu&rs=YOUR_TRAINING_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setTrainingDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development training details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.trainingTitle}>{trainingDetails.title}</Text>
          <Text style={styles.trainingDate}>Date: {trainingDetails.date}</Text>
          <Text style={styles.trainingDescription}>{trainingDetails.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  trainingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  trainingDate: {
    fontSize: 16,
  },
  trainingDescription: {
    fontSize: 14,
  },
});

export default StaffDevelopmentTrainingDetails;
