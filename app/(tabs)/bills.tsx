import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const bills = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bills Under Development</Text>
    </View>
  )
}

export default bills

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