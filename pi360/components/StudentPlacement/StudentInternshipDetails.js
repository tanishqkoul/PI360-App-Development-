import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentInternshipDetails = () => {
  const [internshipDetails, setInternshipDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_INTERNSHIP_ID' with the specific internship ID you want to fetch
    const internshipId = 'YOUR_INTERNSHIP_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_student_internship_details.php?institute_id=mietjammu&rs=${internshipId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setInternshipDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student internship details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.internshipTitle}>{internshipDetails.title}</Text>
          <Text style={styles.internshipDescription}>{internshipDetails.description}</Text>
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
  internshipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  internshipDescription: {
    fontSize: 16,
  },
});

export default StudentInternshipDetails;
