import React, { useState } from "react";
import {View, TextInput, Button, Modal, Text} from "react-native";

import {styles} from './GoalInputStyle'

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };
    const onCancelHandler=()=>{
        setEnteredGoal("");
        props.onCancel(enteredGoal);
    }

    return (
        <Modal visible={props.visible} animationType="slide" style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Add New Task</Text>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="green" onPress={onCancelHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
