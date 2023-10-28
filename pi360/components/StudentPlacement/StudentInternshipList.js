import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentInternshipList = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_student_internship_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setInternships(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student internships:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={internships}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.internshipItem}>
              <Text style={styles.internshipTitle}>{item.title}</Text>
              <Text style={styles.internshipDescription}>{item.description}</Text>
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
  internshipItem: {
    marginVertical: 8,
  },
  internshipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  internshipDescription: {
    fontSize: 16,
  },
});

export default StudentInternshipList;
