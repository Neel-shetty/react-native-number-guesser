import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

function GuessLogItem(roundNumber, guess) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents Guess : {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  
});
