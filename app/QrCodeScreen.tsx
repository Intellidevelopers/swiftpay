import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const QrCodeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>QR Code</Text>
      <Text style={styles.subtitle}>Scan Code here</Text>
      
      <Ionicons style={styles.shareIcon} name="share-social-outline" size={24} color="black" />
      
      
      <View style={styles.qrContainer}>
        {/* Replace the source with your actual QR code image */}
        <Image 
          source={require('../assets/logos/lucide_scan.png')} 
          style={styles.qrCodeImage} 
        />
      </View>
      
      <TouchableOpacity style={styles.generateQRButton} onPress={() => {/* handle generate new QR code */}}>
        <Ionicons name="reload" size={24} color="#0000ff" />
        <Text style={styles.generateQRText}>Generate New QR Code</Text>
      </TouchableOpacity>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="qr-code-outline" size={24} color="#666" />
          <Text style={styles.tabText}>Scan QR Code</Text>
        </TouchableOpacity>

        <View style={styles.separator}></View>
        
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="qr-code-sharp" size={24} color="#666" />
          <Text style={styles.tabText}>My QR Code</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>
          Scan QR code to process to transaction scanning will automatically autofill information.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 30
  },
  shareIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  qrCodeImage: {
    width: 250,
    height: 250,
    marginTop: '10%'
  },
  generateQRButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  generateQRText: {
    color: '#0000ff',
    marginLeft: 10,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginTop: '20%'

  },
  tabButton: {
    padding: 10,
    alignItems: 'center',
    width: '45%',
  },
  tabText: {
    marginTop: 5,
    color: '#666',
  },
  bottomButton: {
    backgroundColor: '#0000ff',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  separator:{
    backgroundColor: "#ccc",
    width: 1,
    height: 45,
    top: 12
  }
});

export default QrCodeScreen;
