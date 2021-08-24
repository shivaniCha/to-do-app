import React, { useState } from "react";
import {StyleSheet, View, Button, FlatList, Text} from "react-native";

import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // console.log(courseGoals);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { key: Math.random().toString(), value: goalTitle },
      ]);
      setIsAddMode(false);
    }
  };

  const removeGoalHandler = (goalId) => {
    return setCourseGoals((currentGoals) => {
      return courseGoals.filter((goal) => goalId !== goal.key);
    });
  };

  const cancelGoalAdditionHandler = () => {

    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
        <Text style={styles.header}>To Do App</Text>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={function (itemData) {
          return (
            <GoalItem
              onDelete={removeGoalHandler.bind(this, itemData.item.key)}
              title={itemData.item.value}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
    header: {
      marginVertical: 10,
      fontSize: 28,
        textAlign: 'center'
    }
});
