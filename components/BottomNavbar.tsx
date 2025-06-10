import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomNavBar() {
  return (
    <View style={styles.navBar}>
      <View style={styles.navItem}>
        <Ionicons name="home" size={24} color="white" />
        <Text style={styles.navText}>Home</Text>
      </View>
      <View style={[styles.navItem, { marginLeft: 17 }]}>
        <MaterialCommunityIcons name="play-box-outline" size={24} color="white" />
        <Text style={styles.navText}>Shorts</Text>
      </View>
      <View style={[styles.navItem, { marginLeft: 17}]}>
        <Ionicons name="add-circle-outline" size={36} color="white" />
      </View>
      <View style={styles.navItem}>
        <Ionicons name="videocam-outline" size={24} color="white" />
        <Text style={styles.navText}>Subscriptions</Text>
      </View>
      <View style={styles.navItem}>
        <Ionicons name="person-circle" size={24} color="#00aaff" />
        <Text style={[styles.navText, { color: '#00aaff' }]}>My Page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,     
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderColor: '#222',
  },
  navItem: {
    alignItems: 'center',
    left: 5,
  },
  navText: {
    fontSize: 10,
    color: 'white',
    marginTop: 4,
  },
});

