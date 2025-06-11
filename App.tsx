import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Alert, Button} from 'react-native';
import Header from './components/Header';
import ShortsLabel from './components/ShortsLabel';
import ShortsCard from './components/ShortsCard';
import VideoCard from './components/VideoCard';
import BottomNavBar from './components/BottomNavbar';
import { Ionicons } from '@expo/vector-icons';
import CategoryBar from './components/CategoryBar';


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Header />
          

    <View style={styles.categoryRow}>
      <View style={styles.compassButton}>
        <Ionicons name="compass-outline" size={24} color="white" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        <CategoryBar />
      </ScrollView>
    </View>


          <ShortsLabel />

          <View style={styles.cardRow}>
            <ShortsCard
              title="SAIT Heritage Hall"
              image={require('./assets/Sait1.jpg')}
            />

            <ShortsCard
              title="SAIT Stan Grad Centre"
              image={require('./assets/Sait2.jpg')}
            />
          </View>
          
          <View style={{ marginTop: 16 }}>
            <VideoCard
              title="SAIT Johnson-Cobbe Energy Centre"
              image={require('./assets/Sait3.jpg')}
              logo={require('./assets/Sait_Logo.png')}
              channel="SAIT Campus"
              views="1.2K views"
              time="2 hours ago"
            />
            <VideoCard
              title="SAIT Aldred Building Interior"
              image={require('./assets/Sait4.jpg')}
              logo={require('./assets/Sait_Logo.png')}
              channel="SAIT Campus"
              views="835 views"
              time="1 day ago"
            />
          </View>
          <View style={{ padding: 20 }}>
            <Button
              title="Alert"
              onPress={() => Alert.alert('Alert Button pressed')}
              color="#f00"
            />
          </View>

        </ScrollView>
      </SafeAreaView>

      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 100,
    backgroundColor: '#000',
  },
  compassButton: {
    backgroundColor: '#333',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginTop: 5,
    marginLeft: 5,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12,
  },
  categoryRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  marginHorizontal: 16,
},
categoryScroll: {
  flex: 1,
},
});
