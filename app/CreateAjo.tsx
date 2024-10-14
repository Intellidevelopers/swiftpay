import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const CreateAjo = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Ajo Contribution</Text>
    <ScrollView showsVerticalScrollIndicator={false}>
        
      {/* Contribution Name */}
      <Text style={styles.label}>Contribution Name</Text>
      <TextInput style={styles.input} placeholder="House Rent" />

{/* Reason for Contribution */}
<Text style={styles.label}>Reason for contribution</Text>
<TextInput style={styles.input} placeholder="House Rent" />

{/* Type of Contribution */}
<Text style={styles.label}>Type of Contribution</Text>
<TextInput style={styles.input} placeholder="House Rent" />

{/* Amount Contributed */}
<Text style={styles.label}>Amount Contributed</Text>
<TextInput
  style={styles.input}
  placeholder="N2,979,087.00"
  keyboardType="numeric"
/>

{/* Number of Members */}
<Text style={styles.label}>Number of Members (Including You)</Text>
<TextInput
  style={styles.input}
  placeholder="4"
  keyboardType="numeric"
/>

{/* Estimated number of rounds */}
<Text style={styles.label}>Estimated number of rounds</Text>
<TextInput
  style={styles.input}
  placeholder="12"
  keyboardType="numeric"
/>

{/* Contribution Rotation Date */}
<Text style={styles.label}>Start/Contribution Rotation Date</Text>
<TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
 <View style={styles.flex}>
    <AntDesign name='calendar' size={20}/>
    <Text>{date.toDateString()}</Text>
 </View>
  <AntDesign name='down' size={15}/>
</TouchableOpacity>

{/* Date Picker Modal */}
{showDatePicker && (
  <DateTimePicker
    value={date}
    mode="date"
    display="default"
    onChange={onChangeDate}
  />
)}

{/* Upload Image */}
<Text style={styles.label}>Upload Contribution Image</Text>
<TouchableOpacity onPress={pickImage} style={styles.input}>
  <Text style={styles.uplodButton}>{image ? 'Image Uploaded' : 'Upload Image'}</Text>
</TouchableOpacity>
{image && (
  <Image source={{ uri: image }} style={styles.uploadedImage} />
)}

{/* Create Ajo Button */}
<TouchableOpacity style={styles.createButton} onPress={() => router.push('/ConfirmationScreen')}>
  <Text style={styles.createButtonText}>Create Ajo</Text>
</TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginVertical: 10,
    marginBottom: 20
  },
  dateInput: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  createButton: {
    backgroundColor: '#0000FF',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 20,
  },
  createButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 8,
  },
  label:{
    fontSize: 14,
    fontWeight: "500",
  },
  flex:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  uplodButton:{
    backgroundColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: 120,
    alignItems: "center",
  }
});

export default CreateAjo;
