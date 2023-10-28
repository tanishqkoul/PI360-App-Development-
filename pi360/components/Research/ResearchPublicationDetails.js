import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ResearchPublicationDetails = () => {
  const [publicationDetails, setPublicationDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_research_publications_details.php?institute_id=mietjammu&rs=YOUR_RESEARCH_PUBLICATION_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setPublicationDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching research publication details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.publicationTitle}>{publicationDetails.title}</Text>
          <Text style={styles.publicationAuthor}>Author: {publicationDetails.author}</Text>
          <Text style={styles.publicationDescription}>{publicationDetails.description}</Text>
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
  publicationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  publicationAuthor: {
    fontSize: 14,
  },
  publicationDescription: {
    fontSize: 16,
  },
});

export default ResearchPublicationDetails;
