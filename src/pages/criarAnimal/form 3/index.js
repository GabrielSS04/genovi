import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Cabecalho from "../../../components/header";


export function CriarAnimal3(){
    
        return(
            <>
            
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                    <View style={styles.component}>
                        <Cabecalho></Cabecalho>
    
                        <Image
                            source={require("../../../assets/stages 3.png")}
                            style={styles.stagesImage}
                        />

                        <View style={styles.inputsCreateAnimal}>
                            <Text style={styles.title}>
                                PARTO
                            </Text>
    
                            <View>
                                <Text style={styles.textInputs}>Nome do criador:</Text>
                                <TextInput
                                    style={styles.inputs}
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputs}>CPF/CNPJ:</Text>
                                <TextInput
                                    style={styles.inputs}
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputs}>Endereço:</Text>
                                <TextInput
                                    style={styles.inputs}
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>

                            <View>
                                <Text style={styles.textInputs}>Telefone:</Text>
                                <TextInput
                                    style={styles.inputs}
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>
    
                        </View>
    
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
    textInputs:{
        marginLeft: 50,
        fontSize: 18,
    },
    textTest:{
        fontSize: 28,
        marginTop: 200,
        marginBottom: 100
    },
    stagesImage:{
        marginTop: 100,
        alignSelf: "center",
        marginBottom: 30,
    },
    title:{
        marginBottom: 60,
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
})