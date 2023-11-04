import { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MainHeader from './components/MainHeader';
import GoalInputModal from './components/GoalInputModal';
import GoalsList from './components/GoalsList';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = enteredGoalText => {
    // best approach to set new value depending on a previous status, 
    // it's using an arrow function
    setGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);

    setModalIsVisible(false);
  };

  const deleteGoalHandler = id => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="dark" />

      <View style={styles.appContainer}>

        <MainHeader onOpenModal={startAddGoalHandler} />
        
        <GoalInputModal
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />

        <GoalsList
          onDeleteGoal={deleteGoalHandler}
          goals={goals}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 0,
  },
  goalsContainer: {
    flex: 5,
  },
 });
