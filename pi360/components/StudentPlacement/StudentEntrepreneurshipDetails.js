import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentEntrepreneurshipDetails = () => {
  const [entrepreneurshipDetails, setEntrepreneurshipDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_ENTREPRENEURSHIP_ID' with the specific entrepreneurship ID you want to fetch
    const entrepreneurshipId = 'YOUR_ENTREPRENEURSHIP_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_student_entrepreneurship_details.php?institute_id=mietjammu&rs=${entrepreneurshipId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setEntrepreneurshipDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student entrepreneurship details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.entrepreneurshipTitle}>{entrepreneurshipDetails.title}</Text>
          <Text style={styles.entrepreneurshipDescription}>{entrepreneurshipDetails.description}</Text>
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
  entrepreneurshipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  entrepreneurshipDescription: {
    fontSize: 16,
  },
});

export default StudentEntrepreneurshipDetails;
