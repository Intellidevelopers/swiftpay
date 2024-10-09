import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type Section = 'finances' | 'holdings' | 'depositWithdrawal';

const Profile = () => {
  const [expandedSections, setExpandedSections] = useState<{
    finances: boolean;
    holdings: boolean;
    depositWithdrawal: boolean;
  }>({
    finances: false,
    holdings: false,
    depositWithdrawal: false,
  });

  const toggleSection = (section: Section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.listItem}>
            <MaterialCommunityIcons name="account" size={24} color="#000" />
            <Text style={styles.listText}>Your Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Document')}>
            <MaterialCommunityIcons name="shield-check" size={24} color="#000" />
            <Text style={styles.listText}>Account Verification</Text>
            <Text style={styles.statusBadge}>Verified</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Notification')}>
            <MaterialCommunityIcons name="bell" size={24} color="#000" />
            <Text style={styles.listText}>Notification</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Finances</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.listItem} onPress={() => toggleSection('finances')}>
            <MaterialCommunityIcons name="swap-horizontal" size={24} color="#000" />
            <Text style={styles.listText}>Money Exchange</Text>
            <AntDesign name={expandedSections.finances ? 'up' : 'down'} size={18} color="#000" />
          </TouchableOpacity>

          {expandedSections.finances && (
            <>
              <TouchableOpacity style={styles.subListItem}>
                <Text style={styles.subListText}>International Transfer</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.subListItem}>
                <Text style={styles.subListText}>Ajo Savings And Contribution</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity style={styles.listItem} onPress={() => toggleSection('holdings')}>
            <MaterialCommunityIcons name="briefcase-outline" size={24} color="#000" />
            <Text style={styles.listText}>Holdings</Text>
            <AntDesign name={expandedSections.holdings ? 'up' : 'down'} size={18} color="#000" />
          </TouchableOpacity>
          
          {expandedSections.holdings && (
            <>
              <TouchableOpacity style={styles.subListItem}>
                <Text style={styles.subListText}>Holdings 1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.subListItem}>
                <Text style={styles.subListText}>Holdings 2</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <Text style={styles.sectionTitle}>Deposit/Withdrawal</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.listItem} onPress={() => toggleSection('depositWithdrawal')}>
            <MaterialCommunityIcons name="cash-multiple" size={24} color="#000" />
            <Text style={styles.listText}>Withdrawal</Text>
            <AntDesign name={expandedSections.depositWithdrawal ? 'up' : 'down'} size={18} color="#000" />
          </TouchableOpacity>


          {expandedSections.depositWithdrawal && (
            <TouchableOpacity style={styles.subListItem}>
              <Text style={styles.subListText}>Deposit</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Transactions')}>
            <MaterialCommunityIcons name="cash-multiple" size={24} color="#000" />
            <Text style={styles.listText}>Transactions</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/ChangePassword')}>
            <MaterialCommunityIcons name="lock" size={24} color="#000" />
            <Text style={styles.listText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/TwoFactorAuthentication')}>
            <MaterialCommunityIcons name="security" size={24} color="#000" />
            <Text style={styles.listText}>Two Factor Authentication</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <MaterialCommunityIcons name="devices" size={24} color="#000" />
            <Text style={styles.listText}>Device Sessions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/ChangePin')}>
            <MaterialCommunityIcons name="key" size={24} color="#000" />
            <Text style={styles.listText}>Change Pin</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Others</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.listItem}>
            <MaterialCommunityIcons name="account-multiple" size={24} color="#000" />
            <Text style={styles.listText}>Affiliates & Referrals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Beneficiaries')}>
            <MaterialCommunityIcons name="credit-card-outline" size={24} color="#000" />
            <Text style={styles.listText}>Cards & Beneficiaries</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/Rates')}>
            <MaterialCommunityIcons name="information" size={24} color="#000" />
            <Text style={styles.listText}>See Our Rates</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <MaterialCommunityIcons name="file-document-outline" size={24} color="#000" />
            <Text style={styles.listText}>Terms & Condition</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.listItem} onPress={() => router.push('/CustomerCare')}>
            <MaterialCommunityIcons name="chat" size={24} color="#000" />
            <Text style={styles.listText}>Live Chat Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <MaterialCommunityIcons name="email" size={24} color="#000" />
            <Text style={styles.listText}>Send Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <MaterialCommunityIcons name="phone" size={24} color="#000" />
            <Text style={styles.listText}>Call</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 20
  },
  backButton: {
    padding: 5,
    backgroundColor: '#0000ff',
    borderRadius: 10,
    paddingHorizontal: 16
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: '#666',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
    marginLeft: 10,
  },
  subListItem: {
    paddingLeft: 40,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  subListText: {
    fontSize: 15,
    color: '#555',
  },
  statusBadge: {
    backgroundColor: '#00A05D',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 12,
    color: 'white',
  },
});

export default Profile;
