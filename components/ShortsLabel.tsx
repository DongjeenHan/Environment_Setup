import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ShortsLabel() {
  return (
    <View style={styles.labelRow}>
      <Image source={require('../assets/Youtube_shorts_icon.png')} style={styles.icon} />
      <Text style={styles.text}>Shorts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});