import { boot } from './src/manifest'
import { Navigation } from "react-native-navigation";

Navigation.events().registerAppLaunchedListener(boot)
