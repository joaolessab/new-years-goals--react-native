import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: '#210644' }}
        // this style function will be triggered along with onPress
        style={({ pressed }) => pressed && styles.pressedItem }
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
});

export default GoalItem;