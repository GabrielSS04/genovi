import { Background } from "@react-navigation/elements";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Cabecalho from "../../components/header";
import NavBar from "../../components/nav";


export function Lote(){
    const navigation = useNavigation()

    return(
        <>
        
            <View style={styles.container}>

                <Cabecalho></Cabecalho>

                <NavBar></NavBar>

                <View style={styles.pesquisa}>
                    <Text>Procure o Lote com o Nome ou Data:</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Pesquisar:"
                            onChangeText={(text) => setName(text)}
                            underlineColorAndroid="transparent"
                        />
                        <Image
                            style={styles.pesquisaButton}
                            source={require("../../assets/pesquisar.png")}
                        />
                    </View>
                </View>

                <View style={styles.lotes}>

                    <View style={styles.lote}>
                        <TouchableOpacity style={styles.buttonLote}>
                            <View>
                                <Text style={styles.textTitle}>Testes</Text>
                                <Text style={styles.textNumberOvelhas}>123</Text>
                            </View>
                            <Text style={styles.textData}>12/12/12</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lote}>
                        <TouchableOpacity style={styles.buttonLote}>
                            <View>
                                <Text style={styles.textTitle}>Testes</Text>
                                <Text style={styles.textNumberOvelhas}>123</Text>
                            </View>
                            <Text style={styles.textData}>12/12/12</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lote}>
                        <TouchableOpacity style={styles.buttonLote}>
                            <View>
                                <Text style={styles.textTitle}>Testes</Text>
                                <Text style={styles.textNumberOvelhas}>123</Text>
                            </View>
                            <Text style={styles.textData}>12/12/12</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lote}>
                        <TouchableOpacity style={styles.buttonLote}>
                            <View>
                                <Text style={styles.textTitle}>Testes</Text>
                                <Text style={styles.textNumberOvelhas}>123</Text>
                            </View>
                            <Text style={styles.textData}>12/12/12</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lote}>
                        <TouchableOpacity style={styles.buttonLote}>
                            <View>
                                <Text style={styles.textTitle}>Testes</Text>
                                <Text style={styles.textNumberOvelhas}>123</Text>
                            </View>
                            <Text style={styles.textData}>12/12/12</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </>
    );
}


const styles = StyleSheet.create({
    lotes: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
        padding: 10,
    },

    lote: {
        backgroundColor: "#E3E3E3",
        width: 150,
        height: 100,
        borderRadius: 15,
        borderColor: "#BDB08B",
        borderWidth: 3,
        margin: 5,
    },

    buttonLote: {
        display: "flex",
        gap: 20,
        padding: 10,
    },

    textTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },

    textNumberOvelhas: {
        fontSize: 14,

    },

    textData: {
        fontSize: 12,

    },



    container:{
        flex: 1,
        backgroundColor: "#FAFAFA"
    },

    cabecalho:{
        height: 60,
        backgroundColor: "#D9CBA3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    navBar:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#C2B286",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        gap: 50
        
    },

    navBarButtonsNotify:{
        backgroundColor: "#93896D",
        height: 50,
        width: 50,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    navBarButtonsSheep:{
        backgroundColor: "#93896D",
        height: 50,
        width: 50,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    navBarButtonsLote:{
        backgroundColor: "#FFFFFF",
        height: 60,
        width: 60,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    navBarButtonIcon:{
        width: 40,
        height: 40,
        
    },

    logoImage:{
        transform: [{scale: 0.5}]
    },

    pesquisa:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        width: 320,
        alignSelf: "center",
        gap: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 3,
    },

    inputContainer:{
        backgroundColor: "#AAAAAA",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        borderRadius: 30,
        height: 50
    },

    pesquisaButton:{

    },

    inputs:{
        width: 280,
        height: 50,
        padding: 10,
        borderRadius: 20,
        outlineStyle: "none"
    },

    containerTest:{
        padding: 0,
        display: "flex",
        margin: "auto",
        width: 320,
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "gray",
        borderTopWidth: 2,
    },

    card:{
        width: 320,
        borderRadius: 10,
        backgroundColor: "#D9CBA3",
        margin: 10,
        padding: 10,
        color: "#4F4F4F"
    },

    imageCard:{
        margin: 15,
        marginBottom: 0
    },

    infosCard:{
        display: "flex",
        flexDirection: "collum",
        position: "absolute",
        left: 100,
        top: 15,
        gap: 2
        
    },

    textInfoCard:{
        display: "flex",
        flexDirection: "row",
        
    },

    criadorText:{
        display: "flex",
        flexDirection: "row",
        margin: 10
    },

    cardButton: {
        marginTop: 10,
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "#FAFAFA",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#4F4F4F",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    cardButtonMais:{
        marginTop: 10,
        backgroundColor: "#FAFAFA",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#4F4F4F",
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
    },

    cardSexoAnimal:{
        textAlign: "center",
        width: 100
    },

    expandedInfo: {
        marginTop: 10,
    },
  
})