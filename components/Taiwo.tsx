import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'

const Taiwo = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.backButton}>
                <AntDesign name='left' size={24} />
            </TouchableOpacity>
            <Image source={require('../assets/logos/swiftpaylogo.png')} style={styles.logo}/>
        <Text style={styles.headerText}>Welcome to STE tutorial</Text>
        <TextInput
        placeholder='Enter your name'
        style={styles.input}
        />
         <TextInput
        placeholder='Enter your name'
        style={styles.input}
        />
         <TextInput
        placeholder='Enter your name'
        style={styles.input}
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/sample')}>
            <Text style={{color: "#fff", fontSize: 16, fontWeight: "500"}}>Register</Text>
        </TouchableOpacity>
        <View style={styles.account}>
            <Text style={styles.label}>Already have an account?</Text>
            <TouchableOpacity style={styles.buttonText}>
                <Text style={styles.label2}>Login</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Taiwo

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    card:{
        backgroundColor: "#0000ff"
    },
    inputContainer:{
        width: '90%',
        marginTop: 100,
        left: 20
    },
    input:{
        padding: 10,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: "#ccc",
    },
    button:{
        backgroundColor: "#0000ff",
        padding: 15,
        width: "90%",
        alignItems: "center",
        borderRadius: 10,
        left: 20
    },
    headerText:{
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    account:{
        alignItems: "center",
        flexDirection: "row",
        marginTop: 40,
        left: 60
    },
    buttonText:{
        alignSelf: "center",
    },
    label:{
        fontSize: 16,
        fontWeight: "500",
        marginRight: 5
    },
    label2:{
        color: "#0000ff",
        fontSize: 16,
        fontWeight: "500"
    },
    logo:{
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    backButton:{
        backgroundColor: "#ddd",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    }
})