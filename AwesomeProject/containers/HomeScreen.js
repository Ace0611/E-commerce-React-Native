import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Button
} from 'react-native';
import ShoppingCartIcon from './ShoppingCartIcon';
import Carousel from '../components/Carousel';
import { electronics, mattress } from '../Data'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home',
    headerRight: () => (
      <ShoppingCartIcon/>
    )
  }

  render(){
    return(
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate   ('Electronics')} >
            <Button title="Electronics (View More)" />
            <Carousel data={electronics}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mattress')} >
            <Button title="Mattress (View More)" />
            <Carousel data={mattress}/>
          </TouchableOpacity>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
