// screens/transfer.tsx
import React, { JSXElementConstructor, ReactElement, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, Animated, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import axios from 'axios';
import { ListRenderItemInfo } from 'react-native';

const { width } = Dimensions.get('window');

const countries = [
  { name: 'Nigeria', currency: 'Naira', code: 'NGN', flag: require('../../assets/flag/nigeria.png') },
  { name: 'United States', currency: 'Dollar', code: 'USD', flag: require('../../assets/flag/usa.png') },
  { name: 'United Kingdom', currency: 'Pound', code: 'GBP', flag: require('../../assets/flag/uk.png') },
  { name: 'Germany', currency: 'Euro', code: 'EUR', flag: require('../../assets/flag/germany.png') },
  // Add more countries as needed
];

const transfer: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [refreshing, setRefreshing] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [convertedBalance, setConvertedBalance] = useState(balance);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [featurePricesVisible, setFeaturePricesVisible] = useState(true);

 // Define your subtitles
 const subtitles = [
  "Buy & Sell Cash and Cryptocurrency Swiftly",
  "Secure and Fast Transactions",
  "Exchange Rates You Can Trust",
];

// State to hold the current subtitle index
const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
// Animated value for fading effect
const fadeAnim = useRef(new Animated.Value(1)).current;

useEffect(() => {
  // Interval to change subtitle every 3 seconds
  const intervalId = setInterval(() => {
    // Start fade-out animation
    Animated.timing(fadeAnim, {
      toValue: 0, // Fade out
      duration: 500, // Duration for fade-out
      useNativeDriver: true,
    }).start(() => {
      // Update the subtitle index after fade-out
      setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
      
      // Start fade-in animation
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in
        duration: 500, // Duration for fade-in
        useNativeDriver: true,
      }).start();
    });
  }, 4000);

  // Cleanup interval on component unmount
  return () => clearInterval(intervalId);
}, [fadeAnim]);

  useEffect(() => {
    if (selectedCountry.code !== 'USD') {
      axios.get(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then(response => {
          const rate = response.data.rates[selectedCountry.code];
          setExchangeRate(rate);
          setConvertedBalance(balance * rate);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setExchangeRate(1);
      setConvertedBalance(balance);
    }
  }, [selectedCountry, balance]);

  const formatBalance = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };


  const renderCountryItem = ({ item }: { item: typeof countries[0] }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => {
        setSelectedCountry(item);
        setModalVisible(false);
      }}
    >
      <Image source={item.flag} style={styles.flag} />
      <Text style={styles.countryText}>{item.name} ({item.currency})</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground  source={require('../../assets/images/background.png')} style={styles.container}>
      <View style={styles.headerTabs}>
          <AntDesign name='arrowleft' size={25} style={styles.back} color={'#fff'} />
          <Text style={styles.title}> Transfer Balance</Text>
          <Image source={require('../../assets/icons/menu.png')} style={styles.icon} />
      </View>
      <View style={styles.balanceContainer}>
          <TouchableOpacity
            style={styles.currencyDropdown}
            onPress={() => setModalVisible(true)}
          >
            <Image source={selectedCountry.flag} style={styles.flag} />
            <Text>{selectedCountry.name} ({selectedCountry.currency})</Text>
            <AntDesign name="down" size={16} color="#666" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.balanceText} numberOfLines={1} adjustsFontSizeToFit={true}>
                {balanceVisible ? `${selectedCountry.code} ${formatBalance(convertedBalance)}` : '**** **** **'}
              </Text>
            </View>
            <TouchableOpacity style={{ flexShrink: 0 }} onPress={() => setBalanceVisible(!balanceVisible)}> 
              <AntDesign name={balanceVisible ? "eye" : "eyeo"} size={30} color="#fff" />
            </TouchableOpacity>
          </View>


        <View style={styles.navIconsContainer}>
          {/* Icons would go here; use your desired icons library */}
          <View style={styles.links}>
            <View style={styles.btn}>
              <TouchableOpacity style={styles.LinkButton} onPress={() => router.push('/Transfer')}>
                <MaterialCommunityIcons name="bank" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Account</Text>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity style={styles.LinkButton} onPress={() => router.push('/AddMoney')}>
                <AntDesign name="plus" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Add</Text>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity style={styles.LinkButton} onPress={() => router.push('/TransferScreen')}>
                <SimpleLineIcons name="arrow-down-circle" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Withdraw</Text>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity style={styles.LinkButton} onPress={() => router.push('/Rates')}>
                <MaterialIcons name="currency-exchange" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Convert</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.transferOptions}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => router.push('../TransferToSwiftpay')}
        >
          <Ionicons name='wallet-outline' size={24} color={'#fff'} style={styles.optionIcon} />
          <Text style={styles.optionButtonText}>SwiftPay Account Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('../TransferToSwiftpay')}>
          <MaterialCommunityIcons name='bank-outline' size={24} color={'#fff'} style={styles.optionIcon} />
          <Text style={styles.optionButtonText}>Single Bank Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name='stats-chart-outline' size={20} color={'#fff'} style={styles.optionIcon} />
          <Text style={styles.optionButtonText}>Multiple Bank Transfer</Text>
        </TouchableOpacity>
      </View>

      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity style={styles.modalBackground} onPress={() => {
        setModalVisible(false);
      }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Currency</Text>
            <FlatList
              data={countries}
              renderItem={renderCountryItem}
              keyExtractor={(item) => item.code}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008b',
  },
  title:{
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    left: -10
  },
  header: {
    backgroundColor: '#00008b',
    paddingVertical: 20,
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center', // Center text within its container
    left: 14
  },

  actionButtonText: {
    color: '#fff',
    marginHorizontal: 10,
  },
  headerTabs:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: -10,
    padding: 20
  },
  icon:{
    width: 25,
    height: 25,
  },
  back:{
    backgroundColor: "#367cff",
    padding: 5,
    borderRadius: 10,
    width: 40
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    gap: 20
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LinkbackButton: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 100,
    
  },
  navIconsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: -10,
      alignItems: "center",
      alignSelf: "center"
  },
  btnText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#fff"
  },
  LinkButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  btn: {
    alignItems: 'center',
  },
  balanceContainer: {
    padding: 20,
    margin: 10,
    alignItems: 'center',
    marginBottom: -10,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
  },
  countryText: {
    marginLeft: 10,
    fontSize: 16,
  },
  flag: {
    width: 20,
    height: 20,
  },
  currencyDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#f5f5f5',
    padding: 5,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transferOptions: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 50
  },
  optionButton: {
    backgroundColor: '#0000ff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
    flexDirection: 'row',  // Align children in a row
    alignItems: 'center',  // Center children vertically
    width: '80%',  // Make all buttons the same width
    justifyContent: 'flex-start',  // Align content to the start (left)
  },
  optionButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,  // Add space between icon and text
    flex: 1,  // Take up remaining space
    textAlign: 'center',  // Center text horizontally
  },
  optionIcon: {
    marginRight: 10,  // Add margin to separate icon from text
  },
});


export default transfer;
