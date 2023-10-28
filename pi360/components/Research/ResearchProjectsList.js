import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ResearchProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_project_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching research projects list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.projectItem}>
              <Text style={styles.projectTitle}>{item.title}</Text>
              <Text style={styles.projectDescription}>{item.description}</Text>
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
  projectItem: {
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 14,
  },
});

export default ResearchProjectsList;
