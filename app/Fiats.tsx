import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Fiats = () => {
  const [activeTab, setActiveTab] = useState('Fiat'); // Default tab

  // Function to render different content based on the active tab
  const renderContent = () => {
    if (activeTab === 'Fiat') {
      return (
        <>
        <View style={styles.notFound}>
          <Image source={require('../assets/images/mock.png')} style={styles.image} />
          <Text>No Fiat coins found.</Text>
        </View>
        </>
      );
    } else if (activeTab === 'Crypto') {
      return (
        <>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            <View style={styles.flexTitle}>
              <Text style={styles.title}>SOL</Text>
              <Text style={styles.coin}>Bitcoin</Text>
            </View>
            <Text style={styles.subText}>Vol 41.16</Text>
        </View>

        <View style={{alignItems: "flex-end"}}>
            <Text style={styles.price}>$0.000786</Text>
            <Text style={styles.subPrice}>$0.1299911</Text>
        </View>

        <TouchableOpacity style={styles.percentage}>
            <Text>-0.63%</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            <View style={styles.flexTitle}>
              <Text style={styles.title}>SOL</Text>
              <Text style={styles.coin}>Bitcoin</Text>
            </View>
            <Text style={styles.subText}>Vol 41.16</Text>
        </View>

        <View style={{alignItems: "flex-end"}}>
            <Text style={styles.price}>$0.000786</Text>
            <Text style={styles.subPrice}>$0.1299911</Text>
        </View>

        <TouchableOpacity style={styles.percentage}>
            <Text>-0.63%</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            <View style={styles.flexTitle}>
              <Text style={styles.title}>SOL</Text>
              <Text style={styles.coin}>Bitcoin</Text>
            </View>
            <Text style={styles.subText}>Vol 41.16</Text>
        </View>

        <View style={{alignItems: "flex-end"}}>
            <Text style={styles.price}>$0.000786</Text>
            <Text style={styles.subPrice}>$0.1299911</Text>
        </View>

        <TouchableOpacity style={styles.percentage}>
            <Text>-0.63%</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            <View style={styles.flexTitle}>
              <Text style={styles.title}>SOL</Text>
              <Text style={styles.coin}>Bitcoin</Text>
            </View>
            <Text style={styles.subText}>Vol 41.16</Text>
        </View>

        <View style={{alignItems: "flex-end"}}>
            <Text style={styles.price}>$0.000786</Text>
            <Text style={styles.subPrice}>$0.1299911</Text>
        </View>

        <TouchableOpacity style={styles.percentage3}>
            <Text>-0.63%</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            <View style={styles.flexTitle}>
              <Text style={styles.title}>SOL</Text>
              <Text style={styles.coin}>Bitcoin</Text>
            </View>
            <Text style={styles.subText}>Vol 41.16</Text>
        </View>

        <View style={{alignItems: "flex-end"}}>
            <Text style={styles.price}>$0.000786</Text>
            <Text style={styles.subPrice}>$0.1299911</Text>
        </View>

        <TouchableOpacity style={styles.percentage}>
            <Text>-0.63%</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            <View style={styles.flexTitle}>
              <Text style={styles.title}>SOL</Text>
              <Text style={styles.coin}>Bitcoin</Text>
            </View>
            <Text style={styles.subText}>Vol 41.16</Text>
        </View>

        <View style={{alignItems: "flex-end"}}>
            <Text style={styles.price}>$0.000786</Text>
            <Text style={styles.subPrice}>$0.1299911</Text>
        </View>

        <TouchableOpacity style={styles.percentage}>
            <Text>-0.63%</Text>
        </TouchableOpacity>
      </TouchableOpacity>
        </>
      );
    } else if (activeTab === 'Stocks') {
      return (
        <>
          <View style={styles.head}>
            <Text style={styles.headerLabel}>Top</Text>
            <Text style={styles.text}>View All</Text>
          </View>
          <TouchableOpacity style={styles.itemContainer}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <Image source={require('../assets/images/google.png')} style={styles.icon}/>
              <View style={styles.item}>
                  <Text style={styles.title}>GOOGLE</Text>
                  <Text style={styles.subText}>Alphabet Co.</Text>
              </View>
            </View>
              <Image source={require('../assets/images/line2.png')} style={styles.icon}/>
              <View style={{alignItems: "flex-end"}}>
                  <Text style={styles.price}>$2,461</Text>
                  <Text style={styles.sub}> <AntDesign name='caretup' size={10} color={'green'}/> 2.35%</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <Image source={require('../assets/images/tesla.png')} style={styles.icon}/>
              <View style={styles.item}>
                  <Text style={styles.title}>TSLA</Text>
                  <Text style={styles.subText}>Alphabet Co.</Text>
              </View>
            </View>
              <Image source={require('../assets/images/line4.png')} style={styles.icon}/>
              <View style={{alignItems: "flex-end"}}>
                  <Text style={styles.price}>$2,461</Text>
                  <Text style={styles.sub}> <AntDesign name='caretup' size={10} color={'green'}/> 2.35%</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <Image source={require('../assets/images/apple.png')} style={styles.icon}/>
              <View style={styles.item}>
                  <Text style={styles.title}>APPL</Text>
                  <Text style={styles.subText}>Alphabet Co.</Text>
              </View>
            </View>
              <Image source={require('../assets/images/line3.png')} style={styles.icon}/>
              <View style={{alignItems: "flex-end"}}>
                  <Text style={styles.price}>$2,461</Text>
                  <Text style={styles.sub}> <AntDesign name='caretup' size={10} color={'green'}/> 2.35%</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
            <Image source={require('../assets/images/xbux.png')} style={styles.icon}/>
              <View style={styles.item}>
                  <Text style={styles.title}>SBUX</Text>
                  <Text style={styles.subText}>Alphabet Co.</Text>
              </View>
            </View>
              <Image source={require('../assets/images/line2.png')} style={styles.icon}/>
              <View style={{alignItems: "flex-end"}}>
                  <Text style={styles.price}>$2,461</Text>
                  <Text style={styles.sub}> <AntDesign name='caretup' size={10} color={'green'}/> 2.35%</Text>
              </View>
            </TouchableOpacity>
        </>
      );
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)')}>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Search asset' style={styles.input} />
        <Ionicons name='search' size={20} />
      </View>

      <View style={styles.tobbarContainer}>
        <TouchableOpacity
          style={activeTab === 'Fiat' ? styles.activeTopBarItem : styles.topBarItem}
          onPress={() => setActiveTab('Fiat')}
        >
          <Text style={styles.topBarText}>Fiat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={activeTab === 'Crypto' ? styles.activeTopBarItem : styles.topBarItem}
          onPress={() => setActiveTab('Crypto')}
        >
          <Text style={styles.topBarText}>Crypto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={activeTab === 'Stocks' ? styles.activeTopBarItem : styles.topBarItem}
          onPress={() => setActiveTab('Stocks')}
        >
          <Text style={styles.topBarText}>Stocks</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Fiats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 15,
    borderRadius: 100,
    top: 40,
    marginBottom: 60
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  input: {
    padding: 10,
    width: 300,
    borderRadius: 10,
  },
  topBarItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  topBarText: {
    fontWeight: "700"
  },
  headerLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 20
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 15
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0000ff"
  },
  price: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500"
  },
  subText:{
    color: "#666",
    fontSize: 10,
    fontWeight: "700"
},
icon:{
    width: 50,
    height: 50,
    resizeMode: "contain"
},
item:{
},

