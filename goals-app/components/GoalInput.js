import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
} from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => { 
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;