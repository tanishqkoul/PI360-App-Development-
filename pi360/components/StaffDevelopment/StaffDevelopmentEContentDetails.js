import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentEContentDetails = () => {
  const [eContentDetails, setEContentDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_ECONTENT_ID' with the specific e-Content ID you want to fetch
    const eContentId = 'YOUR_ECONTENT_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_staff_e_content_details.php?institute_id=mietjammu&rs=${eContentId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setEContentDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching e-Content details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.eContentTitle}>{eContentDetails.title}</Text>
          <Text style={styles.eContentDescription}>{eContentDetails.description}</Text>
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
  eContentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eContentDescription: {
    fontSize: 16,
  },
});

export default StaffDevelopmentEContentDetails;
