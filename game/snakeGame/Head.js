import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Head({position,size}) {
  const x =position[0]
  const y = position[1]
  return (
    <View style={{width:size,height:size,backgroundColor:'red',position:'absolute',left:x*size,top:y*size,zIndex:10}}>
      
    </View>
  )
}

const styles = StyleSheet.create({})