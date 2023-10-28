import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentConferenceDetails = () => {
  const [conferenceDetails, setConferenceDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      'https://pi360.net/site/api/api_staff_development_conference_details.php?institute_id=mietjammu&rs=YOUR_CONFERENCE_ID';

    axios
      .get(apiUrl)
      .then((response) => {
        setConferenceDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff development conference details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.conferenceTitle}>{conferenceDetails.title}</Text>
          <Text style={styles.conferenceDate}>Date: {conferenceDetails.date}</Text>
          <Text style={styles.conferenceDescription}>{conferenceDetails.description}</Text>
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
  conferenceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conferenceDate: {
    fontSize: 16,
  },
  conferenceDescription: {
    fontSize: 14,
  },
});

export default StaffDevelopmentConferenceDetails;
