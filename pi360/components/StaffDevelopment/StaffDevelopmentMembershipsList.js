import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentMembershipsList = () => {
  const [membershipsList, setMembershipsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl =
      'https://pi360.net/site/api/api_staff_memberships_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setMembershipsList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff memberships list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={membershipsList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.membershipItem}>
              <Text style={styles.membershipTitle}>{item.title}</Text>
              <Text style={styles.membershipDescription}>{item.description}</Text>
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
  membershipItem: {
    marginBottom: 16,
  },
  membershipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  membershipDescription: {
    fontSize: 16,
  },
});

export default StaffDevelopmentMembershipsList;
