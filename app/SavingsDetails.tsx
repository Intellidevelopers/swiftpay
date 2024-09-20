import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SavingsDetailScreen: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Savings Card */}
      <View style={styles.savingsCard}>
        <Image source={require('../assets/icons/logo.png')} style={styles.savingsImage} />
        <View style={styles.savingsInfo}>
          <Text style={styles.savingsTitle}>New York Road Trip</Text>
          <Text style={styles.savingsSubText}>
                60% <Text style={{ color: "#0000ff", fontSize: 15 }}>•</Text> <Text style={{ color: "#666", fontWeight: "400" }}>20 days left</Text>
              </Text>

          <TouchableOpacity style={styles.endSavingsButton}>
            <Text style={styles.endSavingsButtonText}>End Savings</Text>
          </TouchableOpacity>
          <Text style={styles.locked}>locked</Text>
        </View>
      </View>

      
      {/* Edit Saving Plan */}
      <TouchableOpacity style={styles.editPlan}>
        <Text style={styles.editPlanText}>Edit Saving Plan</Text>
      </TouchableOpacity>

      <Text style={styles.activeSavings}>Active Savings</Text>


      {/* Active Savings */}
      <View style={styles.activeSavingsContainer}>
        <Text style={styles.activeSavingsAmount}>$1,460.15</Text>
      </View>

      <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.withdrawButton}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

      {/* Recent Activity Section */}
      <View style={styles.activitySection}>
        <View style={styles.activityHeader}>
          <Text style={styles.activityTitle}>Edit Savings</Text>
          <Text style={styles.activityTitle2}>Activity</Text>
        </View>
        {/* Activity Items */}
        {activityData.map((item, index) => (
          <View key={index} style={styles.activityItem}>
            <View style={styles.activityIconContainer}>
              <AntDesign
              style={styles.icon}
                name={item.type === 'add' ? 'arrowup' : 'arrowdown'}
                size={20}
                color={item.type === 'add' ? 'green' : 'red'}
              />
              <Text style={styles.activityAmount}>{item.amount}</Text>
            </View>
            <Text style={styles.activityDate}>{item.date}</Text>
          </View>
        ))}
      </View>

      {/* Create New Savings Plan Button */}
      <TouchableOpacity style={styles.createPlanButton} onPress={() => router.push('/CreateSavings')}>
        <Text style={styles.createPlanButtonText}>Create New Savings Plan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const activityData = [
  { amount: '$61.50', date: 'Yesterday', type: 'add' },
  { amount: '$199.75', date: 'Dec 10, 2020', type: 'add' },
  { amount: '$38.00', date: 'Nov 26, 2020', type: 'withdraw' },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
  },
  savingsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginVertical: 20,
  },
  savingsImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    top: -25
  },
  savingsInfo: {
    flex: 1,
    marginLeft: 10,
  },
  savingsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  savingsProgress: {
    fontSize: 14,
    color: '#6cc24a',
  },
  locked: {
    fontSize: 14,
    color: '#666',
    marginLeft: 60,
    fontWeight: "700"
  },
  endSavingsButton: {
    backgroundColor: '#CC1212',
    padding: 8,
    borderRadius: 20,
    width: 90,
    alignItems: "center",
    alignSelf: "flex-end"
  },
  endSavingsButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  editPlan: {
    textAlign: 'left',
    marginVertical: 10,
    marginBottom: 20
  },
  editPlanText:{
    color: '#0000ff',
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "500"
  },
  activeSavingsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  activeSavingsAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  addButton: {
    backgroundColor: '#1219BF',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 60
  },
  withdrawButton: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 10,
    paddingHorizontal: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  activitySection: {
    marginVertical: 20,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 15,
    color: '#000',
    fontWeight: "500"
  },
  activityTitle2: {
    fontSize: 15,
    color: '#000',
    fontWeight: "500",
    borderBottomWidth: 3,
    borderBottomColor: "#0000ff"
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  activityIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityAmount: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0000ff',
    fontWeight: "700"
  },
  activityDate: {
    fontSize: 12,
    color: '#999',
  },
  createPlanButton: {
    backgroundColor: '#0000ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  createPlanButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  savingsSubText: {
    fontSize: 15,
    color: '#32CD32',
    fontWeight: '500',
    alignItems: 'center',
  },
  activeSavings:{
    color: "#555",
    fontSize: 15,
    fontWeight: "500"
  },
  icon:{
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10
  }
});

export default SavingsDetailScreen;
