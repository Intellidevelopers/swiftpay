import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  FlatList,
  RefreshControl,
  Pressable,
  Animated,
} from 'react-native';
import {
  AntDesign,
  Feather,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { router } from 'expo-router';
import axios from 'axios';

const { width } = Dimensions.get('window');

const countries = [
  { name: 'Nigeria', currency: 'Naira', code: 'NGN', flag: require('../../assets/flag/nigeria.png') },
  { name: 'United States', currency: 'Dollar', code: 'USD', flag: require('../../assets/flag/usa.png') },
  { name: 'United Kingdom', currency: 'Pound', code: 'GBP', flag: require('../../assets/flag/uk.png') },
  { name: 'Germany', currency: 'Euro', code: 'EUR', flag: require('../../assets/flag/germany.png') },
  // Add more countries as needed
];


// Tab screen components
function Index() {
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
  

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate a network request or any other operation
    setTimeout(() => {
      setRefreshing(false); // Stop the refreshing animation
      // You can update your state or perform other actions here
    }, 2000);
  }, []);

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
  const renderPrice = () => {
    return balanceVisible ? "$0.00" : "****";
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
          <Text style={{color: "#fff", fontSize: 25, fontWeight: "900"}}>S</Text>
        </TouchableOpacity>

        <View style={styles.link}>
          <TouchableOpacity style={styles.LinkbackButton} onPress={() => router.push('/QrCodeScreen')}>
            <MaterialIcons name="qr-code-scanner" size={24} color="#0000ff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.LinkbackButton} onPress={() => router.push('/SellTrading')}>
            <Image source={require('../../assets/icons/convert-card.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.LinkbackButton} onPress={() => router.push('/Notification')}>
            <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#0000ff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.LinkbackButton} onPress={() => router.push('/Profile')}>
            <Feather name="menu" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {/* Balance and Navigation Section */}
        <View style={styles.balanceContainer}>
          <TouchableOpacity
            style={styles.currencyDropdown}
            onPress={() => setModalVisible(true)}
          >
            <Image source={selectedCountry.flag} style={styles.flag} />
            <Text>{selectedCountry.name} ({selectedCountry.currency})</Text>
            <AntDesign name="down" size={16} color="#666" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.balanceText} numberOfLines={1} adjustsFontSizeToFit={true}>
                {balanceVisible ? `${selectedCountry.code} ${formatBalance(convertedBalance)}` : '**** **** **'}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setBalanceVisible(!balanceVisible)}>
              <AntDesign name={balanceVisible ? "eye" : "eyeo"} size={30} color="#666" />
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

      {/* Money Exchange Section */}
      <View style={styles.cardContainer}>
  <ImageBackground
    source={require('../../assets/images/money-exchange-bg.png')}
    style={styles.moneyExchangeCard}
  >
    <View style={styles.moneyExchangeCardLayer}>
      <Text style={styles.moneyExchangeTitle}>Money Exchange</Text>

      {/* Fixed width container for animated text */}
      <View style={styles.subtitleContainer}>
        <Animated.Text style={[styles.moneyExchangeSubtitle, { opacity: fadeAnim }]}>
          {subtitles[currentSubtitleIndex]}
        </Animated.Text>
      </View>

      <View style={styles.exchangeButtonsContainer}>
        <TouchableOpacity
          style={[styles.exchangeButton, styles.shadow]}
          onPress={() => router.push('/BuyCryptoScreen')}
        >
          <Feather name="arrow-down" size={24} color="#45bf55" />
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.exchangeButton, styles.shadow]}
          onPress={() => router.push('/SellCryptoScreen')}
        >
          <Feather name="arrow-up" size={24} color="red" />
          <Text style={styles.buttonText}>Sell Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
</View>


      {/* Features Section */}
     {/* Features Section */}
