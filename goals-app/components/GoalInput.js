import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
} from 'react-native';

const GoalInput = ({
  onAddGoal,
  onCancel,
  visible,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => { 
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              title="Cancel"
              onPress={onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  buttonWrapper: {
    width: 100,
    marginHorizontal: 8,
  }
});

export default GoalInput;