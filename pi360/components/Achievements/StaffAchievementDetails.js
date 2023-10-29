import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StaffAchievementDetails = () => {
  const [achievementDetails, setAchievementDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_ACHIEVEMENT_ID' with the specific achievement ID you want to fetch
    const achievementId = 'YOUR_ACHIEVEMENT_ID';

    // Define your API endpoint here, including the required parameters
    const apiUrl = `https://pi360.net/site/api/api_staff_achievements_details.php?institute_id=mietjammu&rs=${achievementId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setAchievementDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching staff achievement details:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.achievementTitle}>{achievementDetails.title}</Text>
          <Text style={styles.achievementDescription}>{achievementDetails.description}</Text>
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
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  achievementDescription: {
    fontSize: 16,
  },
});

export default StaffAchievementDetails;
