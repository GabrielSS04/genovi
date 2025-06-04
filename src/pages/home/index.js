import { Background } from "@react-navigation/elements";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Cabecalho from "../../components/header";
import NavBar from "../../components/nav";


export function Home(){
    const navigation = useNavigation()

    const [expandedCardId, setExpandedCardId] = useState(null);

    const toggleCardExpansion = (id) => {
        setExpandedCardId(expandedCardId === id ? null : id);
    };

    const ovelhas = [
        {
          id: 1,
          nome: "Ovelhinha Dembele IA 943",
          fbb: "0084850",
          raca: "Ile de France",
          sexo: "Fêmea",
          criador: "Gabriel Stainhaus",
        },
        {
          id: 2,
          nome: "Ovelhinha Mbappé 12",
          fbb: "0084851",
          raca: "Dorper",
          sexo: "Fêmea",
          criador: "Gabriel Stainhaus",
        },
      ];

    return(
        <>
        
            <View style={styles.container}>

                <Cabecalho></Cabecalho>

                <NavBar></NavBar>

                <View style={styles.pesquisa}>
                    <Text>Procure o animal com o Código identificador</Text>
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

                <View style={styles.containerTest}>
                    {ovelhas.map((ovelha) => (
                    <View key={ovelha.id} style={styles.card}>
                        <Image
                        source={require("../../assets/Vector.png")}
                        style={styles.imageCard}
                        />
                        <View style={styles.infosCard}>
                        <View style={styles.textInfoCard}>
                            <Text>NOME: </Text>
                            <Text>{ovelha.nome}</Text>
                        </View>

                        <View style={styles.textInfoCard}>
                            <Text>FBB: </Text>
                            <Text>{ovelha.fbb}</Text>
                            <Text style={styles.cardSexoAnimal}>{ovelha.sexo}</Text>
                        </View>

                        <View style={styles.textInfoCard}>
                            <Text>RAÇA: </Text>
                            <Text>{ovelha.raca}</Text>
                        </View>
                        </View>

                        <View style={styles.criadorText}>
                        <Text>Criador: </Text>
                        <Text>{ovelha.criador}</Text>
                        </View>

                        {expandedCardId === ovelha.id && (
                        <View style={styles.expandedInfo}>
                            <Text>Mais informações sobre a ovelha {ovelha.nome}...</Text>
                            <TouchableOpacity style={styles.cardButtonMais} onPress={() => {navigation.navigate("editAnimal");}}>
                                <Text>Ver Mais</Text>
                            </TouchableOpacity>
                        </View>
                        )}

                        <TouchableOpacity style={styles.cardButton} onPress={() => toggleCardExpansion(ovelha.id)}>
                        <Text>{expandedCardId === ovelha.id ? "Recolher" : "Expandir"}</Text>
                        </TouchableOpacity>

                        
                        
                    </View>
                    ))}
                </View>

                <View style={styles.navBottomAdd}>
                    <TouchableOpacity onPress={() => navigation.navigate("formAnimal1")}>
                        <Image
                            source={require("../../assets/more_icon.png")}
                            style={styles.iconAdd}
                        />
                    </TouchableOpacity>
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

    menuIcon:{
        position: "absolute",
        right: 140,
        top: 10,
    },

    navBar:{
        marginTop: 60,
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
        backgroundColor: "#FFFFFF",
        height: 60,
        width: 60,
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

    navBottomAdd:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 11, // garantir que fique por cima
        elevation: 10, // sombra no Android
        shadowColor: "#000", // sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    iconAdd:{
        width: 60,
        height: 60,
        alignSelf: "flex-end",
        margin: 10,
    },
  
})