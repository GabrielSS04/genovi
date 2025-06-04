import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from "react-native"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [showError, setShowError] = useState(false);

  const login = () => {
    console.log("button pressed!!!")
    console.log(name)
    console.log(pass)
    if (name == "admin" && pass == "12345") {
      navigation.navigate("notify");
    } else {
      setShowError(true);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/element-border-detail.png")}
        style={styles.bgElement}
      />
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Text style={styles.title}>Faça o seu Login!</Text>

        <View>
          <TextInput
            style={styles.inputs}
            placeholder="Username:"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password:"
            secureTextEntry
            onChangeText={(text) => setPass(text)}
          />
        </View>

        <View style={styles.loginButtons}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.textRegisterButton}>Não possuo uma conta ainda!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trocarSenhaButton}>
            <Text style={styles.textTrocarSenha}>Esqueci minha senha!</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Modal de erro */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={showError}
        onRequestClose={() => setShowError(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>❌ Usuário ou senha incorretos.</Text>
            <TouchableOpacity onPress={() => setShowError(false)} style={styles.closeButton}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9CBA3",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    gap: 40,
    padding: 15,
    width: 240,
    height: 380,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: "130%",
    backgroundColor: "#FAFAFA",
    margin: 10,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },

  buttonText: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
  },

  inputs: {
    width: "130%",
    alignSelf: "center",
    backgroundColor: "#FAFAFA",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },

  logo: {
    position: "absolute",
    zIndex: 3,
    top: 20,
    marginBottom: 60,
    transform: [{scale: 0.8}]
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 10,
    alignItems: "center"
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold"
  },
  closeButton: {
    backgroundColor: "#4A7023",
    padding: 10,
    borderRadius: 5,
    width: 100
  },

  loginButtons:{
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignSelf: "center",
  },

  registerButton:{

  },

  trocarSenhaButton:{

  },

  textRegisterButton:{
    color: "#0163B8",
    alignSelf: "center",
  },

  textTrocarSenha:{
    color: "#0163B8",
    alignSelf: "center",
    padding: 10,
    opacity: "95%",
    backgroundColor: "#4g4g4g"
  },

  bgElement:{
    position: "absolute",
    bottom: -70,
    right: -70,
    transform: [{scale: 0.65}],
    opacity: "70%"
  },
});
