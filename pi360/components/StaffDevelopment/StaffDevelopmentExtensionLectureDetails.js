import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentExtensionLectureDetails = () => {
  const [lectureDetails, setLectureDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_extension_lectures_details.php?institute_id=mietjammu&rs=YOUR_LECTURE_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setLectureDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching extension lecture details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.lectureTitle}>{lectureDetails.title}</Text>
          <Text style={styles.lectureDate}>Date: {lectureDetails.date}</Text>
          <Text style={styles.lectureDescription}>{lectureDetails.description}</Text>
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
  lectureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lectureDate: {
    fontSize: 16,
  },
  lectureDescription: {
    fontSize: 14,
  },
});

export default StaffDevelopmentExtensionLectureDetails;
