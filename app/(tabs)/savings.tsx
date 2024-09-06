import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const savings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Savings Under Development</Text>
    </View>
  )
}

export default savings

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  text:{
    fontSize: 20
  }
})