<View style={styles.featuresContainer}>
  {/* Individual feature card */}
  <View style={styles.featuresCardContainer}>
    <ImageBackground
      source={require('../../assets/images/tab1.png')}
      style={styles.featureCard}
      resizeMode="cover"  // Added this line
    >
     <TouchableOpacity onPress={() => router.push('/Africa')}>
     <View style={styles.headerCard}>
        <MaterialIcons name="currency-exchange" size={18} color="#0000ff" />
        <Text style={styles.featureTitle}>International Transfer</Text>
      </View>
      <Text style={styles.head}>
        Send money to Africa
      </Text>
      <Text style={styles.featureDescription}>
        Send money to your family & friends in Africa instantly. Send to their loca bank account, Mobile wallet in less than a minute, Send from anywhere in the world.
      </Text>
        <Text style={styles.featurePrice}>{renderPrice()}</Text>

     </TouchableOpacity>
    </ImageBackground>
    
    <ImageBackground
      source={require('../../assets/images/tab1.png')}
      style={styles.featureCard}
      resizeMode="cover"  // Added this line
    >
      <TouchableOpacity onPress={() => router.push('/Abroad')}>
      <View style={styles.headerCard}>
        <MaterialIcons name="currency-exchange" size={18} color="#0000ff" />
        <Text style={styles.featureTitle}>International Transfer</Text>
      </View>
      <Text style={styles.head}>
        Send money Abroad
      </Text>
      <Text style={styles.featureDescription}>
        Send money Globally. Send to Europe, UK, US instantly with low rates. Send to Local US, UK and EUR bank accounts. Transfer at Low rates
      </Text>
        <Text style={styles.featurePrice2}>{renderPrice()}</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>

  <View style={styles.featuresCardContainer}>
    <ImageBackground
      source={require('../../assets/images/tab1.png')}
      style={styles.featureCard}
      resizeMode="cover"  // Added this line
    >
      <TouchableOpacity onPress={() => router.push('/HardCurrency')}>
      <View style={styles.headerCard}>
        <MaterialIcons name="currency-exchange" size={18} color="#0000ff" />
        <Text style={styles.featureTitle}>Holdings</Text>
      </View>
      <Text style={styles.head}>
       Save in Hard Currency
      </Text>
      <Text style={styles.featureDescription}>
        Save money in hard currency (USD, EUR, GBP) and Gold. Protect your money from inflation and make a profit when the rates go high.
      </Text>
        <Text style={styles.featurePrice3}>{renderPrice()}</Text>
        </TouchableOpacity>
    </ImageBackground>
    
   <ImageBackground
      source={require('../../assets/images/tab1.png')}
      style={styles.featureCard}
      resizeMode="cover"  // Added this line
    ><TouchableOpacity onPress={() => router.push('/Stock')}>
      <View style={styles.headerCard}>
        <MaterialIcons name="currency-exchange" size={18} color="#0000ff" />
        <Text style={styles.featureTitle}>Holdings</Text>
      </View>
      <Text style={styles.head}>
        Invest In Stock & Metals
      </Text>
      <Text style={styles.featureDescription}>
        Invest in stock & metals and make huge profits when the percentage on each stock go up.
      </Text>
        <Text style={styles.featurePrice4}>{renderPrice()}</Text>
        </TouchableOpacity>
    </ImageBackground>
  </View>

  <View style={styles.featuresCardContainer}>
    <ImageBackground
      source={require('../../assets/images/tab1.png')}
      style={styles.featureCard}
      resizeMode="cover"  // Added this line
    >
      <TouchableOpacity onPress={() => router.push('/AjoSavings')}>
      <View style={styles.headerCard}>
        <MaterialIcons name="currency-exchange" size={18} color="#0000ff" />
        <Text style={styles.featureTitle}>Ajo Savings</Text>
      </View>
      <Text style={styles.head}>
       Ajo Savings
      </Text>
      <Text style={styles.featureDescription}>
        Save money in hard currency (USD, EUR, GBP) and Gold. Protect your money from inflation and make a profit when the rates go high.
      </Text>
        <Text style={styles.featurePrice3}>{renderPrice()}</Text>
        </TouchableOpacity>
    </ImageBackground>
    
   <ImageBackground
      source={require('../../assets/images/tab1.png')}
      style={styles.featureCard}
      resizeMode="cover"  // Added this line
    >
      <TouchableOpacity onPress={() => router.push('/AjoContribution')}>
      <View style={styles.headerCard}>
        <MaterialIcons name="currency-exchange" size={18} color="#0000ff" />
        <Text style={styles.featureTitle}>Ajo Contribution</Text>
      </View>
      <Text style={styles.head}>
        Ajo Contribution
      </Text>
      <Text style={styles.featureDescription}>
        Invest in stock & metals and make huge profits when the percentage on each stock go up.
      </Text>
        <Text style={styles.featurePrice5}>{renderPrice()}</Text>
        </TouchableOpacity>
    </ImageBackground >
  </View>
