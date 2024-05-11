import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

 // on android screen includes status bar, window doesn't include status bar 
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24, //FRANK NOTE can use deviceWidth to have different padding 
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8, //border radius is not supported on the text element thats why need to wrap it with a view 
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold'
    }
})