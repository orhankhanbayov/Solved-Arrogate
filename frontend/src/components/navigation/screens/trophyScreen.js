import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as SecureStore from 'expo-secure-store';

import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TrophyScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <ImageBackground
        source={require('../../../images/background.png')}
        resizeMode="cover"
        style={styles.background}
      ></ImageBackground>
      
      <View style={styles.templatesContainer}>
      <Image
        source={require('../../../images/trophyandcoin-template.png')}
        style={styles.trophyAndCoinTemplate}
      ></Image>
      </View>

      <Text style={styles.header}>Welcome, _username_!</Text>
      <Text style={styles.currentTreasures}>Your current treasures are:</Text>
      <Text style={styles.rankingsTitle}>Rankings</Text>
      <Text style={styles.pointsTrophiesAndCoins}>?                   ?</Text>

      <View style={styles.usersRankingsContainer}>
        <Text style={styles.usersRankings}>👤  photo David    3 🏆  15 🪙</Text>
        <Text style={styles.usersRankings}>👤  photo Juliana  3 🏆  10 🪙</Text>    
        <Text style={styles.usersRankings}>👤  photo Marta    2 🏆  15 🪙</Text>
        <Text style={styles.usersRankings}>👤  photo Michal   1 🏆  15 🪙</Text>
        <Text style={styles.usersRankings}>👤  photo Orhan    1 🏆  10 🪙</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  // All text styles
  header: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'space-evenly',
    color: '#204376',
    fontWeight: 'bold',
    marginTop: 40,
    marginVertical: 10,
    marginHorizontal: 50,
  },
  currentTreasures: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'space-evenly',
    color: '#204376',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  rankingsTitle: {
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'space-evenly',
    color: '#204376',
    fontWeight: 'bold',
    marginVertical: 150,
  },
  pointsTrophiesAndCoins: {
    fontSize: 40,
    position: 'absolute',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    color: '#204376',
    fontWeight: 'bold',
    marginVertical: 155,
    marginHorizontal: 55,
  },
  usersRankingsContainer: {
    position: 'absolute',
    top: 320,
    left: 40,
    borderRadius: 25,
    borderColor: '#FFFFFF',
    width: '80%',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  usersRankings: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#204376',
    padding: 10,
  },
  // Images
  templatesContainer: {
    resizeMode: 'contain',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  trophyAndCoinTemplate: {
    flex: 1,
    flexGrow: 1,
    padding: 130,
    height: 50,
  },
});

export default TrophyScreen;
