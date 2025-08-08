import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cabecalho from "../../../components/header";
import { useNavigation } from "@react-navigation/native";

import { useOvelhas } from "../../../components/OvelhaContext";


export function CriarAnimal(){

    const navigator = useNavigation()

    const { adicionarOvelha } = useOvelhas();
    
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

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs} >Nome:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs}>Raça:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs}>FBB:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs}>Data de nascimento:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs}>Tempo da fazenda:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs}>Grau de pureza:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInputSP}>
                            <Text style={styles.textInputs}>Sexo:</Text>
                            <TextInput
                                style={styles.inputsSexo}
                                onChangeText={(text) => setName(text)}
                            />

                            <Text style={styles.textInputs}>Peso:</Text>
                            <TextInput
                                style={styles.inputsPeso}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs}>Comportamento:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>

                        <View style={styles.areaInput}>
                            <Text style={styles.textInputs}>Status:</Text>
                            <TextInput
                                style={styles.inputs}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>


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
        fontSize: 22,
        alignSelf: "center",
    },

    inputs:{
        backgroundColor: "white",
        padding: 5,
        margin: 40,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        fontSize: 16,
    },

    inputsPeso:{
        backgroundColor: "white",
        padding: 5,
        margin: 10,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        fontSize: 16,
        width: 70,
    },

    inputsSexo:{
        backgroundColor: "white",
        padding: 5,
        margin: 10,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        fontSize: 16,
        width: 70,
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
    },

    textInputs:{
        marginLeft: 50,
    },

    areaInputSP:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 5,
    },
})