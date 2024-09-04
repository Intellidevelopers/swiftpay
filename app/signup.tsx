import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';

const Signup: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [isValidUsername, setIsValidUsername] = useState<boolean | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<boolean | null>(null);
  const [isValidPassword, setIsValidPassword] = useState<boolean | null>(null);

  const validateUsername = (text: string) => {
    const isValid = text.length > 2; // Example: username should be more than 2 characters
    setIsValidUsername(isValid);

    if (!isValid && text.length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Username',
        text2: 'Username must be more than 2 characters long.',
        position: 'bottom',
      });
    }
  };

  const validateEmail = (text: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(text);
    setIsValidEmail(isValid);

    if (!isValid && text.length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
        text2: 'Please enter a valid email address.',
        position: 'bottom',
      });
    }
  };

  const validatePhoneNumber = (text: string) => {
    const phoneNumberPattern = /^234\d{10}$/; // Example: 234 followed by exactly 10 digits
    const isValid = phoneNumberPattern.test(text);
    setIsValidPhoneNumber(isValid);

    if (!isValid && text.length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Phone Number',
        text2: 'Please enter a valid phone number starting with 234 followed by 10 digits.',
        position: 'bottom',
      });
    }
  };

  const validatePassword = (text: string) => {
    const isValid = text.length >= 6; // Example: password should be at least 6 characters long
    setIsValidPassword(isValid);

    if (!isValid && text.length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Password',
        text2: 'Password must be at least 6 characters long.',
        position: 'bottom',
      });
    }
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
    validateUsername(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    validateEmail(text);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    validatePhoneNumber(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validatePassword(text);
  };

  const handleSignup = () => {
    if (!isValidUsername || !isValidEmail || !isValidPhoneNumber || !isValidPassword) {
      Toast.show({
        type: 'error',
        text1: 'Signup Failed',
        text2: 'Please ensure all fields are valid.',
        position: 'bottom',
      });
      return;
    }

    router.replace('./VerifyPhone');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/swiftpaylogo.png')} style={styles.image} />
      <Text style={styles.subtitle}>Create Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            value={username}
            onChangeText={handleUsernameChange}
          />
          {isValidUsername === true && (
            <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
          )}
          {isValidUsername === false && (
            <Ionicons name="close-circle" size={24} color="red" style={styles.icon} />
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Example@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
          />
          {isValidEmail === true && (
            <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
          )}
          {isValidEmail === false && (
            <Ionicons name="close-circle" size={24} color="red" style={styles.icon} />
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Phone Number</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="+234567890101"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
          {isValidPhoneNumber === true && (
            <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
          )}
          {isValidPhoneNumber === false && (
            <Ionicons name="close-circle" size={24} color="red" style={styles.icon} />
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordinput}
            placeholder="Type in password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity style={{ left: -40 }} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
          {isValidPassword === true && (
            <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
          )}
          {isValidPassword === false && (
            <Ionicons name="close-circle" size={24} color="red" style={styles.icon} />
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
     <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10}}>
        <Text style={styles.biometricTitle}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.biometricText}>Login</Text>
        </TouchableOpacity>
     </View>
      {/* Add Toast Component */}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 20,
    fontWeight: "700",
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  input: {
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  image: {
    width: 117,
    height: 52,
    marginTop: 40,
  },
  label: {
    fontWeight: "500",
  },
  passwordinput: {
    width: '100%',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },
  biometricText:{
    fontSize: 16,
    color: "#0000ff",
    fontWeight: "500",
    alignSelf: "center"
  },
  biometricTitle:{
    fontWeight: "500",
    fontSize: 16
  }
});

export default Signup;
