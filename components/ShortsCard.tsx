import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ShortsCard({ title, image }: { title: string; image: any }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#111',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 160,
  },
  text: {
    color: 'white',
    fontSize: 14,
    padding: 8,
  },
});