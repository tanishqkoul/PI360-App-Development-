import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentSeminarDetails = () => {
  const [seminarDetails, setSeminarDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_seminars_details.php?institute_id=mietjammu&rs=YOUR_SEMINAR_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setSeminarDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development seminar details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.seminarTitle}>{seminarDetails.title}</Text>
          <Text style={styles.seminarDate}>Date: {seminarDetails.date}</Text>
          <Text style={styles.seminarDescription}>{seminarDetails.description}</Text>
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
  seminarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seminarDate: {
    fontSize: 16,
  },
  seminarDescription: {
    fontSize: 14,
  },
});

export default StaffDevelopmentSeminarDetails;
