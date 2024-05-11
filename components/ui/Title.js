import { Text, StyleSheet} from "react-native";
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
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        // FRANK NOTE can use both maxWidth and width 
        maxWidth: '80%',
        width: 300
    }
})