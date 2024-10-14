import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

// Define the types
interface ContributionRound {
  name: string;
  amount: string;
  status: string;
  daysLeft?: number;
  round?: string;
}

interface Member {
  name: string;
  role?: string;
  amount: string;
  roundStatus: string[];
}

const VenzaAjoScreen: React.FC = () => {
  const contributionRounds: ContributionRound[] = [
    { name: 'Segun Arinze', amount: '₦23,789.00', status: '25 Days Left', round: 'Round 1' },
    { name: 'Segun Arinze', amount: '₦23,789.00', status: 'Completed', round: 'Round 2' },
    { name: 'Segun Arinze', amount: '₦23,789.00', status: '25 Days Left', round: 'Round 1' }
  ];

  const members: Member[] = [
    { name: 'Timileyin Opeyemi', role: 'Admin', amount: '₦23,789.00', roundStatus: ['green', 'red', 'yellow'] },
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
        <View style={styles.statusWrapper}>
          <Text style={styles.date}>From: 12/04/2024 To: 12/09/2024</Text>
          <Text style={styles.code}>45ASH9870VX <Ionicons name='copy'/></Text>
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
          <View key={index} style={styles.roundCard}>
            <View>
            <Text style={styles.label}>{round.name}</Text>
            <Text style={styles.price}>{round.amount}</Text>
            </View>
           <View style={styles.align}>
            <Text style={styles.round}>{round.round}</Text>
            <Text style={styles.label}>{round.status}</Text>
           </View>
          </View>
        ))}
      </View>

      {/* Members Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Members</Text>
        {members.map((member, index) => (
          <View key={index} style={styles.memberCard}>
            <View>
              <Text>{member.name} {member.role && `(${member.role})`}</Text>
              <Text>{member.amount}</Text>
            </View>
            <Text style={styles.round}>Round 1</Text>
            <View style={styles.roundIndicators}>
              {member.roundStatus.map((color, idx) => (
                <View key={idx} style={[styles.statusIndicator, { backgroundColor: color }]} />
              ))}
            </View>
          </View>
        ))}
      </View>
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
  statusWrapper: {
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
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#ddd",
  },
  memberCard: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  roundIndicators: {
    flexDirection: 'row',
    marginTop: 5,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  icon:{
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  flex:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  align:{
    alignItems: 'flex-end',
  },
  price:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  round:{
    backgroundColor: '#86DBff',
    padding: 5,
    borderRadius: 20,
    color: '#0000ff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  label:{
    fontSize: 13,
    color: '#666',
  }
});

