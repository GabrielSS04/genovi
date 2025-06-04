import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cabecalho from "../../../components/header";
import { useNavigation } from "@react-navigation/native";


export function CriarAnimal(){

    const navigator = useNavigation()
    
    return(
        <>
        
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.component}>
                    <Cabecalho></Cabecalho>

                    <Image
                        source={require("../../../assets/stages 1.png")}
                        style={styles.stagesImage}
                    />

                    <Text style={styles.textTest}>Form Animal 1</Text>

                    <TouchableOpacity onPress={() => navigator.navigate("formAnimal2")}>Proximo</TouchableOpacity>
                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    component: {

    },
    
    scrollContainer:{

    },

    stagesImage:{
        marginTop: 100,
        alignSelf: "center",
    },

    textTest:{
        fontSize: 28,
        marginTop: 200,
        marginBottom: 100
    },
})