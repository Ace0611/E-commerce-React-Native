import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

export default class Carousel extends Component {
  render() {
    const images = this.props.data.map((item) => item.image);
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map(image => (
              <Image style={styles.image} source={image} resizeMode='contain'/>
            ))}
          </ScrollView>
        </View>
      );
    }
    return null;    
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
    backgroundColor: 'whitesmoke'
  },
  image: {
    width,
    height,
  },
});