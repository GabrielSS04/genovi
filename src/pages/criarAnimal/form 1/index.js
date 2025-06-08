import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
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

                    <View style={styles.inputsCreateAnimal}>
                        <Text style={styles.title}>
                            INFORMAÇÕES
                        </Text>

                        <TextInput
                            style={styles.inputs}
                            placeholder="Nome:"
                            onChangeText={(text) => setName(text)}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Raça:"
                            onChangeText={(text) => setName(text)}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Sexo:"
                            onChangeText={(text) => setName(text)}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Nascimento:"
                            onChangeText={(text) => setName(text)}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Peso:"
                            onChangeText={(text) => setName(text)}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Pelagem:"
                            onChangeText={(text) => setName(text)}
                        />


                    </View>

                    <TouchableOpacity style={styles.nextButton} onPress={() => navigator.navigate("formAnimal2")}>
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

    stagesImage:{
        marginTop: 100,
        alignSelf: "center",
        marginBottom: 30,
    },
    title:{
        fontSize: 24,
        alignSelf: "center",
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

    textTest:{
        fontSize: 28,
        marginTop: 200,
        marginBottom: 100
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