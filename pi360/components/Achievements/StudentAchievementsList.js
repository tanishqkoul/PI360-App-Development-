import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentAchievementsList = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here, including the required parameters
    const apiUrl =
      `https://pi360.net/site/api/api_student_achievements_list.php?institute_id=mietjammu`;

    axios
      .get(apiUrl)
      .then((response) => {
        setAchievements(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student achievements list:', error);
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
    <View style={styles.container}>
      <FlatList
        data={achievements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.achievementItem}>
            <Text style={styles.achievementTitle}>{item.title}</Text>
            <Text style={styles.achievementDescription}>{item.description}</Text>
            {/* Add more achievement details as needed */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  achievementItem: {
    marginBottom: 16,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  achievementDescription: {
    fontSize: 16,
  },
});

export default StudentAchievementsList;
