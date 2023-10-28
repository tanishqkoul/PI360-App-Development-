import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const AcademicResultList = () => {
  const [resultList, setResultList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_academic_results_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setResultList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching academic result list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={resultList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={styles.resultTitle}>{item.title}</Text>
              <Text style={styles.resultScore}>Score: {item.score}</Text>
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
  resultItem: {
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultScore: {
    fontSize: 16,
  },
});

export default AcademicResultList;
