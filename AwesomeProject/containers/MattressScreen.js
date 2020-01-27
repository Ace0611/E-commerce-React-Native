import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { mattress } from '../Data'
import { connect } from 'react-redux'
import ShoppingCartIcon from './ShoppingCartIcon';

class ElectronicsScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Mattress',
        headerRight: () => (
            <ShoppingCartIcon/>
          )
    }
    render() {
        return (
            <View style={styles.container}>
                <Products products={mattress} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(ElectronicsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});