import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },
  goalText: {
    color: 'white',
  }
});

export default GoalItem;