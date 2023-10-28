import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentPlacementList = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl = 'https://pi360.net/site/api/api_student_placement_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setPlacements(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student placements:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.placementTitle}>Student Placements</Text>
          <View>
            {placements.map((placement, index) => (
              <Text style={styles.placementItem} key={index}>
                {placement.name} - {placement.company}
              </Text>
            ))}
          </View>
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
  placementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placementItem: {
    fontSize: 16,
  },
});

export default StudentPlacementList;
