import "react-native-gesture-handler";
import "./src/styles/global.css";
import { AuthContextProvider } from "./src/context/auth.context";
import NavigationRoutes from "./src/routes";
import { SnackbarContextProvider } from "./src/context/snackbar.context";
import { SnackBar } from "./src/components/SnackBar";
import { BottomSheetProvider } from "./src/context/bottom-sheet.context";

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <BottomSheetProvider>
          <NavigationRoutes />

          <SnackBar />
        </BottomSheetProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  )
}
