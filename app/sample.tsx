import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import ScrollCards from '@/components/ScrollCards'

const sample = () => {
  return (
    <View style={styles.container}>
      <ScrollCards/>
    </View>
  )
}

export default sample

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
})