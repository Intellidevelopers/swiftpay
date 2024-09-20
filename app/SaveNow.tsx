import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SaveNow = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.balanceCard}>
      <View>
        <Text style={styles.balanceText}>My swiftPay balance</Text>
        <Text style={styles.balanceAmount}>0.00</Text>
      </View>
      <AntDesign name="right" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.savingsContainer}>
      <TouchableOpacity style={styles.savingsCard} onPress={() => router.push('/SaveWithInterest')}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/icons/user.png')} style={styles.icon} />
            <Text style={styles.cardTitle}>Save With Intrest</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardDescription}>
            Save Daily, Weekly & Monthly And Get Interest On Your Savings. Lock Your Savings And Create Multiple Savings Account/Wallet.
            </Text>
            <Image source={require('../assets/interest.png')} style={styles.actionIcon} />
          </View>
          
        </TouchableOpacity>


        <TouchableOpacity style={styles.savingsCard}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/icons/user.png')} style={styles.icon} />
            <Text style={styles.cardTitle}>Group Savings</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardDescription}>
              Create Your Joint Wallet And Save With Your Friend, Family Or Business Partners. Save For A Project, Share For A Business.
            </Text>
            <Image source={require('../assets/group.png')} style={styles.actionIcon} />
          </View>
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
    gap: 20
  },
  backButton: {
    padding: 15,
    borderRadius: 100,
  },
  balanceCard: {
    backgroundColor: '#0000ff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  balanceIcon: {
    color: '#fff',
    fontSize: 20,
  },
  savingsContainer: {
    flex: 1,
  },
  savingsCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    marginBottom: 16,
    elevation: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 10
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardDescription: {
    fontSize: 13,
    color: '#5C5C5C',
    width: 170,
    alignSelf: "flex-start",
    left: 2,
    marginRight: 70
  },
  iconActionContainer: {
  },
  actionIcon: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  },
});

export default SaveNow;
