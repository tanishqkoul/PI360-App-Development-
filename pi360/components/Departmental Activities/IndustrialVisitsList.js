import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const IndustrialVisitsList = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl = 'https://pi360.net/site/api/api_industrial_visits_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setVisits(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching industrial visits:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={visits}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.visitItem}>
              <Text style={styles.visitTitle}>{item.title}</Text>
              <Text style={styles.visitDate}>Date: {item.date}</Text>
              {/* Add more details as needed */}
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
  visitItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  visitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  visitDate: {
    fontSize: 16,
  },
});

export default IndustrialVisitsList;
