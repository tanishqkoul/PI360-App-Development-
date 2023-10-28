import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentWorkshopDetails = () => {
  const [workshopDetails, setWorkshopDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_workshops_details.php?institute_id=mietjammu&rs=YOUR_WORKSHOP_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setWorkshopDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development workshop details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.workshopTitle}>{workshopDetails.title}</Text>
          <Text style={styles.workshopDate}>Date: {workshopDetails.date}</Text>
          <Text style={styles.workshopDescription}>{workshopDetails.description}</Text>
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
  workshopTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workshopDate: {
    fontSize: 16,
  },
  workshopDescription: {
    fontSize: 14,
  },
});

export default StaffDevelopmentWorkshopDetails;
