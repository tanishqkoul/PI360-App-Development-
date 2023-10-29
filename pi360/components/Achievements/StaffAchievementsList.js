import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffAchievementsList = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint for fetching staff achievements
    const apiUrl = 'https://pi360.net/site/api/api_staff_achievements_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setAchievements(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff achievements list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={achievements}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.achievementItem}>
              <Text style={styles.achievementTitle}>{item.title}</Text>
              <Text style={styles.achievementDescription}>{item.description}</Text>
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
  achievementItem: {
    marginVertical: 10,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  achievementDescription: {
    fontSize: 16,
  },
});

export default StaffAchievementsList;
