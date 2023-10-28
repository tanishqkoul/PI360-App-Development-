import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ResearchPublicationsList = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_research_publications_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setPublications(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching research publications:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={publications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.publicationItem}>
              <Text style={styles.publicationTitle}>{item.title}</Text>
              <Text style={styles.publicationAuthor}>Author: {item.author}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  publicationItem: {
    marginBottom: 16,
  },
  publicationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  publicationAuthor: {
    fontSize: 14,
  },
});

export default ResearchPublicationsList;
