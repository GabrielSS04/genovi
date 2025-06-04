import { Background } from "@react-navigation/elements";
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Cabecalho from "../../components/header";


export function Registro(){
    const navigation = useNavigation()

    const setaIcon = require("../../assets/setaBaixo.png");


    return(
        <>
        
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    
                    <Cabecalho></Cabecalho>

                    <View style={styles.documentBG}>
                        <Text style={styles.title}>REGISTRO Nº 00821</Text>
                        <Text style={styles.infoDocument}>Data: 13/02/2019</Text>
                        <Text style={styles.infoDocument}>Horário: 15:21 PM</Text>

                    </View>
                    

                </View>

                
                <View style={{height: 800}}></View>
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

    fotoPerfil:{
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 30,
    },

    buttonVoltar:{
        position: "absolute",
        right: 20,
        top: 80
    },

    title:{
        fontWeight: "bold",
        fontSize: 16
    },
    
    textInfos:{
        display: "flex",
        flexDirection: "row",
    },

    infosP:{
        padding: 15,
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        color: "#4F4F4F",
        gap: 5,
        width: 350,
        alignSelf: "center",
        marginBottom: 15,

    },

    infos:{
        padding: 15,
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        color: "#4F4F4F",
        gap: 5,
        width: 350,
        alignSelf: "center",
        marginBottom: 15

    },

    containerInfos:{
        gap: 5
    },

    registro:{
        backgroundColor: "#FAFAFA",
        padding: 15,
        borderRadius: 15,
        gap: 5,
        marginTop: 10
    },

    buttonRegistro:{
        position: "absolute",
        bottom: 10,
        right: 15,
        backgroundColor: "#4A7023",
        color: "#FAFAFA",
        borderRadius: 10,
        width: 100,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    buttonNewRegistro:{
        backgroundColor: "#4A7023",
        padding: 20,
        width: 250,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "#FAFAFA",
        fontWeight: "bold",
        marginTop: 50,
        borderRadius: 15,
    },

    buttonDivExpand:{
        display: "flex",
        flexDirection: "row",
        gap: 100
    },

    setaIcon:{
        position: "absolute",
        right: 10,
        width: 20,
        height: 20
    },

    documentBG:{
        backgroundColor: "lightgray",
        width: 320,
        padding: 20,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 80,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    infoDocument:{
        marginTop: 3,
        marginBottom: 3,
    },
  
})