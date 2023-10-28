import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const IntellectualPropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_intellectual_property_details.php?institute_id=mietjammu&rs=YOUR_INTELLECTUAL_PROPERTY_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setPropertyDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching intellectual property details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.propertyName}>{propertyDetails.name}</Text>
          <Text style={styles.propertyType}>Type: {propertyDetails.type}</Text>
          <Text style={styles.propertyDescription}>{propertyDetails.description}</Text>
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
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  propertyType: {
    fontSize: 14,
  },
  propertyDescription: {
    fontSize: 16,
  },
});

export default IntellectualPropertyDetails;
