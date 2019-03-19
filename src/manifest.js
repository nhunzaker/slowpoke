/**
 * This module defines how the application top level navigation is laid out
 */

import { Navigation } from "react-native-navigation";
import { HomeScreen, HOME_SCREEN } from "./ui/home";
import { AboutScreen, ABOUT_SCREEN } from "./ui/about";
import { colorPrimary } from "./colors";

Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
Navigation.registerComponent(ABOUT_SCREEN, () => AboutScreen);

const entryPoint = {
  root: {
    bottomTabs: {
      children: [
        {
          component: {
            name: HOME_SCREEN,
            options: {
              bottomTab: {
                text: "Home",
                icon: require("./assets/home.png")
              }
            }
          }
        },
        {
          component: {
            name: ABOUT_SCREEN,
            options: {
              bottomTab: {
                text: "About",
                icon: require("./assets/about.png")
              }
            }
          }
        }
      ]
    }
  }
};

// https://wix.github.io/react-native-navigation/#/docs/styling?id=common-options
let options = {
  background: {
    color: "#ffffff"
  },
  bottomTabs: {
    backgroundColor: colorPrimary
  },
  bottomTab: {
    iconColor: "#ffffff",
    textColor: "#ffffff",
    fontFamily: "Helvetica",
    selectedIconColor: "#ffffff",
    selectedTextColor: "#ffffff",
    fontSize: 10
  }
};

export function boot() {
  Navigation.setDefaultOptions(options);
  Navigation.setRoot(entryPoint);
}
