import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    label: {
        fontSize: 22,
        padding: 15,
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        width: "80%",
        padding: 15,
        marginBottom: 15,
        fontSize: 18,
    },
    buttonContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        width: "50%",
    },
});
