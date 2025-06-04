import { Background } from "@react-navigation/elements";
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Cabecalho from "../../components/header";

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function EditAnimal(){
    const navigation = useNavigation()

    const setaIcon = require("../../assets/setaBaixo.png");

    const [expandedProp, setExpandedProp] = useState(false);
    const [expandedLinha, setExpandedLinha] = useState(false);
    const [expandedRegist, setExpandedRegist] = useState(false);

    const toggleExpandProp = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedProp(!expandedProp);
    };

    const toggleExpandLinha = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedLinha(!expandedLinha);
    };

    const toggleExpandRegist = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedRegist(!expandedRegist);
    };


    return(
        <>
            <Cabecalho></Cabecalho>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    
                    

                    <View>
                        <Image
                            style={styles.fotoPerfil}
                            source={require("../../assets/fotoPerfil.png")}
                        />

                        

                        <View style={styles.infosP}>

                            <View style={styles.textInfos}>
                                <Text>Nome: </Text>
                                <Text>Ovelinha Dembele IA 943</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>FBB: </Text>
                                <Text>0084850</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>Sexo: </Text>
                                <Text>Femêa</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>Nascimento: </Text>
                                <Text>31 / 07 / 2022</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>Rebanho: </Text>
                                <Text>52C</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>Tatuagem: </Text>
                                <Text>943</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>Parto: </Text>
                                <Text>Simples IA</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>NMGC: </Text>
                                <Text>9º Geração</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>Pelagem: </Text>
                                <Text>NC - Naturalmente Colorida</Text>
                            </View>

                            <View style={styles.textInfos}>
                                <Text>Raça: </Text>
                                <Text>Ile de France</Text>
                            </View>

                        </View>

                        <View style={styles.infos}>
                        <TouchableOpacity onPress={toggleExpandProp} style={styles.buttonDivExpand}>
                            <Text style={styles.title}>Informações do Proprietário</Text>
                            <Image
                                
                                source={setaIcon}
                                style={[
                                    styles.setaIcon,
                                    expandedProp && { transform: [{ rotate: '180deg' }] }
                                ]}
                            />
                        </TouchableOpacity>
                        {expandedProp && (
                            <View style={styles.containerInfos}>
                                <View style={styles.textInfos}>
                                    <Text>Proprietário: </Text>
                                    <Text>Clecio José</Text>
                                </View>
                                <View style={styles.textInfos}>
                                    <Text>Estabelecimento: </Text>
                                    <Text>Fazenda Pitangas</Text>
                                </View>
                                <View style={styles.textInfos}>
                                    <Text>Munícipio: </Text>
                                    <Text>São Gabriel / RS </Text>
                                </View>
                                <View style={styles.textInfos}>
                                    <Text>Criador: </Text>
                                    <Text>Clecio José Antoniazzi</Text>
                                </View>
                            </View>
                        )}
                        </View>

                        <View style={styles.infos}>
                        <TouchableOpacity onPress={toggleExpandLinha} style={styles.buttonDivExpand}>
                            <Text style={styles.title}>Informações da Linhagem</Text>
                            <Image
                                
                                source={setaIcon}
                                style={[
                                    styles.setaIcon,
                                    expandedLinha && { transform: [{ rotate: '180deg' }] }
                                ]}
                            />
                        </TouchableOpacity>
                        {expandedLinha && (
                            <View style={styles.containerInfos}>
                                <View style={styles.textInfos}>
                                    <Text>Proprietário: </Text>
                                    <Text>Clecio José</Text>
                                </View>
                                <View style={styles.textInfos}>
                                    <Text>Estabelecimento: </Text>
                                    <Text>Fazenda Pitangas</Text>
                                </View>
                                <View style={styles.textInfos}>
                                    <Text>Munícipio: </Text>
                                    <Text>São Gabriel / RS </Text>
                                </View>
                                <View style={styles.textInfos}>
                                    <Text>Criador: </Text>
                                    <Text>Clecio José Antoniazzi</Text>
                                </View>
                            </View>
                        )}
                        </View>

                        <View style={styles.infos}>
                        <TouchableOpacity onPress={toggleExpandRegist} style={styles.buttonDivExpand}>
                            <Text style={styles.title}>Informações dos Registros</Text>
                            <Image
                                
                                source={setaIcon}
                                style={[
                                    styles.setaIcon,
                                    expandedRegist && { transform: [{ rotate: '180deg' }] }
                                ]}
                            />
                        </TouchableOpacity>
                        {expandedRegist && (
                            <View style={styles.containerInfos}>
                                <View style={styles.registro}>
                                    <View style={styles.textInfos}>
                                        <Text>Registro: </Text>
                                        <Text>00821</Text>
                                    </View>
                                    <View style={styles.textInfos}>
                                        <Text>Data: </Text>
                                        <Text>12 / 03 / 2025</Text>
                                    </View>
                                    <View style={styles.textInfos}>
                                        <Text>Horário: </Text>
                                        <Text>15:21 PM</Text>
                                    </View>
                                    <TouchableOpacity style={styles.buttonRegistro} onPress={() => {navigation.navigate("registro")}}>Ver Mais</TouchableOpacity>
                                </View>

                                <View style={styles.registro}>
                                    <View style={styles.textInfos}>
                                        <Text>Registro: </Text>
                                        <Text>00821</Text>
                                    </View>
                                    <View style={styles.textInfos}>
                                        <Text>Data: </Text>
                                        <Text>12 / 03 / 2025</Text>
                                    </View>
                                    <View style={styles.textInfos}>
                                        <Text>Horário: </Text>
                                        <Text>15:21 PM</Text>
                                    </View>
                                    <TouchableOpacity style={styles.buttonRegistro} onPress={() => {navigation.navigate("registro")}}>Ver Mais</TouchableOpacity>
                                </View>

                                <View style={styles.registro}>
                                    <View style={styles.textInfos}>
                                        <Text>Registro: </Text>
                                        <Text>00821</Text>
                                    </View>
                                    <View style={styles.textInfos}>
                                        <Text>Data: </Text>
                                        <Text>12 / 03 / 2025</Text>
                                    </View>
                                    <View style={styles.textInfos}>
                                        <Text>Horário: </Text>
                                        <Text>15:21 PM</Text>
                                    </View>
                                    <TouchableOpacity style={styles.buttonRegistro} onPress={() => {navigation.navigate("registro")}}>Ver Mais</TouchableOpacity>
                                </View>
                            </View>
                        )}
                        </View>

                        <TouchableOpacity style={styles.buttonNewRegistro} onPress={() => {navigation.navigate("criarRegistro")}}>Criar Registro</TouchableOpacity>
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
        minHeight: '100%',
        paddingTop: 60,
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
        right: 15,
        top: 15
    },

    title:{
        fontWeight: "bold"
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
  
})