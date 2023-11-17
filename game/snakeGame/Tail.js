import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from './Constants'

export default function Tail({ position, size, elements }) {
    const x = position[0]
    const y = position[1]

    let tailList = elements.map((el, index) => {
        return <View key={index} style={{ width: size, height: size, backgroundColor: `#FFB6C${index}`, position: 'absolute', left: el[0] * size, top: el[1] * size }}></View>
    })

    return (
        <View style={{ width: Constants.CELL_SIZE * Constants.GRID_SIZE, height: Constants.GRID_SIZE * size }}>
            {
                tailList
            }
        </View>
    )
}

const styles = StyleSheet.create({})