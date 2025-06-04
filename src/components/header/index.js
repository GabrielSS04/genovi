import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Text,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;

  const rotasComVoltar = ["editAnimal", "criarRegistro", "registro", "formAnimal1", "formAnimal2", "formAnimal3",];

  const navigation = useNavigation()
  const route = useRoute();

  const toggleMenu = () => {
    if (menuAberto) {
      Animated.timing(slideAnim, {
        toValue: -screenWidth,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuAberto(false));
    } else {
      setMenuAberto(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            style={styles.menuIcon}
            source={require("../../assets/menu_icon.png")}
          />
        </TouchableOpacity>

        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
        />

        {rotasComVoltar.includes(route.name) && (
          <TouchableOpacity
            style={styles.buttonVoltar}
            onPress={() => navigation.goBack()}
          >
            <Image source={require("../../assets/voltar.png")} style={styles.iconVoltar}/>
          </TouchableOpacity>
        )}

      </View>

      {/* Menu lateral animado */}
      {menuAberto && (
        
          <Animated.View style={[styles.menuLateral, { left: slideAnim }]}>
            {/* Conteúdo do menu aqui */}
            <View style={{ padding: 20 }}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Image
                    source={require("../../assets/close_icon.png")}
                    style={{ width: 30, height: 30, marginBottom: 30 }}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonMenu, styles.configuracao]}>
                    <Text>Configurações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonMenu, styles.configuracao]}>
                    <Text>Sobre</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonMenu, styles.configuracao]}>
                    <Text>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonMenu, styles.configuracao]}>
                    <Text>Termos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonMenu, styles.configuracao]}>
                    <Text>Suporte</Text>
                </TouchableOpacity>
            </View>
            
          </Animated.View>

      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },

  cabecalho: {
    position: "absolute", // fixo no topo (mobile)
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#D9CBA3",
    zIndex: 11, // garantir que fique por cima
    elevation: 10, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },


  menuIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    
  },

  logoImage: {
    transform: [{ scale: 0.5 }],
    alignSelf: "center",
  },

  overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 12,
  },

    menuLateral: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: Dimensions.get("window").width * 0.6,
        height: Dimensions.get("window").height,
        backgroundColor: "#fff",
        zIndex: 15,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },

    buttonMenu:{
        zIndex: 18,
        padding: 15,
        backgroundColor: "lightgray",
        borderRadius: 10,
        marginTop: 10
    },

    buttonVoltar:{
        position: "absolute",
        right: 15,
        top: 15,
    },

    iconVoltar:{
        width: 30,
        height: 30,
    },


});
