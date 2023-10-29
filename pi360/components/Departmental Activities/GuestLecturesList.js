import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const DepartmentalGuestLecturesList = () => {
  const [lecturesList, setLecturesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_dept_guest_lectures_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setLecturesList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching departmental guest lectures list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={lecturesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.lectureItem}>
              <Text style={styles.lectureTitle}>{item.title}</Text>
              <Text style={styles.lectureDate}>Date: {item.date}</Text>
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
  lectureItem: {
    marginBottom: 16,
  },
  lectureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lectureDate: {
    fontSize: 16,
  },
});

export default DepartmentalGuestLecturesList;
