import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentHigherStudiesDetails = () => {
  const [studiesDetails, setStudiesDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_STUDIES_ID' with the specific higher studies ID you want to fetch
    const studiesId = 'YOUR_STUDIES_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_student_higher_studies_details.php?institute_id=mietjammu&rs=${studiesId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setStudiesDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student higher studies details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.studiesTitle}>{studiesDetails.title}</Text>
          <Text style={styles.studiesUniversity}>University: {studiesDetails.university}</Text>
          <Text style={styles.studiesDescription}>{studiesDetails.description}</Text>
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
  studiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studiesUniversity: {
    fontSize: 16,
  },
  studiesDescription: {
    fontSize: 14,
  },
  // Add more styles for other details
});

export default StudentHigherStudiesDetails;
