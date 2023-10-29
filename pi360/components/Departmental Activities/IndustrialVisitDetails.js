import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const IndustrialVisitDetails = () => {
  const [visitDetails, setVisitDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_VISIT_ID' with the specific visit ID you want to fetch
    const visitId = 'YOUR_VISIT_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl =
      `https://pi360.net/site/api/api_industrial_visits_details.php?institute_id=mietjammu&rs=${visitId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setVisitDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching industrial visit details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.visitTitle}>{visitDetails.title}</Text>
          <Text style={styles.visitDate}>Date: {visitDetails.date}</Text>
          <Text style={styles.visitDescription}>{visitDetails.description}</Text>
          {/* Add more details as needed */}
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
  visitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  visitDate: {
    fontSize: 16,
  },
  visitDescription: {
    fontSize: 14,
  },
});

export default IndustrialVisitDetails;
