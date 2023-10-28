import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ResearchProjectDetails = () => {
  const [projectDetails, setProjectDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_project_details.php?institute_id=mietjammu&rs=YOUR_RESEARCH_PROJECT_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setProjectDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching research project details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.projectName}>{projectDetails.name}</Text>
          <Text style={styles.projectDescription}>{projectDetails.description}</Text>
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
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
  },
});

export default ResearchProjectDetails;
