import { Children } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPressing }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.buttonInnerContainer}
                onPress={onPressing}
                android_ripple={{ color: Colors.primary7 }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 10,
        borderRadius: 28,
        overflow: 'hidden',
        flex:1,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation:2,
    },
    buttonText: {
        color: Colors.primary2,
        textAlign: 'center'
    },

})

export default PrimaryButton;