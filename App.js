import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { getUserList } from './api';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { GameEngine } from 'react-native-game-engine';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import SnakeGame from './game/snakeGame';

export default function App() {

  const [mode, setMode] = useState(false)
  const [color, setColor] = useState("")




  return (
    <SafeAreaView style={styles.container} >
      {/* <ScrollView>
        <FlatCard />
        <ElevatedCards />
      </ScrollView>
        <FancyCard/> */}
      <SnakeGame />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    height: '100vh'
  },
});
