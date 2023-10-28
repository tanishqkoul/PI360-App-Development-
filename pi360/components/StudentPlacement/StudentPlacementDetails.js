import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentPlacementDetails = () => {
  const [placementDetails, setPlacementDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_PLACEMENT_ID' with the specific placement ID you want to fetch
    const placementId = 'YOUR_PLACEMENT_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_student_placement_details.php?institute_id=mietjammu&rs=${placementId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setPlacementDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student placement details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.placementTitle}>{placementDetails.title}</Text>
          <Text style={styles.placementCompany}>Company: {placementDetails.company}</Text>
          <Text style={styles.placementDate}>Date: {placementDetails.date}</Text>
          <Text style={styles.placementDescription}>{placementDetails.description}</Text>
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
  placementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placementCompany: {
    fontSize: 16,
  },
  placementDate: {
    fontSize: 16,
  },
  placementDescription: {
    fontSize: 14,
  },
});

export default StudentPlacementDetails;
