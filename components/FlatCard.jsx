import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Vaidikkkkk</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    flex:1,
    flexDirection:'row'
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
  },
  cardOne: {
    backgroundColor: "#EF5354",
  },
  cardTwo: {
    backgroundColor: "hotpink",
  },
  cardThree: {
    backgroundColor: "lightblue",
  },
});
