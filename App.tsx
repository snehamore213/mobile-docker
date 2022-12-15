/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import "src/translations/translationConfig/i18n";

import { Provider } from "react-redux";

import configureStore from "./src/data/store/configureStore";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import icoMoonConfig from "./src/components/atoms/icon/selection.json";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";

import BaseApp from "./src/BaseApp";
import { Platform, useColorScheme } from "react-native";

import SplashScreen from "react-native-splash-screen";

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

const store = configureStore({});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3770BA",
    accent: "#282828",
  },
  animation: {
    scale: 1,
  },
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "dark";

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <PaperProvider
          theme={theme}
          settings={{
            icon: (props) => (
              <CustomIcon
                {...props}
                style={{
                  marginTop: 0,
                }}
              />
            ),
          }}
        >
          <BaseApp />
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
