import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { OvelhaProvider } from "./components/OvelhaContext";

export function App() {
  return (
    <OvelhaProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </OvelhaProvider>
  );
}
