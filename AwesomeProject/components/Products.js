import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";

class Products extends Component {

    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <View key={index} style={styles.wrapper}>
                    <Image source={item.image} style={styles.col1} resizeMode='contain'/>
                    <Button onPress={() => this.props.onPress(item)} title={item.name + " - " + item.price} style={styles.col2}/>
                </View>
            )
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.disclaimer}>
                    Note: Click on Item Name to {this.props.removable ? 'remove it from cart' : 'add it to cart'}
                </Text>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    wrapper: {
        flex: 1,
        flexDirection: "row",
        padding: 20,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    col1: {
        padding: 5,
        width: 100, 
        height: 100
    },
    col2:{
        padding: 10,
    },
    disclaimer: {
        margin: 20,
        color: 'green',
        textAlign: 'center',
    }
});