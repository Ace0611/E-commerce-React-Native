import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen.js'
import CartScreen from './containers/CartScreen'
import MattressScreen from "./containers/MattressScreen";
class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}
export default ShoppingCart;

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Mattress: MattressScreen,
    Cart: CartScreen,
})
const AppStackNavigator = createAppContainer(MainNavigator);
