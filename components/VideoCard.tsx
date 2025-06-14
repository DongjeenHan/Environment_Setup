import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VideoCard({
  title,
  image,
  channel,
  views,
  time,
  logo,
}: {
  title: string;
  image: any;
  channel: string;
  views: string;
  time: string;
  logo: any;
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.infoRow}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{channel} • {views} • {time}</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={18} color="white" style={styles.moreIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  textBox: {
    flexShrink: 1,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 12,
  },
  moreIcon: {
  marginLeft: 'auto',
  paddingLeft: 8,
  paddingRight: 4,
  alignSelf: 'flex-start',
},
});
