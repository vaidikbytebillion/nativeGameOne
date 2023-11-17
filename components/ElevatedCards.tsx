import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap 2</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap 3</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap 4</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap 5</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  elevated: {
    backgroundColor: "#CAD5E2",
    color: "white",
    elevation: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "red",
    shadowOpacity: 0.4,
  },
  container: {
    padding: 8,
    flex: 1,
  },
});
