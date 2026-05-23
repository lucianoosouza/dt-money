import "react-native-gesture-handler";
import "./src/styles/global.css";
import { AuthContextProvider } from "./src/context/auth.context";
import NavigationRoutes from "./src/routes";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationRoutes />
    </AuthContextProvider>
  )
}
