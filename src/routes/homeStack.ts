import { createStackNavigator } from "react-navigation-stack";
import Register from "../components/Register";
import Home from "../components/Home";
import Login from "../components/Login";
import { createAppContainer } from "react-navigation";

const HomeStack = createStackNavigator( {
    Home: {
        screen: Home
    },
    Register: {
        screen: Register
    },
    Login: {
        screen: Login
    }
} );

export const AppNavigation = createAppContainer( HomeStack );