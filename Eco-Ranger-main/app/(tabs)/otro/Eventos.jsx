import { SafeAreaView, Text,StyleSheet  } from "react-native";

const Events = () => {


    return (
        <SafeAreaView>
            <Text style={styles.greeting}>Eventos</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },

});
export default Events;