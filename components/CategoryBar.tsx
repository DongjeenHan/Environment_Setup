import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['All','Programming', 'Podcasts', 'Silicon Valley','AI', 'Machine Learning','Web Development','Data Science','React Native'];

export default function CategoryBar() {
  const [selected, setSelected] = useState('All');

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelected(category)}
          style={[
            styles.button,
            selected === category && styles.selectedButton
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              selected === category && styles.selectedText
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#2C2C2C',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  selectedText: {
    color: 'black',
  },
});