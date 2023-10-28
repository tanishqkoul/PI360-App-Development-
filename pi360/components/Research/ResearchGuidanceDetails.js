import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ResearchGuidanceDetails = () => {
  const [guidanceDetails, setGuidanceDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_research_guide_details.php?institute_id=mietjammu&rs=YOUR_RESEARCH_GUIDANCE_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setGuidanceDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching research guidance details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.guidanceTitle}>{guidanceDetails.title}</Text>
          <Text style={styles.guidanceAuthor}>{guidanceDetails.author}</Text>
          <Text style={styles.guidanceDescription}>{guidanceDetails.description}</Text>
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
  guidanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  guidanceAuthor: {
    fontSize: 16,
  },
  guidanceDescription: {
    fontSize: 14,
  },
});

export default ResearchGuidanceDetails;
