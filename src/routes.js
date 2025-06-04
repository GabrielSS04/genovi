import {createStackNavigator} from "@react-navigation/stack"

import { Home } from "./pages/home/index";
import Login from "./pages/login/index";
import { EditAnimal } from "./pages/editAnimal/index"
import { Notify } from "./pages/notify/index"
import { Lote } from "./pages/lotes/index"
import { Registro } from "./pages/registro/index"
import {CriarRegistro} from "./pages/criarRegistro/index"
import { CriarAnimal } from "./pages/criarAnimal/form 1/index"
import { CriarAnimal2 } from "./pages/criarAnimal/form 2/index"
import { CriarAnimal3 } from "./pages/criarAnimal/form 3/index"


const Tab = createStackNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="sheeps"
                component={Home}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="editAnimal"
                component={EditAnimal}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="registro"
                component={Registro}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="criarRegistro"
                component={CriarRegistro}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="notify"
                component={Notify}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="lotes"
                component={Lote}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="formAnimal1"
                component={CriarAnimal}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="formAnimal2"
                component={CriarAnimal2}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="formAnimal3"
                component={CriarAnimal3}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}