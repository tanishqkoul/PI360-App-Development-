import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffDevelopmentEContentList = () => {
  const [eContentList, setEContentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint for fetching e-Content list
    const apiUrl =
      'https://pi360.net/site/api/api_staff_e_content_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setEContentList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching e-Content list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={eContentList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.eContentItem}>
              <Text style={styles.eContentTitle}>{item.title}</Text>
              <Text style={styles.eContentDescription}>{item.description}</Text>
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
  eContentItem: {
    marginBottom: 16,
  },
  eContentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eContentDescription: {
    fontSize: 16,
  },
});

export default StaffDevelopmentEContentList;
