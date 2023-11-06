import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Text,
  Pressable,
} from 'react-native';

import Target from './Target';

const GoalInputModal = ({
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
        <Target />

        <TextInput
          style={styles.textInput}
          placeholder='Your goal for this New Year...'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Pressable onPress={onCancel}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </Pressable>
          </View>

          <View style={styles.buttonWrapper}>
            <Pressable onPress={addGoalHandler}>
              <Text style={styles.AddButton}>Add Goal</Text>
            </Pressable>
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
    padding: 30,
    backgroundColor: '#F1D4A7',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: "#fff",
    color: "#120438",
    borderRadius: 10,
    width: '100%',
    padding: 16,
    fontFamily: 'Merriweather-Regular',
    fontSize: 16,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  buttonWrapper: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  cancelButton: {
    fontFamily: 'Merriweather-Black',
    fontSize: 16,
    color: "#f30",
  },
  AddButton: {
    fontFamily: 'Merriweather-Black',
    fontSize: 16,
    color: "#000",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default GoalInputModal;