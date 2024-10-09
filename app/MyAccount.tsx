import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign, FontAwesome, FontAwesome5, FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const MyAccount = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      {/* Profile Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileInitial}>S</Text>
        </View>
        <Text style={styles.profileName}>Adeagbo Josiah</Text>
        <Text style={styles.profileEmail}>adeagbojosaih1@gmail.com</Text>
        <View style={styles.medalContainer}>
          <View  style={styles.badge}><FontAwesome5 name='medal' color={'#fff'} size={10} /></View>
          <Text style={styles.medalText}>Gold Badge</Text>
        </View>
      </View>

      {/* Personal Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Personal Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>FIRST NAME</Text>
          <Text style={styles.detailValue}>Josiah</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>LAST NAME</Text>
          <Text style={styles.detailValue}>Adeagbo</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>EMAIL</Text>
          <View style={styles.editableRow}>
            <Text style={styles.detailValue}>adeagbojosaih1@Gmail.Com</Text>
            <AntDesign name="edit" size={16} color="black" style={styles.editIcon} />
          </View>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>ADDRESS</Text>
          <View style={styles.editableRow}>
            <Text style={styles.detailValue}>Ibadan Oyo</Text>
            <AntDesign name="edit" size={16} color="black" style={styles.editIcon} />
          </View>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>DATE OF BIRTH</Text>
          <Text style={styles.detailValue}>01/01/1995</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>PHONE NUMBER</Text>
          <Text style={styles.detailValue}>08088886823</Text>
        </View>
      </View>

      {/* SwiftPay Tag */}
      <Text style={styles.label}>SwiftPay Tag</Text>
      <View style={styles.swiftPayContainer}>
        <View style={styles.swiftPayRow}>
          <FontAwesome name="at" size={24} color="black" />
          <Text style={styles.swiftPayTag}>JosiahDev1</Text>
          <TouchableOpacity onPress={() => router.push('/ChangeSwiftpayTag')}>
            <AntDesign name="edit" size={20} color="black" style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Delete Account Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={() => alert('Are you sure you want to deactivate your account?')}>
        <AntDesign name="closecircle" size={24} color="white" />
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    backgroundColor: '#0000FF',
    padding: 8,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 20
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#999',
  },
  detailsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  detailsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: "#666"
  },
  detailRow: {
    marginVertical: 10,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  editableRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 10,
  },
  swiftPayContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swiftPayRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  swiftPayTag: {
    fontSize: 16,
    marginLeft: 10,
  },
  deleteButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  deleteText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  label:{
    fontWeight: "700",
    color: "#666"
  },
  badge:{
    backgroundColor: "orange",
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  medalContainer:{
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5
  },
  medalText:{
    fontSize: 12,
    fontWeight: "500"
  }
});

export default MyAccount;
