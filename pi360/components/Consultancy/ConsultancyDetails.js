import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ConsultancyDetails = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_consultancy_details.php?institute_id=mietjammu&rs=YOUR_CONSULTANCY_SERVICE_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setServiceDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching consultancy service details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.serviceName}>{serviceDetails.name}</Text>
          <Text style={styles.serviceDescription}>{serviceDetails.description}</Text>
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
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 16,
  },
});

export default ConsultancyDetails;
