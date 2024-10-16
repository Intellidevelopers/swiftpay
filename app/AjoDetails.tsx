import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { BottomSheet } from '@rneui/themed';

// Define the types
interface ContributionRound {
  name: string;
  amount: string;
  status: string;
  daysLeft?: number;
  round?: string;
  color?: string;
}

interface Member {
  name: string;
  role?: string;
  amount: string;
  roundStatus: string[];
}

const VenzaAjoScreen: React.FC = () => {

  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const { cryptoName, price, quantity, limits } = useLocalSearchParams();

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  };

  const handlePreview = () => {
    setIsPreviewVisible(true); // Show the preview bottom sheet
  };

  const handleContribution = () => {
    setIsPreviewVisible(false); // Hide the preview bottom sheet
    setIsSuccessVisible(true); // Show the success bottom sheet
  };

  
  const contributionRounds: ContributionRound[] = [
    { name: 'Segun Arinze', amount: '₦23,789.00', status: '25 Days Left', round: 'Round 1' },
    { name: 'Segun Arinze', amount: '₦23,789.00', status: 'Completed', round: 'Round 2' },
    { name: 'Segun Arinze', amount: '₦23,789.00', status: '25 Days Left', round: 'Round 3' }
  ];

  const members: Member[] = [
    { name: 'Timileyin Opeyemi', role: 'Admin', amount: '₦23,789.00', roundStatus: ['green', 'red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'red', ] },
    { name: 'Joshua Zion', amount: '₦23,789.00', roundStatus: ['green', 'red', 'yellow'] },
    { name: 'Esther Olumide', amount: '₦23,789.00', roundStatus: ['green', 'red'] }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../assets/icons/btc.png')} style={styles.icon} />
        <Text style={styles.title}>Venza Ajo</Text>
        <View style={styles.flex}>
            <Text style={styles.amount}>₦1,400,000.00</Text>
            <Text style={styles.activeStatus}>Active</Text>
        </View>
        <View>
          <Text style={styles.date}>From: 12/04/2024 To: 12/09/2024</Text>
          <Text style={styles.code}>45ASH9870VX <Ionicons name='copy' /></Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Feather name='download' color={'#0000ff'} size={20} />
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name='trash-2' color={'#0000ff'} size={20} />
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name='pencil' color={'#0000ff'} size={20} />
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Contribution Rounds Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contribution Rounds</Text>
        {contributionRounds.map((round, index) => (
          <TouchableOpacity key={index} style={styles.roundCard} onPress={handlePreview}>
            <View>
              <Text style={styles.label}>{round.name}</Text>
              <Text style={styles.price}>{round.amount}</Text>
            </View>
            <View style={styles.align}>
              <Text style={styles.round}>{round.round}</Text>
              <Text
                style={[
                  styles.statusText,
                  round.status === 'Completed' ? styles.greenText : styles.label
                ]}
              >
                {round.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Members Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Members</Text>
        {members.map((member, index) => (
          <TouchableOpacity key={index} style={styles.memberCard} onPress={handleContribution}>
            <View style={styles.membersRound}>
              
              <Text style={styles.name}>{member.name} {member.role && `(${member.role})`}</Text>
              <Text style={styles.round}>Round 1</Text>
            </View>
            <Text style={styles.memberamount}>{member.amount}</Text>

            <View style={styles.roundIndicators}>
              {member.roundStatus.map((status, idx) => (
                <Text key={idx} style={status === 'green' ? styles.green : styles.red}>
                  {idx + 1}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </View>

              {/* Bottom Sheet for Preview */}
        <BottomSheet isVisible={isPreviewVisible} onBackdropPress={() => setIsPreviewVisible(false)}>
          <View style={styles.bottomSheetContent}>
              <Image source={require('../assets/icons/date.png')} style={styles.logo} />
              <Text style={styles.successBottomSheetHeader}>Default Ajo Payment of N12,988.00</Text>
              <Text style={styles.desc}>You have missed contribution on the 12th of April 2024, click the button below to pay up.</Text>

            <TouchableOpacity style={styles.SellButton}>
              <Text style={styles.SellButtonText}>Complete Payment</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <BottomSheet isVisible={isSuccessVisible} onBackdropPress={() => setIsSuccessVisible(false)}>
          <View style={styles.bottomSheetContent}>
              <Image source={require('../assets/icons/report.png')} style={styles.logo} />
              <Text style={styles.successBottomSheetHeader}>Report Isaac Oja</Text>
              <Text style={styles.desc}>Are you sure you want to report Isaac Oja to the Admin for defaulting payment?</Text>

            <View style={styles.flexButtons}>
              <TouchableOpacity style={styles.reportButton}>
                <Text style={styles.SellButtonText}>Report</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setIsSuccessVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
    </ScrollView>
  );
};

export default VenzaAjoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 26,
    fontWeight: '900',
    color: '#000',
    marginVertical: 10,
  },
  activeStatus: {
    fontWeight: 'bold',
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 25
  },
  date: {
    color: '#666',
    fontSize: 13,
  },
  code: {
    color: '#0000ff',
    fontSize: 14,
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20
  },
  button: {
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  buttonText: {
    color: '#0000ff',
  },
  section: {
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  roundCard: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#ddd",
  },
  memberCard: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  roundIndicators: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 5
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  align: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  round: {
    backgroundColor: '#86DBff',
    padding: 5,
    borderRadius: 20,
    color: '#0000ff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 13,
    color: '#666',
  },
  greenText: {
    color: 'green',
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 12,
  },
  membersRound: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    gap: 10,
  },
  memberamount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  green: {
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 50,
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 7,
  },
  red: {
    backgroundColor: 'red',
    padding: 3,
    borderRadius: 50,
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 7,
  },
  name: {
    fontSize: 16,
    color: '#666',
  },
  bottomSheetContent: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: '500',
    left: 100
  },
  bottomSheetText: {
    fontSize: 16,
    marginBottom: 10,
  },
  successBottomSheetText: {
    fontSize: 16,
    marginBottom: 10,
    alignItems: "center"
  },
  successBottomSheetTextgreen: {
    fontSize: 16,
    marginBottom: 10,
    alignItems: "center",
    color: "#00952A",
    fontWeight: "700"
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10
  },
  logo:{
    width: 80,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20
  },
  successBottomSheetHeader:{
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10
  },
  successBottomSheetContainer:{
    borderWidth: 1,
    padding: 10,
    borderColor: "#ddd",
    backgroundColor: "#fdfdfd",
    borderRadius: 10
  },
  subText:{
    fontWeight: "700",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    marginBottom: 10
  },
  SellButton: {
    backgroundColor: '#1400FB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  reportButton: {
    backgroundColor: '#CC1212',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 50
  },
  cancelButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 50,
    borderWidth: 1,

  },
  cancelText:{
    color: '#000',
  },
  SellButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'medium',
  },
  desc: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginBottom: 20,
  },
  flexButtons:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 10,
    marginBottom: 20,
  }
});
