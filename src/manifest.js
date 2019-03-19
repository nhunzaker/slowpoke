/**
 * This module defines how the application top level navigation is laid out
 */

import { Navigation } from "react-native-navigation";
import { HomeScreen } from "./ui/home";
import { AboutScreen } from "./ui/about";
import { colorPrimary } from "./colors";

Navigation.registerComponent(`HomeScreen`, () => HomeScreen);
Navigation.registerComponent(`AboutScreen`, () => AboutScreen);

const entryPoint = {
  root: {
    bottomTabs: {
      children: [
        {
          component: {
            name: "HomeScreen",
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
            name: "AboutScreen",
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
