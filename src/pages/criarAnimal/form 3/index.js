import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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

                        <Text style={styles.title}>PROPRIETÁRIO</Text>
    
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
    textTest:{
        fontSize: 28,
        marginTop: 200,
        marginBottom: 100
    },
    stagesImage:{
        marginTop: 100,
        alignSelf: "center",
    },
})