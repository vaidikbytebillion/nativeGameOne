import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Board from './Board'
import Constants from './Constants'

export default function SnakeGame() {
    return (
        <View style={styles.container}>
            <Board/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:Constants.MAX_HEIGHT/3
    }
})