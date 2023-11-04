import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';

import GoalItem from './GoalItem';

const GoalsList = ({
  onDeleteGoal,
  onOpenModal,
  goals
}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.goalsContainer}>
        {goals && goals.length > 0 ? (

          <FlatList
            data={goals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={onDeleteGoal}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />) :

          (
            <View style={styles.emptyContainer}>
              <Text>You have no goals set.</Text>
            </View>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#F1D4A7",
    borderRadius: 30,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default GoalsList;
