import { Children } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressing }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.buttonInnerContainer}
                onPress={onPressing}
                android_ripple={{ color: '#490202' }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        flex: 1,
        margin: 10,
        borderRadius: 28,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#a40248',
        paddingVertical: 10,
    },
    buttonText: {
        color: '#f6f6f6',
        textAlign: 'center'
    },

})

export default PrimaryButton;