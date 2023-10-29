import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ValueAddedCourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_COURSE_ID' with the specific course ID you want to fetch
    const courseId = 'YOUR_COURSE_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl =
      `https://pi360.net/site/api/api_dept_value_added_courses_details.php?institute_id=mietjammu&rs=${courseId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCourseDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching value-added course details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.courseTitle}>{courseDetails.title}</Text>
          <Text style={styles.courseDescription}>{courseDetails.description}</Text>
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
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 16,
  },
});

export default ValueAddedCourseDetails;