</View>

      {/* Currency Modal */}
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
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    shadowRadius: 2,
    elevation: 2,
    marginBottom: -10
  },
  balanceText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flex: 1,
    marginRight: 10
  },
  navIconsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: -10
  },
  moneyExchangeCard: {
    width: "100%",
    height: 150,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: "center",
  },
  moneyExchangeCardLayer: {
  },
  moneyExchangeTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: "flex-start",
  },
  moneyExchangeSubtitle: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
    alignSelf: "flex-start",

  },
  exchangeButtonsContainer: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    gap: 40
  },
  exchangeButton: {
    backgroundColor: '#2E2380',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap: 5
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignSelf: "center"
  },
  featureCard: {
    width: '46%', // Adjust to make cards fit well side by side
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 15,
    backgroundColor: '#CDD5FF', // Ensure the card has a background color
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.3, // iOS shadow
    shadowRadius: 3, // iOS shadow
    resizeMode: "cover", // Ensure the image covers the whole card
    marginRight: 18,
    alignItems: "center"
  },
  featureTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  featureDescription: {
    fontSize: 12,
    color: '#333',
    marginVertical: 10,
    textAlign: 'left',
    alignSelf: "flex-start"
  },
  featurePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -10,
    alignSelf: "center"
  },
  featurePrice2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 18,
    alignSelf: "center"
  },
  featurePrice3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 3,
    alignSelf: "center"
  },
  featurePrice4: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
    alignSelf: "center"
  },
  featurePrice5: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 47,
    alignSelf: "center"
  },
  backButton: {
    top: 5,
    left: 15,
    backgroundColor: '#0000ff',
    borderRadius: 100,
    alignItems: 'center',
    width: 50,
    height: 50,
    marginBottom: 10,
    justifyContent: "center"
  },
  header: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  btnText: {
    fontSize: 12,
    fontWeight: "500"
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
  featuresCardContainer:{
    flexDirection: "row",
  },
  featureItem1: {
    width: '48%',
    backgroundColor: '#F5F5FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureItem2: {
    width: '48%',
    backgroundColor: '#FFF4F4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureItem3: {
    width: '48%',
    backgroundColor: '#FFF8EF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureItem4: {
    width: '48%',
    backgroundColor: '#EEFFF6',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  featureIcon: {
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "flex-start"
  },
  featureText: {
    fontSize: 16,
    textAlign: 'left',
  },
  upgradeContainer: {
    padding: 15,
    backgroundColor: '#E0E7FF',
    borderRadius: 10,
    margin: 20,
    width: '92%',
    alignSelf: "center",
    marginTop: -12
  },
  upgradeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upgradeTextContainer: {
    marginLeft: 10,
  },
  upgradeTextTitle: {
    fontSize: 14,
    fontFamily: 'Medium',
    marginBottom: 5,
    width: '55%'
  },
  upgradeButtonText: {
    color: '#4945FF',
    fontFamily: 'Semibold',
    fontSize: 16
  },
  rowFeatures:{
    flexDirection: "row",
    alignItems: "center"
  },
  subText:{
    color: "#555",
    fontFamily: 'Regular',
    fontSize: 13
  },
  headerCard:{
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    alignSelf: "flex-start"
  },
  head:{
    alignSelf: "flex-start",
    fontSize: 12,
    marginBottom: -10,
    fontWeight: "700",
    marginTop: 5
  },
  cardContainer:{
    width: '95%',
    alignSelf: "center"
  },
  subtitleContainer: {
    width: '100%',  // You can adjust this to be a fixed width or percentage based on your need
    minHeight: 20,  // Set a minimum height to prevent reflow
    justifyContent: 'center',  // Center the animated text if necessary
    overflow: 'hidden',  // Hide overflow text if needed
  },
});

export default Index;
