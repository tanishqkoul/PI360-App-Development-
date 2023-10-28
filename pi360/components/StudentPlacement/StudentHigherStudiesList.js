import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentHigherStudiesList = () => {
  const [studiesList, setStudiesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_student_higher_studies_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setStudiesList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student higher studies list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={studiesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.studyItem}>
              <Text style={styles.studyTitle}>{item.title}</Text>
              <Text style={styles.studyUniversity}>University: {item.university}</Text>
              {/* Add more details as needed */}
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
  studyItem: {
    marginBottom: 16,
  },
  studyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studyUniversity: {
    fontSize: 16,
  },
  // Add more styles for other details
});

export default StudentHigherStudiesList;
