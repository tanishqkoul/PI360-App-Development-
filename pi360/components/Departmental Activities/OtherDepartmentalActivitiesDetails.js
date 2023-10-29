import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const OtherDepartmentalActivitiesDetails = () => {
  const [activityDetails, setActivityDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_ACTIVITY_ID' with the specific activity ID you want to fetch
    const activityId = 'YOUR_ACTIVITY_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl =
      `https://pi360.net/site/api/api_dept_other_activities_details.php?institute_id=mietjammu&rs=${activityId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setActivityDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching other departmental activity details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.activityTitle}>{activityDetails.title}</Text>
          <Text style={styles.activityDescription}>{activityDetails.description}</Text>
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
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 16,
  },
});

export default OtherDepartmentalActivitiesDetails;
