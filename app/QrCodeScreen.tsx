import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Share } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ActionSheetRef } from 'react-native-actions-sheet';

const QrCodeScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [userName, setUserName] = useState('Adeagbo Josiah'); // Replace with actual user name state
  const [swiftPayTag, setSwiftPayTag] = useState('@josiah123'); // Replace with actual SwiftPay tag
  const actionSheetRef = useRef<ActionSheetRef>(null); // Use the correct type for the ref

  // Fetch the random user image URL
  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = "https://randomuser.me/api/portraits/med/men/75.jpg";
      setImageUrl(imageUrl);
    };

    fetchImage();
  }, []);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);

    try {
      const parsedData = JSON.parse(data);
      router.push({
        pathname: "/SendToBeneficiary",
        params: { name: parsedData.name, swiftpayTag: parsedData.swiftpayTag, image: imageUrl },
      });
    } catch (error) {
      router.push({
        pathname: "/SendToBeneficiary",
        params: { name: data, swiftpayTag: data, image: imageUrl },
      });
    }
  };

  const handleRetakeQrCode = () => {
    // Reset the scanned state to allow scanning again
    setScanned(false);
    setCameraActive(true); // Activate the camera for scanning
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const qrValue = `${userName} - ${swiftPayTag}`;

  // Function to handle share
  const handleShare = async (platform: string) => {
    const shareMessage = `${userName}'s SwiftPay tag is ${swiftPayTag}. Scan this QR code to send money!`;
    try {
      const result = await Share.share({
        message: shareMessage,
      });
      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>QR Code</Text>
      <Text style={styles.subtitle}>Scan Code here</Text>
      
      <TouchableOpacity style={styles.shareIcon} onPress={() => handleShare('')}>
      <Ionicons  name="share-social-outline" size={24} color="black" />
      </TouchableOpacity>
      
      {cameraActive ? (
        <View style={styles.qrContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.qrCodeImage}
          />
        </View>
      ) : (
        <View style={styles.qrContainer}>
          <Image 
            source={require('../assets/logos/lucide_scan.png')} 
            style={styles.qrCodeImage} 
          />
        </View>
      )}

      <TouchableOpacity style={styles.generateQRButton} onPress={handleRetakeQrCode}>
        <Ionicons name="reload" size={24} color="#0000ff" />
        <Text style={styles.generateQRText}>Retake QR Code</Text>
      </TouchableOpacity>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setCameraActive(true)}>
          <Ionicons name="qr-code-outline" size={24} color="#666" />
          <Text style={styles.tabText}>Scan QR Code</Text>
        </TouchableOpacity>

        <View style={styles.separator}></View>
        
        <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/Myqrcode')}>
          <Ionicons name="qr-code-sharp" size={24} color="#666" />
          <Text style={styles.tabText}>My QR Code</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>
          Scan QR code to process to transaction. Scanning will automatically autofill information.
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
    top: 55,
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
    marginBottom: 30,
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
    padding: 14,
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
