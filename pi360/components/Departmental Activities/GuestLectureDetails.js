import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const DepartmentalGuestLectureDetails = () => {
  const [lectureDetails, setLectureDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_LECTURE_ID' with the specific lecture ID you want to fetch
    const lectureId = 'YOUR_LECTURE_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_dept_guest_lectures_details.php?institute_id=mietjammu&rs=${lectureId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setLectureDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching departmental guest lecture details:', error);
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
          {/* Add more details as needed */}
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

export default DepartmentalGuestLectureDetails;
