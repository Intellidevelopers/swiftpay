import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';

interface CustomCheckboxProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
  }
  
  const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ value, onValueChange }) => {
    return (
      <TouchableOpacity onPress={() => onValueChange(!value)}>
        <View style={{ 
          width: 20, 
          height: 20, 
          backgroundColor: value ? 'blue' : 'white' ,
          borderRadius: 5, 
          borderWidth: 2, 
          borderColor: 'gray', 
          justifyContent: 'center', 
          alignItems: 'center'
        }} />
      </TouchableOpacity>
    );
  };
  
  

const CreateAjoSavings = () => {
  const [amountToInvest, setAmountToInvest] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('');
  const [endDate, setEndDate] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  

  const [isSelected, setSelection] = React.useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name='left' size={20}/>
        </TouchableOpacity>
        <Text style={styles.title}>CREATE AJO SAVINGS</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SwiftPay Balance */}
      <View style={styles.content}>
      <Text style={styles.label}>Ajo Savings Type</Text>
      <View style={styles.balanceContainer}>
        <AntDesign name='down' size={20}/>
      </View>

      {/* Amount to Invest */}
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount To Save"
        placeholderTextColor="#A9A9A9"
        keyboardType="numeric"
        value={amountToInvest}
        onChangeText={setAmountToInvest}
      />

      <View style={styles.rateContainer}>
      </View>

      <Text style={styles.label}>Duration</Text>
      <TextInput
        style={styles.input2}
        placeholderTextColor="#A9A9A9"
        value={endDate}
        onChangeText={setEndDate}
      />

      <Text style={styles.label}>Payment Method</Text>
      <View style={styles.balanceContainer}>
        <AntDesign name='down' size={20}/>
      </View>

      <Text style={styles.label}>Ajo Referral Code ( Optional )</Text>
      <TextInput
        style={styles.input2}
        placeholderTextColor="#A9A9A9"
        value={endDate}
        onChangeText={setEndDate}
      />

      {/* Terms & Conditions */}
      <View style={styles.termsContainer}>
      <CustomCheckbox value={agreeTerms}
          onValueChange={setAgreeTerms} />
        <Text style={styles.termsText}>
          I Have Read And Agree To The Terms & Conditions And Privacy Policy
        </Text>
      </View>

      {/* Hold Now Button */}
      <TouchableOpacity style={styles.holdNowButton} disabled={!agreeTerms} onPress={() => router.push('/Fiats')}>
        <Text style={styles.holdNowText}>Start Ajo Savings</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.notice}>
        <Text style={styles.noticeText}>
            USING A REFERRAL CODE FOR AJO SAVINGS CAN HELP REDUCE THE PERCENTAGE FEE YOU'LL PAY FOR YOUR AJO SAVINGS
        </Text>
      </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        title: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        balanceContainer: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginBottom: 20,
          padding: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#E0E0E0',
          backgroundColor: '#f8f8f8'
        },
        balanceLabel: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        swiftPayText: {
          fontSize: 16,
          color: '#000',
          fontWeight: "500"
        },
        balanceInput: {
          backgroundColor: '#D3E3FD',
          borderRadius: 20,
          padding: 6,
          paddingHorizontal: 15
        },
        balance: {
          fontSize: 16,
          color: '#000',
          fontWeight: "700"
        },
        input: {
          borderWidth: 1,
          borderColor: '#E0E0E0',
          borderRadius: 8,
          padding: 10,
          color: '#000',
          marginBottom: -10, // Negative margin to overlay on top of the rate container
          zIndex: 3, // Ensure input is on top
          backgroundColor: '#fff', // Background color to cover the rate container below
          width: '95%',
          alignSelf: "center"
        },
        rateContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#D3E3FD',
          borderRadius: 10,
          padding: 15,
          position: 'relative',
          width: '100%',
          alignSelf: "center",
          zIndex: 1
        },
        rateLabel: {
          fontSize: 16,
          color: '#000',
          fontWeight: "500"
        },
        rateValue: {
          fontSize: 16,
          color: '#000',
          fontWeight: "500"
        },
        pickerContainer: {
          borderWidth: 1,
          borderColor: '#E0E0E0',
          borderRadius: 5,
        },
        picker: {
          height: 50,
          color: '#000',
        },
        termsContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        },
        termsText: {
          flex: 1,
          fontSize: 12,
          marginLeft: 10,
          color: '#000',
        },
        holdNowButton: {
          backgroundColor: '#0000FF',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginBottom: 20
        },
        holdNowText: {
          color: '#fff',
          fontSize: 16,
        },
        header:{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 40,
          gap: 50,
          padding: 20,
        },
        logo:{
          width: 30,
          height: 30,
          resizeMode: 'contain',
          marginRight: 10
        },
        label:{
          fontSize: 16,
          fontWeight: '500',
          marginBottom: 10,
          marginTop: 20,
          color: '#000',
        },
        input2: {
            borderWidth: 1,
            borderColor: '#E0E0E0',
            borderRadius: 8,
            padding: 10,
            color: '#000',
            marginBottom: 20, // Negative margin to overlay on top of the rate container
            backgroundColor: '#fff', // Background color to cover the rate container below
          },
          notice:{
            backgroundColor: "#0000ff",
            marginBottom: 40,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
          content:{
            padding: 15,
          },
          noticeText:{
            color: '#fff',
            fontSize: 12,
            textAlign: 'center',
            marginTop: 10,
          }
      });
      

export default CreateAjoSavings;
