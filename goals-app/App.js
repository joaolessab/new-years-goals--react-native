import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    // best approach to set new value depending on a previous status, 
    // it's using an arrow function
    setGoals(currentGoals => [
      ...currentGoals,
      enteredGoalText
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) =>
          <View 
            key={goal}
            style={styles.goalItem}
          >
            <Text
              style={styles.goalText}
            >
              {goal}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
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
