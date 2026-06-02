import 'react-native-gesture-handler';
import React from "react";
import "./src/styles/global.css";
import { AuthContextProvider } from "./src/context/auth.context";
import NavigationRoutes from "./src/routes";
import { SnackbarContextProvider } from "./src/context/snackbar.context";
import { SnackBar } from "./src/components/SnackBar";
import { BottomSheetProvider } from "./src/context/bottom-sheet.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TransactionContextProvider } from "./src/context/transaction.context";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SnackbarContextProvider>
        <AuthContextProvider>
          <TransactionContextProvider>
            <BottomSheetProvider>
              <NavigationRoutes />
              <SnackBar />
            </BottomSheetProvider>
          </TransactionContextProvider>
        </AuthContextProvider>
      </SnackbarContextProvider>
    </GestureHandlerRootView>
  )
}