flexTitle:{
  flexDirection: "row",
  alignItems: "center",
  gap: 10
},
coin:{
  fontSize: 12,
  fontWeight: "600"
},
subPrice:{
  fontSize: 10,
  fontWeight: "600",
  color: "#888"
},
percentage:{
  backgroundColor: "#ff5361",
  padding: 10,
  borderRadius: 5,
  color: "#fff",
  fontSize: 10,
  fontWeight: "700",
  paddingHorizontal: 20
 },
 percentage3:{
  backgroundColor: "#07f8b5",
  padding: 10,
  borderRadius: 5,
  color: "#fff",
  fontSize: 10,
  fontWeight: "700",
  paddingHorizontal: 20
 },
 tobbarContainer:{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 5,
  paddingVertical: 10,
 },
 activeTopBarItem:{
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderBottomWidth: 2,
  borderBottomColor: "#0000ff",
  color: "#333",
  fontSize: 12,
  fontWeight: "700",
  textTransform: "uppercase"
 },
 image:{
  width: 250,
  height: 250,
  resizeMode: "contain",
  alignSelf: "center",
 },
 notFound:{
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50
 },
 head:{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
 },
 text:{
  fontSize: 14,
  fontWeight: "400",
  color: "#0000ff"
 },
 sub:{
  fontSize: 12,
  fontWeight: "500",
  color: "green",
 }
});
