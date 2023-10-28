import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const AcademicResultDetails = () => {
  const [resultDetails, setResultDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_academic_results_details.php?institute_id=mietjammu&rs=YOUR_ACADEMIC_RESULT_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setResultDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching academic result details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.resultTitle}>{resultDetails.title}</Text>
          <Text style={styles.resultScore}>Score: {resultDetails.score}</Text>
          <Text style={styles.resultDescription}>{resultDetails.description}</Text>
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
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultScore: {
    fontSize: 16,
  },
  resultDescription: {
    fontSize: 14,
  },
});

export default AcademicResultDetails;
