import { StyleSheet,Text,View , useWindowDimensions } from "react-native";
import Colors from "./colors";

function Card ({children}) {
    const { height, width } = useWindowDimensions();
    const marginHorizontalLayout = height < 400 ? 150 : 20;
    const marginBottomLayout = height < 400 ? 200 : 0;
    return <View style={[styles.cardContainer , {marginHorizontal:marginHorizontalLayout} , {marginBottom:marginBottomLayout}]}>{children}</View>
};


const styles = StyleSheet.create({
    cardContainer: {
       marginBottom:150,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary3,
        borderRadius: 5,
        elevation: 15,
        shadowColor: Colors.primary1,
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 6 }, 
    },
});

export default Card;