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
        margin:15,
        borderRadius: 28,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary8,
        paddingVertical: 10,
        paddingHorizontal: 26,
        elevation:2,
        
    },
    buttonText: {
        color: Colors.primary2,
        textAlign: 'center',
    },

})

export default PrimaryButton;