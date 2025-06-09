import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cabecalho from "../../../components/header";
import { useNavigation } from "@react-navigation/native";


export function CriarAnimal2(){
    
    const navigator = useNavigation()

    return(
        <>
        
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.component}>
                    <Cabecalho></Cabecalho>

                    <Image
                        source={require("../../../assets/stages 2.png")}
                        style={styles.stagesImage}
                    />
                    
                    <View style={styles.inputsCreateAnimal}>
                        <Text style={styles.title}>
                            ASCÊNDENCIA
                        </Text>

                        <TextInput
                            style={styles.inputs}
                            placeholder="Grau de pureza:"
                            onChangeText={(text) => setName(text)}
                        />

                        <TextInput
                            style={styles.inputs}
                            placeholder="Mãe:"
                            onChangeText={(text) => setName(text)}
                        />

                        <TextInput
                            style={styles.inputs}
                            placeholder="Pai:"
                            onChangeText={(text) => setName(text)}
                        />

                    </View>
                    
                    <TouchableOpacity style={styles.nextButton} onPress={() => navigator.navigate("formAnimal3")}>
                        <Text style={styles.nextTextButton}>
                            Próximo
                        </Text>
                    </TouchableOpacity>

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
    title:{
        fontSize: 24,
        alignSelf: "center",
    },

    stagesImage:{
        marginTop: 100,
        alignSelf: "center",
        marginBottom: 30,
    },

    inputs:{
        backgroundColor: "white",
        padding: 10,
        margin: 40,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        fontSize: 16,
    },



    nextButton:{
        padding: 10,
        backgroundColor: "#4A7023",
        borderRadius: 15,
        width: 170,
        alignSelf: "center",
        marginTop: 30
    },
    nextTextButton:{
        alignSelf: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 22,
    }
})