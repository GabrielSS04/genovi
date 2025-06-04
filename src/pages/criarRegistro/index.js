import { Background } from "@react-navigation/elements";
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Cabecalho from "../../components/header";


export function CriarRegistro(){
    const navigation = useNavigation()

    return(
        <>
        
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <Cabecalho></Cabecalho>

                    <View style={styles.options}>
                        <View>
                            <TouchableOpacity style={[styles.test, styles.alimento]}>
                                <Image
                                    style={styles.iconRegister}
                                    source={require("../../assets/alimentacao.png")}
                                />
                            </TouchableOpacity>
                            <Text style={styles.namesType}>Alimentação</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={[styles.test, styles.comportamento]}>
                                <Image
                                    style={styles.iconRegister}
                                    source={require("../../assets/comportamento.png")}
                                />
                            </TouchableOpacity>
                            <Text style={styles.namesType}>Comportamento</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={[styles.test, styles.cordeiro]}>
                                <Image
                                    style={styles.iconRegister}
                                    source={require("../../assets/cordeiro.png")}
                                />
                            </TouchableOpacity>
                            <Text style={styles.namesType}>Cordeiro</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={[styles.test, styles.gestacao]}>
                                <Image
                                    style={styles.iconRegister}
                                    source={require("../../assets/gestacao.png")}
                                />
                            </TouchableOpacity>
                            <Text style={styles.namesType}>Gestação</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={[styles.test, styles.vacinas]}>
                                <Image
                                    style={styles.iconRegister}
                                    source={require("../../assets/medicamentos.png")}
                                />
                            </TouchableOpacity>
                            <Text style={styles.namesType}>Medicamentos</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={[styles.test, styles.procedimento]}>
                                <Image
                                    style={styles.iconRegister}
                                    source={require("../../assets/procedimento.png")}
                                />
                            </TouchableOpacity>
                            <Text style={styles.namesType}>Procedimento</Text>
                        </View>

                    </View>

                </View>

                
            </ScrollView>

        </>
    );
}


const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 30,
        flexGrow: 1
    },
    
    container:{
        flex: 1,
        backgroundColor: "#FAFAFA",
        minHeight: '100%'
    },

    cabecalho:{
        height: 60,
        backgroundColor: "#D9CBA3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    logoImage:{
        transform: [{scale: 0.5}]
    },

    buttonVoltar:{
        position: "absolute",
        right: 20,
        top: 80
    },

    options: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
        padding: 10,
        width: 350,
        alignSelf: "center",
        marginTop: 50,
        gap: 10
    },

    test:{
        backgroundColor: "gray",
        width: 120,
        height: 120,
        margin: 20,
        marginBottom: 3,
        padding: 10,
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    alimento:{backgroundColor: "#E6BCA6"},
    comportamento: {backgroundColor: "#D2BEFF"},
    cordeiro: {backgroundColor: "#ADFFAD"},
    gestacao: {backgroundColor: "#C5DEFF"},
    vacinas: {backgroundColor: "#FDFF8B"},
    procedimento: {backgroundColor: "#FF9D9D"},

    namesType:{
        textAlign: "center",
        fontWeight: "bold",
        color: "gray"
    },

    iconRegister:{
        transform: [{scale: 0.8}]
    },
  
})