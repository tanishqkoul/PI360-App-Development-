import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const OtherDepartmentalActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      `https://pi360.net/site/api/api_dept_other_activities_list.php?institute_id=mietjammu`;

    axios
      .get(apiUrl)
      .then((response) => {
        setActivities(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching other departmental activities:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={activities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.activityItem}>
          <Text style={styles.activityTitle}>{item.title}</Text>
          {/* Add more details as needed */}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  activityItem: {
    marginBottom: 16,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OtherDepartmentalActivitiesList;
