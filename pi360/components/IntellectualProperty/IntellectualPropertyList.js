import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const IntellectualPropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl =
      'https://pi360.net/site/api/api_intellectual_property_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching intellectual property list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={properties}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.propertyItem}>
              <Text style={styles.propertyName}>{item.name}</Text>
              <Text style={styles.propertyType}>Type: {item.type}</Text>
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
  propertyItem: {
    marginBottom: 16,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  propertyType: {
    fontSize: 14,
  },
});

export default IntellectualPropertyList;
