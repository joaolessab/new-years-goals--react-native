import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
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
            <Button
              title="Cancel"
              onPress={onCancel}
              color="#f31282"
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#fff"
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
    fontFamily: 'Merriweather',
    fontSize: 16,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  buttonWrapper: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default GoalInputModal;