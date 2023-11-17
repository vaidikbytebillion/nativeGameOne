import Head from "./Head";
import Food from "./Food";
import Tail from "./Tail";
import Constants from "./Constants";
import { GameLoop } from "./GameLoop";
import React, { useState } from "react";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from "react-native";

export default function Board() {
  const [boardSize, setBoardSize] = useState(
    Constants.GRID_SIZE * Constants.CELL_SIZE
  );
  const [engine, setEngine] = useState(null);
  const [running, setRunning] = useState(true);

  const onEvent = (e) => {
    if (e.type == "game-over") {
      Alert.alert("Game over");
      reset()
    }
  };
  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const reset=()=>{
    engine.swap({
      head: {
        position: [0, 0],
        xspeed: 1,
        yspeed: 0,
        updateFrequency: 10,
        nextMove: 10,
        size: Constants.CELL_SIZE,
        renderer: <Head />,
      },
      food: {
        position: [
          randomBetween(0, Constants.GRID_SIZE - 1),
          randomBetween(0, Constants.GRID_SIZE - 1),
        ],
        xspeed: 1,
        yspeed: 0,
        updateFrequency: 10,
        nextMove: 10,
        size: Constants.CELL_SIZE,
        renderer: <Food />,
      },
      tail: {
        elements: [],
        position: [0, 0],
        size: Constants.CELL_SIZE,
        renderer: <Tail />,
      },
    })
    setRunning(true)
  }

  return (
    <View>
      <Button title="New Game" onPress={()=>{reset()}}/>

      <GameEngine
        ref={(ref) => {
          setEngine(ref);
        }}
        style={{
          width: boardSize,
          height: boardSize,
          flex: null,
          backgroundColor: "black",
        }}
        onEvent={(e) => {
          onEvent(e);
        }}
        running={running}
        systems={[GameLoop]}
        entities={{
          head: {
            position: [0, 0],
            xspeed: 1,
            yspeed: 0,
            updateFrequency: 10,
            nextMove: 10,
            size: Constants.CELL_SIZE,
            renderer: <Head />,
          },
          food: {
            position: [
              randomBetween(0, Constants.GRID_SIZE - 1),
              randomBetween(0, Constants.GRID_SIZE - 1),
            ],
            xspeed: 1,
            yspeed: 0,
            updateFrequency: 10,
            nextMove: 10,
            size: Constants.CELL_SIZE,
            renderer: <Food />,
          },
          tail: {
            elements: [],
            position: [0, 0],
            size: Constants.CELL_SIZE,
            renderer: <Tail />,
          },
        }}
      />
      <View style={styles.controls}>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-up" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-left" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
          <View style={[styles.control, { backgroundColor: null }]} />
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-right" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-down" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    width: 300,
    height: 300,
    flexDirection: "column",
  },
  controlRow: {
    width: 300,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});
