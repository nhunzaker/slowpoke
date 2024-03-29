/**
 * This module defines how the application top level navigation is laid out
 */

import { Navigation } from "react-native-navigation";
import { HOME_SCREEN, HomeScreen } from "./ui/home";
import { ABOUT_SCREEN, AboutScreen } from "./ui/about";
import { VIDEO_SCREEN, VideoScreen } from "./ui/video";
import { colorPrimary, colorTextLight } from "./ui/colors";

Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
Navigation.registerComponent(ABOUT_SCREEN, () => AboutScreen);
Navigation.registerComponent(VIDEO_SCREEN, () => VideoScreen);

const entryPoint = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: HOME_SCREEN
                }
              }
            ],
            options: {
              bottomTab: {
                text: "Home",
                icon: require("./assets/home.png")
              },
              topBar: {
                visible: false,
                height: 0
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
    iconColor: colorTextLight,
    textColor: colorTextLight,
    selectedIconColor: colorTextLight,
    selectedTextColor: colorTextLight,
    fontSize: 10
  }
};

export function boot() {
  Navigation.setDefaultOptions(options);
  Navigation.setRoot(entryPoint);
}
