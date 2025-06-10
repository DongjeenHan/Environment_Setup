import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoGroup}>
        <Image
          source={{
            uri: 'https://www.youtube.com/s/desktop/54e547bd/img/logos/favicon_48x48.png',
          }}
          style={styles.logoIcon}
        />
        <Text style={styles.logoText}>YouTube</Text>
      </View>
      <View style={styles.iconGroup}>
        <MaterialCommunityIcons name="cast" size={24} color="white" />
        <Ionicons name="notifications-outline" size={24} color="white" />
        <Ionicons name="search-outline" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  logoText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 16,
  },
});
