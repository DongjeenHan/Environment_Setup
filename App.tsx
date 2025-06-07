import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
   <View style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
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

      <View style={styles.compassButton}>
        <Ionicons name="compass-outline" size={24} color="white" />
      </View>

      <View style={styles.shortsBox}>
        <View style={styles.shortsLabelRow}>
          <Image
            source={require('./assets/Youtube_shorts_icon.png')}
            style={styles.shortsIcon}
          />
          <Text style={styles.shortsText}>    Shorts</Text>
        </View>
      </View>
    </SafeAreaView>
    <View style={styles.navBar}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={[styles.navItem, { marginLeft: 20 }]}>
          <MaterialCommunityIcons name="play-box-outline" size={24} color="white" />
          <Text style={styles.navText}>Shorts</Text>
        </View>
        <View style={[styles.navItem, { marginLeft: 15 }, { marginRight:2 }]}>
          <Ionicons name="add-circle-outline" size={36} color="white" />
        </View>
        <View style={[styles.navItem, { marginRight:5 }]}>
          <Ionicons name="videocam-outline" size={24} color="white" />
          <Text style={styles.navText}>Subscriptions</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="person-circle" size={24} color="#00aaff" />
          <Text style={[styles.navText, { color: '#00aaff' }]}>My Page</Text>
        </View>
      </View>   
    </View>    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },

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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 16,
  },

  compassButton: {
    backgroundColor: '#333',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 16,
  },

  shortsBox: {
    backgroundColor: '#0000',
    marginTop: 0,
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 12
  },
  shortsLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 8,
  },
  shortsIcon: {
    right: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
    navBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
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
