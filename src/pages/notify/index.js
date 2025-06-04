import { Background } from "@react-navigation/elements";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Cabecalho from "../../components/header";
import NavBar from "../../components/nav";


export function Notify(){

    const navigation = useNavigation()

    return(
        <>
        
            <View style={styles.container}>
                
                <Cabecalho></Cabecalho>

                <NavBar></NavBar>

                <View style={styles.notifiesCards}>
                    <View style={styles.titlePageNotify}>
                        <Text style={styles.titlePageNotify01}>Noticações</Text>
                        <Text style={styles.titlePageNotify02}>Acesse suas notificações:</Text>
                    </View>

                    <View style={styles.notifyCard}>
                        <Image
                        source={require("../../assets/image-sheep-01.png")}
                        style={styles.imageCardNotify}
                        />
                        <View style={styles.titlesCard}>
                            <Text style={styles.textInfoCardNotify}>Previsão de nascimento (1)</Text>
                            <Text style={styles.textInfoCardNotify}>A previsão para o nascimento é:29/08/2025</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonMaisCard}>
                            <Image
                            source={require("../../assets/menu-mais.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.notifyCard}>
                        <Image
                        source={require("../../assets/image-sheep-01.png")}
                        style={styles.imageCardNotify}
                        />
                        <View style={styles.titlesCard}>
                            <Text style={styles.textInfoCardNotify}>Previsão de nascimento (1)</Text>
                            <Text style={styles.textInfoCardNotify}>A previsão para o nascimento é:29/08/2025</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonMaisCard}>
                            <Image
                            source={require("../../assets/menu-mais.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.notifyCard}>
                        <Image
                        source={require("../../assets/image-sheep-01.png")}
                        style={styles.imageCardNotify}
                        />
                        <View style={styles.titlesCard}>
                            <Text style={styles.textInfoCardNotify}>Previsão de nascimento (1)</Text>
                            <Text style={styles.textInfoCardNotify}>A previsão para o nascimento é:29/08/2025</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonMaisCard}>
                            <Image
                            source={require("../../assets/menu-mais.png")}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </>
    );
}


const styles = StyleSheet.create({
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
        backgroundColor: "#FFFFFF",
        height: 60,
        width: 60,
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
        backgroundColor: "#93896D",
        height: 50,
        width: 50,
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
        gap: 10,
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

    inputs:{
        width: 300,
        height: 50,
        padding: 10,
        borderRadius: 20,
        outlineStyle: "none"
    },

    titlePageNotify:{
        width: 320,
        borderBottomWidth: 3,
        borderBottomColor: "gray",
        marginBottom: 15,
        padding: 20,
        paddingBottom: 5,
        margin: "auto"
    },

    titlePageNotify01:{
        fontSize: 18,
        fontWeight: "bold"
    },

    titlePageNotify02:{
        fontSize: 14,
    },

    notifiesCards:{

    },

    notifyCard:{
        width: 320,
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        padding: 15,
        borderBottomColor: "gray",
        borderBottomWidth: 3
    },

    imageCardNotify:{

    },

    titlesCard:{
        display: "flex",
        flexDirection: "column",
        width: 200
    },

    textInfoCardNotify:{
        color: "gray"
    },
  
})