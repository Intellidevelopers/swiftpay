import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Taiwo from '@/components/Taiwo'

const Farida = () => {
  return (
    <View style={styles.container}>
        <Taiwo/>
    </View>
  )
}

export default Farida

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})