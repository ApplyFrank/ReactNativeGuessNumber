import { Text, StyleSheet, Platform} from "react-native";
import Colors from "../../constants/colors";

// FRANK NOTE create reusability by taking out the component
function Title({children}) {
    return <Text style={style.title}>{children}</Text>
}

export default Title;

const style = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2}), // a more readable way FRANK NOTE
        borderWidth: 2, // FRANK NOTE system will automatically get the right file for the system 
        //used .android.js or .ios.js don't need to update the import to Title/ios or Title/android, just put ui/title
        borderColor: 'white',
        padding: 12,
        // FRANK NOTE can use both maxWidth and width 
        maxWidth: '80%',
        width: 300
    }
})