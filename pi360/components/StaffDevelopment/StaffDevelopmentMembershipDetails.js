import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentMembershipDetails = () => {
  const [membershipDetails, setMembershipDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_MEMBERSHIP_ID' with the specific membership ID you want to fetch
    const membershipId = 'YOUR_MEMBERSHIP_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_staff_memberships_details.php?institute_id=mietjammu&rs=${membershipId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMembershipDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff membership details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.membershipTitle}>{membershipDetails.title}</Text>
          <Text style={styles.membershipDescription}>{membershipDetails.description}</Text>
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
  membershipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  membershipDescription: {
    fontSize: 16,
  },
});

export default StaffDevelopmentMembershipDetails;
