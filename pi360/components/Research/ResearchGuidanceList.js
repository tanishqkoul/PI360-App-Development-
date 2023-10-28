import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const ResearchGuidanceList = () => {
  const [guidanceList, setGuidanceList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_research_guide_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setGuidanceList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching research guidance list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={guidanceList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.guidanceItem}>
              <Text style={styles.guidanceTitle}>{item.title}</Text>
              <Text style={styles.guidanceAuthor}>{item.author}</Text>
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
  guidanceItem: {
    marginBottom: 16,
  },
  guidanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  guidanceAuthor: {
    fontSize: 14,
  },
});

export default ResearchGuidanceList;
