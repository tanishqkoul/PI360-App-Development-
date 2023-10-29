import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentEntrepreneurshipList = () => {
  const [entrepreneurshipList, setEntrepreneurshipList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint here
    const apiUrl =
      'https://pi360.net/site/api/api_student_entrepreneurship_list.php?institute_id=mietjammu';

    axios
      .get(apiUrl)
      .then((response) => {
        setEntrepreneurshipList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student entrepreneurship list:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {entrepreneurshipList.map((item, index) => (
            <Text key={index} style={styles.entrepreneurshipItem}>
              {item.title}
            </Text>
          ))}
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
  entrepreneurshipItem: {
    fontSize: 16,
  },
});

export default StudentEntrepreneurshipList;
