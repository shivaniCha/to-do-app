import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {styles} from "./GoalItemStyle";

const GoalItem = (props) => {
    return (
        <View activeOpacity={0.8} >
            <View style={styles.listItem}>
                <Text style={styles.listText}>{props.title}</Text>
                <TouchableOpacity
                    style={{justifyContent:'center',alignItems:'center'}}
                    onPress={props.onDelete}
                >
                    <Ionicons
                        name={'trash-outline'}
                        color={'red'}
                        size={20}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default GoalItem;
